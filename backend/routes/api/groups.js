const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Group = mongoose.model('Group');

const { requireUser } = require('../../config/passport');
const { fetchArticlesFromNewYorkTimes } = require('../../config/api');

//future use
//const validateTweetInput = require('../../validation/tweets');

//ONLY FOR TESTING
router.get('/', async (req, res) => {
    try {
        const groups = await Group.find().populate("figures");

        return res.json(groups);
    }
    catch (err) {
        return res.json([]);
    }
})

//CREATE A GROUP
router.post('/', requireUser, async (req, res) => {
    try {
        const userId = req.user._id;

        const newGroup = new Group({
            user: userId,
            name: req.body.name,
            figures: []
        });

        const group = await newGroup.save();

        return res.json(`Group ${group.name} successfully added`);
    }
    catch (err) {
        return res.json(null);
    }
});

//READ A GROUP
router.get('/:id', async (req, res) => {
    try {
        const groupId = req.params.id;

        const group = await Group.findById(groupId).populate("figures"); //populate user?

        const searchTerms = group.figures.map(figure => `"${figure.name}"`);

        const obj = {
            ...group._doc,
            articles: searchTerms.length === 0 ? [] :
                await fetchArticlesFromNewYorkTimes(searchTerms.join(" OR "))
        };
        
        return res.json(obj);
    }
    catch (err) {
        return res.json(null);
    }
})

//UPDATE - ADD A FIGURE TO A GROUP
router.put('/:id/figure/:figureId', requireUser, async (req, res) => {
    try {
        const userId = req.user._id;
        const groupId = req.params.id;
        const figureId = req.params.figureId;

        const groups = await Group.find({ user: userId });

        let noGroup;
        let group;

        for (let i = 0; i < groups.length; i++) {
            if (groups[i].name === "No group") {
                noGroup = groups[i];
            }
            if (groups[i]._id.toString() === groupId) {
                group = groups[i];
            }
        }

        let idx;

        idx = noGroup.figures.indexOf(figureId);
        if (idx !== -1) {
            noGroup.figures = noGroup.figures.slice(0, idx)
                .concat(noGroup.figures.slice(idx + 1));
            await noGroup.save();
        }

        idx = group.figures.indexOf(figureId);
        if (idx === -1) {
            group.figures.push(figureId);
            await group.save();
        }

        return res.json(`Figure successfully added to Group ${group.name}`);
    }
    catch (err) {
        return res.json(null);
    }
});

//UPDATE - REMOVE A FIGURE FROM A GROUP
router.patch('/:id/figure/:figureId', requireUser, async (req, res) => {
    try {
        const userId = req.user._id;
        const groupId = req.params.id;
        const figureId = req.params.figureId;

        const groups = await Group.find({ user: userId });
        
        let hasGroup = false;
        let noGroup;
        let group;

        for (let i = 0; i < groups.length; i++) {
            if (!hasGroup &&
                groups[i]._id.toString() !== groupId &&
                groups[i].figures.indexOf(figureId) !== -1) {
                hasGroup = true;
            }
            if (groups[i].name === "No group") {
                noGroup = groups[i];
            }
            if (groups[i]._id.toString() === groupId) {
                group = groups[i];
            }
        }

        let idx;

        idx = group.figures.indexOf(figureId);
        if (idx !== -1) {
            group.figures = group.figures.slice(0, idx)
                .concat(group.figures.slice(idx + 1));
            await group.save();
        }

        if (!hasGroup) {
            idx = noGroup.figures.indexOf(figureId);
            if (idx === -1) {
                noGroup.figures.push(figureId);
                await noGroup.save();
            }
        }

        return res.json(`Figure successfully removed from Group ${group.name}`);
    }
    catch (err) {
        return res.json(null);
    }
});

//DELETE A GROUP
router.delete('/:id', requireUser, async (req, res) => {
    try {
        const groupId = req.params.id;

        await Group.findByIdAndRemove(groupId);

        return res.json(`Group successfully deleted`);
    }
    catch (err) {
        return res.json(null);
    }
});

module.exports = router;    
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser, clearUserErrors } from '../../store/users';
import ArticlesIndex from './ArticlesIndex'
import './Articles.css'

function Articles() {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.session.user);
  const user = useSelector(state => state.users.user);


  useEffect(() => {
    dispatch(fetchUser());
    return () => dispatch(clearUserErrors());
  }, [dispatch])

  if (!user) {
    return null
  }

  return (
    <div className="articles-container">
        <div className="articles-user-title">
          Saved Articles
        </div>
        <ArticlesIndex articles={user.savedArticles}/>
        <p>A Twitter Clone</p>
        <footer>
            Copyright &copy; 2022 Chirper
        </footer>
    </div>
  );
}


export default Articles;
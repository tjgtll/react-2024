import './style.scss';
import notFound from '../../assets/not-found.gif';

export const NotFound = () => {
  return (
    <div>
      <p>404 not found</p>
      <img src={notFound} alt="rs.school" />
    </div>
  );
};

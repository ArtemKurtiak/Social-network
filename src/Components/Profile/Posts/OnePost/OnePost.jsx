import s from "./OnePost.module.css";
const OnePost = (props) => {
  return (
    <div className={s.postItem}>
      <div className={s.item}>
        {props.message}
      </div>
      <div className={s.likesPost}>Like {props.likecount}</div>
    </div>
  );
};
export default OnePost;

import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.jpg";
import {NavLink} from "react-router-dom";


const UserItem = ({user, followingProgress,wantToUnfollow,wantToFollow  }) => {
return <div className={s.wrapper}>


            <NavLink to={'/my_page/' + user.id}>
                <img
                    width='60'
                    src={user.photos.small != null ? user.photos.small : userPhoto}
                    alt=""/></NavLink>

            <div>{user.followed ? <button disabled={followingProgress.some(id => id === user.id)} onClick={() => {
                wantToUnfollow(user.id)
            }}>Unfollow</button> : <button disabled={followingProgress.some(id => id === user.id)} onClick={() => {
                wantToFollow(user.id)


            }}>Follow</button>}</div>
            <h3>{user.name}</h3>
            <h3>{user.status}</h3>
            <p>{'user.location.country'}, {'user.location.city'} </p>

        </div>
}
export default UserItem
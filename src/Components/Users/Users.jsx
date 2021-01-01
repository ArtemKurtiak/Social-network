import s from "./Users.module.css";
import Paginator from "./Paginator";
import UserItem from "./UserItem";


const Users = (props) => {
    let usersItems = props.usersList
        .map(u => <UserItem user={u} followingProgress={props.followingProgress} wantToUnfollow={props.wantToUnfollow} wantToFollow={props.wantToFollow}/>)
    return (
        <div className={s.app_users}>
            <Paginator totalItemsCount={props.totalUsersCount} pageSize={props.pageSize} currentPage={props.currentPage}
                       onPageChanged={props.onPageChanged} portionSize={10}/>
            <br/>
            {usersItems}
        </div>
    )
}
export default Users
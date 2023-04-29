import PropTypes from 'prop-types';
import {ProfileCard, Description, Statistics, UserName, Location, Tag} from './Profile.styled'

export const Profile = ({username, tag, location, avatar, stats: {followers, views, likes}}) => {
    return (
        <ProfileCard>
  <Description>
    <img
      src={avatar}
      alt="User avatar"
      className="avatar"
    />
    <UserName>{username}</UserName>
    <Tag>@{tag}</Tag>
    <Location>{location}</Location>
  </Description>

  <Statistics>
    <li>
      <span className="label">Followers</span>
        <span className="quantity">{followers}</span>
    </li>
    <li>
      <span className="label">Views</span>
      <span className="quantity">{views}</span>
    </li>
    <li>
      <span className="label">Likes</span>
      <span className="quantity">{likes}</span>
    </li>
  </Statistics>
</ProfileCard>
    
)
};
    

Profile.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.exact({
        followers: PropTypes.number,
        views: PropTypes.number,
        likes: PropTypes.number,
    })
}
import PropTypes from 'prop-types';
import { Friend } from './FriendListItem';
import { FriendGallery } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendGallery>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <Friend key={id} avatar={avatar} name={name} isOnline={isOnline} />
      ))}
    </FriendGallery>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number,
    })
  ),
};

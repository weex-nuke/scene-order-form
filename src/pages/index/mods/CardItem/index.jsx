import { createElement, PropTypes } from 'rax';
import { View, Text, Link } from '@ali/nuke';
import Picture from 'rax-picture';
import style from './style';

const Card = function (props) {
  const {
      title,
    pic,
    desc,
    url,
    price,
    commendNum,
    } = props;

  return (
    <Link href={url} style={style.root}>
      <View style={style.container}>
        <View style={style.picBox}>
          <Picture source={{ uri: pic }} style={style.pic} resizeMode={'contain'} />
        </View>
        <View style={style.context}>
          <Text numberOfLines="1" style={style.title}>{title}</Text>
          <Text numberOfLines="2" style={style.desc}>{desc}</Text>
          <Text numberOfLines="1" style={style.price}>{price}</Text>
          <Text numberOfLines="1" style={style.commendNum}>{commendNum}</Text>
        </View>
      </View>
    </Link>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  commendNum: PropTypes.string.isRequired,
  pic: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
export default Card;

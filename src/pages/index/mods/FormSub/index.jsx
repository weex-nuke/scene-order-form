import { createElement, PropTypes } from 'rax';
import { View } from '@ali/nuke';
import styles from './style';

const FormSub = function (props) {
  const {
      children,
    style,
    } = props;

  return (
    <View style={styles.root}>
      <View style={{ ...styles.container, ...style }}>
        {
          children.map(item => (
            <View style={styles.item}>
              {item}
            </View>
          ))
        }
      </View>
    </View>
  );
};

FormSub.propTypes = {
  children: PropTypes.shape({}).isRequired,
  style: PropTypes.shape({}).isRequired,
};

export default FormSub;

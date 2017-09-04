import { createElement, PropTypes } from 'rax';
import { View } from '@ali/nuke';
import styles from './style';

const FormLine = function (props) {
  const {
      children,
    } = props;

  return (
    <View style={styles.root}>
      <View style={{ ...styles.container }}>
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

FormLine.propTypes = {
  children: PropTypes.shape({}).isRequired,
};
export default FormLine;

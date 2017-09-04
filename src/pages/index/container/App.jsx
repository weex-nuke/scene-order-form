import { createElement, Component } from 'rax';
import { View, Input, Switch, ScrollView, Text, Button, Image, Icon, NumberPicker } from '@ali/nuke';
import Picker from 'rax-picker';
import CardItem from '../mods/CardItem/';
import FormLine from '../mods/FormLine/';
import FormSub from '../mods/FormSub/';
import styles from './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      price: 30,
      count: 1,
      express: '',
      huabei: false,
    };
    this.formSub = this.formSub.bind(this);
  }

  formSub() {
    console.log(this.state);
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.userInfoBox}>
          <View style={styles.userInfo}>
            <Text style={styles.userName}>收货人：王柏川</Text>
            <Text style={styles.userName}>13342123333</Text>
          </View>
          <View><Text style={styles.userAddr}>收货地址：浙江省杭州市文一西路969号</Text></View>
          <View><Text style={styles.tip}>(收获不便时，可选择免费代收货服务)</Text></View>
        </View>
        <View style={styles.border}>
          <Image source={{ uri: 'https://gw.alicdn.com/tfs/TB1dCVBRXXXXXbrXpXXXXXXXXXX-750-12.jpg' }} style={styles.borderPic} resizeMode={'contain'} />
        </View>
        <View style={styles.shop}>
          <View style={styles.shopPicBox}>
            <Image source={{ uri: 'https://img.alicdn.com/tfs/TB1j3BaRXXXXXa3XVXXXXXXXXXX-32-32.jpg' }} style={styles.shopPic} resizeMode={'contain'} />
          </View>
          <Text style={styles.shopTitle}>淘宝天猫旗舰店</Text>
        </View>
        <CardItem
          title={'[现货] 三国志13 日本原版官方正品 扑克牌'}
          pic={'https://gd2.alicdn.com/imgextra/i4/30782564/TB2sNreXzzyQeBjy1zdXXaInpXa_!!30782564.jpg_400x400.jpg'}
          desc={'54张'}
          url={'https://www.taobao.com/'}
          price={'¥30.00'}
          commendNum={'x1'}
        />
        <FormLine>
          <Text>购买数量</Text>
          <NumberPicker
            min={1}
            max={5}
            defaultValue={1}
            step={1}
            onChange={(num) => {
              this.state.count = num;
            }}
          />
        </FormLine>
        <FormLine>
          <Text>配送方式</Text>
          <View style={styles.pickerBox}>
            <Picker
              selectedValue={'10.00'}
              onValueChange={(item) => {
                this.state.express = item;
              }}
              style={styles.picker}
            >
              <Picker.Item value={'10.00'} label={'快递 ¥ 10.00'} />
              <Picker.Item value={'20.00'} label={'EMS ¥ 20.00'} />
            </Picker>
            <Image source={{ uri: 'https://gw.alicdn.com/tfs/TB1JxM4QVXXXXc3aXXXXXXXXXXX-26-52.jpg' }} style={styles.pickerPic} resizeMode={'contain'} />
          </View>
        </FormLine>
        <FormLine>
          <Text>运费险</Text>
          <View style={styles.pickerBox}>
            <Picker
              selectedValue={'0.00'}
              onValueChange={(item) => {
                this.state.express = item;
              }}
              style={styles.picker}
            >
              <Picker.Item value={'0.00'} label={'无运费险'} />
              <Picker.Item value={'10.00'} label={'运费险 ¥ 20.00'} />
            </Picker>
            <Image source={{ uri: 'https://gw.alicdn.com/tfs/TB1JxM4QVXXXXc3aXXXXXXXXXXX-26-52.jpg' }} style={styles.pickerPic} resizeMode={'contain'} />
          </View>
        </FormLine>
        <FormLine>
          <Text>运费险投保须知</Text>
          <View>
            <Icon style={styles.icon} name={'warning'} />
          </View>
        </FormLine>
        <FormLine>
          <Text>买家留言</Text>
          <View>
            <Input
              style={styles.input}
              placeholder={'选填：对本次交易的说明'}
            />
          </View>
        </FormLine>
        <FormSub>
          <Text style={styles.subText}>共1件商品</Text>
          <Text style={styles.subText}>小计：</Text>
          <Text style={styles.price}>¥ 40.00</Text>
        </FormSub>
        <FormLine>
          <View>
            <Text>花呗分期</Text>
          </View>
          <View>
            <Switch
              onValueChange={(value) => {
                this.state.huabei = value;
                this.setState(this.state);
              }}
              value={this.state.huabei}
            />
          </View>
        </FormLine>
        <FormSub>
          <Text style={styles.subText}>合计</Text>
          <Text style={styles.price}>¥ 40.00</Text>
          <Button style={styles.btn} onPress={this.formSub}>
            提交订单
          </Button>
        </FormSub>

      </ScrollView>
    );
  }
}

export default App;

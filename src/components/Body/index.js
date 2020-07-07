import React,{useState, useEffect} from 'react';
import { 
    View,
    TextInput, 
    TouchableOpacity, 
    Text, 
    Dimensions, 
    StyleSheet,
    Animated, 
    Image, 
    ScrollView
} from 'react-native';
const { height } = Dimensions.get('window')

//----------------------------------------------------------------------------------------------
const Modal = ({ show, close,result }) =>{
    const [state, setState] = useState({
      opacity: new Animated.Value(0),
      container: new Animated.Value(height),
      modal: new Animated.Value(height)
    })
  
    const openModal = () => {
      Animated.sequence([
        Animated.timing(state.container, { toValue: 0, duration: 100 }),
        Animated.timing(state.opacity, { toValue: 1, duration: 300 }),
        Animated.spring(state.modal, { toValue: 0, bounciness: 5, useNativeDriver: true })
      ]).start()
    }
  
    const closeModal = () => {
      Animated.sequence([
        Animated.timing(state.modal, { toValue: height, duration: 250, useNativeDriver: true }),
        Animated.timing(state.opacity, { toValue: 0, duration: 300 }),
        Animated.timing(state.container, { toValue: height, duration: 100 })
      ]).start()
    }
  
    useEffect(() => {
      if(show){
        openModal()
      }else{
        closeModal()
      }
    }, [show])



    return( 
        <Animated.View 
          style={[styles.container, {
            opacity: state.opacity,
            transform: [
              { translateY: state.container }
            ]
          }]}
        >
          <Animated.View 
            style={[styles.modal, {
              transform: [
                { translateY: state.modal }
              ]
            }]}
          >
            <View style={styles.indicator} />
    
            <Text
                style={{color:'#000', fontWeight:'bold', marginVertical:20}}
            >
                {result}
            </Text>
            
                <TouchableOpacity style={styles.btn} onPress={close}>
              <Text style={{ color: '#fff', fontWeight:'bold'}}>Fechar</Text>
            </TouchableOpacity>
          </Animated.View>
        </Animated.View>
    )

}
//-----------------------------------------------------------------------------------------------


// export interface dogData{
//   weightdog:String;
//   heightdog:String;
// }

//-----------------------------------------------------------------------------------------------
export default function Body({modalRes, res}){

    const [modal, setModal] = useState(modalRes)

    return(
        <ScrollView>
            <Modal
                show={modal}
                close={()=>setModal(false)}
                result={res}
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flex:1,
        //width:Dimensions.get('window').width,
        //height:Dimensions.get('window').height,
        //backgroundColor: 'rgba(0, 0, 0, 0.5)',
        position: 'absolute',
        zIndex:4,
        elevation:4,
      },
      modal: {
        bottom: 0,
        position: 'absolute',
        height: '100%',
        //height:Dimensions.get('window').height,
        backgroundColor: 'white',
        //opacity:0.7,
        width: '100%',
        //borderTopLeftRadius: 20,
        //borderTopRightRadius: 20,
        borderRadius:20,
        paddingLeft: 25,
        paddingRight: 25,
        //marginBottom:Dimensions.get('window').height*0.08,
        borderColor:'#f92f00',
        borderWidth:1,
        marginBottom:0,
        paddingBottom:0,
      },
      indicator: {
        width: 50,
        height: 5,
        backgroundColor: '#ccc',
        borderRadius: 50,
        alignSelf: 'center',
        marginTop: 5
      },
      text: {
        marginTop: 50,
        textAlign: 'center'
      },
      btn: {
        width: '100%',
        height: 50,
        borderRadius: 10,
        backgroundColor: '#f92f00',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        fontWeight:'bold',
      }
})
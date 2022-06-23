import store from './Store/Store';
var Output;
store.subscribe(()=>{
    const data=store.getState( )
    Output=data.ChangeLenguage.change })

export default Output;

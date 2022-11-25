
import { Provider } from 'react-redux';
import { store } from './components/Redux/Store';
import MainRouter from './components/ReactRouter/MainRouter';
function App() {
  // const [data,setData]=useState([])
  // const apiUrl="http://127.0.0.1:8000/api/";
  // useEffect(()=>{
  // axios.get(apiUrl).then((response)=>{
    
  // })
  // })
  return (
    <div className="App">
       <Provider store={store}>
    <MainRouter />
    </Provider>
    </div>
  );
}

export default App;

import './App.css';
import Profile from './components/Profile/Profile';
import Container from './components/Container/Container';
import Statistics from './components/Statistics/Statistics';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

//file
import user from './data/user.json'
import statisticalData from './data/statistical-data.json'
import friends from './data/friends.json'
import FriendList from './components/FriendsList/FriendList';
import transactions from './data/transactions.json'

 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Container title='Профиль социальной сети:'>
          <Profile
  name={user.name}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/></Container>

        <Container title='Секция статистики:'>
          <Statistics title="Upload stats" stats={statisticalData}  />
        </Container>

        <Container title='Список друзей:'>
        <FriendList friends={friends} />
        </Container>
        <Container title='История транзакций:'>
        <TransactionHistory items={transactions} />
        </Container>
       </header>
    </div>
  );
}

export default App;

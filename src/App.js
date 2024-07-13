import './App.css';
import ComponentA from './components/ContextAPIDemo/ComponentA';
import { UserProvider } from './components/ContextAPIDemo/UserContext';
import Counter from './components/Counter';
import ErrorBoundaryDemo from './components/ErrorBoundaryDemo';
import EventBind from './components/EventBind';
// import FRParentInput from './components/FRParentInput';
import Form from './components/Form';
import FramgmentsDemo from './components/FramgmentsDemo';
import FunctionClick from './components/FunctionClick';
import { Greet } from './components/Greet';
import PostList from './components/HTTPBasic/PostList';
import Hero from './components/Hero';
import LifecycleA from './components/LifecycleA';
import Message from './components/Message';
import ParentComponent from './components/ParentComponent';
import PortalDemo from './components/PortalDemo';
// import RefsDemo from './components/RefsDemo';
import Table from './components/Table';
import Welcome from './components/Welcome';
import ClickCounter from './components/higherOrderComponents/ClickCounter';
import HoverCounter from './components/higherOrderComponents/HoverCounter';
import ClickCounterTwo from './components/renderProps/ClickCounterTwo';
import CounterRender from './components/renderProps/CounterRender';
import HoverCounterTwo from './components/renderProps/HoverCounterTwo';
import User from './components/renderProps/User';

function App() {

  const abcString = '{"id":"1","name":"nikesh"}';
  // const abcObject = {id: '1', name: 'nikesh'};
  const abcObject = [{id: '1', name: 'nikesh'}];

  return (
    <div className="App">

      {/* <PostList /> */}

      <div>
        <div>Context Demo</div>
        <UserProvider value={JSON.stringify(abcObject)}>
          <ComponentA />
        </UserProvider>
      </div>

      <div>
        {/* <div>Render Props</div> */}
        {/* <User render={(isLoggedIn) => isLoggedIn ? 'Nikesh' : 'guest'}/> */}
        {/* <CounterRender render={(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
            )}
        />
        <CounterRender render={(count, incrementCount) => (
          <HoverCounterTwo count={count} incrementCount={incrementCount} />
            )}
        /> */}
        {/* <CounterRender>
          {(count, incrementCount) => (
            <HoverCounterTwo count={count} incrementCount={incrementCount} />
          )}
        </CounterRender> */}
      </div>
      {/* <div>
        <div>Higher Order Component</div>
        <ClickCounter></ClickCounter>
        <HoverCounter></HoverCounter>
      </div> */}
      {/* <div>
        <div>Error Boundary</div>
        <ErrorBoundaryDemo>
          <Hero heroname="batman"></Hero>
        </ErrorBoundaryDemo>
        <ErrorBoundaryDemo>
          <Hero heroname="superman"></Hero>
        </ErrorBoundaryDemo>
        <ErrorBoundaryDemo>
          <Hero heroname="joker"></Hero>
        </ErrorBoundaryDemo>
      </div> */}
      {/* <PortalDemo></PortalDemo> */}
      {/* <FRParentInput></FRParentInput> */}
      {/* <RefsDemo></RefsDemo> */}
      {/* <FramgmentsDemo></FramgmentsDemo>
      <Table></Table> */}
      {/* <LifecycleA /> */}
      {/* <Form></Form> */}
      {/* <Greet name="nik"></Greet> */}
      {/* <Welcome name="nik"></Welcome> */}
      {/* <ParentComponent></ParentComponent> */}
      {/* <EventBind></EventBind> */}
      {/* <FunctionClick></FunctionClick> */}
      {/* <Counter></Counter> */}
      {/* <Message></Message> */}
      {/* <Counter></Counter> */}
    </div>
  );
}

export default App;

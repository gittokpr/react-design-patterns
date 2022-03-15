import axios from "axios";
import { useState } from "react";
import ControlledForm from "./ControlledForm";
import ControlledModal from "./ControlledModal";
import ControllledOnboardingFlow from "./ControlledOnboardingFlow";
import CurrentUserLoader from "./CurrentUserLoader";
import DataSource from "./DataSource";
import Model from "./Model";
import { LargePersonListItem } from "./people/LargePersonListItem";
import { SmallPersonListItem } from "./people/SmallPersonListItem";
import { printProps } from "./printProps";
import { ProductInfo } from "./ProductInfo";
import { RegularList } from "./RegularList";
import ResourceLoader from "./ResourceLoader";
import SplitScreen from "./SplitScreen";
import UncontrolledForm from "./UncontrolledForm";
import UncontrollledOnboardingFlow from "./UncontrollledOnboardingFlow";
import { UserInfo } from "./UserInfo";
import UserLoader from "./UserLoader";

const LeftHandComponent = ({ name }) => {
  return <h1 style={{ backgroundColor: 'green' }}>{name}</h1>;
}

const RightHandComponent = ({ name }) => {
  return <h1 style={{ backgroundColor: 'red' }}>{name}</h1>;
}

//list item
const people = [{
  name: 'John Doe',
  age: 54,
  hairColor: 'brown',
  hobbies: ['swimming', 'bicycling', 'video games'],
}, {
  name: 'Brenda Smith',
  age: 33,
  hairColor: 'black',
  hobbies: ['golf', 'mathematics'],
}, {
  name: 'Jane Garcia',
  age: 27,
  hairColor: 'blonde',
  hobbies: ['biology', 'medicine', 'gymnastics'],
}];

const getUserData = url => async () => {
  const response = await axios.get(url);
  return response.data;
}

const getLocalStorageData = key => () => {
  return localStorage.getItem(key);
}

const Text = ({ message }) => <h1>{message}</h1>;

const Step1 = ({ goToNext }) => (
  <>
    <p>Step 1</p>
    <button onClick={() => goToNext({ name: 'gitto' })}>next</button>
  </>
);
const Step2 = ({ goToNext }) => (
  <>
    <p>Step 2</p>
    <button onClick={() => goToNext({ age: 62 })}>next</button>
  </>
);
const Step3 = ({ goToNext }) => (
  <>
    <p>Step 3</p>
    <h3>Congratulations</h3>
    <button onClick={() => goToNext({ hairColor: 'black' })}>next</button>
  </>
);
const Step4 = ({ goToNext }) => (
  <>
    <p>Step 4</p>
    <button onClick={() => goToNext({ hairColor: 'black' })}>next</button>
  </>
);

function App() {

  const [shouldModalShow, setShouldModalShow] = useState(false);

  // to save the data obtained from each onboarding step. controlled
  const [onboardingData, setOnboardingData] = useState({});
  const [curIndex, setCurIndex] = useState(0);

  const onNext = stepData => {
    setOnboardingData({ ...onboardingData, ...stepData });
    setCurIndex(curIndex + 1);
  }

  const UserInfoWrapped = printProps(UserInfo);

  return (
    <>
      <UserInfoWrapped a={1} b={"test"} c={{ name: "min" }} />
      <ControllledOnboardingFlow onFinish={data => {
        console.log(data);
        alert("Onboarding completed");
      }} curIndex={curIndex} onNext={onNext}>
        <Step1 />
        <Step2 />
        {onboardingData.age > 60 && <Step3 />}
        <Step4 />
      </ControllledOnboardingFlow>
      <UncontrollledOnboardingFlow onFinish={data => {
        console.log(data);
        alert("Onboarding completed");
      }}>
        <Step1 />
        <Step2 />
        <Step3 />
      </UncontrollledOnboardingFlow>
      <ControlledModal shouldShow={shouldModalShow} onRequestClose={
        () => setShouldModalShow(false)
      }>
        <LargePersonListItem person={people[0]} />
      </ControlledModal>
      <button onClick={() => setShouldModalShow(true)}>Show Modal</button>
      <ControlledForm />
      <UncontrolledForm />
      <DataSource getDataFunc={getLocalStorageData('message')} resourceName={'message'}>
        <Text />
      </DataSource>
      <DataSource getDataFunc={getUserData('/users/123')} resourceName={'user'}>
        <UserInfo />
      </DataSource>
      <ResourceLoader resourceUrl={'/products/1234'} resourceName={'product'} >
        <ProductInfo />
      </ResourceLoader>
      <UserLoader userId={'234'}>
        <UserInfo />
      </UserLoader>
      <CurrentUserLoader>
        <UserInfo />
      </CurrentUserLoader>
      <Model>
        <LargePersonListItem person={people[0]} />
      </Model>
      <SplitScreen leftWeight={1} rightWeight={3}>
        <LeftHandComponent name={"Sasi"} />
        <RightHandComponent name={"3G"} />
      </SplitScreen>
      <RegularList items={people} resourceName={'person'} itemComponent={SmallPersonListItem} />
      <RegularList items={people} resourceName={'person'} itemComponent={LargePersonListItem} />
    </>
  );
}

export default App;

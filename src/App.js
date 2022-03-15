import axios from "axios";
import CurrentUserLoader from "./CurrentUserLoader";
import DataSource from "./DataSource";
import Model from "./Model";
import { LargePersonListItem } from "./people/LargePersonListItem";
import { SmallPersonListItem } from "./people/SmallPersonListItem";
import { ProductInfo } from "./ProductInfo";
import { RegularList } from "./RegularList";
import ResourceLoader from "./ResourceLoader";
import SplitScreen from "./SplitScreen";
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

function App() {
  return (
    <>
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

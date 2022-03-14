import CurrentUserLoader from "./CurrentUserLoader";
import Model from "./Model";
import { LargePersonListItem } from "./people/LargePersonListItem";
import { SmallPersonListItem } from "./people/SmallPersonListItem";
import { RegularList } from "./RegularList";
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


function App() {
  return (
    <>
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

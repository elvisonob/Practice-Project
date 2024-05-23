import CoreConcept from './CoreConcept';
import TabButton from './TabButton';

const HomePage = () => {
  return (
    <div>
      <CoreConcept title={'one love'} description={'No hate talk'} />
      <br />
      <CoreConcept
        title={'I love Aberdeen'}
        description={'Infact Scottish people are lovely'}
      />
      <TabButton>Components</TabButton>
      <TabButton>Props</TabButton>
      <TabButton>State</TabButton>
    </div>
  );
};

export default HomePage;

import CoreConcept from './CoreConcept';
import TabButton from './TabButton';

const HomePage = () => {
  const onSelectComponents = (selectedButton) => {
    return <TabButton>{selectedButton}</TabButton>;
  };

  return (
    <div>
      <CoreConcept title={'one love'} description={'No hate talk'} />
      <br />
      <CoreConcept
        title={'I love Aberdeen'}
        description={'Infact Scottish people are lovely'}
      />
      <TabButton onSelect={() => onSelectComponents('components')}>
        Components
      </TabButton>
      <TabButton onSelect={() => onSelectComponents('props')}>Props</TabButton>
      <TabButton onSelect={() => onSelectComponents('state')}>State</TabButton>
      <menu>{onSelectComponents}</menu>
    </div>
  );
};

export default HomePage;

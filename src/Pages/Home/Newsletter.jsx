import { Card, Text, VStack, TagGroup, Tag } from 'rsuite';

const Newsletter = () => {
    return (
        <div>
            <div className="flex items-center justify-center">
                <h1 className="text-2xl">Newsletter section</h1>

            </div>
            <div className='w-full'> 
            <Card shaded direction="row">
      <img
        src="https://images.unsplash.com/photo-1576606539605-b2a44fa58467?q=80&w=1974"
        alt="Shadow"
        width={200}
        style={{ objectFit: 'cover' }}
      />
      <VStack spacing={2}>
        <Card.Header as="h5">Cream</Card.Header>
        <Card.Body>
          Meet Shadow, a spirited little explorer with a heart full of adventure! This charming pup
          loves to roam the fields, soaking up the sights and sounds of nature.
        </Card.Body>
        <Card.Footer>
          <TagGroup>
            <Tag size="sm">🐶 Dog</Tag>
            <Tag size="sm">☀️ Sunny</Tag>
            <Tag size="sm">🌈 Rainbow</Tag>
          </TagGroup>
        </Card.Footer>
      </VStack>
    </Card>

            </div>
        </div>
    );
};

export default Newsletter;

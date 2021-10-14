import { useDispatch } from 'react-redux';
import { VISIBILITY_FILTER } from '../../constants';
import { setFilter } from '../../redux/actions/toDo.actions.js';
import { Container, Tab, TabList, Tabs } from '@chakra-ui/react';

 const VisibilityFilter = () => {
  const dispatch = useDispatch();

  return (
    <Container centerContent>
      <Tabs>
        <TabList>
          {Object.keys(VISIBILITY_FILTER).map(filterkey => {
            const currentFilter = VISIBILITY_FILTER[filterkey];
            return (
              <Tab
                key={`visibility-filter-${currentFilter}`}
                onClick={() => dispatch(setFilter(currentFilter))}
              >
                {currentFilter}
              </Tab>
            )
          })}
        </TabList>
      </Tabs>
    </Container>
  )
}

export default VisibilityFilter;
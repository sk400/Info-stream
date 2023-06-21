import {
  Box,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@/components/chakra-ui";
import { SelectedNews } from ".";

const UserChoosenNews = async ({ favoriteNews, readingList }) => {
  return (
    <Box
      sx={{
        mt: 20,
        p: { base: 2, sm: 5, md: 10, lg: 10 },
      }}
    >
      {favoriteNews?.length > 0 && readingList?.length > 0 ? (
        <Tabs variant="soft-rounded" colorScheme="cyan">
          <TabList>
            <Tab>
              <Text>Favorites</Text>
            </Tab>
            <Tab>
              <Text>Reading list</Text>
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <SelectedNews title="Favorite" allNews={favoriteNews} />
            </TabPanel>
            <TabPanel>
              <SelectedNews title="Reading list" allNews={readingList} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      ) : (
        <>
          <Heading>You have not any favorite news yet.</Heading>
        </>
      )}
    </Box>
  );
};

export default UserChoosenNews;

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
            {favoriteNews?.length > 0 ? (
              <SelectedNews title="Favorite" allNews={favoriteNews} />
            ) : (
              <>
                <Text>
                  You have not any favorite news yet. You can add in home page.{" "}
                </Text>
              </>
            )}
          </TabPanel>
          <TabPanel>
            {readingList?.length > 0 ? (
              <SelectedNews title="Reading list" allNews={readingList} />
            ) : (
              <>
                <Text>
                  You have not any favorite news yet. You can add in home page.{" "}
                </Text>
              </>
            )}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default UserChoosenNews;

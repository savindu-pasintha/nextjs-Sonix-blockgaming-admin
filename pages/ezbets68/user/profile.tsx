import SonicXCard from "../../../components/Card/Card";
import SonicXCardHeader from "../../../components/Card/CardHeader";
import {CardContent, Container} from "@mui/material";

const UserProfile = (): JSX.Element => {
    return (
      <Container maxWidth={'md'}>
        <SonicXCard>
          <SonicXCardHeader />
          <CardContent>

          </CardContent>
        </SonicXCard>
      </Container>
    );
}
export default UserProfile;

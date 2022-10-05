import { faGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { NAVIGATE_SETTINGS } from '../../navigation/navigate';

const SettingsBtn: React.FC = () => {
  const navigation = useNavigation();

  const navigateSettings = () => {
    navigation.navigate(NAVIGATE_SETTINGS);
  };

  return (
    <TouchableOpacity onPress={navigateSettings}>
      <FontAwesomeIcon icon={faGear} color="white" size={25} />
    </TouchableOpacity>
  );
};

export default SettingsBtn;

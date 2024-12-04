import React, { useState, useCallback, memo } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { THEME_COLOR, WHITE_COLOR, Green_Color, THEME_TEXT_COLOR } from '../res/colors';
import { Profie_Image, Bell_ICON, DOTS_ICON, CAMERA_ICON } from '../res/drawables';

const Tab = memo(({ label, isActive, onPress, customStyle }) => (
  <TouchableOpacity
    style={[styles.tab, isActive ? styles.activeTab : styles.inactiveTab, customStyle]}
    onPress={onPress}
  >
    <Text style={[styles.tabText, isActive ? styles.activeTabText : styles.inactiveTabText]}>
      {label}
    </Text>
  </TouchableOpacity>
));

const Tabs = memo(({ tabs, activeTab, onTabPress, position }) => (
  <View style={[styles.tabsContainer, position]}>
    {tabs.map((tab, index) => (
      <Tab
        key={index}
        label={tab.label}
        isActive={activeTab === index}
        onPress={() => onTabPress(index)}
        customStyle={tab.style}
      />
    ))}
  </View>
));

const ProfileHeader = memo(({ 
  title = "Muhammad Naveed Aslam", 
  containerStyle = {}, 
  DOTSICON = {DOTS_ICON},
  textContainerStyle = {}, 
  icon = {},
  Cameraicon = {},
  showShadow = false,
  showTabsEnabled = true,
}) => {
  const [showTabs, setShowTabs] = useState(false);
  const [activeTab, setActiveTab] = useState(null);
  const [dotsPosition, setDotsPosition] = useState({});

  const tabsData = [
    { label: 'Settings', style: styles.tabRadiusTop },
    { label: 'Update Profile' },
    { label: 'Language', style: styles.tabRadiusBottom },
  ];

  const toggleTabs = () => setShowTabs(prevState => !prevState);
  const handleTabPress = (index) => {
    if (activeTab !== index) setActiveTab(index);
  };

  const onDotsLayout = useCallback(({ nativeEvent: { layout } }) => {
    setDotsPosition(layout);
  }, []);

  return (
    <View style={[styles.container, containerStyle, showShadow && styles.shadow]}>
      <View style={styles.profileContainer}>
        <TouchableOpacity onPress={toggleTabs} onLayout={onDotsLayout}>
          <Image source={DOTSICON} style={[styles.icon ,icon]} />
        </TouchableOpacity>
        <View style={styles.bellContainer}>
          <Image source={Bell_ICON} style={styles.icon} />
          <View style={styles.notificationBadge} />
        </View>
      </View>
      {showTabsEnabled && showTabs && (
        <Tabs 
          tabs={tabsData} 
          activeTab={activeTab} 
          onTabPress={handleTabPress} 
          position={{ top: dotsPosition.y + dotsPosition.height, left: dotsPosition.x }} 
        />
      )}
      <Image source={Profie_Image} style={styles.profileImage} />
      <Image source={CAMERA_ICON} style={[styles.cameraIcon , Cameraicon]} />
      <View style={[styles.textContainer, textContainerStyle]}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    height: 230,
    width: '100%',
    padding: 30,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    backgroundColor: THEME_COLOR,
    alignItems: 'center',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 20,
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  icon: {
    width: 30,
    height: 30,
  },
  bellContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationBadge: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: Green_Color,
    position: 'absolute',
    right: 3,
    top: 0,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: WHITE_COLOR,
  },
  cameraIcon: {
    position: 'absolute',
    height: 20,
    width: 20,
    top: '83%',
    left: '68%',
  },
  textContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: WHITE_COLOR,
    textAlign: 'center',
    fontFamily: 'Ribeye',
  },
  tabsContainer: {
    position: 'absolute',
    backgroundColor: WHITE_COLOR,
    marginHorizontal: 10,
    borderRadius: 10,
    width: '35%',
    alignItems: 'center',
  },
  tab: {
    height: 31,
    justifyContent: 'center',
    paddingHorizontal: 10,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: THEME_COLOR,
  },
  activeTab: {
    backgroundColor: THEME_TEXT_COLOR,
  },
  inactiveTab: {
    backgroundColor: WHITE_COLOR,
  },
  tabRadiusTop: {
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
  },
  tabRadiusBottom: {
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
  },
  tabText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  activeTabText: {
    color: WHITE_COLOR,
  },
  inactiveTabText: {
    color: THEME_TEXT_COLOR,
  },
});

export default ProfileHeader;
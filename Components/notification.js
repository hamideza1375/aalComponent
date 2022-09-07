import notifee from '@notifee/react-native';

function Notification() {
  async function create(title, body) {
    const channelId = await notifee.createChannel({ id: 'default', name: 'Default Channel', });
    await notifee.requestPermission();
    const notificationId = notifee.displayNotification({
      id: 'del',
      title: title,
      body: body,
      android: { channelId },
      pressAction: {
        id: 'default',
        launchActivity: 'com.allComponent',
      },
    });
    return notificationId;
  }

  async function close(notificationId) {
    await notifee.cancelNotification(notificationId);
  }

  return {
    create,
    close,
  }
}

export default Notification
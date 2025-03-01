module.exports = {
  nav: {
    text: 'NodeSDK',
    link: '/develop/nodesdk/',
  },
  sidebar: {
    '/develop/nodesdk/': [
      '',
      {
        title: 'NodeSDK更新日志',
        path: 'changelog/',
        sidebarDepth: 0,
        sidebar: false,
      },
      {
        title: '术语',
        collapsable: false,
        sidebarDepth: 0,
        children: [
          { title: '用户对象(User)', path: 'model/user' },
          { title: '接口权限API(API)', path: 'model/api_permission.md' },
          { title: '频道对象(Guild)', path: 'model/guild' },
          { title: '子频道对象(Channel)', path: 'model/channel' },
          { title: '子频道权限对象(ChannelPermissions)', path: 'model/channel_permission' },
          { title: '成员对象(Member)', path: 'model/member' },
          { title: '频道身份组对象(Role)', path: 'model/role' },
          { title: '消息对象(Message)', path: 'model/message' },
          { title: '私信对象(DMS)', path: 'model/dms' },
          { title: '公告对象(Announce)', path: 'model/announce' },
          { title: '精华消息对象(PinsMessage)', path: 'model/pins_message.md' },
          { title: '日程对象(Schedule)', path: 'model/schedule' },
          { title: '表情对象(Emoji)', path: 'model/emoji' },
          { title: '表情表态对象(Reaction)', path: 'model/reaction' },
          { title: '语音对象(Audio)', path: 'model/audio' },
        ],
      },
      {
        title: 'Client API',
        collapsable: false,
        children: [
          {
            title: '用户 API',
            collapsable: false,
            sidebarDepth: 0,
            children: ['user/me'],
          },
          {
            title: '频道 API',
            collapsable: false,
            sidebarDepth: 0,
            children: ['guild/guilds', 'guild/get_guild'],
          },
          {
            title: '子频道 API',
            collapsable: false,
            sidebarDepth: 0,
            children: [
              'channel/get_channels',
              'channel/get_channel',
              'channel/post_channels',
              'channel/patch_channel',
              'channel/delete_channel',
            ],
          },
          {
            title: '成员 API',
            collapsable: false,
            sidebarDepth: 0,
            children: ['member/get_members', 'member/get_member', 'member/delete_member'],
          },
          {
            title: '频道身份组 API',
            collapsable: false,
            sidebarDepth: 0,
            children: [
              'guild/get_guild_roles',
              'guild/post_guild_role',
              'guild/patch_guild_role',
              'guild/delete_guild_role',
              'guild/put_guild_member_role',
              'guild/delete_guild_member_role',
            ],
          },
          {
            title: '子频道权限 API',
            collapsable: false,
            sidebarDepth: 0,
            children: [
              'channel_permissions/get_channel_permissions',
              'channel_permissions/put_channel_permissions',
              'channel_permissions/get_channel_role_permissions',
              'channel_permissions/put_channel_role_permissions',
            ],
          },
          {
            title: '消息 API',
            collapsable: false,
            sidebarDepth: 0,
            children: [
              'message/get_message_of_id',
              'message/post_messages',
              'message/delete_message',
              'message/message_template',
              'message/post_ark_messages',
              'message/message_format',
              'message/post_reference_messages',
            ],
          },
          {
            title: '私信 API',
            collapsable: false,
            sidebarDepth: 0,
            children: ['dms/post_dms.md', 'dms/post_dms_messages.md'],
          },
          {
            title: '表情表态 API',
            collapsable: false,
            sidebarDepth: 0,
            children: ['reaction/post_reaction.md', 'reaction/delete_reaction.md', 'reaction/get_reaction_user_list.md'],
          },
          {
            title: '禁言 API',
            collapsable: false,
            sidebarDepth: 0,
            children: ['mute/mute_all', 'mute/mute_member', 'mute/mute_members'],
          },
          {
            title: '公告 API',
            collapsable: false,
            sidebarDepth: 0,
            children: [
              'announce/post_guild_announce',
              'announce/post_guild_recommend',
              'announce/delete_guild_announce',
              'announce/post_channel_announce',
              'announce/delete_channel_announce',
            ],
          },
          {
            title: '精华消息 API',
            collapsable: false,
            sidebarDepth: 0,
            children: [
              'pins_message/get_pins_message',
              'pins_message/put_pins_message',
              'pins_message/delete_pins_message',
            ],
          },
          {
            title: '日程 API',
            collapsable: false,
            sidebarDepth: 0,
            children: [
              'schedule/get_schedules',
              'schedule/get_schedule',
              'schedule/post_schedule',
              'schedule/patch_schedule',
              'schedule/delete_schedule',
            ],
          },
          {
            title: '音频 API',
            collapsable: false,
            sidebarDepth: 0,
            children: ['audio/audio_control'],
          },
          {
            title: '接口权限 API',
            collapsable: false,
            sidebarDepth: 0,
            children: ['api_permissions/get_permissions','api_permissions/post_permission.md'],
          },
        ],
      },
      {
        title: 'WebSocket API',
        collapsable: false,
        sidebarDepth: 0,
        children: [{ title: 'wss 消息体', path: 'wss/model.md' }],
      },
    ],
  },
};

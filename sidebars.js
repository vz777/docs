module.exports = {
  docs: {
    "Thelia": [
      'thelia/introduction',
      'thelia/contribute'
    ],
    "Installation": [
      'installation/requirements',
      'installation/composer',
      'installation/shared_hosting',
      'installation/docker',
    ],
    "Configuration" : [
        'configuration/server',
        'configuration/environment_variables',
        'configuration/database',
        'configuration/configuration_variables'
    ],
    "Extend Thelia with modules" : [
        'modules/getting_started',
        'modules/routing',
        'modules/caching', 
        'modules/templating',
        {
           "Special module types": [
             'modules/special/payment',
             'modules/special/delivery'
           ]
        }
    ],
    "Events": [
      'events/index'
    ],
    "Loops": [
      'loops/index',
      'loops/create',
      'loops/thelia'
    ],
    "Commands": [
      'commands/index',
      'commands/create',
      'commands/thelia'
    ]
  },
};

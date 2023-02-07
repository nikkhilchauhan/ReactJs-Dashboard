import config from 'config';

const Constant = {
    // Other constant
    appWrite_project_id: config['environment'] === 'development' ? '63e1c97f06a58dd36010' : '63e1c97f06a58dd36010',
    appWrite_database_id: config['environment'] === 'development' ? '63e1cc3cd126abec9c10' : '63e1cc3cd126abec9c10',
    appWrite_endpoint: config['environment'] === 'development' ? 'https://appwrite.docmantra.com/v1' : 'https://appwrite.docmantra.com/v1',

    // theme constant
    gridSpacing: 3,
    drawerWidth: 260,
    appDrawerWidth: 320
};

export default Constant;

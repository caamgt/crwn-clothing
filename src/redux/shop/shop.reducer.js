import SHOP_DATA from './shop.data';

const INITIALL_STATE = {
    collections: SHOP_DATA
};

const shopReducer = (state = INITIALL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default shopReducer;
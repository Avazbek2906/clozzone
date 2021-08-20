export const changeCategory = (data) => {
    return {
        type: 'changeCategory',
        payload: data,
    }
};
export const changeCabinet = (data) => {
    return {
        type: 'changeCabinet',
        payload: data,
    }
};
export const addCart = (data) => {
    return {
        type: 'addCart',
        payload: data
    }
};
export const removeCart = (id) => {
    return {
        type: 'removeCart',
        payload: id
    }
};
export const proceedCart = () => {
    return {
        type: 'proceedCart',
    }
};
export const changeBreadcumb = (name) => {
    return {
        type: 'changeBreadcumb',
        payload: name,
    }
};
export const changeMenu = (name) => {
    return {
        type: 'changeMenu',
        payload: name,
    }
};
export const addCart_button = (data) => {
    // console.log(data)
    return {
        type: 'addCart_button',
        payload: data,
    }
};
export const removeCart_button = (id) => {
    return {
        type: 'removeCart_button',
        payload: id,
    }
};
export const proceedCart_button = () => {
    return {
        type: 'proceedCart_button',

    }
};
export const increament = () => {
    return {
        type: 'increament'
    }
};

export const decreament = () => {
    return {
        type: 'decreament'
    }
};

export const removeAll = () => {
    return {
        type: 'removeAll'
    }
};
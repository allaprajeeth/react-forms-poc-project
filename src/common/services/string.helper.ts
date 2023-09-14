export const ObjectToJson = (obj: any) => {
    let data: any = {};
    Object.keys(obj).map((k) => {
        let val = JSON.parse(JSON.parse(obj[k]));
        data[k] = val;
    });
    return data;
};
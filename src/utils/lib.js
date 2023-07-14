// 比较 a、b 是否相等
export function isObjEqual(a, b) {
  return JSON.stringify(a) === JSON.stringify(b)
}

// 获取格式为 yyyyMMdd 的日期
export function getYYMMDD() {
  var date = new Date();
  //var seperator1 = "-";
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var strDate = date.getDate();
  if (month >= 1 && month <= 9) {
    month = "0" + month;
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = "0" + strDate;
  }
  var currentdate = year + '' + month + strDate;
  return currentdate;
}

// 生成 uuid
export function getUUID() {
  var s = [];
  var hexDigits = "0123456789abcdef";
  for (var i = 0; i < 32; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  s[14] = "4";
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);

  var uuid = s.join("");
  return uuid;
}

// 根据图片 url 转出 base64
export function urlToBase64(url, type = 'image/jpeg') {
  return new Promise((resolve, reject) => {
    const img = new Image()
    const canvas = document.createElement('canvas');
    img.crossOrigin = '*';
    img.onload = function () {
      const width = img.width, height = img.height;
      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext('2d');
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, width, height);
      const base64 = canvas.toDataURL(type);
      resolve(base64);
    };
    img.onerror = function (err) {
      reject(new Error(`message:${err}`));
    };
    img.src = url;
  });
}

// 深拷贝
export function deepCopy(data, hash = new WeakMap()) {
  if (typeof data !== 'object' || data === null) {
    throw new TypeError('传入参数不是对象')
  }
  // 判断传入的待拷贝对象的引用是否存在于hash中
  if (hash.has(data)) {
    return hash.get(data)
  }
  let newData = {};
  const dataKeys = Object.keys(data);
  dataKeys.forEach(value => {
    const currentDataValue = data[value];
    // 基本数据类型的值和函数直接赋值拷贝 
    if (typeof currentDataValue !== "object" || currentDataValue === null) {
      newData[value] = currentDataValue;
    } else if (Array.isArray(currentDataValue)) {
      // 实现数组的深拷贝
      newData[value] = [...currentDataValue];
    } else if (currentDataValue instanceof Set) {
      // 实现set数据的深拷贝
      newData[value] = new Set([...currentDataValue]);
    } else if (currentDataValue instanceof Map) {
      // 实现map数据的深拷贝
      newData[value] = new Map([...currentDataValue]);
    } else {
      // 将这个待拷贝对象的引用存于hash中
      hash.set(data, data)
      // 普通对象则递归赋值
      newData[value] = deepCopy(currentDataValue, hash);
    }
  });
  return newData;
}



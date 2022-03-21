// 当结果不为0或其他有效值时返回假（其他false时触发）
import { useEffect, useState,useRef } from "react";
// export const isFalsy = (value: unknown) => (value === ''? true : false);
export const  isVoid=(value:unknown)=> value===undefined||value===null||value===""
// 删除值为空的对象的关键字

export const cleanObject = (object: object) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    //@ts-ignore
    const value = result[key];
    if (isVoid(value)) {
      //@ts-ignore
      delete result[key];
    }
  });
  return result;
};

export const useMount = (callback: () => void) => {
  useEffect(() => {
    //页面加载只加载一次，而不会刷新就加载一次
    // TODO依懒性里加上callback会无限循环
    callback(); 
    //优化
    // eslint-disable-line react-hooks/exhaustive-deps
  }, []);
};
export const useArray = <v>(arr: v[]) => {
  const [value, setValue] = useState(arr);
  return {
    value,
    setValue,
    add: (item: v) => setValue([...value, item]),
    clear: () => setValue([]),
    removeIndex: (index: number) => {
      const copy = [...value];
      copy.splice(index, 1);
      setValue(copy);
    },
  };
};
export const useDebounce = <v>(value: v, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timeout); //useEffect的返回值会在下一个useEffect调用时调用
  }, [value, delay]);
  return debouncedValue;
};

export const useDocumentTitle = (title: string, keepOnUnmount = true) => {
  const oldTitle= useRef(document.title).current;
  //页面加载时：旧title
  //加载后：新title

  useEffect(() => {
    document.title = title;
  }, [title]);
  
  useEffect(() => {
  
  return () => {
    if(!keepOnUnmount)
     // 如果不指定依赖，读到的就是旧title
    document.title=oldTitle;
  }
}, [keepOnUnmount,oldTitle])
};

export const resetRoute=()=> window.location.href=window.location.origin
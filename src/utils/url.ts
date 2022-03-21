import { useSearchParams, URLSearchParamsInit } from 'react-router-dom'
import { useMemo } from 'react'
import { cleanObject } from 'utils'
export const useUrlQueryParam = <K extends string>(keys: K[]) => {

    const [searchParams, setSearchParm] = useSearchParams()

    return [
        useMemo(() => keys.reduce((prev, key) => {

            return { ...prev, [key]: searchParams.get(key) || '' }

        }, {} as { [key in K]: string }),[searchParams]),



        (params: Partial<{ [key in K]: unknown }>) => {
          
            const o = cleanObject({
                ...Object.fromEntries(searchParams),
                ...params
            }) as URLSearchParamsInit;

            return setSearchParm(o)
        }
    ] as const
}
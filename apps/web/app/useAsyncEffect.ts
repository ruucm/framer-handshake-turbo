import { useState, useEffect } from "react";

export function useAsyncEffect(asyncEffect, deps = []) {
  const [value, setValue] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await asyncEffect();
        setValue(result);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, deps);

  return [value, loading];
}

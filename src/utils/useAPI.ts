import { useCallback, useState } from "react";
import { Observable, catchError, of, tap } from "rxjs";

const useAPI = <T>(action: (...args: any[]) => Observable<T>) => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState();

	const trigger = useCallback((...args: any[]) => {
		setIsLoading(true);
		setError(undefined);
		return action(...args)
			.pipe(
				tap(() => setIsLoading(false)),
				catchError((err) => {
					setIsLoading(false);
					setError(err?.message ?? 'Error');
					return of(null);
				})
			)
	}, [action]);

	return {
		trigger, isLoading, error
	};
}

export default useAPI;

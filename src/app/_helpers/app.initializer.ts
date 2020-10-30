import { resolve } from 'url';
import { AccountService } from '../_services/account.service';

export function appInitializer(accountService: AccountService) {
    // tslint:disable-next-line: no-shadowed-variable
    return () => new Promise( resolve => {
        // attempt to refresh token on app start up to auto authenticate
        accountService.refreshToken()
        .subscribe()
        .add(resolve);
    });
}

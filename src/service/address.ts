import { format } from 'js-conflux-sdk'
import { AddressFormatError } from '../base'

export function formatHexAddress(address: string): string {
    try {
        return format.hexAddress(address)
    } catch (error: any) {
        const errStr = error.toString()
        throw new AddressFormatError(errStr)
    }
}
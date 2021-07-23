class VerifiedCollections {
    static async load(slugOrContractAddress, tokenId = null) {
        return await import('./collections.json').then(m => m?.default ?? m)
    }
}

export default VerifiedCollections

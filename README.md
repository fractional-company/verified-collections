# @fractional-company/verified-collections

List of verified collections/NFTs. It adds the verified badge to a vault/NFT.

NOTE: This is a temporary repo, list will be migrated into a contract.

## Adding new collection

Edit the collections.json & submit a PR.

```
Structure
{
    "collection": "[ Collection Name ]",
    "address": "[ Contract Address ]",
    "tokenIds": [ Token Ids ] # Optional, if filled only token ids provided will be marked as verified.
}

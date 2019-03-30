## For a list of demo credit cards in varoius decline or fraud states, visit https://help.usaepay.info/developer/reference/testcards/ or see below

#### Successful Charges
| Card | Number	| Expiration	| CVV2 | Code	| AVS | Response	| CVV2 | Response	| CAVV | Response	| Card | Level |
| 4000100011112224	| 0919	| 123	| YYY	| M		| A |
| 4000100111112223	| 0919	| 321	| YYX	| M		| A |
| 4000100211112222	| 0919	| 999	| NYZ	| M		| A |
 
#### Decline Responses
| Card | Number	| Expiration | CVV2 Code | Decline Code |	Message |
| ---| --- | --- | --- | --- | --- |
| 4000300011112220	| 0919	| 999 |	-	  | Declined |
| 4000300001112222	| 0919	| 999	| 04	| Pickup Card |
| 000300211112228	  | 0919	| 999	| 05	| Do not Honor |
| 4000300311112227	| 0919	| 999	| 12	| Invalid Transaction |
| 4000300411112226	| 0919	| 999	| 15	| Invalid Issuer |
| 4000300511112225	| 0919	| 999	| 25	| Unable to locate Record |
| 4000300611112224	| 0919	| 999	| 51	| Insufficient funds |
| 4000300711112223	| 0919	| 999	| 55	| Invalid Pin |
| 4000300811112222	| 0919	| 999	| 57	| Transaction Not Permitted |
| 4000300911112221	| 0919	| 999	| 62	| Restricted Card |
| 4000301011112228	| 0919	| 999	| 65	| Excess withdrawal count |
| 4000301111112227  | 0919	| 999	| 75	| Allowable number of pin tries exceeded |
| 4000301211112226	| 0919	| 999	| 78	| No checking account |
| 4000301311112225	| 0919	| 999	| 97	| Declined for CVV failure |

#### Fraud Profiler Response
| Card | Number	| Expiration	| Profiler | Response |
| ---| --- | --- | --- | --- |
| 4000301411112224	| 0919	| review |
| 4000301511112223	| 0919	| reject |

Partial Authorization Cards
| Card | Number	| Expiration	| Authorized | Amount |
| ---| --- | --- | --- | --- |
| 4000000011112275	| 0919	| 50% |
| 4000000011112283	| 0919	| 75% |
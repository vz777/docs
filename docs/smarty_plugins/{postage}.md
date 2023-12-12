Le bloc Smarty postage récupère le montant des frais de port du panier actuel s'il existe.

Le pays de livraison est choisi avec la première valeur disponible :

1. Soit le pays de l'adresse de livraison du client liée au panier s'il existe
2. Soit le pays enregistré dans le cookie si le client a changé le pays par défaut
3. Soit le pays par défaut de la boutique s'il existe

La fonction sélectionne la livraison la moins chère pour ce pays.

## Sorties
À l'intérieur du bloc postage, ces variables sont définies :

| Nom du paramètre   | Description                                                                                                                        |
|:-------------------|:-----------------------------------------------------------------------------------------------------------------------------------|
| `$country_id`      | L'ID du pays ou `null`                                                                                                             |
| `$delivery_id`     | L'ID de la livraison ou `null`                                                                                                     |
| `$postage`         | Le montant des frais de port ou  `0.0`                                                                                             |
| `$is_customizable` | Indique si les frais de port peuvent être personnalisés. False lorsque le client est connecté et a une adresse de livraison valide |


## Une implémentation pour le modèle front office par défaut
```smarty
    <tbody>
        {postage}
            {assign var="postageAmount" value=$postage }
            <tr>
                <td class="product" colspan="2">
                    <form action="{url path="/cart/country"}" class="form-inline" method="post">
                        <h3>
                            {intl l="Estimated shipping "}
                            {if $is_customizable == false}
                                {loop type="country" name="countryLoop" id="$country_id"}
                                {intl l="for"} {$TITLE}
                                {/loop}
                            {/if}
                        </h3>
                        {if $is_customizable}
                        <div>
                            <label for="cart-country">{intl l="Select your country:"}</label>
                            <select id="cart-country" name="country">
                            {loop type="country" name="countryLoop" with_area="true"}
                                <option value="{$ID}" {if $ID == $country_id }selected="selected" {/if}>{$TITLE}</option>
                            {/loop}
                            </select>
                            <a class="btn btn-change-country" href="#"><i class="icon-refresh"></i> {intl l="update"}</a>
                        </div>
                        {/if}
                        {if $delivery_id != 0 }
                        <div>
                            {intl l="with:"} {loop type="delivery" name="deliveryLoop" id=$delivery_id}{$TITLE} {/loop}
                        </div>
                        {else}
                        <div class="alert alert-danger">
                            {intl l="No deliveries available for this cart and this country"}
                        </div>
                        {/if}
                    </form>
                </td>
                <td class="unitprice">{$postage} {currency attr="symbol"}</td>
                <td class="qty">-</td>
                <td class="subprice">{$postage} {currency attr="symbol"}</td>
            </tr>
        {/postage}
    </tbody>
    <tfoot>
        <tr>
            <td colspan="3" class="empty">&nbsp;</td>
            <th class="total">{intl l="Total"}</th>
            <td class="total">
                <div class="total-price">
                    {assign var="totalAmount" value={cart attr='total_taxed_price_without_discount'} + $postageAmount }
                    <span class="price">{$totalAmount} {currency attr="symbol"}</span>
                </div>
            </td>
        </tr>
    </tfoot>
```

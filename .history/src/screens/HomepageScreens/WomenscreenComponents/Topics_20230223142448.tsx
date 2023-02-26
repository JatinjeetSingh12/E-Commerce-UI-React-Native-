import { StyleSheet, View, FlatList } from 'react-native'
import React, { FC } from 'react'
import { Box, Center, Text, Image, HStack, VStack } from 'native-base';

const Topics: FC = () => {
    const data = [
        {
            "img": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgVFhUYGBgaGhgZGBgYGBgYGBoYGBgaGRgYGBgcIS4lHB4rIRgYJjgmKy8xNTU1HCQ7QDs0Py40NTEBDAwMEA8QHxISHjQrJCs0NzQ0NDQ2NzQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ2NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIARMAtwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAACAAEEBQYDB//EAEcQAAIBAgMEBwQGBwcCBwAAAAECAAMRBBIhBTFBUQYTImFxkaEyUoHBFCNCcrHRYoKSorLh8AcVJDNzwtJDsxZjdJOj4vH/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQIDBAX/xAAnEQACAgICAQMEAwEAAAAAAAAAAQIRITEDEkEiMlEjYXGBEzPwBP/aAAwDAQACEQMRAD8A9PCzoFiUQ1EkgSrOgEYCGBAHUQwIwhCAOBCAjCEIA8Dj8PyhweMgkeKPGgDQSIUEySAGE5kTsYDCAcGWcys7kTmwgHBlnMiSCJyqJcEc/wAOMgGT21jSxawdqSqS7qxVco3gG2XeN5zcQBxmewm2Kr1AmGw4ygDsr2LjgXYa+ZE3u0sAKwWmdKdwXUfaCkFU7hca25CQsTWSm600VRZSz2sqU1H2ntxsN0xlBt22RWdkLFjEVAtFqdOmpXUs5dLqQcq2sb7t/IxSprdIHxFRtaK0KZsDUC3c2IBCtduN9BoN5ilcPJNo9HAhCCDCBnSAxDBgCEIAYhwBCEAIQhAEJTACg8YUE75BI8aKKSQIwTHjQBjBMcwTAAMFhCMAwAGEAidDObGARcdWyITYknRQBclj7IEzDbM7GIQFmdjUUs3tOxAZT36FQJqXS7BjwGmvPf8AgPWV9bBIHuMwzksbO41sFvoe6UlGyNsqdm9DKCZWe7uB2hfskkcBa9hfnFNBh8OaYsrO4P2XbNl8GIv5kxpVRSWi1IsgsICMIQE2ICEMQBCEgBiEIAMcNADjrABhKYAcE7/h+UeCd/w/KQB7xrxRryQImK8ExiYA5MExExiYAJgGGTBMkHMmA06NAMkqc2kHGNZgb2ABJPIC15PIkDH08xCncysvnYfOVlolbI2w9t08TnC5gVN7Na5U+ywtw7uEUpehmynp1qpcWyDq78Cbg3HwAP6wimEW2iVdG4BhBpR4jbmRgvUVTfL9hhbM6oNMvex/V74sDt/rKYqdRVAObTI7eySN4W3CbdkKZfZos0oB0jGUt1FbSn1h7D7rE2uV7jruko7X7Sr1VXtKzew17KVB0tc+2I7RFMtwY95SJt0EIepq9s2HYaw7LNvtb7MZ9tA01qdTVsQhAy+/a2vxi0KZe3EJDKPD7RL3+qqCzMvsjeptz0nfAbTDIrinUs6q2ibgyg6njvkOUSUmXMFjqPA/KAlUFQ24EX103yDidrIliVcjMqXCNa7sqg7tRcjdIckhTLKCZV/31TzZbPfMF/y3tqjODuvbskeMc7Zp2vZ/b6s9h9GLZQd24kjzEnsvkUyyMEmVmK25SQgNn1Bb2HtYOia3HN1+F5xxfSKhTF2Zvtbkb7KM59FMdl8in8FuTBvK6ttmitrvvNhod9iflMNtfpIzqSyBgScq62VeHxtx75D5I+Mkxg3s9IJjTyzZvSarTqhmfQ2zJrlK6XsOB5eE9BTblAkjrBcBSd9hmvbX4GSprzgOLRYmAZVN0iw91GfVnZBo3tKGJ4brKdd27nArdIaCuqFxmbdo3rppw85PePyitP4LUmRMT7a/H5SH/wCIsNZWNQAM7INGHaUsp3jddTru3c4D7Yw5YHrU0vx52kSnGvBKi70XAUj2QNdST+XGPOGE2jSqGyVAx5C8aVtMmmUW09oGrVVKTWqqFLhSrCmQesUO1iLjKO45vMtjbTWiaOEZg7OjBHbs5nS3WBgBYXvcAcbyk2C/1mLdRlbrTf8ASyAKL9xCnzmd6Q7RWmwcE9ZQxGYDcclUdZpzBYeazNcjcjf+JdTYvtDLVShckvhamGZb6ddSViCBwBCvdt1is0mCqO9QuVUBFsmpLFXCuTfdrZTbu+E8d2ztd3xS1QWVmZXFjYhWrUgF04ZQB32npWBcmkjX1ypa19BlOUeRWaORafCoyrzSv8k7H4kUUoBtwqAG3AslQEm+4Atvk1sMuRKOewXqSrFfaVGQgfHLb4zLdItoBaZ6wnMVdFAF7vUVAm7kHbXkJp8QwNZE4qg9RYfOaxyjl5Y9ZElkCr2bKSSGsSRnZjc/E3nXC4bq6eS9wEVQeYC5flOVLR6gI0PaHwCtcfEmTB7A/rfM280K8gvTHV5LaZbWgYnL2FYXBIt3FLOpPxUTu24SHXqXcD3R6n+hIbpFkrItKoHrm5tardSdz5aBRlHJgzNoeRtuM74Nc6XN1BqmoDYEOuctTI15BfKV9dg9anSt2iwdiBoq02DktbnYD9aaRl4cP6/lLJ2ijVMq9p4dmKsBcCyab+1Wom9uVkN5F6QklAoR2NqpsoudaToL3sBcuB8eVzLx91+7+crsVUZXAuMrBswJAOl93Pw+MOVEqPZld0txIGGc8TYgHQ7r7jqDPNMdoAviPKwH4zS9IMSeoIOl2d997Bn09CT8RMliqhYB+bH1ZDf0nO5XKzojGokLEtd0Pet/An+U9hpvlZ3a4QU6Yzn2ewambtbtAQfjPLMLg2qOCoBCKCw420YEc7fOekHB9eFem90yoMl7BgrOyjla7L45bbjLwlUqM+SNqxYG9R6aAEOHq1mDCxCMKgS//uIPgR9k2WMpO1dLqQqGxZtFzMbhM3vEondqNdReeqZTTt/mZwum/Jcl1busCdeJHG0k42mCWYgsCjXTg1ha1jpL9/KKfx+GUWyKAxCsobK1OvVJVlIuesqWXXUb1bdynSg13ZGGo0YeMsMDg2p1Dc3zJSJa9yzhcjse/srOWNw2XEMwPtqtx3jf+Ilm7wVSrJMoUwgFh2fURTvTGkUFjz/o+bVsZy65beBRL+pMw/TpiMVl59WfgpYD5zadH3u+LP8A5w9FQTE9Omvix9xfwY/Oc8fcdsVaS+49WkWamQN1MC/fnpET1PCAhEB5i3gAB+AnmWHa70F95qY/fSemUbAIADwv+zb5y5tzr6j/AN4IHTOkCif+owzD4tkPoZoamb6eBwNEHyZgfxHnKXpUhfqEHGvhz32WvTv/ABTS1k/xIb9BR8Ltf5Toh5PO59ol1PbUc1Yek7U2/CRnP1ieJnZNCB3ETJ+4qtHXNKajULOWvpf0vYelpOxNXLTZuIU28eErsEhtfnoPgLzObykXiiZs6jau9Q7urRQeFyzlv4VlwrA/E/1rKbDuSxXh6bzu79JOwxsQJpF4KyWSU26Q8Rh84HaKgFr23m4I0vpxkPF7Wy1MumltDxvz+R75MFW6hhoLyLUnRNSirMJ0uFJGyMWyhEYs1rsSWNhpy4d/dMRiMSHSwtodbbt6/O/nPZMTRV0COqutrWYAjXfvlDjOh+Gc6IUBYEhCQNdCfWZvjp2i65LWSo6BYW61WNiT2PDQm/qPKbDDAIXQWAzB9NLFtWHmCf1px2NsWnhgyJmOY5jmNzfXykqstzbzmkY0ikpWxJjLg34EZT4tz8/OdcY9kB5WPoF+crWrqWAAvldUP3iCfja6yfjmujAcAPRr/lM5MukdsXUs6wNqU+2rdxH4fznPHNrTPMj1EkbSGinv/OXg9lGtCptpHjUxpFNCtHmPR6rlTFOeFUk+STG9MHviz3In8F/nNLs6m30PFAbywJ+JQt6XmW6YC2NfvVP+0g/OYQ9zOyD1+UT8G312G+/T/iB+U9VrWVrbgEFr8SxA+c8mwx+vofeT0npu02vXpLf7WYjuVNPVhLm//R/b+iXj0zVsL/qD921T/ZL7ED68f6Y/iMpgmarhj7tRj/8ADUHzl5iP8xfuuD8Clvxm8dHm8/uGc9tO4/lOzHtH4zgR2k+9OtY2ZvCZT2RHRC2m/wBURzIH7wkPZGJJVkc3ZHJUnfkYnS/d8xD2q/ZRebD0lRRqFa6G9gSwbwIPzA8plJ+o0SwaXAHtnx/OS6Ys48CPxlZs6oOuK317RP7v5y4Rdb8rzSGistlfj8AlSwK68GHtC3DvHdOtKtlXLl1te17X7xO+ftZb773HPdK7H1LuRYAjQWNmB+yRzEUk7FtqiR+URiBhCXKjMZxtp94+k7hL+EC9yTwUaeO6QCi2dUDO3fiKh/YDr/sltij2G+6AfEsPylBg3SnVqZnCqjMxvvu7PuH60scfiw1POjBgzIAQb3GYAnu3zmbNkibjj2KZ+5/CZMxpugP9bxImI1op3Kp8rSVUN6fnNYFJHOi+kUhnMdA2XvABPrpHl7KnnuGpBcPigDfMC1uQNha/HdMr08sMUvNqSNf9pf8AbH2V0hYK9J1ztVLIzZ8pQ3soC2NwNOWkLp/T+uotx6oL+8/5zNKpZOuDwq+Uc8CwOJog80v4aT0/HMPpK8wGWx+6Dp8FE8pwRAxCZjYBQSRrYaXM3GM2yKuIV1VhkcsAcvaTIwYrlJuLNcHnLPZvzv6jZt9nsA6k79bfeykfheW7gFgQb6XH62/+EecwA6V4XOEDlmDoOyjFR2wDdiLcxpNhhNq03OVM7EA3YKVVbcy1uXC83ho87n9xKdgHS/vaeNjOmK9o94H4mVW2MegK5XQkMGAB32YXHlcfGdsNj3cFmyX+zka9/HWZTauisVgrtrVz1yILWIdjvv2SgHgNTKsub3y3ya6W4oP+Uststaoo5Bj49n+cr8OPrPBgP3FEwl7jVaLLZDMK1JmNy6vfcBdUFvPKZo/pADqhNiwuBz8P64zO7NObEJdidHA3Wvl5eF/OSNqLmxNHWwGY33blOvmJpF0iklbJ2PbK4/RufMX+UHFIj2O/KAQdQecjLVRnYZ1PA9rXnzgpilXImpJJUW1FgCQSfBZYE5TuE7IJHpkKLnedwGpPwnGtUJOUgn9BTYfrvw8B6y5U7ioXJVN3Fvkv5wauIUWRNTxI3C3MxZCRZiLe4twvgeLfHTuisNwFvCVBiOkdN0quykXerTXcLWyDNcH4yzw+EyrYaAsrW4Xzb7Thth2fEqhAyBlcHid4I9JckrcAkC4FgSBexvoOM52rZungsCb0vAW9RJC/5TfH8JHop2HHdedqWqMvO4IAu2otw3eM1jszkVdfEZRqyrfcSyg8/tb48x2JpUVU5lKm9i2YhtDu3WPxF4pXszMwWxdnj6Qmh9snXuB399xLH+0CqFqYc20CE28G0HrIu1alTDYhXU/bq6Ncqe2QNLjg05dINonEKrOqhkVl7N9cxHA3tLdWpWzpjNV6dg7KqipVvqAEIF9+4Xm06KYX6qk/G1QfAHd+MxfRte233G/FRN70aqZKeHvu6st+2Xv/AAyXs6OS3vdGD+gr9KXPoiVmz25I5OXwNp6Nsfa2GBLYl/tkopDugXhwOtydbTI7Yw1sTWUC9qhP7Vm/3QaFLhIc2lRydE3ZsulQpVKXW4dwct9UNiNV321EidE8zt23c23EO1+HGVmHdwmRScrXzDgQbWt36GaHorh7Fjbj8pVZZLVRJ20GPWWuTZCLkkkknnvvZZFx2KSkHd2ChWJJNyNLAaDWTcWD1tha7ADvABvfwlT0ypr9HNMKC7H2jbN2tGI5EjNKSku1GfbSOmDqV3dXV107QKjnyvc6g2+M6U+khfEFKoVSiWQAWzE2O/hYXmUxlar2ULk5VS3Ag5BexG7U+khZWDBgxDc7m+vfLJtGlWb3Dm7HXR2UaHeSwAHrL0qFOi3NrKOFzvJ7gPxmf2YjF6IvoCG8SATcyH082/Vw5VKTqmcEu9gXABAULfQX7XC+nCaRVmcma+tilpKXdwvvO5VB5sbAd0zmP6d4Sl2UJqtyT2PE1G0P6t55DjMcXbMzPUc/adizeZ1lf1zB7EG/ITVIpZ6Ljv7RMUT2EoovIqzt8WLAHyEndHv7Qaj1Ep1qaNmNg9IFSDwujMQfMfKebK2bfcAcdLecteivaxVK3vMfgqO3yiWFYWz1vaVP69W/Qt5ZvzEsThg5Q8VJIP6jCR8Wl2pt+ifULA2uWWiWXeCDcG1t4v6zkNzlRxDM3+YMyuQy3sQqnUcraW3Gcsdt16asKSMcozMA5UXPvNY68bSqwJJJJ1JNyTxJ3ky1wGBXK6e+GzHiS3GWVvCInGtGUxperkaobtZiQqneTvPjf0imn2TsZkZ+s7lW3EC5v6j1jS6WDm6tmM6Z4axVrbnqjzs3ymb2jQypcjeygeYPym46VU8yeFV/VDMj0gQhKXe4PkpPzmkto34suvujl0eHbb7jfxCbjZCWo0OZop69YPmJiOj3tH7h/ET0LYwvTpGwslPDr3XKMSfMzOWzv5N/optp4e+LxP31/wC2n5es74fAX0hYpL4nEMpBLOrAWIABQBfH2OHhI74fEjUs4A1BXRRbXXLw4ayk5dfBxSl1LivQpUUDO9nN+yLPu4Cx9Zww/SKmikUzd/dYFD468IkAxlIJcLVXcxNlDWupJ91rcuB5CZXHU0XMHdWddVNO7LmvYi7AAb92o3iYylJa0zGUpas9A2SUW7dYj1D2nYMCb8AP0QLj/wDZX7SQ1XJPLQchcaSg2HWptUV1fLYPmSzX9nTKTw36XNrd8sG2jUZi5oOqWAzZ1BAbUDtdjNu0Fz3xxv1O0RGVZZIxGBzG/cvmFAPqJD+gdtR+kPxl7gXpFFzCqDr7WVm7r2nf6NTJBzOhHvrpfx3zfBt3VE/ZlIAoeQ/2mYD+0tL4lS3simtjy7b6/wBcp6DgFsQLg25EEbtCDPKundcvjqua+WnlQX3WCAk+bNNYGcmZ6rURFzKLncPGQMMTmu28nf8AD+c66u2a2g0ReZJsPMxnplKjIdSrMrW5qxU28pqVJToORduF/ZHfbdLjoZf6amtyBUueH+WwsO6UlasVGVSe8/lNL/Z7hSa7PwVG82KgegbylJv0stH3I9M21XdKNJ0te6A3F9Ch+YEqHx9V1yM3ZO8AAeu+XW0EzYZb8MvobfOUop/1ec6Vm6YeDS0vcFv+EqcKolvgxZvhLRjkiTtEyKBVe0U0MjF7cTPTfuqn5r85jOldMp9HGYkFGa2ml1UD5zaYwXpVf9VvSpaZnpjggaNCtn1yrSVLeJLFr9w4S8i3D7kVnR/2j9z5ibrYDf4YG51yFfAAj5j1mG2D7bqLnsHdruI10my2LmTAgsLFEWykEHeLg99/QzF7O7ldSoi7CZq7uVbK+eopPhUeou8H7LkfCWGOasgbLiECqDmZ8rE2t2UQAFt5uSQBpvvpS9E6ipjGp63bK1iCO2qFXBBH6XpNttbBI6Ofo6uzrlJIAutiDdh2rAE6DU3Al6tHByN2efVdtKaQtUbOuVQqgKw+1rpcKOC3PASf0SwlIM5ri3VoS6OAQc5K3tbW4Nstt/wkXE7EdCGVe2qs5SysoVACbC19O9j3GW2yMbSZ2fEhWygZQiHtlh2bIe1ewAC/o+MxpWZJmTWu9KsStMIGd2C6hgDmVQSW3WJt5y3xG1M6qhw1blTdSSS5F76qAdx0B5mX+K2/Rdij0UJzIiaB2tUW6lSbC2oB5XEm7CxJZmRkACKopkXt1d9Dr7wKG/EW0FpKjbFEbYmzL081qyOb3SsSQd3s5WsB4i8qsJtNErk9XaxKEL7TNmC6KwBJFju33m4LiQ8Qikg2FwdNNRpL9a0WSJWEcCx3c/LjPIds4par1HfVS7PmvawY3CHn3AT0ba2JyYeq17dhlHi4yC3xaeS7RcGxYlreyo3TSJMiZ0VofSMbRGWyIxqZf0aYzAnnchR8ZX40WxNQHjUf1YkTTf2a071MRVbTLTy34AOSW0/UEzO03zYmoQLAuSByFtB5Wi/UKwGFtoVzcv5zfdAaY6mo9tWqW/VQAAeZbzmErVTltxOlwN3OeidDaJTCU7fbDufi7W9AJHIrjRMHTs1vV58OUO78mBlcNmJ7ok/B1CFK233PnJKpKRjWyZSK2jstD9n0llhcKqXtxhhYd5eiGyLiHih1l0va/cIpAsyuT6uon2jUdgO5nzA38DJeGwv1Sq4Fxfkd5J+cOuhvJaUWyS12KogCmBuHdIOMwDscyMwOgILOUZQwa2S9gdN9pc0sOSd0lV6ekqSpU8Ff9FRnRyozqVIewzcLi/IjS0sK1auWIRUy7gWJvfTWwG7fpIaoSdOEt8OsmrKyKbae0Bhh2qbVnqAlsuRRa/s9oiw7p5whq08QlZaLsqNmVdL2HsqW14AAm28X4z0XpnR+rSoN6tlJ/RYH5gTHLWe2hX4qf+U5eWbjKqwdHHwRlFMrzXZ671PozolQ5nXewy9plQ6aswvw4Te7M2sla79W6MoykOFByk3AGUkW0mSbEv8Aofsn/lNDsWiRRDne9zy0BIXT1+Mnj5HKVUOThjGNlscTB6y8r6pPCScE999p02YUZvpTiW6gqToXUWsOF23/AKs8/wAY1zPQentAJSQg76g/geed1rky0dFZbNr0MrdThvZv15ri4OoKqoAtx3NpMdVYmuSyshvfKwsw0AFwRy1noGwMKhwmFBOoDudbas5Yajx9BM/0j2L1J641Wdqj27QUEDKSSSNDuUaACQtlpaRR4hrz1voql8Jh/wDTXyOv4n1nkNZp7J0Up/4Whr/0k481B+cmRVFvTS0kI05hO8ecNV7x5yCQ7xrxwO8ecWXvHnCAJMULJ3jzigGSO0VJ9h/IfnJ1La6Ktij/ALv5ya2zlgDZi+9LUiaKqttxPcf0/ORm24Pcf0l62xkP2j6Tm2xl5+YEUKKmjthTuRvMSQu1CdyH9oSS+ARftekjvhRwMUKOG1cSXouuX7Nx2hvXtD8Jl6T6TS1MAT/MyoXZNQaZARzDqPQicnPBtppHVwTjFNNla7Hhx0HjNK+08iKnV6KoX2+Qt7srqOyKhdTlAsQdXB3dwGstxspzv/hk8EGrbRXnmpUkVj7ZPCmf2v8A6xk20R/0j+1/KWp2N3Hygf3GeCE+E6KMCKhw+LBXEI6in21CZ2OoIJIRbgDmdNZmcXsbDglVD23qy1N6nVSLoRuImqr45sJcIqZmAzB2KMQL2ym1iNefOQOj7rVNTrNMzM65TmRV7IC5u85jaUT9TRdxVI4YPaApqiKlwiqou2pCi1z2d84bVo1MYaaplUrnsrE2JIBve2lgvLjNJ9CoA31M7UUpk2Rwj62YgMN1iMpNuMluslVG3R5xX6N4nMRlXS32+fjN5sbaL0qVOmyC6Iik3O9VAPDulTtTFV6ANRzQYK66ozC67iGQ669zEi0vsHtig7qhp2LIKikXYWI9ljYZXGundJjK1kOFMlDbTe4PM/lCG229weslrVTgsRCHeJayOqI42w/BB6x12s/uD1/OSUROUPschBFIjf3u/uD1ikgkchFIJpEwIYQpw4QMsDlkMfq7zrHgHA4VTvEH6AnL1MlgRWgERsCnuzl/d6e7+MsssG0gERMKg3LJAWdAscKIByyxZZ1IitJBVY3Y+HqsGqUUdhuLIrHTvM6Ls+mNAij4CWOWCUgEBsGnuDykWvsim/tIDbUbx6iXNoxpiQxZn22DR9wH7xLfjO9LZSLqqKPAAS5yCOKchJLQcmyqGCHKI4Tulr1cfIJIKkYWF9HlpkEXViAVfURpadXFABywsk6Wj5RJIOQSFlnTLHtAs5iOIdo8A5mKdCBGtAOZEVjOlo9oByAj2nQLHywDkRGtO1o2WAc4IWdwIrQDjaEFnQCNAAtFlnQRQAMsWWFFeADaKETFAAEKBCkgeOBGEcQBCODGivIIFHjXivAHijZo+aAFFBzRZoAo9ogYryQNFETGuYAoorxQB7Ro94rwBooiYN5AHMUEmKAPaNFCFpIEGj5o2keAK8UQigCIitFHEAa0UK0YwBWjQ41oAMYwyIrQAIgYWWNlgDR4rREQBXijWjHSAFGtHvFABtFHMUAUUUUARjxRQBR4ooAUUUUAeKKKAKKKKCBRRRQSMI0UUAYxoooAozRRQBhEYooA0UUUA//Z",
            "title": "2023 SPRING SUMMER PREVIEW",
            "desc": "Refresh your wardrobe with the new Spring-Summer Collection"
        }, {
            "img": "https://img.merkandi.com/imgcache/resized/images/offer/2019/12/20//ropa-de-mujer-lote-trendik-topic-pack-100-x-480-1-1576862828.jpeg",
            "title": "WIN PREMIUM WORKWEAR",
            "desc": "Shop & review from our latest collection to win.5 WINNERS TO BE SELECTED EVERY WEEK"
        },
        {
            "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiZHQUuNxywYcHy4umOYAaQEqNFd13oAtNrlblJgWT3w&usqp=CAU&ec=48600113",
            "title": "ICONIC FABRICS",
            "desc": "Highly-perfected clothes,designed for life's needs"
        }
    ]
    return (
        <Box>
            <Center>
                <Text fontWeight='500' fontSize={25} py={30}>TOPICS</Text>
            </Center>
            <Box px={2}>
                {data.map((item, index) => {
                    return (
                        <Box width={'100%'} flexDirection={'row'} key={index}>
                            <Image size={'md'} source={{ uri: item.img }} alt='alternative text' />
                            <VStack px={2}>
                                <Text fontWeight={'bold'}>{item.title}</Text>
                                <Text fontWeight={'bold'}>{item.desc}</Text>
                            </VStack>
                        </Box>
                    )
                })}
            </Box>
        </Box>
    )
}

export default Topics

const styles = StyleSheet.create({})
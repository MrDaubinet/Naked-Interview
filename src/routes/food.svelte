<!-- preload data -->
<script>
  import Card from "../components/Card.svelte"
  import ButtonPrimary from "../components/ButtonPrimary.svelte"

  let data = [
    {
      name: "Hamburgers",
      images: [
        {
          url: "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/165384.jpg",
          confidence: "98%"
        },  {
          url: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSExIVFRUVFRcVGBYVFRUVFhUVFxUXFxcVFRUYHSghGBolHRUWITEhJSkrLi4uFyAzODMtNygtLisBCgoKDg0OGhAQGy0lHyUrLy0tLSstLS0tLi8tLy0tLSstLS0tLS0tLystLS0tLS0tLS0tLS0tLSsvLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAAIDBQYBBwj/xAA5EAACAQIEBAQDBgYDAAMAAAABAhEAAwQSITEFQVFhBhMicYGRoRQyUrHB8AcVI0LR4TNi8XKCsv/EABoBAAMBAQEBAAAAAAAAAAAAAAECAwQABQb/xAAwEQACAgEDAwIEBQQDAAAAAAAAAQIRAxIhMQQTQVFhInGB8BSRobHRIzLB8QVC4f/aAAwDAQACEQMRAD8A8SRzO5qW6TFQCpjtRBRDmrs0orsVx1CznrXfMPWuRT7dqa44YGNOymjEw1OyCuBYAUNMKmrArUVxa4IKtsmumyaLsxUzxFBgsrRbNTLhm70VZUTVxh7QilbCjOnCt3rn2Zq0t20tDlBQs5meaya55Rq1xCihxTAsFXDk16r/AAJCreuqw1hSPb9isBYURWs/hvjBaxg5Zlj612rTuF7n0NfshhHWq65gFiCoIplriYI0YU29xIRvTLLH1BpZNhkVBAUAUWl1dorNYji3ej+F4kNqWFFZE3sdpaMX/G+9GEFtdDcdRp0HqP5V4V9jNewfxix6vdtWwZygsffYfrXnWUUJy3Atij+xmkcGavsgpjAUlh1GfewRUZFaE2gaGv8ADwa6zlIp1E1s/DmFgA1l7djK2tbDhmJULFCTKxRZu1Qs1RtdmomuUg48mu0PnpUDjDVNaE6VHbQkwK0HC+GRqas3RJKyo+wv0rv2B+lbJcMvSnfZxUnloqsRjF4e/SrPCcNIG1aIWF6VIqCuWajnhsz13BtyFQHAP0rVBBTvLHSuec5YEZL+XPTH4a/Sth5Q6Vzyh0pe8Hsoxg4a/Sn/AMuudK2Qsr0p4sr0od8PYRjrPDXqys4Jq0ItL0qRUHSlecKwozj4JqiPD2rU+WOlOFodKXvndhGNvcLc1AOEvW68gdK59mHSj+IZ3YRjrfDWq28M4NlxCk96vPsw6UXwrC/1V051PJnuLQywpMOxLMrGGIqvxOPuQfWa0GPw4zVR47D6aV83jzO6s1vH5KZsZc5uauuC4xyYzn51VeRVlwi0A01qlP0F0MoPEWFZ7xOumlVg4W1bW/h5YmOdcXB9q9mGZxikZngTdmM/lrd6jbhjVtzgu1c+w9qP4hg/DxMP/LTU9vBGK17YEVH9hrvxDD+HiYfF8LJqOzhHWty3DxUTcOFd32HtIzFvMK6101oH4aKFu8NFMsxzxlIb5pVZHhwpU3cF0FVwzhYGpFXtuzFctLRAFPKVnRjQ0JXCtPg0xpqXI4lWpAlNS2alVTQewRJaqUWqSzTqWw0cNuueTVlwrhF28ZUEIDBfl7Dqe1brC8GtWDNu1meIEwzSRH92g77DXeiotiSmlsYjB+GsRcgi2QDsWIXnGx1+lWqeBrvO4g26nfetiXIUkkKyD1TqBmnYkDfKde1AY3iWVkU22N1yWNpSCPLllGZiQsACZn8xL1jXJPXN8ACeC8Ogl3duZIMAACSTHLvRa+GMCAAwMgGZdp2k6DpI26iq/jGNbM9uyxueqXt5FdPKWGykgS3IHoCQZoXCcSY3FtorXxcy3DkuPbS2CCWsoGOUgaa+4qb6jGnpSX3+46xTatssbfhnBN6RcYNB/unb+6CKCxPhEeryrytlgkN6THMz0rrcTkZVw4kN6srHRBpIKSA3019jXMHxRxbhhcEXCQSysMhOkMDMRurA71KWeHmvpZRY5eL+tAGK8PXrZ1QsOTJ6gR101oEWa2mC4jGs6DkNZWGEBYkHbmZjYUY+Ft3YLorgrIZf7ZE6ERI+FPHRNXFnNyjyjBCzRnCLP9Vas8fwB0GdPUm+m4HeouDWP6q9qlPZOxrsM4jZ9VZ7GpFarHj1Gs9jhrXy0Jf1H8zZFbFI1vWiuGp6q4VonAWvVW+DtpCyWwQbIpy2KPSxUwsCvZRmbKs2O1IYftVuLArn2ejQLKhsN2phwp6Vd+RS8jtRo6yiOFPSm/ZD0q+8jtS8mhR1mfbCdqgfBTWlbD1E2H7UyR1mZPDjXK0Rs0qYWzCWwKnVaqbeOo21iJqrTAmg1VFSC2KGW5ThfNIx6CxbFd8oUGcQ3SnC81I2EMFoVZcE4Ut1iWBKrrA0zc4nkOtC+HsC1+6AVJQSW5A9p+Nb2xhAukGDADc1OwHfSBSuVAfodXDMoBVkUBGED0oBBMjTSeoGw+bGQwbmYkMACx0A0UetTqBJ+6NTzow24Dkfe+9sDnUZdCu06fuKjvqwYFYAuNnbP9y2tsDMwXmZOnfvUpTTf38v9/PkVRa+/r9/sQcQum2l64M5AVDuIOUnNlAgwAdTVXfxSC4zrmcOSXYqPRaFsRbbWDbZo09zvVhZxTs8kZFyskMZBWIFwiPTyOUAd+1bgfVZdDAKRbtplyK4BBV2gbHQ5fnvSPqov+2S2v8Anbf39xlia5X3x/gpbwNtUPl+W1xSFNsnKUUw4C8ydZzciAAAKi4libQxQvWUm2tlVChmtHOBBLZd+Y5TpVrjrY8tVzf1QTJYelV1zADqx16VScWuq9lLAUL5dwuWG7EiIPbb5DpWOHUb7Pwn67/kjTotcAuEdpz52zydQzAtO4MbyYop8Q1pvLvpByzB09OsbdxHzrN4oGIk6a+nQyOf5VHgMTbZna/dYEbQrXHY8xr89Tyq+PHqXv8AodJ0bHCcXCsvpZ9VDKphiuglZ0JAB05yK3fDm8zVPMG65XGQEDXOJ56Ead68o4ReVW1CwQpBPKNtjoGGh9h0r03gfFFeWQgNlWIEerVspjYEDn31rf0aS+Fsy9RxaLnAr5igrMDMGDfeUgmQZ1GsiD2oPEYNAwZUyxM9xXOAcSby7crdBcZCrg6Msz6z167GBRryQwfTcwfhGvw/OtGVKeOlzRCNqW5mcW+pNUOKfWrjHHKWB5EiqHEPvXxWODUmnyetF7A7sKK4WfWKrrj0Vw+8ARW/GviXzFnwawW6kWxUFm7oKJV691GBjhZp3lCo2vxXBiRT2Al8sV3IKat0U43hTJAOFahuLT2xIqJ8UKNAsXwqG97U25je1R/ap5UdISIqelKpfPpV1HWeSYa0KtLEUNbsACp7NuulOxoxoLgUlcUzyq7kFTdDkwcURbigRpUButrS0jj1/wAL4AJYTqwzH/7a1dlRA0mDp7xFB8KP9JP/AIL/APkUdZHP9xQ1eESfqQtakkR0k9dOVC8RwudcoJDKQynYb65uo7d6ubRFD468pUhTrIkxMQdu/T40mXBFQc096e3r7ffzOhkdpFJiLX3CY9Dl/eQVAPbWflQlzDrmUtMZszRvEzA6CrPGaZmIhZAOmk8vbf8AKoGwDHcwPr/qvIyqaahFXX5bev5fuaoyXLdGdx1pnk6E+ptOShtA0c4rM42w7L6V5kSe0H5/5rdYnBKgLzEKdZ3PQjagUw63EUjQBjMdYAkdoAqUYTjLdb8/qW7q07GJxGFAypzIMnr3PzquwuGtgnPsoMjaTtv2NaPi+DNt8zFVUaAkgDfTU1kuI8UteYwt5nAgF0EoTH4tq24FOWyT9yUmgWw75hOikkjrHSd9NK1PA77riR5fJVLZoAIyk6z8PlWexHFVCZLVskkCSw2I6RuPlU/CsDfvTcF1jcQFsoI9aBdVC7SNxvtW1Rcnb2O3o9XfHvatgSssVYKNoMExptvXcfi7xtFg2XcjqAQNPpXnnD+PXbOItExenKwS4crHKICvp6TA071rcZ4quYm55TYYIIhmUkid9CQJrXPBknieluzG3UuCoxGMcIS2pJqouY49KtuKIMqhZ151DxDgDLZW8pkEwR0714MMDjLTJbmxZU1aKO/jT0onhWLOYT1rb8C8E2rmHDXdXfUGdugFXbeH7L2mw+QKVHpIGs8iK3x6V0vF8E5Z0UFh9BRK3qiw2BuQwKn+mYb4U7yq1yg0SUkybzBXARUP2Y1IMORU9xtiYDvSaoRYY9antYeni2B0ILTvLFSjCGpVwlVSYloAayKjNirYYUV02AKfcFlT9npVawtKuBZ4rbJolGinW8O3Sp1wpqLmi6RGl2iFaeVc8iOVSWrJpHIahKO1OFrtUy2j0qLEF1j0/ekDppEyfiK5XJ0jnSW5u+A+I7S2baXLgVhCeoxJmBqd50+daW5xK1bZEa4is85QWALRqQoJ10mvnTi2KueblO4kb+hTOp6GKBexllLoUx6hOmbSSeg5b0zw++5F0+D3bxF/EPA4bLmvi5m1y2YuGNRJgwNRGp51RW/4w4Qo7GxfUj/jWFJuToBIJy/H615BcwbMySAqmDlgDQ6iT3EVo/AuBW5fP9ORb1GmxJIn2H61yxY478vyCm9vBqr3jnG3WBXCIisAwU3GY6HRmgATRCeNMc/9MpaDHmAwG/MFjGh61fWeA7nST8Y9iagucPRLouSpyZiQxgknmIYzsNPrtUuy93Fcl1LDw9zL+IuOYmxM3MysTmkkcohYIgacqt8AcNds5gsg2wy7khokjUkzLQdZ0rnHvDpvwQQBpELO20hucabUVwPga4O0B96NdTJ9yvy2rpaljbaSr28DxljUlpK4+HDdi5iGOQZgFd2IBjQgHl+dZnxAEtqFUAAaRt9K0PiHxMqyhcDTRdNgOQrzu/xAX7yi5cyW2OrmTp7CTUcEJZWqul6+fvwUnkUE2+SD7WSSJ+VbfwDw57qm+HCNbcQGBIOkzod9I2O9P4B4TtYkG5YDG0jeWTlgtA9RXNvy+daRGs4JBJyTEyZL6gABfxSRtXodqMuVsZO/Jf2gfF+F2LNu5aLQ0m5mY5rsuZGQzIKkE6a69qo8JiXLplum491smWCqKgyqz55lOYIYc96D4rxp7t8Y9FyqsWHS4REaZDoNfv6wZEdpqy4b4l8vEXMO4S2xhs6W1uZ7uRRbYtcOYjuG0kxtrrpJp2zPqk9qNZdwQSzDbE5kzAKyhSQcwnUkQZrtviltLTWX1Vl0PSazvE8ZeveY6jM5OYKzTy9Uddqzh4oT6SCGB1BmQekV4/VZe7l14/GxojiyY5ackdmeqcD4gXItg6KunuKurt3IbbSTO815z4L4nFxSesfOvSvEFo/Zyy7rDD9anBZMmGe/xR3/AMr+B5OMZpeGS45SASNFca/LWq1cOlT8Ox/m2ROuXlzNMsoDqQR2rSuoWVRkvK/2TWJwselhelOKL0qXCWwx7V3jF1Uy1dRuOonfxUD6dKjPtQ7Y9etR/bhUnJFNLLBGqYJQdnE9ql+0GrR4JsJFsU42RQvnGl5p61VCtBH2ZaVQeaetKmoU8mS53p4c9aFFz/rThc7VgZsQVr1p0nrQy3O1d83tSjWEhj1q7XAIEf1ZrkQDIa2ZynLG0aHXfU1lziO1PHE7gI5gfT361THPQ7onkjqVFXf4XcKXMmHYC4r3EAZQysjAQEnRR6xMawO1UmFuKytmzFiuWSTmJ5qo6TW94bj9WXYk5dRJAkE79YqdfDNi4XY5RLIehkSNIIgmVkAamCec0eWM1XDJxVOzEXsLPl+eMuZZCqcv9NBqIg5YHOvTOGLbRQbJChPTClfTGhjXbTesjwvgudrrqytlzWD5gMhcp9MjQHeTroRGpMQY93sogtWWtkZVuXmDsisdxbgRooJnf86Rpuqf8FPZm84hxzywpuMFDbZj2/DGtVWO43bgNnDy2wDaxG0jXf231rK+IOEPbR7pXMQM7OJ1zwAwBEGAp1neq69xkvGHOHbzAAozzJYCBIP3a59xq1dfQFQTo0XHPGF7My2l6mNAdPnPPlUljjF+5at3LpItkZXtowzqNgxYnrBiPjWY4XZcG9/TLkL95GBybA5Dz32FWnEr1u5ZHlXCWU+pLi5XEDQh9iDNSm3w9x0kuCq45hbbu4tjNbhXzPrdG8jPvEsdOenQVQrYDOAFGx2Mj/VW3E3sI0M1xV8slUSGIuEFfUW5Zht76DSqG5ipACrlYCJUmW9/9RW7HGWm7M8mro2PhHx3c4cWshVu2i5fKZBkxIVvh0qt4px1sRcuXXYMxuF1mICBiVVTukDpG0mss5P3Ty17696fh09Sg7E/TnVNCW4qe9UW3FmtXGHlB1BZmcT6SxOpUcv3HQW/A8CgIcNGXqB6fYDbWjl4NbSwL5AUFygKGSGWCVPw19qk8r0B1JYMxSHXQlQv3Lg0mGmDGlYsuVzVJM9DDCEGn5L7h2KdhniJ0MbnbX6big/E+BVrfnoBmt5c3UoxI19jHwqE3oACkgDlJI7xV1w9osOcubmVAHq0gL++tYMcowZ6WZa8TMtwTF5W3r23gvEUxNgCZYLDD4RXzfhscUbURrt07VreA+I3ssGRvcVqSlhyaqtPk8SS1r3NXgcdds3WWdEYiK2OCx3nBSpB5Ms6juK83bjCXrzO4gsQd+wFbDgQtEFrYysBPYivNjJ48umPD+n2zVOpK3yac3Bb0PL61QcRF2885SFGwq6u4qLWfLmKCT1IoDA+IjcEpZYjrECvXnmhSi3+jMahJW0iuGDI3EVPbtAUZe4+CwS5ayzprQ2JwoDSDoaXHkxTlpg7+lBeqtyUMBzpwcdajW0KlW0K1pE2d8wV0XBS8odKcEHSnQrG5xSqSB0pUwp419o713z+9CJTyw7V57NaCBf7mmtiD1qEXKXmUtBOtdNOwt851ET6hodjrtXFYV1SJB6a0Hwcy6xuZkLrZIGYztIM6NpUOF4iVQ3M3oVR6SQbhf8AvJ10Gmmkn87Nr7PaJa7bi6wKj7oJkFlMbTqPesjxrCyz5s1vKptqFIYsAdiY3+PTpWPDu6Z48XPGzZ+GcKhwpxFoBs5ZnhPWVBP3xziSSTsI5VdDilp7QtNYYjy8gyhRBJbM0x/3PxrM8DkWnUsyj+mgXSY8sS1w6+qRqOfUU/E4bEHL5V0iDt6dO8sKMuqcJUnVrzue70+B58ayBviHCLcVSoJWPKdTMtbgQQxOhBHIajnoIO4XwJbtprzwbjBLMhpukgzncn7z6IoA3AjSm4ThRWWuXC7soBYyAIEaBSB8wakuY0wtpVBVACX+7LDYwN/pVcfVx2WRp+wZ9NOvhM8+DXCm5MrcKn+mCM6sGhtOcgFtaxXiTFsGW0jfdUEnKVYswk6ddq1vEuEzdN17hLElweeum47VW5rVtiQskiJbU/Omh1EE7irHXR5JLcyeE4ZdOrbb+rWirGEtqep5mrDinEVAjQAVRcas3bRVXBUugeOeViQJjrEx3rXCU8vO1kZSw4NuWDvYzuzDYsY9uX0o8YHJEk5SwYba6c/aTQWAxeWrw4sFZ0qmWc4uq2BjhB7jzizkCZjlzZgpJy5ojNl6xpPSjLOMBGVzpyA0APXvVJicd7fIUA+KJO9S7LkjRFxiacYwZoG1aLC8Ut2kzXDCArr3zCPf/VYrg2ZzMHKCAz5WZUDaS0bf6racW8MYfGWhZw+IRMRYdlh2/wCb1FSSJ9I9IOgMBveovpNc0uEJn6+GODj5f3Z5/wAfxNprzmyISdN9eranmda7w3EGheMcJvYVzbvJBBIBBlSVMEBhzHTfUdadgzABrdOC0VyedjnfBpsGTOmtbzgvECgIkAkRtWb8FJbZszEZhqAedavxjhAbYxlvQIALoHIcnryM/TSyK4vdG2OWN0zTeGcWLikE+obzsRUvGOKWcKozAifugDQnpXn3h/xEFIcTlJgmPrWsxXEcNilNm8y8mBnY8jVunzacWmW0ltuTyY3rtcAj8RbGW2VUK/hfp3BqbD27ygLmLRzNPQNb9AEAdKlW41aceJXqe79RZS8Lg6i3elEIj70Lee4RCsAalsswEFpNalzRFhS2261KbZ60KJ/FXSx61RCMI8s9aVQ5+9KiA8Lz9z8q6oJ/FRUCpkIrzHI2JAq+xp2UnkaNUinwDQcw6QDL2NOCGYg/Oi8g5V0AClcw6SPBYYNcCuSindtTA+FW3iG5euELYQXBBJuosjX0iZEDc/EVWlwP/KP4XxU23DCSIgiYlTuO3X3qEt5J1wQ6jpu7Tvjx4K/wqhtNca47a5QyltJnmJ5Sdf8Ada/DXc33WjbcTVlgOBYa9aNyy/rYyWIA9X4XSIHwA7UbxTCrbtlfIEsMukkz1B3rN1OOeRuctgdL10+klpkrT8ehVLiIgEggbxvVRxDiJWY05UfwHF+UWsuqw5gljmMawBp6d95qTF8B9JzAtmKlTPI7LA6yNTWRQjF290eov+a6aLepMwuO4mTVU63X/wCMEnqdv90f4nwWTEOqI+VGKkMOYOu+1VPF/EV4korG2unotmIjaWEGfavcwY7S0JfXx9DF1X/LyzKsapD7PB4R7t65qB93Izf3QRIEAxrEbdK9Z8Q+E7F7DWnuWw15EQLLFMyMoOViAdOe2k968l8H8X8m6Ld0K1m43qzgnKxEZweXKewr3B3N/RXAGUlRpoUyiCf+0z8Kn1nci7W8v+v15+/c8HPkkpHlOM8HJdQ3cNuCRkLAq/IhIAKsCDoRBrGJcZSVYEEaEHQg9wa9g8V8cXD3FtLbWcwJI3KaB2YjQEk8+tYj+JNgNiljfybZYxuSGII6+kr8qp0fUZZS0ZFt4fyL9P1E1zwZoW2uNCKSe1EYngmItjO9llWYLaEAnacpOX40zDW2UR6vdI195rS2uKlAr2muFyMrq+Qoy5YgoBlIOsgj862SyuLpcFpdRNvYO/hzf8trqi75ee0fUdgUZXAI5zlI+NVN7iNw4o3IVLisZNsAKWDH1aaTtqN6mv30tjzBZK3HENbgi1E+oKc2ZTGVh+EjnWedbn3VJAygGNJ01n98qRXJPcWONydmg454htXbd1Ly52ckgLHouCQjBuQA0I6TpWMznrRo4a5qO5w+4Nwavj0xVXfktDFo4LLgHEshgmOhr1Twzx7MPLcB0YZWB2KkRXihskcquvD6YrMPKJgbk7RWfNh31wdMvF2qaNn4g4lZsPdw34D6T2IDAfI1VcO41ZLAHckDali/C1287XHcZm1J+EfpV3wPwjasw7EM+8nYe1RlgxzXmy6nJGya8jBZP9oHyFOQoP7qD+yiJJmu/ZhyMxWnHDTFL0Iydlipt9dalD2+tV64detPW0nOrpE2WSXLdP8AMSq1QlTeWOQNOkIw4Xk7UqFFta7RpAPGku85X6fGpUu9YFD+cRqB9K4rt059a8xo1oN84zyiKkW6dpHXY70IL7QdB9a757HT9TU2MiZsSAYzSegFMt4nMToRHMim25GwAPtTy7Hn9KWxhzk9CdelS2HYHRf901S3WpVnaflUpSCi24bxO5ZbMuk7rEhh3E16Td4gt/Dq1qTm9IGzBttekQZryTyWZwcxga/oP1rS+GeKm0fKYwjOGLyBl0E78tK6OVJOPqjJ1mFzjqit0WGHwil3OTNkOp2BO/pPwHzqbiOJzAgGVtwp1gaTPttV8UsuiLbysjuDo3uxJIMnasN4w4rbl8KLZdPMl8rBBIIOUaGdd/as+TpHSVnkwwzySqjJeI/EBvO7IQw2zzm0Aie4G0k66VmrdsIS7QRuZE5u0davuJ2Ve23kg2ojRoYx0BB12G461XXrdoqinzCVGrMBrtoADPLrXpYXFRpfX1NMcMlaohxGBDBWs5s2YxzmIaR7bfCrNbl2Ld607BiuZipKwVJU6dNB2qS1jrds20UKUKn1kkFCCxAIiZkD3mrjw+bVy1fCj7uRuc5TmBUzzlQY70mXLNRtrj9uNxJwaVlb4ctk4tWuuT5noOb1B82gVidAJ1+FX/iIWbeKK3sOHDKoJiCE1AKr1gb+1VuKwBCZyojYDqI0McufyoXF2lYk+Y0iACZ+7voSdIgCO9ZvhyT134rb/wAGx4tchnFOAHDsGAzW3UMlwTDIdj2PUcjRvhnggu3Dcu/8aIXaInKonc860PAMUBhThXGa0ZyNGY22JnMAdxOv0oPCYMrbuW2gFyAWX7rICdBzAPpkdqvrepJ8DvDPVp/Uz3GbgvXjcUBVgKoO5Vdie5qK1gp5j9K1djg6DcDbvR1vh1vT0j8v3zrQpG+MFFUjJ2sFoJIPLSpGwMz/AIrW2+Hp+ED4CpvsVsch9KNjGQscMTdtT7VZW7YAEbDoNK0Hk2x+GnGyu4j50bOKa0Z7fAUSvxqwXy/Y1PbKDQfnTxYGytTN3j5VOiRrqPnR4uJGsR00py4lDtv3/wAiqJiMGW0Tr13p/knTTT8qMt30HMd+lPXErrr8qomIwRLXbTtU6IamGLWnpiVPOO0inTYjI8h7UqnGJX8X5Uqa2KeJnsP31p9thGtCfbVjYVxMWO+navKcWa0w5T21/wAinggGNdqCTHAaxr8dfrUn8x55fp+tI4SHTCy4/wDY2pytJ/3P5UGOIHpt2+OkV1eIkjUDXt+ZpHCQbC7c7wI99fpTr94qpIEk6DpJ2oJeIRy19ql/mHQH5Ujxu+DrLOzd0g9N5G9TrdOmk/GqVeIEda79vOg12n8h/n51N4Gw6i6t3yrArIK+oEGII13mosU0k85O/UnearP5lpEH/VR3eJ9j+tcsMztSJbySNAPh+lA3VPQRzn/2m3ceT+xQz4szz7bVqhjkTchPbPStH4Qx0E2LjBVLeYCxCKCBrLHrA096zDYluU/vWpbJPOny49cHGRGcFNUaLxHjsyhbTKxfMGyerKCZkMDHaO3eqfB4Nhq5zEddR9ansXAN1+NEDEf9fzqEf6cdMUPjwqKC1xTRGnyqRcU86k+3/lD27g/Cf2eVEK2u2n73gU8ZFtLJkxb9TU4xbjmahS5p939alW6Oa8tdY1qiZ1Ei4q5zJjbf9Z1qTzm5n6/nUIcnUL7nt8qLRDvkYe/IdqZM6iPzG5n31p5Lb5vzNS2kP4WgfvnRCo3NT+pPsDVExWgMFttfkTXVLb6ijxYPIbfMfE1J9mY6BY03Ovyp1IVoCXN0NSLm/fwovyCRBQH4f661JZwzDfrzn/FUUhGgNZjrz+VTJm3n9/Kjlw7dKcMKRzjtVFIVoFW20b79/wDNEJYad/lPypyYfudNekdqmFrqY+s1RSEaBm0/u+q/rSoryW/FSo2CjxteHd6lHDh+KlSrx3JmxRQ4cLX8VPXhq/iNKlU3OXqOood/LV2mnvgFnRvpXKVI5y9Q0hwwAjf6Vz+XrO/7NKlSa5eoaQ7+Xr+I137CvWlSoa5eoNKODh460w8NHX86VKu7kvUGlEZ4avWnDhKzuaVKm7s/U7Sguzwe33o2xwm10NdpVHXJ8sakH2eE2o2NWFvg9of2fD3/AGaVKrwimBsevDbXTn++VFLg7e2UfWlSq0YoVtjhgrQ18tfrUqYJPwJ7wDXKVVSQtsl8pBsvYiBv/wCU5bYjbl216VylTJAbHkgAadx9P80257c+valSqiAIPv6fj8eVcW5v6Rr00ga/WlSpgDS7REafX5zSW63P3+cxXaVOgDhdM+/al5u5+HT61ylTpitHRd1n9/7pLd103351ylVEIx3nt2/fwrlKlTiH/9k=",
          confidence: "85%"
        }, {
          url: "https://www.simplyhappyfoodie.com/wp-content/uploads/2018/04/instant-pot-hamburgers-3.jpg",
          confidence: "75%"
        }, {
          url: "https://www.simplyhappyfoodie.com/wp-content/uploads/2018/04/instant-pot-hamburgers-3.jpg",
          confidence: "75%"
        }, {
          url: "https://www.simplyhappyfoodie.com/wp-content/uploads/2018/04/instant-pot-hamburgers-3.jpg",
          confidence: "75%"
        }, {
          url: "https://www.simplyhappyfoodie.com/wp-content/uploads/2018/04/instant-pot-hamburgers-3.jpg",
          confidence: "75%"
        }
      ]
    }, {
      name: "Milkshakes",
      images: [
        {
          url: "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco/k%2FPhoto%2FRecipes%2F2020-07-how-to-make-a-milkshake-at-home%2F2020-06-08_AT-K19388",
          confidence: "83%"
        }, {
          url: "https://www.thereciperebel.com/wp-content/uploads/2020/06/how-to-make-a-milkshake-www.thereciperebel.com-600-11-of-44.jpg",
          confidence: "70%"
        }
      ]
    }
  ]

  function countFood(){
    return data.reduce((item_total, item) => {
      return item_total + item.images.length
    }, 0)
  }
</script>

<div class="h-screen bg-gray-100 overflow-hidden">
  <div class="px-10 pt-10 ">
    <!-- title -->
    <div class="flex justify-between items-center">
      <p class="text font-bold text-4xl text-gray-700">Food</p>
      <div class="w-10 h-10 bg-gray-700 rounded-full flex justify-center items-center text-white font-medium">
        {countFood()}
      </div>
    </div>
    <!-- array of categories -->
    {#each data as item}
      <!-- category name -->
      <p class="text-md font-semibold mt-4 mb-2">{item.name}</p>
      <div class="overflow-x-scroll whitespace-no-wrap w-full pl-4 ">
        <!-- array of classified images -->
        {#each item.images as image}
          <!-- content here -->
          <!-- <div class="grid grid-rows-2 gap-1 mx-2"> -->
            <div class="mx-2 py-1 w-50 inline-block">
              <p class="pb-1 text-center font-semibold">{image.confidence}</p>
              <img class="h-20 w-20 rounded-md object-cover" src={image.url} alt={item.name}>
            </div>
          <!-- </div> -->
        {/each}
      </div>
    {/each}
    <!-- text field -->
    <div class="bg-white py-10 px-5 rounded-2xl mt-10 text-center">
      <p>Hit "Snap" below to categorise more food items!</p>
    </div>
  </div>

  <div class="absolute bottom-0 w-full flex justify-center mb-10" style="font-family: 'Roboto'">
    <ButtonPrimary >
      Snap
    </ButtonPrimary>
  </div>
</div>
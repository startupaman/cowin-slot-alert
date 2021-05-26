# Co-WIN Slot Alerts

This script will check for the vaccination slots in Co-WIN portal every 3 seconds, faster than any other possible alternative. The slots will appear in your terminal once they are available. Please book your slots from https://selfregistration.cowin.gov.in/ as soon as it's available.

## Installation

Install MeteorJS (OSX / Linux)
```sh
curl https://install.meteor.com/ | sh
```
Clone the repository
```sh
git clone https://github.com/startupaman/cowin-slot-alert.git
```
Execute the following commands
```sh
cd cowin-slot-alert
npm install
meteor run
```

## Customization
1. Open `server/main.js` file.
2. Change districtId based on your district, defaulted to Hyderabad. The complete list of districts with their IDs will be added soon.
3. Change age based on your age group, defaulted to 18 - 45.

## District Codes

| District ID | District Name                     |
|-------------|-----------------------------------|
| 582         | Adilabad                          |
| 320         | Agar                              |
| 796         | Agatti Island                     |
| 622         | Agra                              |
| 154         | Ahmedabad                         |
| 770         | Ahmedabad Corporation             |
| 391         | Ahmednagar                        |
| 425         | Aizawl East                       |
| 426         | Aizawl West                       |
| 507         | Ajmer                             |
| 364         | Akola                             |
| 301         | Alappuzha                         |
| 623         | Aligarh                           |
| 710         | Alipurduar District               |
| 357         | Alirajpur                         |
| 704         | Almora                            |
| 512         | Alwar                             |
| 193         | Ambala                            |
| 625         | Ambedkar Nagar                    |
| 626         | Amethi                            |
| 366         | Amravati                          |
| 174         | Amreli                            |
| 485         | Amritsar                          |
| 627         | Amroha                            |
| 179         | Anand                             |
| 9           | Anantapur                         |
| 224         | Anantnag                          |
| 445         | Angul                             |
| 22          | Anjaw                             |
| 334         | Anuppur                           |
| 779         | Aranthangi                        |
| 74          | Araria                            |
| 158         | Aravalli                          |
| 555         | Ariyalur                          |
| 78          | Arwal                             |
| 354         | Ashoknagar                        |
| 578         | Attur                             |
| 628         | Auraiya                           |
| 77          | Aurangabad                        |
| 397         | Aurangabad                        |
| 646         | Ayodhya                           |
| 629         | Azamgarh                          |
| 294         | BBMP                              |
| 630         | Badaun                            |
| 270         | Bagalkot                          |
| 707         | Bageshwar                         |
| 631         | Baghpat                           |
| 632         | Bahraich                          |
| 46          | Baksa                             |
| 338         | Balaghat                          |
| 448         | Balangir                          |
| 633         | Balarampur                        |
| 447         | Balasore                          |
| 634         | Ballia                            |
| 110         | Balod                             |
| 111         | Baloda bazar                      |
| 112         | Balrampur                         |
| 159         | Banaskantha                       |
| 635         | Banda                             |
| 223         | Bandipore                         |
| 276         | Bangalore Rural                   |
| 265         | Bangalore Urban                   |
| 83          | Banka                             |
| 711         | Bankura                           |
| 519         | Banswara                          |
| 636         | Barabanki                         |
| 225         | Baramulla                         |
| 516         | Baran                             |
| 637         | Bareilly                          |
| 472         | Bargarh                           |
| 528         | Barmer                            |
| 483         | Barnala                           |
| 47          | Barpeta                           |
| 343         | Barwani                           |
| 712         | Basirhat HD (North 24 Parganas)   |
| 113         | Bastar                            |
| 638         | Basti                             |
| 493         | Bathinda                          |
| 384         | Beed                              |
| 98          | Begusarai                         |
| 264         | Belgaum                           |
| 274         | Bellary                           |
| 114         | Bemetara                          |
| 362         | Betul                             |
| 687         | Bhadohi                           |
| 583         | Bhadradri Kothagudem              |
| 454         | Bhadrak                           |
| 82          | Bhagalpur                         |
| 370         | Bhandara                          |
| 508         | Bharatpur                         |
| 180         | Bharuch                           |
| 175         | Bhavnagar                         |
| 771         | Bhavnagar Corporation             |
| 523         | Bhilwara                          |
| 351         | Bhind                             |
| 200         | Bhiwani                           |
| 99          | Bhojpur                           |
| 312         | Bhopal                            |
| 272         | Bidar                             |
| 115         | Bijapur                           |
| 639         | Bijnour                           |
| 501         | Bikaner                           |
| 116         | Bilaspur                          |
| 219         | Bilaspur                          |
| 713         | Birbhum                           |
| 398         | Bishnupur                         |
| 714         | Bishnupur HD (Bankura)            |
| 765         | Biswanath                         |
| 242         | Bokaro                            |
| 57          | Bongaigaon                        |
| 176         | Botad                             |
| 468         | Boudh                             |
| 229         | Budgam                            |
| 640         | Bulandshahr                       |
| 367         | Buldhana                          |
| 514         | Bundi                             |
| 342         | Burhanpur                         |
| 100         | Buxar                             |
| 783         | COOCHBEHAR                        |
| 66          | Cachar                            |
| 141         | Central Delhi                     |
| 271         | Chamarajanagar                    |
| 214         | Chamba                            |
| 699         | Chamoli                           |
| 708         | Champawat                         |
| 429         | Champhai                          |
| 641         | Chandauli                         |
| 399         | Chandel                           |
| 108         | Chandigarh                        |
| 380         | Chandrapur                        |
| 20          | Changlang                         |
| 766         | Charaideo                         |
| 201         | Charkhi Dadri                     |
| 245         | Chatra                            |
| 565         | Chengalpet                        |
| 571         | Chennai                           |
| 778         | Cheyyar                           |
| 328         | Chhatarpur                        |
| 337         | Chhindwara                        |
| 181         | Chhotaudepur                      |
| 273         | Chikamagalur                      |
| 291         | Chikkaballapur                    |
| 58          | Chirang                           |
| 268         | Chitradurga                       |
| 642         | Chitrakoot                        |
| 10          | Chittoor                          |
| 521         | Chittorgarh                       |
| 400         | Churachandpur                     |
| 530         | Churu                             |
| 539         | Coimbatore                        |
| 715         | Cooch Behar                       |
| 547         | Cuddalore                         |
| 457         | Cuttack                           |
| 137         | Dadra and Nagar Haveli            |
| 182         | Dahod                             |
| 716         | Dakshin Dinajpur                  |
| 269         | Dakshina Kannada                  |
| 138         | Daman                             |
| 327         | Damoh                             |
| 163         | Dang                              |
| 117         | Dantewada                         |
| 94          | Darbhanga                         |
| 717         | Darjeeling                        |
| 48          | Darrang                           |
| 350         | Datia                             |
| 511         | Dausa                             |
| 275         | Davanagere                        |
| 697         | Dehradun                          |
| 473         | Deogarh                           |
| 253         | Deoghar                           |
| 643         | Deoria                            |
| 168         | Devbhumi Dwaraka                  |
| 324         | Dewas                             |
| 614         | Dhalai                            |
| 118         | Dhamtari                          |
| 257         | Dhanbad                           |
| 341         | Dhar                              |
| 566         | Dharmapuri                        |
| 278         | Dharwad                           |
| 62          | Dhemaji                           |
| 458         | Dhenkanal                         |
| 524         | Dholpur                           |
| 59          | Dhubri                            |
| 388         | Dhule                             |
| 718         | Diamond Harbor HD (S 24 Parganas) |
| 25          | Dibang Valley                     |
| 43          | Dibrugarh                         |
| 67          | Dima Hasao                        |
| 434         | Dimapur                           |
| 556         | Dindigul                          |
| 336         | Dindori                           |
| 139         | Diu                               |
| 232         | Doda                              |
| 258         | Dumka                             |
| 520         | Dungarpur                         |
| 119         | Durg                              |
| 719         | East Bardhaman                    |
| 105         | East Champaran                    |
| 145         | East Delhi                        |
| 424         | East Garo Hills                   |
| 11          | East Godavari                     |
| 418         | East Jaintia Hills                |
| 23          | East Kameng                       |
| 414         | East Khasi Hills                  |
| 42          | East Siang                        |
| 535         | East Sikkim                       |
| 247         | East Singhbhum                    |
| 307         | Ernakulam                         |
| 563         | Erode                             |
| 644         | Etah                              |
| 645         | Etawah                            |
| 199         | Faridabad                         |
| 499         | Faridkot                          |
| 647         | Farrukhabad                       |
| 196         | Fatehabad                         |
| 484         | Fatehgarh Sahib                   |
| 648         | Fatehpur                          |
| 487         | Fazilka                           |
| 480         | Ferozpur                          |
| 649         | Firozabad                         |
| 280         | Gadag                             |
| 379         | Gadchiroli                        |
| 467         | Gajapati                          |
| 228         | Ganderbal                         |
| 153         | Gandhinagar                       |
| 772         | Gandhinagar Corporation           |
| 449         | Ganjam                            |
| 243         | Garhwa                            |
| 120         | Gariaband                         |
| 136         | Gaurela Pendra Marwahi            |
| 650         | Gautam Buddha Nagar               |
| 79          | Gaya                              |
| 651         | Ghaziabad                         |
| 652         | Ghazipur                          |
| 177         | Gir Somnath                       |
| 256         | Giridih                           |
| 60          | Goalpara                          |
| 262         | Godda                             |
| 53          | Golaghat                          |
| 615         | Gomati                            |
| 653         | Gonda                             |
| 378         | Gondia                            |
| 104         | Gopalganj                         |
| 654         | Gorakhpur                         |
| 267         | Gulbarga                          |
| 251         | Gumla                             |
| 348         | Guna                              |
| 5           | Guntur                            |
| 489         | Gurdaspur                         |
| 188         | Gurgaon                           |
| 313         | Gwalior                           |
| 68          | Hailakandi                        |
| 217         | Hamirpur                          |
| 655         | Hamirpur                          |
| 517         | Hanumangarh                       |
| 656         | Hapur                             |
| 361         | Harda                             |
| 657         | Hardoi                            |
| 702         | Haridwar                          |
| 289         | Hassan                            |
| 658         | Hathras                           |
| 279         | Haveri                            |
| 255         | Hazaribagh                        |
| 386         | Hingoli                           |
| 191         | Hisar                             |
| 764         | Hojai                             |
| 720         | Hoogly                            |
| 360         | Hoshangabad                       |
| 481         | Hoshiarpur                        |
| 721         | Howrah                            |
| 581         | Hyderabad                         |
| 306         | Idukki                            |
| 401         | Imphal East                       |
| 402         | Imphal West                       |
| 314         | Indore                            |
| 17          | Itanagar Capital Complex          |
| 315         | Jabalpur                          |
| 459         | Jagatsinghpur                     |
| 584         | Jagtial                           |
| 505         | Jaipur I                          |
| 506         | Jaipur II                         |
| 527         | Jaisalmer                         |
| 460         | Jajpur                            |
| 492         | Jalandhar                         |
| 659         | Jalaun                            |
| 390         | Jalgaon                           |
| 396         | Jalna                             |
| 533         | Jalore                            |
| 722         | Jalpaiguri                        |
| 230         | Jammu                             |
| 169         | Jamnagar                          |
| 773         | Jamnagar Corporation              |
| 259         | Jamtara                           |
| 107         | Jamui                             |
| 585         | Jangaon                           |
| 121         | Janjgir-Champa                    |
| 122         | Jashpur                           |
| 660         | Jaunpur                           |
| 586         | Jayashankar Bhupalpally           |
| 91          | Jehanabad                         |
| 340         | Jhabua                            |
| 189         | Jhajjar                           |
| 515         | Jhalawar                          |
| 661         | Jhansi                            |
| 723         | Jhargram                          |
| 474         | Jharsuguda                        |
| 510         | Jhunjhunu                         |
| 204         | Jind                              |
| 410         | Jiribam                           |
| 502         | Jodhpur                           |
| 587         | Jogulamba Gadwal                  |
| 54          | Jorhat                            |
| 178         | Junagadh                          |
| 774         | Junagadh Corporation              |
| 80          | Kaimur                            |
| 190         | Kaithal                           |
| 413         | Kakching                          |
| 464         | Kalahandi                         |
| 724         | Kalimpong                         |
| 552         | Kallakurichi                      |
| 588         | Kamareddy                         |
| 409         | Kamjong                           |
| 24          | Kamle                             |
| 49          | Kamrup Metropolitan               |
| 50          | Kamrup Rural                      |
| 557         | Kanchipuram                       |
| 450         | Kandhamal                         |
| 408         | Kangpokpi                         |
| 213         | Kangra                            |
| 123         | Kanker                            |
| 662         | Kannauj                           |
| 297         | Kannur                            |
| 663         | Kanpur Dehat                      |
| 664         | Kanpur Nagar                      |
| 544         | Kanyakumari                       |
| 479         | Kapurthala                        |
| 476         | Karaikal                          |
| 525         | Karauli                           |
| 51          | Karbi-Anglong                     |
| 309         | Kargil                            |
| 69          | Karimganj                         |
| 589         | Karimnagar                        |
| 203         | Karnal                            |
| 559         | Karur                             |
| 295         | Kasaragod                         |
| 665         | Kasganj                           |
| 234         | Kathua                            |
| 75          | Katihar                           |
| 353         | Katni                             |
| 666         | Kaushambi                         |
| 135         | Kawardha                          |
| 461         | Kendrapara                        |
| 455         | Kendujhar                         |
| 101         | Khagaria                          |
| 590         | Khammam                           |
| 339         | Khandwa                           |
| 344         | Khargone                          |
| 156         | Kheda                             |
| 616         | Khowai                            |
| 252         | Khunti                            |
| 446         | Khurda                            |
| 216         | Kinnaur                           |
| 444         | Kiphire                           |
| 76          | Kishanganj                        |
| 231         | Kishtwar                          |
| 283         | Kodagu                            |
| 241         | Koderma                           |
| 441         | Kohima                            |
| 61          | Kokrajhar                         |
| 277         | Kolar                             |
| 428         | Kolasib                           |
| 371         | Kolhapur                          |
| 725         | Kolkata                           |
| 298         | Kollam                            |
| 124         | Kondagaon                         |
| 282         | Koppal                            |
| 451         | Koraput                           |
| 125         | Korba                             |
| 126         | Koriya                            |
| 503         | Kota                              |
| 304         | Kottayam                          |
| 780         | Kovilpatti                        |
| 305         | Kozhikode                         |
| 27          | Kra Daadi                         |
| 4           | Krishna                           |
| 562         | Krishnagiri                       |
| 221         | Kulgam                            |
| 211         | Kullu                             |
| 591         | Kumuram Bheem                     |
| 226         | Kupwara                           |
| 7           | Kurnool                           |
| 186         | Kurukshetra                       |
| 21          | Kurung Kumey                      |
| 667         | Kushinagar                        |
| 170         | Kutch                             |
| 210         | Lahaul Spiti                      |
| 63          | Lakhimpur                         |
| 668         | Lakhimpur Kheri                   |
| 84          | Lakhisarai                        |
| 311         | Lakshadweep                       |
| 669         | Lalitpur                          |
| 244         | Latehar                           |
| 383         | Latur                             |
| 432         | Lawngtlai                         |
| 310         | Leh                               |
| 33          | Lepa Rada                         |
| 250         | Lohardaga                         |
| 29          | Lohit                             |
| 40          | Longding                          |
| 438         | Longleng                          |
| 31          | Lower Dibang Valley               |
| 18          | Lower Siang                       |
| 32          | Lower Subansiri                   |
| 670         | Lucknow                           |
| 488         | Ludhiana                          |
| 431         | Lunglei                           |
| 70          | Madhepura                         |
| 95          | Madhubani                         |
| 540         | Madurai                           |
| 592         | Mahabubabad                       |
| 593         | Mahabubnagar                      |
| 671         | Maharajganj                       |
| 127         | Mahasamund                        |
| 477         | Mahe                              |
| 206         | Mahendragarh                      |
| 183         | Mahisagar                         |
| 672         | Mahoba                            |
| 673         | Mainpuri                          |
| 767         | Majuli                            |
| 302         | Malappuram                        |
| 726         | Malda                             |
| 469         | Malkangiri                        |
| 427         | Mamit                             |
| 594         | Mancherial                        |
| 215         | Mandi                             |
| 335         | Mandla                            |
| 319         | Mandsaur                          |
| 290         | Mandya                            |
| 482         | Mansa                             |
| 674         | Mathura                           |
| 675         | Mau                               |
| 456         | Mayurbhanj                        |
| 595         | Medak                             |
| 596         | Medchal                           |
| 676         | Meerut                            |
| 160         | Mehsana                           |
| 677         | Mirzapur                          |
| 491         | Moga                              |
| 437         | Mokokchung                        |
| 439         | Mon                               |
| 678         | Moradabad                         |
| 171         | Morbi                             |
| 347         | Morena                            |
| 55          | Morigaon                          |
| 612         | Mulugu                            |
| 395         | Mumbai                            |
| 128         | Mungeli                           |
| 85          | Munger                            |
| 727         | Murshidabad                       |
| 679         | Muzaffarnagar                     |
| 86          | Muzaffarpur                       |
| 266         | Mysore                            |
| 470         | Nabarangpur                       |
| 728         | Nadia                             |
| 56          | Nagaon                            |
| 576         | Nagapattinam                      |
| 597         | Nagarkurnool                      |
| 532         | Nagaur                            |
| 365         | Nagpur                            |
| 709         | Nainital                          |
| 90          | Nalanda                           |
| 52          | Nalbari                           |
| 598         | Nalgonda                          |
| 558         | Namakkal                          |
| 36          | Namsai                            |
| 382         | Nanded                            |
| 729         | Nandigram HD (East Medinipore)    |
| 387         | Nandurbar                         |
| 613         | Narayanpet                        |
| 129         | Narayanpur                        |
| 184         | Narmada                           |
| 352         | Narsinghpur                       |
| 389         | Nashik                            |
| 164         | Navsari                           |
| 92          | Nawada                            |
| 462         | Nayagarh                          |
| 323         | Neemuch                           |
| 140         | New Delhi                         |
| 3           | Nicobar                           |
| 577         | Nilgiris                          |
| 599         | Nirmal                            |
| 600         | Nizamabad                         |
| 412         | Noney                             |
| 730         | North 24 Parganas                 |
| 146         | North Delhi                       |
| 147         | North East Delhi                  |
| 423         | North Garo Hills                  |
| 151         | North Goa                         |
| 537         | North Sikkim                      |
| 617         | North Tripura                     |
| 143         | North West Delhi                  |
| 1           | North and Middle Andaman          |
| 465         | Nuapada                           |
| 205         | Nuh                               |
| 381         | Osmanabad                         |
| 19          | Pakke Kessang                     |
| 261         | Pakur                             |
| 308         | Palakkad                          |
| 246         | Palamu                            |
| 564         | Palani                            |
| 394         | Palghar                           |
| 529         | Pali                              |
| 207         | Palwal                            |
| 187         | Panchkula                         |
| 185         | Panchmahal                        |
| 195         | Panipat                           |
| 326         | Panna                             |
| 39          | Papum Pare                        |
| 573         | Paramakudi                        |
| 385         | Parbhani                          |
| 731         | Paschim Medinipore                |
| 161         | Patan                             |
| 300         | Pathanamthitta                    |
| 486         | Pathankot                         |
| 494         | Patiala                           |
| 97          | Patna                             |
| 698         | Pauri Garhwal                     |
| 601         | Peddapalli                        |
| 570         | Perambalur                        |
| 435         | Peren                             |
| 443         | Phek                              |
| 411         | Pherzawl                          |
| 680         | Pilibhit                          |
| 706         | Pithoragarh                       |
| 575         | Poonamallee                       |
| 238         | Poonch                            |
| 172         | Porbandar                         |
| 12          | Prakasam                          |
| 522         | Pratapgarh                        |
| 682         | Pratapgarh                        |
| 624         | Prayagraj                         |
| 475         | Puducherry                        |
| 546         | Pudukkottai                       |
| 227         | Pulwama                           |
| 363         | Pune                              |
| 732         | Purba Medinipore                  |
| 463         | Puri                              |
| 73          | Purnia                            |
| 733         | Purulia                           |
| 681         | Raebareli                         |
| 284         | Raichur                           |
| 393         | Raigad                            |
| 130         | Raigarh                           |
| 109         | Raipur                            |
| 359         | Raisen                            |
| 602         | Rajanna Sircilla                  |
| 358         | Rajgarh                           |
| 173         | Rajkot                            |
| 775         | Rajkot Corporation                |
| 131         | Rajnandgaon                       |
| 237         | Rajouri                           |
| 518         | Rajsamand                         |
| 292         | Ramanagara                        |
| 567         | Ramanathapuram                    |
| 235         | Ramban                            |
| 254         | Ramgarh                           |
| 683         | Rampur                            |
| 734         | Rampurhat HD (Birbhum)            |
| 240         | Ranchi                            |
| 603         | Rangareddy                        |
| 781         | Ranipet                           |
| 322         | Ratlam                            |
| 372         | Ratnagiri                         |
| 471         | Rayagada                          |
| 239         | Reasi                             |
| 316         | Rewa                              |
| 202         | Rewari                            |
| 417         | Ri-Bhoi                           |
| 192         | Rohtak                            |
| 81          | Rohtas                            |
| 700         | Rudraprayag                       |
| 497         | Rup Nagar                         |
| 496         | SAS Nagar                         |
| 500         | SBS Nagar                         |
| 162         | Sabarkantha                       |
| 317         | Sagar                             |
| 684         | Saharanpur                        |
| 71          | Saharsa                           |
| 260         | Sahebganj                         |
| 545         | Salem                             |
| 96          | Samastipur                        |
| 236         | Samba                             |
| 452         | Sambalpur                         |
| 685         | Sambhal                           |
| 604         | Sangareddy                        |
| 373         | Sangli                            |
| 498         | Sangrur                           |
| 686         | Sant Kabir Nagar                  |
| 102         | Saran                             |
| 376         | Satara                            |
| 333         | Satna                             |
| 534         | Sawai Madhopur                    |
| 356         | Sehore                            |
| 403         | Senapati                          |
| 349         | Seoni                             |
| 618         | Sepahijala                        |
| 248         | Seraikela Kharsawan               |
| 430         | Serchhip                          |
| 148         | Shahdara                          |
| 332         | Shahdol                           |
| 688         | Shahjahanpur                      |
| 321         | Shajapur                          |
| 689         | Shamli                            |
| 93          | Sheikhpura                        |
| 87          | Sheohar                           |
| 346         | Sheopur                           |
| 35          | Shi Yomi                          |
| 208         | Shimla                            |
| 287         | Shimoga                           |
| 345         | Shivpuri                          |
| 222         | Shopian                           |
| 690         | Shravasti                         |
| 433         | Siaha                             |
| 37          | Siang                             |
| 691         | Siddharthnagar                    |
| 605         | Siddipet                          |
| 331         | Sidhi                             |
| 513         | Sikar                             |
| 249         | Simdega                           |
| 374         | Sindhudurg                        |
| 330         | Singrauli                         |
| 212         | Sirmaur                           |
| 531         | Sirohi                            |
| 194         | Sirsa                             |
| 88          | Sitamarhi                         |
| 692         | Sitapur                           |
| 561         | Sivaganga                         |
| 580         | Sivakasi                          |
| 44          | Sivasagar                         |
| 103         | Siwan                             |
| 209         | Solan                             |
| 375         | Solapur                           |
| 693         | Sonbhadra                         |
| 198         | Sonipat                           |
| 64          | Sonitpur                          |
| 735         | South 24 Parganas                 |
| 2           | South Andaman                     |
| 149         | South Delhi                       |
| 144         | South East Delhi                  |
| 421         | South Garo Hills                  |
| 152         | South Goa                         |
| 768         | South Salmara Mankachar           |
| 538         | South Sikkim                      |
| 619         | South Tripura                     |
| 150         | South West Delhi                  |
| 422         | South West Garo Hills             |
| 415         | South West Khasi Hills            |
| 509         | Sri Ganganagar                    |
| 490         | Sri Muktsar Sahib                 |
| 13          | Sri Potti Sriramulu Nellore       |
| 14          | Srikakulam                        |
| 220         | Srinagar                          |
| 466         | Subarnapur                        |
| 132         | Sukma                             |
| 694         | Sultanpur                         |
| 453         | Sundargarh                        |
| 72          | Supaul                            |
| 133         | Surajpur                          |
| 165         | Surat                             |
| 776         | Surat Corporation                 |
| 157         | Surendranagar                     |
| 134         | Surguja                           |
| 606         | Suryapet                          |
| 404         | Tamenglong                        |
| 166         | Tapi                              |
| 495         | Tarn Taran                        |
| 30          | Tawang                            |
| 701         | Tehri Garhwal                     |
| 407         | Tengnoupal                        |
| 551         | Tenkasi                           |
| 392         | Thane                             |
| 541         | Thanjavur                         |
| 569         | Theni                             |
| 296         | Thiruvananthapuram                |
| 554         | Thoothukudi (Tuticorin)           |
| 405         | Thoubal                           |
| 303         | Thrissur                          |
| 325         | Tikamgarh                         |
| 45          | Tinsukia                          |
| 26          | Tirap                             |
| 560         | Tiruchirappalli                   |
| 548         | Tirunelveli                       |
| 550         | Tirupattur                        |
| 568         | Tiruppur                          |
| 572         | Tiruvallur                        |
| 553         | Tiruvannamalai                    |
| 574         | Tiruvarur                         |
| 526         | Tonk                              |
| 440         | Tuensang                          |
| 288         | Tumkur                            |
| 504         | Udaipur                           |
| 65          | Udalguri                          |
| 705         | Udham Singh Nagar                 |
| 233         | Udhampur                          |
| 286         | Udupi                             |
| 318         | Ujjain                            |
| 406         | Ukhrul                            |
| 329         | Umaria                            |
| 218         | Una                               |
| 620         | Unakoti                           |
| 695         | Unnao                             |
| 34          | Upper Siang                       |
| 41          | Upper Subansiri                   |
| 736         | Uttar Dinajpur                    |
| 281         | Uttar Kannada                     |
| 703         | Uttarkashi                        |
| 155         | Vadodara                          |
| 777         | Vadodara Corporation              |
| 89          | Vaishali                          |
| 167         | Valsad                            |
| 696         | Varanasi                          |
| 543         | Vellore                           |
| 355         | Vidisha                           |
| 293         | Vijayapura                        |
| 607         | Vikarabad                         |
| 542         | Viluppuram                        |
| 549         | Virudhunagar                      |
| 8           | Visakhapatnam                     |
| 15          | Vizianagaram                      |
| 608         | Wanaparthy                        |
| 609         | Warangal(Rural)                   |
| 610         | Warangal(Urban)                   |
| 377         | Wardha                            |
| 369         | Washim                            |
| 299         | Wayanad                           |
| 737         | West Bardhaman                    |
| 106         | West Champaran                    |
| 142         | West Delhi                        |
| 420         | West Garo Hills                   |
| 16          | West Godavari                     |
| 416         | West Jaintia Hills                |
| 28          | West Kameng                       |
| 769         | West Karbi Anglong                |
| 419         | West Khasi Hills                  |
| 38          | West Siang                        |
| 536         | West Sikkim                       |
| 263         | West Singhbhum                    |
| 621         | West Tripura                      |
| 436         | Wokha                             |
| 6           | YSR District, Kadapa (Cuddapah)   |
| 611         | Yadadri Bhuvanagiri               |
| 285         | Yadgir                            |
| 197         | Yamunanagar                       |
| 478         | Yanam                             |
| 368         | Yavatmal                          |
| 442         | Zunheboto                         |

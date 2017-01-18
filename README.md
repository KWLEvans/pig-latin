# _Anslatortray_

#### _A Pig Latin translator app, 01/18/2017_

#### By _**Keith Evans and Jayeson Kiyabu**_

## Description

_This is a webpage that accepts a string and returns a Pig Latin translation. It accounts for all different word beginnings and non-letter characters._

## Setup/Installation Requirements

* _Clone GitHub repository_
* _Open index.html in any web browser_


## Known Bugs

_Doesn't handle punctuation_

## Application Specs

* _The program does nothing to non-alphabetical characters, since they do not contain consonants or vowels._
  * **Example Input:** 3
  * **Example Output:** 3
* _The program adds "ay" to single-letter words beginning with a vowel._
  * **Example Input:** i
  * **Example Output:** iay
* _The program adds "ay" to any word beginning with a vowel._
  * **Example Input:** angle
  * **Example Output:** angleay
* _The program moves a single consonant to the end and follows it with "ay"._
  * **Example Input:** car
  * **Example Output:** arcay
* _The program moves multiple consonants to the end and follows them with "ay"._
  * **Example Input:** school
  * **Example Output:** oolschay
* _The program recognizes words that begin with "qu" and moves the "qu" to the end and follows it with "ay"._
  * **Example Input:** quick
  * **Example Output:** ickquay
* _The program recognizes words that begin with a consonant followed by "qu" and moves the consonant and "qu" to the end and follows it with "ay"._
  * **Example Input:** squeal
  * **Example Output:** ealsquay
* _The program recognizes discrete words and performs translation on each of them._
  * **Example Input:** This is a working translator
  * **Example Output:** isThay isay aay orkingway anslatortray


## Support and contact details

_Any questions or comments can be directed to GitHub repository administrator_

## Technologies Used

_html, css, bootstrap.css, jquery_

### License

*MIT license*

Copyright (c) 2017 **_Jayeson Kiyabu and Keith Evans_**

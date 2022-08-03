// Check if a number is prime or not 

// #include <iostream>
// #include <cmath>
// #include <cstdio>
// using namespace std;

// int main() {
    
//     int n;
//     cin >> n;

//     bool flag=0;
//     for (int i=2; i<sqrt(n); i++){
//         if (n%i==0)
//         {
//             cout << "Non-Prime"<< endl;
//             flag=1;
//             break;
//         }      
//     }

//     if (flag==0)
//     {
//         cout << "Prime"<< endl;
//     }
    
// }

// Check if a number is prime or not 

// #include <iostream>
// #include <cmath>
// #include <cstdio>
// using namespace std;

// int main() {
    
//     int n;
//     cin >> n;
    
//     int reverse = 0;

//     while(n>0){
//         int lastDigit = n%10;
//         reverse = reverse*10 + lastDigit;
//         n=n/10;
//     }

//     cout << reverse << endl;
    
//     return 0;
// }


// To check if a number is an armstrong number or not 

// #include <iostream>
// #include <cmath>
// #include <cstdio>
// #include <math.h>
// using namespace std;

// int main() {
    
//     int n;
//     cin >> n;

//     int originaln = n;
    
//     int sum=0;

//     while(n>0){
//         int lastDigit = n%10;
//         sum+= pow(lastDigit,3);
//         n=n/10;
//     }
//     if(sum==originaln){
//     cout << "Yes" << endl;
//     }
//     else{
//         cout<<"NO"<<endl;
//     }
//     return 0;
// }

// Print Prime numbers between two numbers using functions

#include<iostream>
using namespace std;


bool isPrime(int num){
    for (int i = 2; i < num; i++)
    {
        if(num%i==0){
            return false;
        }
    }
    
}
int main()
{
    int a , b;
    cin >> a >> b;

    for(int i=a;    i<=b;   i++){
        if(isPrime(i)){
            cout << i << endl;
        }
    }


    return 0;
}
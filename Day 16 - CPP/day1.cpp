// Basic Data Types

// #include <iostream>
// #include <cstdio>
// using namespace std;

// int main() {
//     int a;
//     long b ;
//     char c ;
//     float d;
//     double e;

//      cin >> a >> b >> c >> d >> e;
//      printf("%d\n%ld\n%c\n%0.3f\n%0.9lf",a,b,c,d,e);

//     return 0;
// }

// For Loop Implementation

// #include<bits/stdc++.h>
// using namespace std;
// int main()
// {
//     int a,b;
//     string c[]={"","one","two","three","four","five","six","seven","eight","nine"};
//     cin>>a>>b;
//     for(int i=a;i<=b;i++)
//         cout<<((i<=9)?c[i]:((i%2==0)?"even":"odd"))<<endl;
// }

// Pattern Questions 1
// Rectangle

// #include<bits/stdc++.h>
// using namespace std;
// int main()
// {
//     int row, col;
//     cin >> row >> col ;

//     for (int i=1 ; i<=row;  i++){
//         for (int j=1 ; j<=col ; j++){
//                 cout << "*";
//         }
//         cout << endl;
//     }
// }

// Pattern Questions 2
// Hollow Rectangle

// #include<bits/stdc++.h>
// using namespace std;
// int main()
// {
//     int row, col;
//     cin >> row >> col ;

//     for (int i=1 ; i<=row;  i++){
//         for (int j=1 ; j<=col ; j++){
//             if(i==1 || i==row){
//                 cout << "*";
//             }
//             else if(j==1 || j==col ){
//                 cout << "*";
//             }
//             else{
//                 cout << " ";
//             }
//         }
//         cout << endl;
//     }
// }

// Pattern Questions 3
// Inverted half pyramid

// #include<bits/stdc++.h>
// using namespace std;
// int main()
// {
//     int n;
//     cin >> n;

//     for(int i=n; i>=1 ; i--){
//         for(int j=1; j<=i; j++){
//             cout<<".";
//         }
//     cout<<endl;
//     }
// }

// Pattern Questions 4
// Half pyramid inverted 180deg rotation

// #include<bits/stdc++.h>
// using namespace std;
// int main()
// {
//     int n;
//     cin >> n;

// for(int i=1;   i<=n;    i++){
//     for (int j = 1; j<=n; j++)
//     {
//     if(j<= n-i){
//         cout<< " ";
//     }
//     else{cout<<"*";
//     }
//     }
//     cout <<endl;
// }
// }

// Pattern Questions 5
// A half pyramid with numbers

// #include<bits/stdc++.h>
// using namespace std;
// int main()
// {
//    int n;
//     cin >> n;
//     for(int i=1; i<=n ; i++){
//         for(int j=1; j<=i;  j++){
//             cout << i ;
//         }
//         cout<<endl;
//     }
// }

// Pattern Questions 6
// Flyod's Triangle

// #include<bits/stdc++.h>
// using namespace std;
// int main()
// {
//     int count = 1 ;
//     int n;
//     cin >> n;
//     for(int i=1; i<=n ; i++){
//         for(int j=1; j<=i;  j++){
//             cout << count ;
//             count++;
//         }
//         cout<<endl;
//     }
// }

// Pattern Questions 7
// Butterfly Pattern

// #include<bits/stdc++.h>
// using namespace std;
// int main()
// {
//     int n;
//     cin >> n;
//     for(int i=1; i<=n ; i++){
//         for(int j=1; j<=i;  j++){
//             cout << "*";
//         }
//         int space = 2*n - 2*i;
//         for(int j=1; j<=space; j++){
//             cout<< " ";
//         }
//         for(int j=1; j<=i;  j++){
//             cout << "*";
//         }
//         cout<<endl;
//     }
//     for(int i=n; i>=1 ; i--){
//         for(int j=1; j<=i;  j++){
//             cout << "*";
//         }
//         int space = 2*n - 2*i;
//         for(int j=1; j<=space; j++){
//             cout<< " ";
//         }
//         for(int j=1; j<=i;  j++){
//             cout << "*";
//         }
//         cout<<endl;
//     }
// }

// Pattern ques 8
// Half Pyramid

// #include<bits/stdc++.h>
// using namespace std;
// int main()
// {
//     int n;
//     cin >> n;
//     for(int i=1; i<=n ; i++){
//         for(int j=1; j<=i; j++){
//             cout << j << " ";
//         }
//     cout << endl;
//     }
// }

// Pattern ques 9
// Half Pyramid
//  #include<bits/stdc++.h>
//  using namespace std;
//  int main()
//  {
//      int n;
//      cin >> n;
//      for(int i=n; i>=1 ; i--){
//          for(int j=1; j<=i; j++){
//              cout << j << " ";
//          }
//      cout << endl;
//      }
//  }

// Advanced Pattern Questions
// Inverted Pattern

// #include<bits/stdc++.h>
// using namespace std;
// int main()
// {
//     int n;
//     cin >> n;
//     for(int i=1; i<=n ; i++){
//         for(int j=1; j<=n+1-i; j++){
//             cout<<j<<" ";
//         }
//     cout << endl;
//     }
// }

// Advanced Pattern Questions
// 0-1 Pattern

// #include<bits/stdc++.h>
// using namespace std;
// int main()
// {
//     int n;
//     cin >> n;
//     for(int i=1; i<=n ; i++){
//         for(int j=1; j<=i; j++){
//             if(i%2==0 & j%2!=0 || j%2==0 & i%2!=0){
//                 cout <<"0";
//             }
//             else{
//                 cout<<"1";
//             }
//         }
//             cout<<endl;
//     }
// }

// Advanced Pattern Questions
// Rhombus Pattern

// #include<bits/stdc++.h>
// using namespace std;
// int main()
// {
//     int n;
//     cin >> n;
//     int i;
//     for(i=1; i<=n ; i++){
//         for(int j=1; j<=n-i; j++){
//             cout <<" ";
//         }
//         for (int j=1; j<=n; j++){
//             cout<<"*";
//         }
//             cout<<endl;
//     }
// }

// Advance Patern Problem
// Number Pattern

// #include <bits/stdc++.h>
// using namespace std;
// int main()
// {
//     int n;
//     cin >> n;
//     int i;
//     for (i = 1; i <= n; i++)
//     {
//         for (int j = 1; j <= n - i; j++)
//         {
//             cout << " ";
//         }
//         for (int j = 1; j <= i; j++)
//         {
//             cout << j << " ";
//         }
//         cout << endl;
//     }
// }

// Advance Patern Problem
// Star Problem - Mirror 

#include <bits/stdc++.h>
using namespace std;
int main(){

    int n;
    cin >> n;
    
    for (int i=1; i<=n; i++){
        for(int j=1; j<=n-i; j++){
            cout << " ";
        }
        for(int j=1; j<=i; j++){
            cout<< "*"<<" ";
        }

    cout<<endl;
    }
    
}
     


const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./bot-DSJ5tCu9.js","./cityPlan-Mno5Te82.js","./zfight-BOouEBbo.js"])))=>i.map(i=>d[i]);
import{a as e,n as t,r as n,t as r}from"./index-STpCXcO6.js";import{$ as i,$r as a,$t as o,A as s,An as c,Ar as l,At as u,B as d,Bn as f,Br as p,Bt as m,C as h,Ci as g,Cn as _,Cr as v,Ct as y,D as b,Dn as x,Dr as S,Dt as C,E as w,Ei as T,En as E,Et as D,F as O,Fn as k,Fr as ee,Ft as te,G as ne,Gr as re,Gt as ie,H as ae,Hn as oe,Hr as se,Ht as ce,I as le,In as ue,Ir as de,It as fe,J as pe,Jr as me,K as he,Kn as ge,Kr as _e,Kt as ve,L as ye,Ln as be,Lr as xe,Lt as Se,M as Ce,Mn as we,Mt as Te,N as Ee,Nn as De,Nt as Oe,O as ke,On as Ae,Or as je,Ot as A,P as Me,Pn as Ne,Pt as j,Q as M,Qr as Pe,Qt as N,R as Fe,Rn as Ie,Rr as Le,S as Re,Si as ze,Sn as Be,St as Ve,T as He,Ti as Ue,Tn as We,Tr as Ge,Tt as Ke,U as qe,Ur as Je,Ut as Ye,V as Xe,Vt as Ze,W as Qe,Wr as $e,Wt as et,X as tt,Xr as P,Xt as nt,Y as rt,Yr as it,Yt as at,Z as ot,Zr as st,Zt as ct,_ as lt,_i as ut,_n as F,_t as dt,a as ft,ai as pt,an as mt,at as ht,b as gt,bi as _t,bn as vt,bt as yt,c as bt,ci as xt,cn as St,d as Ct,di as wt,dn as Tt,dt as Et,ei as Dt,en as Ot,f as kt,fi as At,fn as jt,ft as I,g as Mt,gi as Nt,gn as Pt,gt as Ft,h as It,hi as Lt,hn as Rt,ht as zt,i as Bt,ii as Vt,in as Ht,it as Ut,j as Wt,jn as Gt,jt as Kt,k as qt,kn as Jt,kr as Yt,kt as Xt,l as Zt,li as L,ln as Qt,lt as $t,m as en,mi as tn,mn as nn,mt as rn,n as an,ni as on,nn as sn,nt as cn,o as ln,oi as un,on as dn,ot as fn,p as R,pi as pn,pn as mn,pt as hn,q as gn,qn as _n,qr as vn,qt as yn,r as bn,rn as xn,rt as Sn,s as z,si as Cn,sn as wn,st as Tn,t as En,tn as Dn,tt as On,u as kn,ui as An,un as jn,ut as Mn,v as Nn,vi as Pn,vn as Fn,vt as In,w as Ln,wi as Rn,wn as zn,wr as Bn,wt as Vn,x as Hn,xi as Un,xn as Wn,xt as Gn,y as Kn,yi as qn,yn as Jn,yt as Yn,z as Xn,zn as Zn,zr as Qn,zt as B}from"./cityPlan-Mno5Te82.js";import{C as $n,S as er,_ as tr,b as nr,d as rr,f as ir,h as ar,i as or,m as sr,n as cr,p as lr,t as ur,u as dr,v as fr,x as pr,y as mr}from"./characters-DYgZyDZh.js";import{t as hr}from"./talk-VRCpXy8I.js";var gr=Object.defineProperty,_r=(e,t)=>{let n={};for(var r in e)gr(n,r,{get:e[r],enumerable:!0});return t||gr(n,Symbol.toStringTag,{value:`Module`}),n};function vr(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function yr(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var br={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},V={common:{diffuse:{value:new I(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Rt},alphaMap:{value:null},alphaMapTransform:{value:new Rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Rt}},envmap:{envMap:{value:null},envMapRotation:{value:new Rt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Rt},normalScale:{value:new xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new I(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new I(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Rt},alphaTest:{value:0},uvTransform:{value:new Rt}},sprite:{diffuse:{value:new I(16777215)},opacity:{value:1},center:{value:new xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Rt},alphaMap:{value:null},alphaMapTransform:{value:new Rt},alphaTest:{value:0}}},xr={basic:{uniforms:g([V.common,V.specularmap,V.envmap,V.aomap,V.lightmap,V.fog]),vertexShader:br.meshbasic_vert,fragmentShader:br.meshbasic_frag},lambert:{uniforms:g([V.common,V.specularmap,V.envmap,V.aomap,V.lightmap,V.emissivemap,V.bumpmap,V.normalmap,V.displacementmap,V.fog,V.lights,{emissive:{value:new I(0)},envMapIntensity:{value:1}}]),vertexShader:br.meshlambert_vert,fragmentShader:br.meshlambert_frag},phong:{uniforms:g([V.common,V.specularmap,V.envmap,V.aomap,V.lightmap,V.emissivemap,V.bumpmap,V.normalmap,V.displacementmap,V.fog,V.lights,{emissive:{value:new I(0)},specular:{value:new I(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:br.meshphong_vert,fragmentShader:br.meshphong_frag},standard:{uniforms:g([V.common,V.envmap,V.aomap,V.lightmap,V.emissivemap,V.bumpmap,V.normalmap,V.displacementmap,V.roughnessmap,V.metalnessmap,V.fog,V.lights,{emissive:{value:new I(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:br.meshphysical_vert,fragmentShader:br.meshphysical_frag},toon:{uniforms:g([V.common,V.aomap,V.lightmap,V.emissivemap,V.bumpmap,V.normalmap,V.displacementmap,V.gradientmap,V.fog,V.lights,{emissive:{value:new I(0)}}]),vertexShader:br.meshtoon_vert,fragmentShader:br.meshtoon_frag},matcap:{uniforms:g([V.common,V.bumpmap,V.normalmap,V.displacementmap,V.fog,{matcap:{value:null}}]),vertexShader:br.meshmatcap_vert,fragmentShader:br.meshmatcap_frag},points:{uniforms:g([V.points,V.fog]),vertexShader:br.points_vert,fragmentShader:br.points_frag},dashed:{uniforms:g([V.common,V.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:br.linedashed_vert,fragmentShader:br.linedashed_frag},depth:{uniforms:g([V.common,V.displacementmap]),vertexShader:br.depth_vert,fragmentShader:br.depth_frag},normal:{uniforms:g([V.common,V.bumpmap,V.normalmap,V.displacementmap,{opacity:{value:1}}]),vertexShader:br.meshnormal_vert,fragmentShader:br.meshnormal_frag},sprite:{uniforms:g([V.sprite,V.fog]),vertexShader:br.sprite_vert,fragmentShader:br.sprite_frag},background:{uniforms:{uvTransform:{value:new Rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:br.background_vert,fragmentShader:br.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Rt}},vertexShader:br.backgroundCube_vert,fragmentShader:br.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:br.cube_vert,fragmentShader:br.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:br.equirect_vert,fragmentShader:br.equirect_frag},distance:{uniforms:g([V.common,V.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:br.distance_vert,fragmentShader:br.distance_frag},shadow:{uniforms:g([V.lights,V.fog,{color:{value:new I(0)},opacity:{value:1}}]),vertexShader:br.shadow_vert,fragmentShader:br.shadow_frag}};xr.physical={uniforms:g([xr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Rt},clearcoatNormalScale:{value:new xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Rt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Rt},sheen:{value:0},sheenColor:{value:new I(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Rt},transmissionSamplerSize:{value:new xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Rt},attenuationDistance:{value:0},attenuationColor:{value:new I(0)},specularColor:{value:new I(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Rt},anisotropyVector:{value:new xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Rt}}]),vertexShader:br.meshphysical_vert,fragmentShader:br.meshphysical_frag};var Sr={r:0,b:0,g:0},Cr=new Pt,wr=new Rt;wr.set(-1,0,0,0,1,0,0,0,1);function Tr(e,t,n,r,i,a){let o=new I(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new F(new ht(1,1,1),new Le({name:`BackgroundCubeMaterial`,uniforms:Nt(xr.backgroundCube.uniforms),vertexShader:xr.backgroundCube.vertexShader,fragmentShader:xr.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Cr.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(wr),l.material.toneMapped=hn.getTransfer(i.colorSpace)!==de,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new F(new Ne(2,2),new Le({name:`BackgroundMaterial`,uniforms:Nt(xr.background.uniforms),vertexShader:xr.background.vertexShader,fragmentShader:xr.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=hn.getTransfer(i.colorSpace)!==de,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Sr,Un(e)),n.buffers.color.setClear(Sr.r,Sr.g,Sr.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Er(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Dr(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Or(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(Ue(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&Ue(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function kr(e){let t=this,n=null,r=0,i=!1,a=!1,o=new De,s=new Rt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Ar=4,jr=6,Mr=20,Nr=256,Pr=new c,Fr=new I,Ir=null,Lr=0,Rr=0,zr=!1,Br=new L,Vr=new L,Hr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Br}=i;Ir=this._renderer.getRenderTarget(),Lr=this._renderer.getActiveCubeFace(),Rr=this._renderer.getActiveMipmapLevel(),zr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yr(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jr(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ir,Lr,Rr),this._renderer.xr.enabled=zr,e.scissorTest=!1,Gr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ir=this._renderer.getRenderTarget(),Lr=this._renderer.getActiveCubeFace(),Rr=this._renderer.getActiveMipmapLevel(),zr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:m,format:ge,colorSpace:Qt,depthBuffer:!1},r=Wr(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wr(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Ur(r)),this._blurMaterial=qr(r,e,t),this._ggxMaterial=Kr(r,e,t)}return r}_compileMaterial(e){let t=new F(new Tn,e);this._renderer.compile(t,Pr)}_sceneToCubeUV(e,t,n,r,i){let a=new we(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(Fr),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new F(new ht,new Fn({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(Fr),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;Gr(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yr()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jr());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Gr(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Pr)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-Ar?n-d+Ar:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,Gr(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,Pr),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,Gr(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,Pr)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];Gr(t,3*l*(r>this._lodMax-Ar?r-this._lodMax+Ar:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,Pr)}};function Ur(e){let t=[],n=[],r=e,i=e-Ar+1+jr;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?Vr.set(1,r,n):e===1?Vr.set(-n,1,-r):e===2?Vr.set(-n,r,1):e===3?Vr.set(-1,r,-n):e===4?Vr.set(-n,-1,r):Vr.set(n,r,-1),Vr.toArray(l,(e*6+t)*3)}}let u=new Tn;u.setAttribute(`position`,new fn(c,3)),u.setAttribute(`outputDirection`,new fn(l,3)),n.push(new F(u,null)),r>Ar&&r--}return{lodMeshes:n,sizeLods:t}}function Wr(e,t,n){let r=new pn(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Gr(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Kr(e,t,n){return new Le({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:Nr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Xr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function qr(e,t,n){return new Le({name:`SphericalGaussianBlur`,defines:{SAMPLES:Mr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Xr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Jr(){return new Le({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Xr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Yr(){return new Le({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Xr(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Zr=class extends pn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new dt(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ht(5,5,5),i=new Le({name:`CubemapFromEquirect`,uniforms:Nt(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new F(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=dn),new zt(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function Qr(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new Zr(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Hr(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Hr(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function $r(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&T(`WebGLRenderer: `+e+` extension not supported.`),t}}}function ei(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?Pe:st)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function ti(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function ni(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:qn(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function ri(e,t,n){let r=new WeakMap,i=new An;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new yt(h,p,m,u);g.type=te,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new xt(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function ii(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var ai={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function oi(e,t,n,r,i,a){let o=new pn(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,l=null,u=new Tn;u.setAttribute(`position`,new j([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute(`uv`,new j([0,2,0,0,2,0],2));let d=new Ge({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new F(u,d),p=new c(-1,1,1,-1,0,1),h=null,g=null,_=!1,v,y=null,b=[],x=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),l!==null&&l.setSize(e,t);for(let n=0;n<b.length;n++){let r=b[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){b=e,x=b.length>0&&b[0].isRenderPass===!0;let t=o.width,n=o.height;b.length>0&&s===null&&(s=new pn(t,n,{type:m,depthBuffer:!1,stencilBuffer:!1}),l=new pn(t,n,{type:m,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<b.length;e++){let r=b[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(_||e.toneMapping===0&&b.length===0)return!1;if(y=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return x===!1&&e.setRenderTarget(o),v=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return x},this.end=function(e,t){e.toneMapping=v,_=!0;let n=o,r=s;for(let i=0;i<b.length;i++){let a=b[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?l:s))}if(h!==e.outputColorSpace||g!==e.toneMapping){h=e.outputColorSpace,g=e.toneMapping,d.defines={},hn.getTransfer(h)===`srgb`&&(d.defines.SRGB_TRANSFER=``);let t=ai[g];t&&(d.defines[t]=``),d.needsUpdate=!0}d.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(y),e.render(f,p),y=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),l!==null&&l.dispose(),u.dispose(),d.dispose()}}var si=new me,ci=new Vn(1,1),li=new yt,ui=new Yn,di=new dt,fi=[],pi=[],mi=new Float32Array(16),hi=new Float32Array(9),gi=new Float32Array(4);function _i(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=fi[i];if(a===void 0&&(a=new Float32Array(i),fi[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function vi(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function yi(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function bi(e,t){let n=pi[t];n===void 0&&(n=new Int32Array(t),pi[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function xi(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Si(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(vi(n,t))return;e.uniform2fv(this.addr,t),yi(n,t)}}function Ci(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(vi(n,t))return;e.uniform3fv(this.addr,t),yi(n,t)}}function wi(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(vi(n,t))return;e.uniform4fv(this.addr,t),yi(n,t)}}function Ti(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(vi(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),yi(n,t)}else{if(vi(n,r))return;gi.set(r),e.uniformMatrix2fv(this.addr,!1,gi),yi(n,r)}}function Ei(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(vi(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),yi(n,t)}else{if(vi(n,r))return;hi.set(r),e.uniformMatrix3fv(this.addr,!1,hi),yi(n,r)}}function Di(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(vi(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),yi(n,t)}else{if(vi(n,r))return;mi.set(r),e.uniformMatrix4fv(this.addr,!1,mi),yi(n,r)}}function Oi(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function ki(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(vi(n,t))return;e.uniform2iv(this.addr,t),yi(n,t)}}function Ai(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(vi(n,t))return;e.uniform3iv(this.addr,t),yi(n,t)}}function ji(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(vi(n,t))return;e.uniform4iv(this.addr,t),yi(n,t)}}function Mi(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Ni(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(vi(n,t))return;e.uniform2uiv(this.addr,t),yi(n,t)}}function Pi(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(vi(n,t))return;e.uniform3uiv(this.addr,t),yi(n,t)}}function Fi(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(vi(n,t))return;e.uniform4uiv(this.addr,t),yi(n,t)}}function Ii(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(ci.compareFunction=n.isReversedDepthBuffer()?518:515,a=ci):a=si,n.setTexture2D(t||a,i)}function Li(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||ui,i)}function Ri(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||di,i)}function zi(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||li,i)}function Bi(e){switch(e){case 5126:return xi;case 35664:return Si;case 35665:return Ci;case 35666:return wi;case 35674:return Ti;case 35675:return Ei;case 35676:return Di;case 5124:case 35670:return Oi;case 35667:case 35671:return ki;case 35668:case 35672:return Ai;case 35669:case 35673:return ji;case 5125:return Mi;case 36294:return Ni;case 36295:return Pi;case 36296:return Fi;case 35678:case 36198:case 36298:case 36306:case 35682:return Ii;case 35679:case 36299:case 36307:return Li;case 35680:case 36300:case 36308:case 36293:return Ri;case 36289:case 36303:case 36311:case 36292:return zi}}function Vi(e,t){e.uniform1fv(this.addr,t)}function Hi(e,t){let n=_i(t,this.size,2);e.uniform2fv(this.addr,n)}function Ui(e,t){let n=_i(t,this.size,3);e.uniform3fv(this.addr,n)}function Wi(e,t){let n=_i(t,this.size,4);e.uniform4fv(this.addr,n)}function Gi(e,t){let n=_i(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Ki(e,t){let n=_i(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function qi(e,t){let n=_i(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Ji(e,t){e.uniform1iv(this.addr,t)}function Yi(e,t){e.uniform2iv(this.addr,t)}function Xi(e,t){e.uniform3iv(this.addr,t)}function Zi(e,t){e.uniform4iv(this.addr,t)}function Qi(e,t){e.uniform1uiv(this.addr,t)}function $i(e,t){e.uniform2uiv(this.addr,t)}function ea(e,t){e.uniform3uiv(this.addr,t)}function ta(e,t){e.uniform4uiv(this.addr,t)}function na(e,t,n){let r=this.cache,i=t.length,a=bi(n,i);vi(r,a)||(e.uniform1iv(this.addr,a),yi(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?ci:si;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function ra(e,t,n){let r=this.cache,i=t.length,a=bi(n,i);vi(r,a)||(e.uniform1iv(this.addr,a),yi(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||ui,a[e])}function ia(e,t,n){let r=this.cache,i=t.length,a=bi(n,i);vi(r,a)||(e.uniform1iv(this.addr,a),yi(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||di,a[e])}function aa(e,t,n){let r=this.cache,i=t.length,a=bi(n,i);vi(r,a)||(e.uniform1iv(this.addr,a),yi(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||li,a[e])}function oa(e){switch(e){case 5126:return Vi;case 35664:return Hi;case 35665:return Ui;case 35666:return Wi;case 35674:return Gi;case 35675:return Ki;case 35676:return qi;case 5124:case 35670:return Ji;case 35667:case 35671:return Yi;case 35668:case 35672:return Xi;case 35669:case 35673:return Zi;case 5125:return Qi;case 36294:return $i;case 36295:return ea;case 36296:return ta;case 35678:case 36198:case 36298:case 36306:case 35682:return na;case 35679:case 36299:case 36307:return ra;case 35680:case 36300:case 36308:case 36293:return ia;case 36289:case 36303:case 36311:case 36292:return aa}}var sa=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Bi(t.type)}},ca=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=oa(t.type)}},la=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},ua=/(\w+)(\])?(\[|\.)?/g;function da(e,t){e.seq.push(t),e.map[t.id]=t}function fa(e,t,n){let r=e.name,i=r.length;for(ua.lastIndex=0;;){let a=ua.exec(r),o=ua.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){da(n,l===void 0?new sa(s,e,t):new ca(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new la(s),da(n,e)),n=e}}}var pa=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);fa(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function ma(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var ha=37297,ga=0;function _a(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var va=new Rt;function ya(e){hn._getMatrix(va,hn.workingColorSpace,e);let t=`mat3( ${va.elements.map(e=>e.toFixed(4))} )`;switch(hn.getTransfer(e)){case jn:return[t,`LinearTransferOETF`];case de:return[t,`sRGBTransferOETF`];default:return Ue(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function ba(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+_a(e.getShaderSource(t),r)}return i}function xa(e,t){let n=ya(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var Sa={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Ca(e,t){let n=Sa[t];return n===void 0?(Ue(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var wa=new L;function Ta(){return hn.getLuminanceCoefficients(wa),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${wa.x.toFixed(4)}, ${wa.y.toFixed(4)}, ${wa.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Ea(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(ka).join(`
`)}function Da(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Oa(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function ka(e){return e!==``}function Aa(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ja(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Ma=/^[ \t]*#include +<([\w\d./]+)>/gm;function Na(e){return e.replace(Ma,Fa)}var Pa=new Map;function Fa(e,t){let n=br[t];if(n===void 0){let e=Pa.get(t);if(e!==void 0)n=br[e],Ue(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return Na(n)}var Ia=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function La(e){return e.replace(Ia,Ra)}function Ra(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function za(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var Ba={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Va(e){return Ba[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Ha={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function Ua(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:Ha[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var Wa={302:`ENVMAP_MODE_REFRACTION`};function Ga(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Wa[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Ka={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function qa(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Ka[e.combine]||`ENVMAP_BLENDING_NONE`}function Ja(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Ya(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Va(n),l=Ua(n),u=Ga(n),d=qa(n),f=Ja(n),p=Ea(n),m=Da(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(ka).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(ka).join(`
`),_.length>0&&(_+=`
`)):(g=[za(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(ka).join(`
`),_=[za(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:br.tonemapping_pars_fragment,n.toneMapping===0?``:Ca(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,br.colorspace_pars_fragment,xa(`linearToOutputTexel`,n.outputColorSpace),Ta(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(ka).join(`
`)),o=Na(o),o=Aa(o,n),o=ja(o,n),s=Na(s),s=Aa(s,n),s=ja(s,n),o=La(o),s=La(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=ma(i,i.VERTEX_SHADER,y),S=ma(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=ba(i,x,`vertex`),n=ba(i,S,`fragment`);qn(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):Ue(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new pa(i,h),T=Oa(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,ha)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=ga++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var Xa=0,Za=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Qa(e),t.set(e,n)),n}},Qa=class{constructor(e){this.id=Xa++,this.code=e,this.usedTimes=0}};function $a(e){return e===1030||e===37490||e===36285}function eo(e,t,n,r,i,o){let s=new Ot,c=new Za,l=new Set,u=[],d=new Map,f=r.logarithmicDepthBuffer,p=r.precision,m={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function h(e){return l.add(e),e===0?`uv`:`uv${e}`}function g(i,a,s,u,d,g){let _=u.fog,v=d.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=m[i.type];i.precision!==null&&(p=r.getMaxPrecision(i.precision),p!==i.precision&&Ue(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,p,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,ee;if(C){let e=xr[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=c.getVertexShaderStage(i),t=c.getFragmentShaderStage(i);c.update(i,e,t),k=e.id,ee=t.id}let te=e.getRenderTarget(),ne=e.state.buffers.depth.getReversed(),re=d.isInstancedMesh===!0,ie=d.isBatchedMesh===!0,ae=!!i.map,oe=!!i.matcap,se=!!x,ce=!!i.aoMap,le=!!i.lightMap,ue=!!i.bumpMap&&i.wireframe===!1,de=!!i.normalMap,fe=!!i.displacementMap,pe=!!i.emissiveMap,me=!!i.metalnessMap,he=!!i.roughnessMap,ge=i.anisotropy>0,_e=i.clearcoat>0,ve=i.dispersion>0,ye=i.retroreflectivity>0,be=i.iridescence>0,xe=i.sheen>0,Se=i.transmission>0,Ce=ge&&!!i.anisotropyMap,we=_e&&!!i.clearcoatMap,Te=_e&&!!i.clearcoatNormalMap,Ee=_e&&!!i.clearcoatRoughnessMap,De=be&&!!i.iridescenceMap,Oe=be&&!!i.iridescenceThicknessMap,ke=xe&&!!i.sheenColorMap,Ae=xe&&!!i.sheenRoughnessMap,je=!!i.specularMap,A=!!i.specularColorMap,Me=!!i.specularIntensityMap,Ne=Se&&!!i.transmissionMap,j=Se&&!!i.thicknessMap,M=!!i.gradientMap,Pe=!!i.alphaMap,N=i.alphaTest>0,Fe=!!i.alphaHash,Ie=!!i.extensions,Le=0;i.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Le=e.toneMapping);let Re={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:ee,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:p,batching:ie,batchingColor:ie&&d._colorsTexture!==null,instancing:re,instancingColor:re&&d.instanceColor!==null,instancingMorph:re&&d.morphTexture!==null,outputColorSpace:te===null?e.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:hn.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:ae,matcap:oe,envMap:se,envMapMode:se&&x.mapping,envMapCubeUVHeight:S,aoMap:ce,lightMap:le,bumpMap:ue,normalMap:de,displacementMap:fe,emissiveMap:pe,normalMapObjectSpace:de&&i.normalMapType===1,normalMapTangentSpace:de&&i.normalMapType===0,packedNormalMap:de&&i.normalMapType===0&&$a(i.normalMap.format),metalnessMap:me,roughnessMap:he,anisotropy:ge,anisotropyMap:Ce,clearcoat:_e,clearcoatMap:we,clearcoatNormalMap:Te,clearcoatRoughnessMap:Ee,dispersion:ve,retroreflection:ye,iridescence:be,iridescenceMap:De,iridescenceThicknessMap:Oe,sheen:xe,sheenColorMap:ke,sheenRoughnessMap:Ae,specularMap:je,specularColorMap:A,specularIntensityMap:Me,transmission:Se,transmissionMap:Ne,thicknessMap:j,gradientMap:M,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Pe,alphaTest:N,alphaHash:Fe,combine:i.combine,mapUv:ae&&h(i.map.channel),aoMapUv:ce&&h(i.aoMap.channel),lightMapUv:le&&h(i.lightMap.channel),bumpMapUv:ue&&h(i.bumpMap.channel),normalMapUv:de&&h(i.normalMap.channel),displacementMapUv:fe&&h(i.displacementMap.channel),emissiveMapUv:pe&&h(i.emissiveMap.channel),metalnessMapUv:me&&h(i.metalnessMap.channel),roughnessMapUv:he&&h(i.roughnessMap.channel),anisotropyMapUv:Ce&&h(i.anisotropyMap.channel),clearcoatMapUv:we&&h(i.clearcoatMap.channel),clearcoatNormalMapUv:Te&&h(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&h(i.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&h(i.iridescenceMap.channel),iridescenceThicknessMapUv:Oe&&h(i.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&h(i.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&h(i.sheenRoughnessMap.channel),specularMapUv:je&&h(i.specularMap.channel),specularColorMapUv:A&&h(i.specularColorMap.channel),specularIntensityMapUv:Me&&h(i.specularIntensityMap.channel),transmissionMapUv:Ne&&h(i.transmissionMap.channel),thicknessMapUv:j&&h(i.thicknessMap.channel),alphaMapUv:Pe&&h(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(de||ge),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:d.isPoints===!0&&!!v.attributes.uv&&(ae||Pe),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&de===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ne,skinning:d.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:a.sun.length,numDirLights:a.directional.length,numPointLights:a.point.length,numSpotLights:a.spot.length,numSpotLightMaps:a.spotLightMap.length,numRectAreaLights:a.rectArea.length,numHemiLights:a.hemi.length,numSunLightShadows:a.sunShadowMap.length,numDirLightShadows:a.directionalShadowMap.length,numPointLightShadows:a.pointShadowMap.length,numSpotLightShadows:a.spotShadowMap.length,numSpotLightShadowsWithMaps:a.numSpotLightShadowsWithMaps,numLightProbes:a.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&s.length>0,shadowMapType:e.shadowMap.type,toneMapping:Le,decodeVideoTexture:ae&&i.map.isVideoTexture===!0&&hn.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:pe&&i.emissiveMap.isVideoTexture===!0&&hn.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Ie&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Ie&&i.extensions.multiDraw===!0||ie)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Re.vertexUv1s=l.has(1),Re.vertexUv2s=l.has(2),Re.vertexUv3s=l.has(3),l.clear(),Re}function _(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(v(n,t),y(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function v(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function y(e,t){s.disableAll(),t.instancing&&s.enable(0),t.instancingColor&&s.enable(1),t.instancingMorph&&s.enable(2),t.matcap&&s.enable(3),t.envMap&&s.enable(4),t.normalMapObjectSpace&&s.enable(5),t.normalMapTangentSpace&&s.enable(6),t.clearcoat&&s.enable(7),t.iridescence&&s.enable(8),t.alphaTest&&s.enable(9),t.vertexColors&&s.enable(10),t.vertexAlphas&&s.enable(11),t.vertexUv1s&&s.enable(12),t.vertexUv2s&&s.enable(13),t.vertexUv3s&&s.enable(14),t.vertexTangents&&s.enable(15),t.anisotropy&&s.enable(16),t.alphaHash&&s.enable(17),t.batching&&s.enable(18),t.dispersion&&s.enable(19),t.retroreflection&&s.enable(24),t.batchingColor&&s.enable(20),t.gradientMap&&s.enable(21),t.packedNormalMap&&s.enable(22),t.vertexNormals&&s.enable(23),e.push(s.mask),s.disableAll(),t.fog&&s.enable(0),t.useFog&&s.enable(1),t.flatShading&&s.enable(2),t.logarithmicDepthBuffer&&s.enable(3),t.reversedDepthBuffer&&s.enable(4),t.skinning&&s.enable(5),t.morphTargets&&s.enable(6),t.morphNormals&&s.enable(7),t.morphColors&&s.enable(8),t.premultipliedAlpha&&s.enable(9),t.shadowMapEnabled&&s.enable(10),t.doubleSided&&s.enable(11),t.flipSided&&s.enable(12),t.useDepthPacking&&s.enable(13),t.dithering&&s.enable(14),t.transmission&&s.enable(15),t.sheen&&s.enable(16),t.opaque&&s.enable(17),t.pointsUvs&&s.enable(18),t.decodeVideoTexture&&s.enable(19),t.decodeVideoTextureEmissive&&s.enable(20),t.alphaToCoverage&&s.enable(21),t.numLightProbeGrids>0&&s.enable(22),t.hasPositionAttribute&&s.enable(23),e.push(s.mask)}function b(e){let t=m[e.type],n;if(t){let e=xr[t];n=a.clone(e.uniforms)}else n=e.uniforms;return n}function x(t,n){let r=d.get(n);return r===void 0?(r=new Ya(e,n,t,i),u.push(r),d.set(n,r)):++r.usedTimes,r}function S(e){if(--e.usedTimes===0){let t=u.indexOf(e);u[t]=u[u.length-1],u.pop(),d.delete(e.cacheKey),e.destroy()}}function C(e){c.remove(e)}function w(){c.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:b,acquireProgram:x,releaseProgram:S,releaseShaderCache:C,programs:u,dispose:w}}function to(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function no(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function ro(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function io(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||no),r.length>1&&r.sort(t||ro),i.length>1&&i.sort(t||ro)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function ao(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new io,e.set(t,[i])):n>=r.length?(i=new io,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function oo(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new L,color:new I};break;case`SpotLight`:n={position:new L,direction:new L,color:new I,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new L,color:new I,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new L,skyColor:new I,groundColor:new I};break;case`RectAreaLight`:n={color:new I,position:new L,halfWidth:new L,halfHeight:new L}}return e[t.id]=n,n}}}function so(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var co=0;function lo(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function uo(e){let t=new oo,n=so(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new L);let i=new L,a=new Pt,o=new Pt;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(lo);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=V.LTC_FLOAT_1,r.rectAreaLTC2=V.LTC_FLOAT_2):(r.rectAreaLTC1=V.LTC_HALF_1,r.rectAreaLTC2=V.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=co++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function fo(e){let t=new uo(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function po(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new fo(e),t.set(n,[a])):r>=i.length?(a=new fo(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var mo=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ho=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,go=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],_o=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],vo=new Pt,yo=new L,bo=new L;function xo(e,t,n){let r=new Se,i=new xt,a=new xt,o=new An,s=new Jn,c=new vt,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new Le({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xt},radius:{value:4}},vertexShader:mo,fragmentShader:ho}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let h=new Tn;h.setAttribute(`position`,new fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new F(h,f),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let y=this.type;this.render=function(t,n,s){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||t.length===0)return;this.type===2&&(Ue(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=y!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){Ue(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let h=d.getFrameExtents();i.multiply(h),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/h.x),i.x=a.x*h.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/h.y),i.y=a.y*h.y,d.mapSize.y=a.y));let g=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=g,d.map===null||p===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){Ue(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new pn(i.x,i.y,{format:v,type:m,minFilter:dn,magFilter:dn,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new Vn(i.x,i.y,te),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=Ve,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=We,d.map.depthTexture.magFilter=We}else l.isPointLight?(d.map=new Zr(i.x),d.map.depthTexture=new Ft(i.x,Vt)):(d.map=new pn(i.x,i.y),d.map.depthTexture=new Vn(i.x,i.y,Vt)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=Ve,this.type===1?(d.map.depthTexture.compareFunction=g?518:515,d.map.depthTexture.minFilter=dn,d.map.depthTexture.magFilter=dn):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=We,d.map.depthTexture.magFilter=We);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let _=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);for(let t=0;t<_;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),yo.setFromMatrixPosition(l.matrixWorld),e.position.copy(yo),bo.copy(e.position),bo.add(go[t]),e.up.copy(_o[t]),e.lookAt(bo),e.updateMatrixWorld(),n.makeTranslation(-yo.x,-yo.y,-yo.z),vo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(vo,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}r=d.getFrustum(t),S(n,s,i,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&b(d,s),d.needsUpdate=!1}y=this.type,_.needsUpdate=!1,e.setRenderTarget(c,l,d)};function b(n,r){let a=t.update(g);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null?n.mapPass=new pn(i.x,i.y,{format:v,type:m}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value.set(n.map.width,n.map.height),f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,g,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,g,null)}function x(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,C)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function S(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=x(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=x(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)S(c[e],i,a,o,s)}function C(e){e.target.removeEventListener(`dispose`,C);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function So(e,t){function n(){let t=!1,n=new An,r=null,i=new An(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?me(e.DEPTH_TEST):he(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=Yt[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?me(e.STENCIL_TEST):he(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new I(0,0,0),T=0,E=!1,D=null,O=null,k=null,ee=null,te=null,ne=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),re=!1,ie=0,ae=e.getParameter(e.VERSION);ae.indexOf(`WebGL`)===-1?ae.indexOf(`OpenGL ES`)!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(ae)[1]),re=ie>=2):(ie=parseFloat(/^WebGL (\d)/.exec(ae)[1]),re=ie>=1);let oe=null,se={},ce=e.getParameter(e.SCISSOR_BOX),le=e.getParameter(e.VIEWPORT),ue=new An().fromArray(ce),de=new An().fromArray(le);function fe(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let pe={};pe[e.TEXTURE_2D]=fe(e.TEXTURE_2D,e.TEXTURE_2D,1),pe[e.TEXTURE_CUBE_MAP]=fe(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[e.TEXTURE_2D_ARRAY]=fe(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),pe[e.TEXTURE_3D]=fe(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),me(e.DEPTH_TEST),o.setFunc(3),Ce(!1),we(1),me(e.CULL_FACE),xe(0);function me(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function he(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function ge(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function _e(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function ve(t){return h!==t&&(e.useProgram(t),h=t,!0)}let ye={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};ye[103]=e.MIN,ye[104]=e.MAX;let be={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function xe(t,n,r,i,a,o,s,c,l,u){if(t===0){g===!0&&(he(e.BLEND),g=!1);return}if(g===!1&&(me(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:qn(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:qn(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:qn(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:qn(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}return}a=a||n,o=o||r,s=s||i,(n!==v||a!==x)&&(e.blendEquationSeparate(ye[n],ye[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(be[r],be[i],be[o],be[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function Se(t,n){t.side===2?he(e.CULL_FACE):me(e.CULL_FACE);let r=t.side===1;n&&(r=!r),Ce(r),t.blending===1&&t.transparent===!1?xe(0):xe(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),Ee(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?me(e.SAMPLE_ALPHA_TO_COVERAGE):he(e.SAMPLE_ALPHA_TO_COVERAGE)}function Ce(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function we(t){t===0?he(e.CULL_FACE):(me(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function Te(t){t!==k&&(re&&e.lineWidth(t),k=t)}function Ee(t,n,r){t?(me(e.POLYGON_OFFSET_FILL),(ee!==n||te!==r)&&(ee=n,te=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):he(e.POLYGON_OFFSET_FILL)}function De(t){t?me(e.SCISSOR_TEST):he(e.SCISSOR_TEST)}function Oe(t){t===void 0&&(t=e.TEXTURE0+ne-1),oe!==t&&(e.activeTexture(t),oe=t)}function ke(t,n,r){r===void 0&&(r=oe===null?e.TEXTURE0+ne-1:oe);let i=se[r];i===void 0&&(i={type:void 0,texture:void 0},se[r]=i),(i.type!==t||i.texture!==n)&&(oe!==r&&(e.activeTexture(r),oe=r),e.bindTexture(t,n||pe[t]),i.type=t,i.texture=n)}function Ae(){let t=se[oe];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function je(){try{e.compressedTexImage2D(...arguments)}catch(e){qn(`WebGLState:`,e)}}function A(){try{e.compressedTexImage3D(...arguments)}catch(e){qn(`WebGLState:`,e)}}function Me(){try{e.texSubImage2D(...arguments)}catch(e){qn(`WebGLState:`,e)}}function Ne(){try{e.texSubImage3D(...arguments)}catch(e){qn(`WebGLState:`,e)}}function j(){try{e.compressedTexSubImage2D(...arguments)}catch(e){qn(`WebGLState:`,e)}}function M(){try{e.compressedTexSubImage3D(...arguments)}catch(e){qn(`WebGLState:`,e)}}function Pe(){try{e.texStorage2D(...arguments)}catch(e){qn(`WebGLState:`,e)}}function N(){try{e.texStorage3D(...arguments)}catch(e){qn(`WebGLState:`,e)}}function Fe(){try{e.texImage2D(...arguments)}catch(e){qn(`WebGLState:`,e)}}function Ie(){try{e.texImage3D(...arguments)}catch(e){qn(`WebGLState:`,e)}}function Le(t){return d[t]===void 0?e.getParameter(t):d[t]}function Re(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function ze(t){ue.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ue.copy(t))}function Be(t){de.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),de.copy(t))}function Ve(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function He(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Ue(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},oe=null,se={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new I(0,0,0),T=0,E=!1,D=null,O=null,k=null,ee=null,te=null,ue.set(0,0,e.canvas.width,e.canvas.height),de.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:me,disable:he,bindFramebuffer:ge,drawBuffers:_e,useProgram:ve,setBlending:xe,setMaterial:Se,setFlipSided:Ce,setCullFace:we,setLineWidth:Te,setPolygonOffset:Ee,setScissorTest:De,activeTexture:Oe,bindTexture:ke,unbindTexture:Ae,compressedTexImage2D:je,compressedTexImage3D:A,texImage2D:Fe,texImage3D:Ie,pixelStorei:Re,getParameter:Le,updateUBOMapping:Ve,uniformBlockBinding:He,texStorage2D:Pe,texStorage3D:N,texSubImage2D:Me,texSubImage3D:Ne,compressedTexSubImage2D:j,compressedTexSubImage3D:M,scissor:ze,viewport:Be,reset:Ue}}function Co(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new xt,u=new WeakMap,d=new Set,f,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function h(e,t){return m?new OffscreenCanvas(e,t):Pn(`canvas`)}function g(e,t,n){let r=1,i=j(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);f===void 0&&(f=h(n,a));let o=t?h(n,a):f;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),Ue(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&Ue(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function _(e){return e.generateMipmaps}function v(t){e.generateMipmap(t)}function b(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function S(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];Ue(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||Ue(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?jn:hn.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function C(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,Ue(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function w(e,t){return _(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function T(e){let t=e.target;t.removeEventListener(`dispose`,T),O(t),t.isVideoTexture&&u.delete(t),t.isHTMLTexture&&d.delete(t)}function D(e){let t=e.target;t.removeEventListener(`dispose`,D),ee(t)}function O(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=p.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&k(e),Object.keys(i).length===0&&p.delete(n)}r.remove(e)}function k(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=p.get(i);delete a[n.__cacheKey],o.memory.textures--}function ee(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let te=0;function ne(){te=0}function re(){return te}function ie(e){te=e}function ae(){let e=te;return e>=i.maxTextures&&Ue(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),te+=1,e}function oe(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function se(t,i){let a=r.get(t);if(t.isVideoTexture&&Me(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)Ue(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)Ue(`WebGLRenderer: Texture marked for update but image is incomplete`);else{ve(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function ce(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){ve(a,t,i);return}t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i)}function le(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){ve(a,t,i);return}n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function ue(t,i){let a=r.get(t);if(t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version){ye(a,t,i);return}n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let de={[je]:e.REPEAT,[Et]:e.CLAMP_TO_EDGE,[zn]:e.MIRRORED_REPEAT},fe={[We]:e.NEAREST,[x]:e.NEAREST_MIPMAP_NEAREST,[E]:e.NEAREST_MIPMAP_LINEAR,[dn]:e.LINEAR,[St]:e.LINEAR_MIPMAP_NEAREST,[wn]:e.LINEAR_MIPMAP_LINEAR},pe={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function me(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&Ue(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,de[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,de[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,de[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,fe[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,fe[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,pe[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function he(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,T));let i=n.source,a=p.get(i);a===void 0&&(a={},p.set(i,a));let s=oe(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&k(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function ge(e,t,n){return Math.floor(Math.floor(e/n)/t)}function _e(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=ge(n.start,r.width,4),c=ge(t.start,r.width,4);n.start<=i+1&&a===c&&ge(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function ve(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=he(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let f=r.get(u);if(u.version!==f.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=hn.getPrimaries(hn.workingColorSpace),r=o.colorSpace===``?null:hn.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=g(o.image,!1,i.maxTextureSize);t=Ne(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),m=S(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);me(c,o);let h,b=o.mipmaps,x=o.isVideoTexture!==!0,T=f.__version===void 0||l===!0,E=u.dataReady,D=w(o,t);if(o.isDepthTexture)m=C(o.format===y,o.type),T&&(x?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(o.isDataTexture){if(b.length>0){x&&T&&n.texStorage2D(e.TEXTURE_2D,D,m,b[0].width,b[0].height);for(let t=0,i=b.length;t<i;t++)h=b[t],x?E&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);o.generateMipmaps=!1}else x?(T&&n.texStorage2D(e.TEXTURE_2D,D,m,t.width,t.height),E&&_e(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){x&&T&&n.texStorage3D(e.TEXTURE_2D_ARRAY,D,m,b[0].width,b[0].height,t.depth);for(let i=0,a=b.length;i<a;i++)if(h=b[i],o.format!==1023){if(r!==null){if(x){if(E){if(o.layerUpdates.size>0){let t=_t(h.width,h.height,o.format,o.type);for(let a of o.layerUpdates){let o=h.data.subarray(a*t/h.data.BYTES_PER_ELEMENT,(a+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,h.width,h.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0)}else Ue(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else x?E&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{x&&T&&n.texStorage2D(e.TEXTURE_2D,D,m,b[0].width,b[0].height);for(let t=0,i=b.length;t<i;t++)h=b[t],o.format===1023?x?E&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?Ue(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):x?E&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}}else if(o.isDataArrayTexture){if(x){if(T&&n.texStorage3D(e.TEXTURE_2D_ARRAY,D,m,t.width,t.height,t.depth),E){if(o.layerUpdates.size>0){let i=_t(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data)}else if(o.isData3DTexture)x?(T&&n.texStorage3D(e.TEXTURE_3D,D,m,t.width,t.height,t.depth),E&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(T){if(x)n.texStorage2D(e.TEXTURE_2D,D,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<D;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),d.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of d)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(b.length>0){if(x&&T){let t=j(b[0]);n.texStorage2D(e.TEXTURE_2D,D,m,t.width,t.height)}for(let t=0,i=b.length;t<i;t++)h=b[t],x?E&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);o.generateMipmaps=!1}else if(x){if(T){let r=j(t);n.texStorage2D(e.TEXTURE_2D,D,m,r.width,r.height)}E&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);_(o)&&v(c),f.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function ye(t,o,s){if(o.image.length!==6)return;let c=he(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=hn.getPrimaries(hn.workingColorSpace),r=o.colorSpace===``?null:hn.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=g(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=Ne(o,m[e]);let h=m[0],y=a.convert(o.format,o.colorSpace),b=a.convert(o.type),x=S(o.internalFormat,y,b,o.normalized,o.colorSpace),C=o.isVideoTexture!==!0,T=u.__version===void 0||c===!0,E=l.dataReady,D=w(o,h);me(e.TEXTURE_CUBE_MAP,o);let O;if(f){C&&T&&n.texStorage2D(e.TEXTURE_CUBE_MAP,D,x,h.width,h.height);for(let t=0;t<6;t++){O=m[t].mipmaps;for(let r=0;r<O.length;r++){let i=O[r];o.format===1023?C?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,b,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,x,i.width,i.height,0,y,b,i.data):y===null?Ue(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):C?E&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,x,i.width,i.height,0,i.data)}}}else{if(O=o.mipmaps,C&&T){O.length>0&&D++;let t=j(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,D,x,t.width,t.height)}for(let t=0;t<6;t++)if(p){C?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,y,b,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,x,m[t].width,m[t].height,0,y,b,m[t].data);for(let r=0;r<O.length;r++){let i=O[r].image[t].image;C?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,y,b,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,x,i.width,i.height,0,y,b,i.data)}}else{C?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,y,b,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,x,y,b,m[t]);for(let r=0;r<O.length;r++){let i=O[r];C?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,y,b,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,x,y,b,i.image[t])}}}_(o)&&v(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function be(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=S(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),A(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,Ae(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function xe(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=C(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;A(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ae(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ae(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=S(o.internalFormat,c,l,o.normalized,o.colorSpace);A(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ae(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ae(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Se(t,i,o){let c=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,(!l.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),c){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,T)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),me(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else se(i.depthTexture,0);let u=l.__webglTexture,d=Ae(i),f=c?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)A(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)A(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Ce(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)Se(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?Se(i.__webglFramebuffer[0],t,0):Se(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),xe(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),xe(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function we(t,n,i){let a=r.get(t);n!==void 0&&be(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&Ce(t)}function Te(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,D);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&A(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=S(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=Ae(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),xe(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),me(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)be(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else be(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);_(i)&&v(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),me(c,a),be(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),_(a)&&v(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),me(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)be(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else be(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);_(i)&&v(r),n.unbindTexture()}t.depthBuffer&&Ce(t)}function Ee(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(_(a)){let t=b(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),v(t),n.unbindTexture()}}}let De=[],Oe=[];function ke(t){if(t.samples>0){if(A(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(De.length=0,Oe.length=0,De.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(De.push(l),Oe.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Oe)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,De))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Ae(e){return Math.min(i.maxSamples,e.samples)}function A(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function Me(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function Ne(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(hn.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&Ue(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):qn(`WebGLTextures: Unsupported texture color space:`,n)),t}function j(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=ae,this.resetTextureUnits=ne,this.getTextureUnits=re,this.setTextureUnits=ie,this.setTexture2D=se,this.setTexture2DArray=ce,this.setTexture3D=le,this.setTextureCube=ue,this.rebindTextures=we,this.setupRenderTarget=Te,this.updateRenderTargetMipmap=Ee,this.updateMultisampleRenderTarget=ke,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=be,this.useMultisampledRTT=A,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function wo(e,t){function n(n,r=``){let i,a=hn.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var To=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Eo=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Do=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Kt(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Le({vertexShader:To,fragmentShader:Eo,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new F(new Ne(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Oo=class extends u{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new Do,g={},_=t.getContextAttributes(),v=null,b=null,x=[],S=[],C=new xt,w=null,T=null,E=new we;E.viewport=new An;let D=new we;D.viewport=new An;let O=[E,D],k=new cn,ee=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=x[e];return t===void 0&&(t=new tn,x[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=x[e];return t===void 0&&(t=new tn,x[e]=t),t.getGripSpace()},this.getHand=function(e){let t=x[e];return t===void 0&&(t=new tn,x[e]=t),t.getHandSpace()};function ne(e){let t=S.indexOf(e.inputSource);if(t===-1)return;let n=x[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function re(){r.removeEventListener(`select`,ne),r.removeEventListener(`selectstart`,ne),r.removeEventListener(`selectend`,ne),r.removeEventListener(`squeeze`,ne),r.removeEventListener(`squeezestart`,ne),r.removeEventListener(`squeezeend`,ne),r.removeEventListener(`end`,re),r.removeEventListener(`inputsourceschange`,ie);for(let e=0;e<x.length;e++){let t=S[e];t!==null&&(S[e]=null,x[e].disconnect(t))}ee=null,te=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(v),f=null,d=null,u=null,r=null,b=null,pe.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(C.width,C.height,!1),T!==null){let e=T.camera;e.fov=T.fov,e.zoom=T.zoom,e.updateProjectionMatrix(),T=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&Ue(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&Ue(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,ne),r.addEventListener(`selectstart`,ne),r.addEventListener(`selectend`,ne),r.addEventListener(`squeeze`,ne),r.addEventListener(`squeezestart`,ne),r.addEventListener(`squeezeend`,ne),r.addEventListener(`end`,re),r.addEventListener(`inputsourceschange`,ie),_.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(C),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?y:Ve,a=_.stencil?on:Vt);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new pn(d.textureWidth,d.textureHeight,{format:ge,type:Dt,depthTexture:new Vn(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new pn(f.framebufferWidth,f.framebufferHeight,{format:ge,type:Dt,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),pe.setContext(r),pe.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function ie(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=S.indexOf(n);r>=0&&(S[r]=null,x[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=S.indexOf(n);if(r===-1){for(let e=0;e<x.length;e++)if(e>=S.length){S.push(n),r=e;break}else if(S[e]===null){S[e]=n,r=e;break}if(r===-1)break}let i=x[r];i&&i.connect(n)}}let ae=new L,se=new L;function ce(e,t,n){ae.setFromMatrixPosition(t.matrixWorld),se.setFromMatrixPosition(n.matrixWorld);let r=ae.distanceTo(se),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function le(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),k.near=D.near=E.near=t,k.far=D.far=E.far=n,(ee!==k.near||te!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),ee=k.near,te=k.far),k.layers.mask=e.layers.mask|6,E.layers.mask=k.layers.mask&-5,D.layers.mask=k.layers.mask&-3;let i=e.parent,a=k.cameras;le(k,i);for(let e=0;e<a.length;e++)le(a[e],i);a.length===2?ce(k,E,D):k.projectionMatrix.copy(E.projectionMatrix),T===null&&e.isPerspectiveCamera&&(T={camera:e,fov:e.fov,zoom:e.zoom}),ue(e,k,i)};function ue(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=oe*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(k)},this.getCameraTexture=function(e){return g[e]};let de=null;function fe(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let i=!1;t.length!==k.cameras.length&&(k.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(b,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(b))}let o=O[n];o===void 0&&(o=new we,o.layers.enable(n),o.viewport=new An,O[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(k.matrix.copy(o.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),i===!0&&k.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new Kt,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<x.length;e++){let t=S[e],n=x[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}de&&de(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let pe=new vr;pe.setAnimationLoop(fe),this.setAnimationLoop=function(e){de=e},this.dispose=function(){}}},ko=new Pt,Ao=new Rt;Ao.set(-1,0,0,0,1,0,0,0,1);function jo(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Un(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(ko.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Ao),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Mo(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return qn(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?Ue(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):Ue(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var No=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Po=null;function Fo(){return Po===null&&(Po=new Gn(No,16,16,v,m),Po.name=`DFG_LUT`,Po.minFilter=dn,Po.magFilter=dn,Po.wrapS=Et,Po.wrapT=Et,Po.generateMipmaps=!1,Po.needsUpdate=!0),Po}var Io=class{constructor(e={}){let{canvas:t=ut(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Dt}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let h=f,g=new Set([_n,Bn,S]),_=new Set([Dt,Vt,Cn,on,pt,un]),v=new Uint32Array(4),y=new Int32Array(4),b=new L,x=null,C=null,w=[],T=[],E=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let D=this,O=!1,k=null,te=null,ne=null,re=null;this._outputColorSpace=ee;let ie=0,ae=0,oe=null,se=-1,ce=null,le=new An,ue=new An,de=null,fe=new I(0),pe=0,me=t.width,he=t.height,ge=1,_e=null,ve=null,ye=new An(0,0,me,he),be=new An(0,0,me,he),xe=!1,Ce=new Se,we=!1,Te=!1,Ee=new Pt,De=new L,Oe=new An,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ae=!1;function je(){return oe===null?ge:1}let A=n;function Me(e,n){return t.getContext(e,n)}let Ne,j,M,Pe,N,Fe,Ie,Le,Re,Be,Ve,He,We,Ge,Ke,qe,Je,Ye,Xe,Ze,Qe,$e,et;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,nt,!1),t.addEventListener(`webglcontextrestored`,rt,!1),t.addEventListener(`webglcontextcreationerror`,it,!1),A===null){let t=`webgl2`;if(A=Me(t,e),A===null)throw Me(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}tt()}catch(e){throw t.removeEventListener(`webglcontextlost`,nt,!1),t.removeEventListener(`webglcontextrestored`,rt,!1),t.removeEventListener(`webglcontextcreationerror`,it,!1),qn(`WebGLRenderer: `+e.message),e}function tt(){Ne=new $r(A),Ne.init(),Qe=new wo(A,Ne),j=new Or(A,Ne,e,Qe),M=new So(A,Ne),j.reversedDepthBuffer&&d&&M.buffers.depth.setReversed(!0),te=A.createFramebuffer(),ne=A.createFramebuffer(),re=A.createFramebuffer(),Pe=new ni(A),N=new to,Fe=new Co(A,Ne,M,N,j,Qe,Pe),Ie=new Qr(D),Le=new yr(A),$e=new Er(A,Le),Re=new ei(A,Le,Pe,$e),Be=new ii(A,Re,Le,$e,Pe),Ye=new ri(A,j,Fe),Ke=new kr(N),Ve=new eo(D,Ie,Ne,j,$e,Ke),He=new jo(D,N),We=new ao,Ge=new po(Ne),Je=new Tr(D,Ie,M,Be,p,s),qe=new xo(D,Be,j),et=new Mo(A,Pe,j,M),Xe=new Dr(A,Ne,Pe),Ze=new ti(A,Ne,Pe),Pe.programs=Ve.programs,D.capabilities=j,D.extensions=Ne,D.properties=N,D.renderLists=We,D.shadowMap=qe,D.state=M,D.info=Pe}h!==1009&&(E=new oi(h,t.width,t.height,o,r,i));let P=new Oo(D,A);this.xr=P,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){let e=Ne.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Ne.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return ge},this.setPixelRatio=function(e){e!==void 0&&(ge=e,this.setSize(me,he,!1))},this.getSize=function(e){return e.set(me,he)},this.setSize=function(e,n,r=!0){if(P.isPresenting){Ue(`WebGLRenderer: Can't change size while VR device is presenting.`);return}me=e,he=n,t.width=Math.floor(e*ge),t.height=Math.floor(n*ge),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(me*ge,he*ge).floor()},this.setDrawingBufferSize=function(e,n,r){me=e,he=n,ge=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(h===1009){qn(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){Ue(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}E.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(le)},this.getViewport=function(e){return e.copy(ye)},this.setViewport=function(e,t,n,r){e.isVector4?ye.set(e.x,e.y,e.z,e.w):ye.set(e,t,n,r),M.viewport(le.copy(ye).multiplyScalar(ge).round())},this.getScissor=function(e){return e.copy(be)},this.setScissor=function(e,t,n,r){e.isVector4?be.set(e.x,e.y,e.z,e.w):be.set(e,t,n,r),M.scissor(ue.copy(be).multiplyScalar(ge).round())},this.getScissorTest=function(){return xe},this.setScissorTest=function(e){M.setScissorTest(xe=e)},this.setOpaqueSort=function(e){_e=e},this.setTransparentSort=function(e){ve=e},this.getClearColor=function(e){return e.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor(...arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(oe!==null){let t=oe.texture.format;e=g.has(t)}if(e){let e=oe.texture.type,t=_.has(e),n=Je.getClearColor(),r=Je.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(v[0]=i,v[1]=a,v[2]=o,v[3]=r,A.clearBufferuiv(A.COLOR,0,v)):(y[0]=i,y[1]=a,y[2]=o,y[3]=r,A.clearBufferiv(A.COLOR,0,y))}else r|=A.COLOR_BUFFER_BIT}t&&(r|=A.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&A.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),k=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,nt,!1),t.removeEventListener(`webglcontextrestored`,rt,!1),t.removeEventListener(`webglcontextcreationerror`,it,!1),Je.dispose(),We.dispose(),Ge.dispose(),N.dispose(),Ie.dispose(),Be.dispose(),$e.dispose(),et.dispose(),Ve.dispose(),P.dispose(),P.removeEventListener(`sessionstart`,dt),P.removeEventListener(`sessionend`,ft),mt.stop()};function nt(e){e.preventDefault(),ze(`WebGLRenderer: Context Lost.`),O=!0}function rt(){ze(`WebGLRenderer: Context Restored.`),O=!1;let e=Pe.autoReset,t=qe.enabled,n=qe.autoUpdate,r=qe.needsUpdate,i=qe.type;tt(),Pe.autoReset=e,qe.enabled=t,qe.autoUpdate=n,qe.needsUpdate=r,qe.type=i}function it(e){qn(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function at(e){let t=e.target;t.removeEventListener(`dispose`,at),ot(t)}function ot(e){st(e),N.remove(e)}function st(e){let t=N.get(e).programs;t!==void 0&&(t.forEach(function(e){Ve.releaseProgram(e)}),e.isShaderMaterial&&Ve.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=ke);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=wt(e,t,n,r,i);M.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Re.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;$e.setup(i,r,s,n,c);let h,g=Xe;if(c!==null&&(h=Le.get(c),g=Ze,g.setIndex(h)),i.isMesh)r.wireframe===!0?(M.setLineWidth(r.wireframeLinewidth*je()),g.setMode(A.LINES)):g.setMode(A.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),M.setLineWidth(e*je()),i.isLineSegments?g.setMode(A.LINES):i.isLineLoop?g.setMode(A.LINE_LOOP):g.setMode(A.LINE_STRIP)}else i.isPoints?g.setMode(A.POINTS):i.isSprite&&g.setMode(A.TRIANGLES);if(i.isBatchedMesh){if(Ne.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Le.get(c).bytesPerElement:1,o=N.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(A,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function ct(e,t,n,r){k!==null&&e.isNodeMaterial&&k.setObject(r,e),we===!0&&Ke.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,bt(e,t,r),e.side=0,e.needsUpdate=!0,bt(e,t,r),e.side=2):bt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),k!==null&&k.renderStart(e,t,n),C=Ge.get(n),C.init(t),T.push(C),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(C.pushLight(e),e.castShadow&&C.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(C.pushLight(e),e.castShadow&&C.pushShadow(e))}),C.setupLights(),k!==null&&k.updateLights(C.state.lightsArray),Te=this.localClippingEnabled,we=Ke.init(this.clippingPlanes,Te),we===!0&&Ke.setGlobalState(this.clippingPlanes,t),k!==null&&qe.render(C.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];ct(o,n,t,e),r.add(o)}else ct(i,n,t,e),r.add(i)}}),C=T.pop(),k!==null&&k.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){let t=N.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}Ne.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let lt=null;function F(e){lt&&lt(e)}function dt(){mt.stop()}function ft(){mt.start()}let mt=new vr;mt.setAnimationLoop(F),typeof self<`u`&&mt.setContext(self),this.setAnimationLoop=function(e){lt=e,P.setAnimationLoop(e),e===null?mt.stop():mt.start()},P.addEventListener(`sessionstart`,dt),P.addEventListener(`sessionend`,ft),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){qn(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(O===!0)return;k!==null&&k.renderStart(e,t);let n=P.enabled===!0&&P.isPresenting===!0,r=E!==null&&(oe===null||n)&&E.begin(D,oe);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),P.enabled===!0&&P.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(P.cameraAutoUpdate===!0&&P.updateCamera(t),t=P.getCamera()),e.isScene===!0&&e.onBeforeRender(D,e,t,oe),C=Ge.get(e,T.length),C.init(t),C.state.textureUnits=Fe.getTextureUnits(),T.push(C),Ee.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),Ce.setFromProjectionMatrix(Ee,At,t.reversedDepth),Te=this.localClippingEnabled,we=Ke.init(this.clippingPlanes,Te),x=We.get(e,w.length),x.init(),w.push(x),P.enabled===!0&&P.isPresenting===!0){let e=D.xr.getDepthSensingMesh();e!==null&&ht(e,t,-1/0,D.sortObjects)}ht(e,t,0,D.sortObjects),x.finish(),k!==null&&k.updateLights(C.state.lightsArray),D.sortObjects===!0&&x.sort(_e,ve),Ae=P.enabled===!1||P.isPresenting===!1||P.hasDepthSensing()===!1,Ae&&Je.addToRenderList(x,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),we===!0&&Ke.beginShadows();let i=C.state.shadowsArray;if(qe.render(i,e,t),we===!0&&Ke.endShadows(),(r&&E.hasRenderPass())===!1){let n=x.opaque,r=x.transmissive;if(C.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];_t(n,r,e,a)}Ae&&Je.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];gt(x,e,n,n.viewport)}}else r.length>0&&_t(n,r,e,t),Ae&&Je.render(e),gt(x,e,t)}oe!==null&&ae===0&&(Fe.updateMultisampleRenderTarget(oe),Fe.updateRenderTargetMipmap(oe)),r&&E.end(D),e.isScene===!0&&e.onAfterRender(D,e,t),$e.resetDefaultState(),se=-1,ce=null,T.pop(),T.length>0?(C=T[T.length-1],Fe.setTextureUnits(C.state.textureUnits),we===!0&&Ke.setGlobalState(D.clippingPlanes,C.state.camera)):C=null,w.pop(),x=w.length>0?w[w.length-1]:null,k!==null&&k.renderEnd()};function ht(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)C.pushLightProbeGrid(e);else if(e.isLight)C.pushLight(e),e.castShadow&&C.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(Ce)){r&&Oe.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Ee);let i=Be.update(e),a=e.material;a.visible&&x.push(e,i,a,n,Oe.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(Ce))){let i=Be.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),Oe.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Oe.copy(e.boundingSphere.center)),Oe.applyMatrix4(e.matrixWorld).applyMatrix4(Ee)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&x.push(e,i,c,n,Oe.z,s,t)}}else a.visible&&x.push(e,i,a,n,Oe.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)ht(i[e],t,n,r)}function gt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;C.setupLightsView(n),we===!0&&Ke.setGlobalState(D.clippingPlanes,n),r&&M.viewport(le.copy(r)),i.length>0&&vt(i,t,n),a.length>0&&vt(a,t,n),o.length>0&&vt(o,t,n),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function _t(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[r.id]===void 0){let e=Ne.has(`EXT_color_buffer_half_float`)||Ne.has(`EXT_color_buffer_float`);C.state.transmissionRenderTarget[r.id]=new pn(1,1,{generateMipmaps:!0,type:e?m:Dt,minFilter:wn,samples:Math.max(4,j.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:hn.workingColorSpace})}let a=C.state.transmissionRenderTarget[r.id],o=r.viewport||le;a.setSize(o.z*D.transmissionResolutionScale,o.w*D.transmissionResolutionScale);let s=D.getRenderTarget(),c=D.getActiveCubeFace(),l=D.getActiveMipmapLevel();D.setRenderTarget(a),D.getClearColor(fe),pe=D.getClearAlpha(),pe<1&&D.setClearColor(16777215,.5),D.clear(),Ae&&Je.render(n);let u=D.toneMapping;D.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),C.setupLightsView(r),we===!0&&Ke.setGlobalState(D.clippingPlanes,r),vt(e,n,r),Fe.updateMultisampleRenderTarget(a),Fe.updateRenderTargetMipmap(a),Ne.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,yt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Fe.updateMultisampleRenderTarget(a),Fe.updateRenderTargetMipmap(a))}D.setRenderTarget(s,c,l),D.setClearColor(fe,pe),d!==void 0&&(r.viewport=d),D.toneMapping=u}function vt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&yt(o,t,n,s,l,c)}}function yt(e,t,n,r,i,a){k!==null&&i.isNodeMaterial&&k.setObject(e,i),e.onBeforeRender(D,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(D,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,D.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,D.renderBufferDirect(n,t,r,i,e,a),i.side=2):D.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(D,t,n,r,i,a)}function bt(e,t,n){t.isScene!==!0&&(t=ke);let r=N.get(e),i=C.state.lights,a=C.state.shadowsArray,o=i.state.version,s=Ve.getParameters(e,i.state,a,t,n,C.state.lightProbeGridArray),c=Ve.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Ie.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,at),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return St(e,s),d}else s.uniforms=Ve.getUniforms(e),k!==null&&e.isNodeMaterial&&k.build(e,n,s),e.onBeforeCompile(s,D),d=Ve.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Ke.uniform),St(e,s),r.needsLights=Et(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=C.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function xt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=pa.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function St(e,t){let n=N.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Ct(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];b.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(b))return n}return null}function wt(e,t,n,r,i){t.isScene!==!0&&(t=ke),Fe.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=oe===null?D.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:hn.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Ie.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(h=D.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=N.get(r),y=C.state.lights;if(we===!0&&(Te===!0||e!==ce)){let t=e===ce&&r.id===se;Ke.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Ke.numPlanes||v.numIntersection!==Ke.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=C.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=bt(r,t,i),k&&r.isNodeMaterial&&k.onUpdateProgram(r,x,v));let S=!1,w=!1,T=!1,E=x.getUniforms(),O=v.uniforms;if(M.useProgram(x.program)&&(S=!0,w=!0,T=!0),r.id!==se&&(se=r.id,w=!0),v.needsLights){let e=Ct(C.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,w=!0)}if(S||ce!==e){M.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),E.setValue(A,`projectionMatrix`,e.projectionMatrix),E.setValue(A,`viewMatrix`,e.matrixWorldInverse);let t=E.map.cameraPosition;t!==void 0&&t.setValue(A,De.setFromMatrixPosition(e.matrixWorld)),j.logarithmicDepthBuffer&&E.setValue(A,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&E.setValue(A,`isOrthographic`,e.isOrthographicCamera===!0),ce!==e&&(ce=e,w=!0,T=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&E.setValue(A,`sunShadowMap`,y.state.sunShadowMap,Fe),y.state.directionalShadowMap.length>0&&E.setValue(A,`directionalShadowMap`,y.state.directionalShadowMap,Fe),y.state.spotShadowMap.length>0&&E.setValue(A,`spotShadowMap`,y.state.spotShadowMap,Fe),y.state.pointShadowMap.length>0&&E.setValue(A,`pointShadowMap`,y.state.pointShadowMap,Fe)),i.isSkinnedMesh){E.setOptional(A,i,`bindMatrix`),E.setOptional(A,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),E.setValue(A,`boneTexture`,e.boneTexture,Fe))}i.isBatchedMesh&&(E.setOptional(A,i,`batchingTexture`),E.setValue(A,`batchingTexture`,i._matricesTexture,Fe),E.setOptional(A,i,`batchingIdTexture`),E.setValue(A,`batchingIdTexture`,i._indirectTexture,Fe),E.setOptional(A,i,`batchingColorTexture`),i._colorsTexture!==null&&E.setValue(A,`batchingColorTexture`,i._colorsTexture,Fe));let ee=n.morphAttributes;if((ee.position!==void 0||ee.normal!==void 0||ee.color!==void 0)&&Ye.update(i,n,x),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,E.setValue(A,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(O.envMapIntensity.value=t.environmentIntensity),O.dfgLUT!==void 0&&(O.dfgLUT.value=Fo()),w){if(E.setValue(A,`toneMappingExposure`,D.toneMappingExposure),v.needsLights&&Tt(O,T),a&&r.fog===!0&&He.refreshFogUniforms(O,a),He.refreshMaterialUniforms(O,r,ge,he,C.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;O.probesSH.value=e.texture,O.probesMin.value.copy(e.boundingBox.min),O.probesMax.value.copy(e.boundingBox.max),O.probesResolution.value.copy(e.resolution)}pa.upload(A,xt(v),O,Fe)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(pa.upload(A,xt(v),O,Fe),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&E.setValue(A,`center`,i.center),E.setValue(A,`modelViewMatrix`,i.modelViewMatrix),E.setValue(A,`normalMatrix`,i.normalMatrix),E.setValue(A,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];et.update(n,x),et.bind(n,x)}}return x}function Tt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Et(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return ie},this.getActiveMipmapLevel=function(){return ae},this.getRenderTarget=function(){return oe},this.setRenderTargetTextures=function(e,t,n){let r=N.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),N.get(e.texture).__webglTexture=t,N.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=N.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){oe=e,ie=t,ae=n;let r=null,i=!1,a=!1;if(e){let o=N.get(e);if(o.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(A.FRAMEBUFFER,o.__webglFramebuffer),le.copy(e.viewport),ue.copy(e.scissor),de=e.scissorTest,M.viewport(le),M.scissor(ue),M.setScissorTest(de),se=-1;return}if(o.__webglFramebuffer===void 0)Fe.setupRenderTarget(e);else if(o.__hasExternalTextures)Fe.rebindTextures(e,N.get(e.texture).__webglTexture,N.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&N.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);Fe.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=N.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&Fe.useMultisampledRTT(e)===!1?N.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,le.copy(e.viewport),ue.copy(e.scissor),de=e.scissorTest}else le.copy(ye).multiplyScalar(ge).floor(),ue.copy(be).multiplyScalar(ge).floor(),de=xe;if(n!==0&&(r=te),M.bindFramebuffer(A.FRAMEBUFFER,r)&&M.drawBuffers(e,r),M.viewport(le),M.scissor(ue),M.setScissorTest(de),i){let r=N.get(e.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=N.get(e.textures[t]);A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=N.get(e.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,t.__webglTexture,n)}se=-1};function Ot(e){let t=N.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=j.textureFormatReadable(e.format),t.__typeReadable=j.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){qn(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=N.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){M.bindFramebuffer(A.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+s);let u=Ot(o);if(u.__formatReadable===!1){qn(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){qn(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&A.readPixels(t,n,r,i,Qe.convert(c),Qe.convert(l),a)}finally{let e=oe===null?null:N.get(oe).__webglFramebuffer;M.bindFramebuffer(A.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=N.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){M.bindFramebuffer(A.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+s);let d=Ot(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,f),A.bufferData(A.PIXEL_PACK_BUFFER,a.byteLength,A.STREAM_READ),A.readPixels(t,n,r,i,Qe.convert(l),Qe.convert(u),0),A.bindBuffer(A.PIXEL_PACK_BUFFER,null);let p=oe===null?null:N.get(oe).__webglFramebuffer;M.bindFramebuffer(A.FRAMEBUFFER,p);let m=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await Rn(A,m,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,f),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,a),A.bindBuffer(A.PIXEL_PACK_BUFFER,null),A.deleteBuffer(f),A.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Fe.setTexture2D(e,0),A.copyTexSubImage2D(A.TEXTURE_2D,n,0,0,o,s,i,a),M.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=Qe.convert(t.format),_=Qe.convert(t.type),v;t.isData3DTexture?(Fe.setTexture3D(t,0),v=A.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Fe.setTexture2DArray(t,0),v=A.TEXTURE_2D_ARRAY):(Fe.setTexture2D(t,0),v=A.TEXTURE_2D),M.activeTexture(A.TEXTURE0),M.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,t.flipY),M.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),M.pixelStorei(A.UNPACK_ALIGNMENT,t.unpackAlignment);let y=M.getParameter(A.UNPACK_ROW_LENGTH),b=M.getParameter(A.UNPACK_IMAGE_HEIGHT),x=M.getParameter(A.UNPACK_SKIP_PIXELS),S=M.getParameter(A.UNPACK_SKIP_ROWS),C=M.getParameter(A.UNPACK_SKIP_IMAGES);M.pixelStorei(A.UNPACK_ROW_LENGTH,h.width),M.pixelStorei(A.UNPACK_IMAGE_HEIGHT,h.height),M.pixelStorei(A.UNPACK_SKIP_PIXELS,l),M.pixelStorei(A.UNPACK_SKIP_ROWS,u),M.pixelStorei(A.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=N.get(e),r=N.get(t),h=N.get(n.__renderTarget),g=N.get(r.__renderTarget);M.bindFramebuffer(A.READ_FRAMEBUFFER,h.__webglFramebuffer),M.bindFramebuffer(A.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,N.get(e).__webglTexture,i,d+n),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,N.get(t).__webglTexture,a,m+n)),A.blitFramebuffer(l,u,o,s,f,p,o,s,A.DEPTH_BUFFER_BIT,A.NEAREST);M.bindFramebuffer(A.READ_FRAMEBUFFER,null),M.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||N.has(e)){let n=N.get(e),r=N.get(t);M.bindFramebuffer(A.READ_FRAMEBUFFER,ne),M.bindFramebuffer(A.DRAW_FRAMEBUFFER,re);for(let e=0;e<c;e++)w?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,n.__webglTexture,i),T?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,r.__webglTexture,a),i===0?T?A.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):A.copyTexSubImage2D(v,a,f,p,l,u,o,s):A.blitFramebuffer(l,u,o,s,f,p,o,s,A.COLOR_BUFFER_BIT,A.NEAREST);M.bindFramebuffer(A.READ_FRAMEBUFFER,null),M.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?A.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?A.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):A.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):A.texSubImage2D(A.TEXTURE_2D,a,f,p,o,s,g,_,h);M.pixelStorei(A.UNPACK_ROW_LENGTH,y),M.pixelStorei(A.UNPACK_IMAGE_HEIGHT,b),M.pixelStorei(A.UNPACK_SKIP_PIXELS,x),M.pixelStorei(A.UNPACK_SKIP_ROWS,S),M.pixelStorei(A.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&A.generateMipmap(v),M.unbindTexture()},this.initRenderTarget=function(e){N.get(e).__webglFramebuffer===void 0&&Fe.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Fe.setTextureCube(e,0):e.isData3DTexture?Fe.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Fe.setTexture2DArray(e,0):Fe.setTexture2D(e,0),M.unbindTexture()},this.resetState=function(){ie=0,ae=0,oe=null,M.reset(),$e.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return At}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=hn._getDrawingBufferColorSpace(e),t.unpackColorSpace=hn._getUnpackColorSpace()}},Lo=new L;function Ro(e,t,n,r,i,a){let o=2*Math.PI*i/4,s=Math.max(a-2*i,0),c=Math.PI/4;Lo.copy(t),Lo[r]=0,Lo.normalize();let l=.5*o/(o+s),u=1-Lo.angleTo(e)/c;return Math.sign(Lo[n])===1?u*l:s/(o+s)+l+l*(1-u)}var zo=class e extends ht{constructor(e=1,t=1,n=1,r=2,i=.1){let a=r*2+1;if(i=Math.min(e/2,t/2,n/2,i),super(1,1,1,a,a,a),this.type=`RoundedBoxGeometry`,this.parameters={width:e,height:t,depth:n,segments:r,radius:i},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let s=new L,c=new L,l=new L(e,t,n).divideScalar(2).subScalar(i),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,p=u.length/6,m=new L,h=.5/a;for(let r=0,a=0;r<u.length;r+=3,a+=2)switch(s.fromArray(u,r),c.copy(s),c.x-=Math.sign(c.x)*h,c.y-=Math.sign(c.y)*h,c.z-=Math.sign(c.z)*h,c.normalize(),u[r+0]=l.x*Math.sign(s.x)+c.x*i,u[r+1]=l.y*Math.sign(s.y)+c.y*i,u[r+2]=l.z*Math.sign(s.z)+c.z*i,d[r+0]=c.x,d[r+1]=c.y,d[r+2]=c.z,Math.floor(r/p)){case 0:m.set(1,0,0),f[a+0]=Ro(m,c,`z`,`y`,i,n),f[a+1]=1-Ro(m,c,`y`,`z`,i,t);break;case 1:m.set(-1,0,0),f[a+0]=1-Ro(m,c,`z`,`y`,i,n),f[a+1]=1-Ro(m,c,`y`,`z`,i,t);break;case 2:m.set(0,1,0),f[a+0]=1-Ro(m,c,`x`,`z`,i,e),f[a+1]=Ro(m,c,`z`,`x`,i,n);break;case 3:m.set(0,-1,0),f[a+0]=1-Ro(m,c,`x`,`z`,i,e),f[a+1]=1-Ro(m,c,`z`,`x`,i,n);break;case 4:m.set(0,0,1),f[a+0]=1-Ro(m,c,`x`,`y`,i,e),f[a+1]=1-Ro(m,c,`y`,`x`,i,t);break;case 5:m.set(0,0,-1),f[a+0]=Ro(m,c,`x`,`y`,i,e),f[a+1]=1-Ro(m,c,`y`,`x`,i,t)}}static fromJSON(t){return new e(t.width,t.height,t.depth,t.segments,t.radius)}};function Bo(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new Tn,l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let e in d.morphAttributes){if(!i.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;o[e]===void 0&&(o[e]=[]),o[e].push(d.morphAttributes[e])}if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=Vo(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=Vo(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function Vo(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new fn(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}function Ho(e,t=1e-4){t=Math.max(t,2**-52);let n={},r=e.getIndex(),i=e.getAttribute(`position`),a=r?r.count:i.count,o=0,s=Object.keys(e.attributes),c={},l={},u=[],d=[`getX`,`getY`,`getZ`,`getW`],f=[`setX`,`setY`,`setZ`,`setW`];for(let t=0,n=s.length;t<n;t++){let n=s[t],r=e.attributes[n];c[n]=new r.constructor(new r.array.constructor(r.count*r.itemSize),r.itemSize,r.normalized);let i=e.morphAttributes[n];i&&(l[n]||(l[n]=[]),i.forEach((e,t)=>{let r=new e.array.constructor(e.count*e.itemSize);l[n][t]=new e.constructor(r,e.itemSize,e.normalized)}))}let p=t*.5,m=10**Math.log10(1/t),h=p*m;for(let t=0;t<a;t++){let i=r?r.getX(t):t,a=``;for(let t=0,n=s.length;t<n;t++){let n=s[t],r=e.getAttribute(n),o=r.itemSize;for(let e=0;e<o;e++)a+=`${Math.trunc(r[d[e]](i)*m+h)},`}if(a in n)u.push(n[a]);else{for(let t=0,n=s.length;t<n;t++){let n=s[t],r=e.getAttribute(n),a=e.morphAttributes[n],u=r.itemSize,p=c[n],m=l[n];for(let e=0;e<u;e++){let t=d[e],n=f[e];if(p[n](o,r[t](i)),a)for(let e=0,r=a.length;e<r;e++)m[e][n](o,a[e][t](i))}}n[a]=o,u.push(o),o++}}let g=e.clone();for(let t in e.attributes){let e=c[t];if(g.setAttribute(t,new e.constructor(e.array.slice(0,o*e.itemSize),e.itemSize,e.normalized)),t in l)for(let e=0;e<l[t].length;e++){let n=l[t][e];g.morphAttributes[t][e]=new n.constructor(n.array.slice(0,o*n.itemSize),n.itemSize,n.normalized)}}return g.setIndex(u),g}function Uo(e,t){if(t===0)return console.warn(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles.`),e;if(t===2||t===1){let n=e.getIndex();if(n===null){let t=[],r=e.getAttribute(`position`);if(r!==void 0){for(let e=0;e<r.count;e++)t.push(e);e.setIndex(t),n=e.getIndex()}else return console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible.`),e}let r=n.count-2,i=[];if(t===2)for(let e=1;e<=r;e++)i.push(n.getX(0)),i.push(n.getX(e)),i.push(n.getX(e+1));else for(let e=0;e<r;e++)e%2==0?(i.push(n.getX(e)),i.push(n.getX(e+1)),i.push(n.getX(e+2))):(i.push(n.getX(e+2)),i.push(n.getX(e+1)),i.push(n.getX(e)));return i.length/3!==r&&console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.`),e.setIndex(i),e.clearGroups(),e}return console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:`,t),e}var Wo={uCamPos:{value:new L},uSee:{value:new An(0,0,0,0)}},Go=`
uniform vec3 uCamPos;
uniform vec4 uSee;
void xrayDiscard(vec3 wp) {
  // height above the ground the tractor stands on (uSee.y = its ground + 1.1)
  float hy = wp.y - uSee.y + 1.1;
  if (uSee.w <= 0.0 || hy < 0.75) return;
  vec3 ab = uSee.xyz - uCamPos;
  float t = dot(wp - uCamPos, ab) / dot(ab, ab);
  if (t < 0.0 || t > 0.94) return;
  float d = length(wp - (uCamPos + ab * t));
  float hole = (1.0 - smoothstep(uSee.w * 0.35, uSee.w, d)) * smoothstep(0.75, 1.4, hy);
  // a halftone mesh: round holes on a screen grid that grow toward the middle of the window; at full
  // strength only a fine lattice is left, so the shape still reads while the tractor shows through
  vec2 cell = fract(gl_FragCoord.xy / 7.0) - 0.5;
  if (length(cell) < min(hole, 0.86) * 0.58) discard;
}`,Ko=null;function qo(){if(Ko)return Ko;let e=new Wn({vertexColors:!0});return e.onBeforeCompile=e=>{Object.assign(e.uniforms,Wo),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
varying vec3 vXWPos;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
vXWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying vec3 vXWPos;
`+Go).replace(`#include <color_fragment>`,`#include <color_fragment>
xrayDiscard(vXWPos);`)},e.customProgramCacheKey=()=>`xray-vc-v1`,Ko=e,e}var H=class{constructor(){this.parts=[],this.tmpColor=new I,this.bp=[],this.bn=[],this.bc=[]}add(e,t,n,r,i){let a=e.index?e.toNonIndexed():e.clone();e.index&&e.dispose();let o=new Pt,s=new Zn;r&&s.setFromEuler(Array.isArray(r)?new Xt(r[0],r[1],r[2]):r);let c=typeof i==`number`?new L(i,i,i):i?new L(i.x,i.y,i.z):new L(1,1,1);o.compose(n?new L(n.x,n.y,n.z):new L,s,c),a.applyMatrix4(o);for(let e of Object.keys(a.attributes))e!==`position`&&e!==`normal`&&a.deleteAttribute(e);a.attributes.normal||a.computeVertexNormals();let l=a.attributes.position.count,u=new Float32Array(l*3);this.tmpColor.set(t);for(let e=0;e<l;e++)u[e*3]=this.tmpColor.r,u[e*3+1]=this.tmpColor.g,u[e*3+2]=this.tmpColor.b;return a.setAttribute(`color`,new fn(u,3)),this.parts.push(a),this}addColored(e,t,n,r){let i=e.index?e.toNonIndexed():e.clone(),a=new Pt().compose(t?new L(t.x,t.y,t.z):new L,n?new Zn().setFromEuler(new Xt(n[0],n[1],n[2])):new Zn,new L(r==null?1:r,r==null?1:r,r==null?1:r));i.applyMatrix4(a);for(let e of Object.keys(i.attributes))e!==`position`&&e!==`normal`&&e!==`color`&&i.deleteAttribute(e);return this.parts.push(i),this}box(e,t,n,r,i,a=.06,o,s=1){let c=Math.min(a,e/2-.001,t/2-.001,n/2-.001);return c<=.005?this.plainBox(e,t,n,r,i,o):this.add(es(e,t,n,s,c),r,i,o)}plainBox(e,t,n,r,i,a){Jo.makeRotationFromEuler(a?Yo.set(a[0],a[1],a[2]):Yo.set(0,0,0));let o=Jo.elements;this.tmpColor.set(r);let s=this.tmpColor.r,c=this.tmpColor.g,l=this.tmpColor.b,u=e/2,d=t/2,f=n/2,p=this.bp,m=this.bn,h=this.bc;for(let e=0;e<6;e++){let[t,n,r]=Xo[e],a=t[0]*o[0]+t[1]*o[4]+t[2]*o[8],g=t[0]*o[1]+t[1]*o[5]+t[2]*o[9],_=t[0]*o[2]+t[1]*o[6]+t[2]*o[10];for(let[e,v]of Zo){let y=(t[0]+n[0]*e+r[0]*v)*u,b=(t[1]+n[1]*e+r[1]*v)*d,x=(t[2]+n[2]*e+r[2]*v)*f;p.push(y*o[0]+b*o[4]+x*o[8]+i.x,y*o[1]+b*o[5]+x*o[9]+i.y,y*o[2]+b*o[6]+x*o[10]+i.z),m.push(a,g,_),h.push(s,c,l)}}return this}cyl(e,t,n,r,i,a,o=12){let s=new In(e,t,n,o,1);return this.add(o<=4?rs(s):s,r,i,a)}gableRoof(e){var t,n,r,i,a,o;let s=(t=e.x)==null?0:t,c=(n=e.z)==null?0:n,l=(r=e.t)==null?.11:r,u=(i=e.over)==null?.2:i,d=(a=e.overG)==null?.16:a,f=e.d/2,p=Math.atan2(e.rise,f),m=Math.cos(p),h=Math.sin(p),g=f+u,_=g/m+l*.5,v=e.w+d*2,y=e.y+e.rise+l*.35,b=new I(e.color).multiplyScalar(.86);for(let t of[1,-1]){var x;let n=t*(g/2-l*.25*m),r=y-g/2*Math.tan(p)+h*l*.25,i=t*h,a=m;this.box(v,l,_,e.color,{x:s,y:r-l/2*a,z:c+n-l/2*i},Math.min(.045,l/2-.005),[t*p,0,0],2);let o=(x=e.rows)==null?3:x;for(let e=1;e<=o;e++){let l=_*(e/(o+1))-_/2;this.box(v-.04,.03,.06,b,{x:s,y:r+l*-h+a*.012,z:c+n+t*l*m+i*.012},.012,[t*p,0,0])}if(e.trim)for(let o of[-1,1])this.box(.07,l+.05,_,e.trim,{x:s+o*(v/2-.02),y:r-l/2*a,z:c+n-l/2*i},.025,[t*p,0,0])}return this.box(v+.06,.1,.22,(o=e.trim)==null?b:o,{x:s,y:y+.01,z:c},.045,void 0,2),this.prism([[-f,0],[f,0],[0,e.rise]],e.w-.02,e.wall,{x:s,y:e.y-.01,z:c}),this}prism(e,t,n,r,i){let a=new Qn(e.map(([e,t])=>new xt(-e,t))),o=new Te(a,{depth:t,bevelEnabled:!1});return o.applyMatrix4(new Pt().makeBasis(new L(0,0,-1),new L(0,1,0),new L(1,0,0))),o.translate(-t/2,0,0),this.add(rs(o),n,r,i)}hipRoof(e,t,n,r,i,a=`#ffffff`,o=.4){let s=e/2,c=t/2,l=Math.max(.05,s*o),u=.05,d=[[-s,0,-c],[s,0,-c],[s,0,c],[-s,0,c],[-l,n,-.05],[l,n,-.05],[l,n,u],[-l,n,u]],f=(e,t,n)=>[...d[e],...d[t],...d[n]],p=[...f(3,2,6),...f(3,6,7),...f(1,0,4),...f(1,4,5),...f(2,1,5),...f(2,5,6),...f(0,3,7),...f(0,7,4),...f(7,6,5),...f(7,5,4)],m=new Tn;return m.setAttribute(`position`,new j(p,3)),m.computeVertexNormals(),this.add(m,r,i),this.box(e+.12,.14,t+.12,a,{x:i.x,y:i.y-.04,z:i.z},.05,void 0,2),this}sphere(e,t,n,r,i=10){return this.add(new re(e,i,Math.max(6,Math.floor(i*.7))),t,n,void 0,r)}torus(e,t,n,r,i,a=14){return this.add(new P(e,t,6,a),n,r,i)}build(){if(this.bp.length){let e=new Tn;e.setAttribute(`position`,new j(this.bp,3)),e.setAttribute(`normal`,new j(this.bn,3)),e.setAttribute(`color`,new j(this.bc,3)),this.parts.push(e),this.bp=[],this.bn=[],this.bc=[]}let e=Bo(this.parts,!1);for(let e of this.parts)e.dispose();this.parts=[];let t=Qo(e,1e-4);return e.dispose(),t.computeBoundingSphere(),t.computeBoundingBox(),t}},Jo=new Pt,Yo=new Xt,Xo=[[[1,0,0],[0,1,0],[0,0,1]],[[-1,0,0],[0,0,1],[0,1,0]],[[0,1,0],[0,0,1],[1,0,0]],[[0,-1,0],[1,0,0],[0,0,1]],[[0,0,1],[1,0,0],[0,1,0]],[[0,0,-1],[0,1,0],[1,0,0]]],Zo=[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]];function Qo(e,t=1e-4){let n=Object.keys(e.attributes),r=n.map(t=>e.getAttribute(t));if(Object.keys(e.morphAttributes).length||r.some(e=>e.isInterleavedBufferAttribute||e.normalized||e.itemSize>4))return Ho(e,t);t=Math.max(t,2**-52);let i=t*.5,a=10**Math.log10(1/t),o=i*a,s=e.getIndex(),c=s?s.count:e.getAttribute(`position`).count,l=0;for(let e of r)l+=e.itemSize;let u=new Int32Array(Math.max(16,c)*l),d=1;for(;d<c*2;)d<<=1;let f=new Int32Array(d),p=r.map(e=>new e.array.constructor(e.count*e.itemSize)),m=Array(c),h=new Int32Array(l),g=0;for(let e=0;e<c;e++){let t=s?s.getX(e):e,n=0,i=2166136261;for(let e=0;e<r.length;e++){let s=r[e],c=s.array,l=s.itemSize,u=t*l;for(let e=0;e<l;e++){let t=c[u+e]*a+o|0;h[n++]=t,i=Math.imul(i^t,16777619)}}let c=i>>>0&d-1,_=-1;for(;;){let e=f[c];if(e===0)break;let t=(e-1)*l,n=!0;for(let e=0;e<l;e++)if(u[t+e]!==h[e]){n=!1;break}if(n){_=e-1;break}c=c+1&d-1}if(_>=0){m[e]=_;continue}if((g+1)*l>u.length){let e=new Int32Array(u.length*2);e.set(u),u=e}u.set(h,g*l);for(let e=0;e<r.length;e++){let n=r[e],i=n.itemSize;for(let r=0;r<i;r++)p[e][g*i+r]=n.array[t*i+r]}f[c]=g+1,m[e]=g++}let _=new Tn;for(let e=0;e<r.length;e++)_.setAttribute(n[e],new fn(p[e].slice(0,g*r[e].itemSize),r[e].itemSize,r[e].normalized));_.setIndex(m);for(let t of e.groups)_.addGroup(t.start,t.count,t.materialIndex);return _.setDrawRange(e.drawRange.start,e.drawRange.count),_}var $o=new Map;function es(e,t,n,r,i){let a=`${e}|${t}|${n}|${r}|${i}`,o=$o.get(a);if(o)return $o.delete(a),$o.set(a,o),o;let s=new zo(e,t,n,r,i),c=s.index?s.toNonIndexed():s;return o=new Tn,o.setAttribute(`position`,c.getAttribute(`position`)),o.setAttribute(`normal`,c.getAttribute(`normal`)),$o.set(a,o),$o.size>600&&$o.delete($o.keys().next().value),o}var ts=null;function ns(){return ts||(ts=new Wn({vertexColors:!0})),ts}var U=(e,t,n)=>({x:e,y:t,z:n});function rs(e){let t=e.index?e.toNonIndexed():e;return t!==e&&e.dispose(),t.deleteAttribute(`normal`),t.computeVertexNormals(),t}var is={uBendTime:{value:0},uHits:{value:Array.from({length:12},()=>new An(1e4,1e4,-100,0))},uHitDir:{value:Array.from({length:12},()=>new xt(1,0))}},as=0;function os(e,t,n,r,i){let a=Math.hypot(n,r)||1,o=is.uHits.value.findIndex(n=>Math.abs(n.x-e)<.01&&Math.abs(n.y-t)<.01);o<0&&(o=as,as=(as+1)%12),is.uHits.value[o].set(e,t,is.uBendTime.value,i),is.uHitDir.value[o].set(n/a,r/a)}var ss=null;function cs(){if(ss)return ss;let e=new Wn({vertexColors:!0});return e.onBeforeCompile=e=>{Object.assign(e.uniforms,is,Wo),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying vec3 vXWPos;
${Go}`).replace(`#include <color_fragment>`,`#include <color_fragment>
xrayDiscard(vXWPos);`),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
varying vec3 vXWPos;
attribute vec4 aBend;
uniform float uBendTime;
uniform vec4 uHits[12];
uniform vec2 uHitDir[12];`).replace(`#include <project_vertex>`,`vec4 bw = modelMatrix * vec4(transformed, 1.0);
if (aBend.z > 0.5) {
  for (int i = 0; i < 12; i++) {
    vec4 h = uHits[i];
    vec2 d = aBend.xy - h.xy;
    if (dot(d, d) > 0.0025) continue;
    float age = uBendTime - h.z;
    if (age < 0.0 || age > 2.8) continue;
    // a damped spring: first away from the tractor, then back and forth
    float w = h.w * exp(-age * 2.3) * sin(age * 12.5 + 1.25);
    float hk = smoothstep(0.1, 2.8, bw.y - aBend.w);
    bw.xz += uHitDir[i] * w * hk;
    bw.y -= abs(w) * hk * 0.1;
    // the crown jiggles too (squash and stretch around the trunk)
    float sq = h.w * exp(-age * 3.0) * sin(age * 17.0) * 0.18 * hk;
    bw.xz = aBend.xy + (bw.xz - aBend.xy) * (1.0 + sq);
    bw.y += sq * 0.6 * (bw.y - aBend.w - 1.2);
  }
}
vXWPos = bw.xyz;
vec4 mvPosition = viewMatrix * bw;
gl_Position = projectionMatrix * mvPosition;`)},e.customProgramCacheKey=()=>`bend-v4`,ss=e,e}function ls(e,t,n,r,i=0){let a=e.attributes.position.count,o=new Float32Array(a*4);for(let e=0;e<a;e++)o[e*4]=t,o[e*4+1]=n,o[e*4+2]=r,o[e*4+3]=i;return e.setAttribute(`aBend`,new fn(o,4)),e}var us=new Map;function ds(e,t){let n=us.get(e);if(!n){let r=new H;t(r),n=r.build(),us.set(e,n)}return n}var fs=new Map,ps=`#f6f0e2`,ms=`#e3dccd`,hs=[[`#e8453c`,`#ffffff`],[`#3a8df0`,`#ffffff`],[`#35c46a`,`#ffffff`],[`#ffb020`,`#ffffff`]];function gs(e,t,n,r,i,a,o,s){let c=new Tn,l=t/2,u=r/2,d=[-l,0,u,l,0,u,0,n,u,l,0,-u,-l,0,-u,0,n,-u,-l,0,-u,-l,0,u,0,n,u,-l,0,-u,0,n,u,0,n,-u,l,0,u,l,0,-u,0,n,-u,l,0,u,0,n,-u,0,n,u];c.setAttribute(`position`,new j(d,3)),c.computeVertexNormals(),e.add(c,i,U(a,o,s))}function _s(e,t,n,r,i,a,o,s=6,c=.32){for(let l=0;l<s;l++)e.box(i/s,.06,a,o[l%2],U(t-i/2+(l+.5)*(i/s),n,r),0,[c,0,0]);let l=r+a/2*Math.cos(c),u=n-a/2*Math.sin(c)-.08;for(let n=0;n<s;n++)e.box(i/s-.02,.16,.03,o[n%2],U(t-i/2+(n+.5)*(i/s),u,l),0)}function vs(){return ds(`cafe`,e=>{e.box(4.6,.06,3.6,`#e9dcc4`,U(0,.03,.2),0),e.box(1.8,1.4,1.2,`#fff4e0`,U(-1.3,.7,-1.3),.04),e.box(1.1,.45,.05,`#a9e2ff`,U(-1.3,1,-.68),0),e.box(1.98,.14,1.3,`#8a5a3b`,U(-1.3,1.47,-1.3),.03),_s(e,-1.3,1.36,-.45,1.9,.7,[`#e8453c`,`#ffffff`],6),e.cyl(.32,.32,.1,`#e8453c`,U(-1.3,1.75,-1.3),void 0,10),e.cyl(.22,.18,.3,`#ffffff`,U(-1.3,1.95,-1.3),void 0,10);for(let[t,n,r]of[[.9,-.9,`#3a8df0`],[1.4,1.1,`#ffd23f`],[-.9,1,`#35c46a`]]){e.cyl(.42,.42,.05,`#ffffff`,U(t,.72,n),void 0,12),e.cyl(.05,.08,.7,`#5b6270`,U(t,.36,n),void 0,6),e.cyl(.035,.035,1.4,`#e6ebf2`,U(t,1.4,n),void 0,6);for(let i=0;i<8;i++)e.add(new In(.06,1.05,.42,2,1,!1,i*Math.PI/4,Math.PI/4),i%2?`#ffffff`:r,U(t,2.15,n));for(let r of[.4,2.6]){let i=t+Math.cos(r)*.65,a=n+Math.sin(r)*.65;e.box(.36,.06,.36,`#c9853f`,U(i,.45,a),0),e.box(.05,.45,.05,`#5b6270`,U(i,.22,a),0)}}})}function ys(e,t){return ds(`meadow`+e.toFixed(1)+t.toFixed(1),n=>{let r=7,i=()=>(r=r*16807%2147483647)/2147483647,a=[`#ffffff`,`#ffd23f`,`#ff7ab8`,`#b89cff`,`#ffffff`,`#7fc8ff`];for(let r=0;r<24;r++){let o=(i()-.5)*e*.85,s=(i()-.5)*t*.85;Math.abs(o)<.7&&Math.abs(s)<.7||(n.cyl(.015,.02,.32,`#5a9a3a`,U(o,.16,s),void 0,3),n.sphere(.07,a[r%a.length],U(o,.34,s),1,5))}for(let r=0;r<16;r++){let a=(i()-.5)*e*.85,o=(i()-.5)*t*.85;n.cyl(0,.16,.5,r%2?`#5fae45`:`#559f3c`,U(a,.25,o),void 0,4)}n.cyl(.05,.06,1.5,`#8a5a3b`,U(0,.75,0),void 0,6),n.box(.36,.34,.32,`#f2d39b`,U(0,1.62,0),.02),n.cyl(.07,.07,.02,`#4a3020`,U(0,1.66,.165),[Math.PI/2,0,0],10),n.box(.08,.02,.08,`#8a5a3b`,U(0,1.55,.2),0),gs(n,.48,.2,.42,`#c9573a`,0,1.79,0),n.sphere(.06,`#3a8df0`,U(.05,2.02,.02),U(1,.85,1.3),6),n.sphere(.04,`#3a8df0`,U(.05,2.07,.08),1,5),n.box(.03,.015,.04,`#ffb020`,U(.05,2.07,.12),0)})}function bs(){return ds(`flowers`,e=>{e.cyl(1.75,1.8,.14,`#7a5238`,U(0,.07,0),void 0,20),e.cyl(1.65,1.65,.22,`#ff5a4f`,U(0,.12,0),void 0,20),e.cyl(1.15,1.15,.28,`#ffd23f`,U(0,.15,0),void 0,18),e.cyl(.65,.65,.34,`#ff7ab8`,U(0,.18,0),void 0,14),e.cyl(.05,.05,.8,`#8a5a3b`,U(0,.6,0),void 0,5),e.sphere(.36,`#4fae43`,U(0,1.1,0),1,8);for(let[t,n,r]of[[-2.5,-2.6,`#b89cff`],[2.5,-2.6,`#ffffff`],[-2.5,2.6,`#ff8a3d`],[2.5,2.6,`#7fc8ff`]])e.box(1.7,.3,.16,`#3f9a4a`,U(t,.15,n-.77),0),e.box(1.7,.3,.16,`#3f9a4a`,U(t,.15,n+.77),0),e.box(.16,.3,1.4,`#3f9a4a`,U(t-.77,.15,n),0),e.box(.16,.3,1.4,`#3f9a4a`,U(t+.77,.15,n),0),e.box(1.38,.24,1.38,r,U(t,.12,n),0)})}function xs(){return ds(`rotunda`,e=>{e.cyl(2.05,2.1,.16,ms,U(0,.08,0),void 0,20),e.cyl(1.85,1.85,.16,ms,U(0,.24,0),void 0,20),e.cyl(1.68,1.68,.1,ps,U(0,.37,0),void 0,20);for(let t=0;t<8;t++){let n=t/8*Math.PI*2,r=Math.cos(n)*1.4,i=Math.sin(n)*1.4;e.cyl(.12,.15,2.1,`#ffffff`,U(r,1.47,i),void 0,8),e.box(.34,.12,.34,ps,U(r,2.57,i),0),e.box(.32,.1,.32,ps,U(r,.47,i),0)}e.cyl(1.7,1.7,.34,ps,U(0,2.8,0),void 0,20),e.cyl(1.78,1.78,.08,`#ffffff`,U(0,3,0),void 0,20),e.add(new re(1.62,18,6,0,Math.PI*2,0,Math.PI/2),`#6fb59e`,U(0,3,0),void 0,U(1,.72,1)),e.cyl(.12,.16,.3,`#ffcf3c`,U(0,4.3,0),void 0,8),e.sphere(.14,`#ffcf3c`,U(0,4.55,0),1,8)})}function Ss(){return ds(`market`,e=>{e.box(5.6,.06,6.4,`#ddd2bd`,U(0,.03,0),0);let t=[`#ff8a2a`,`#e8333a`,`#7fd04f`,`#ffd23f`,`#b04ad0`,`#4fae3f`];for(let[n,r,i]of[[-1.6,-1.7,0],[1.6,-1.7,1],[-1.6,1.5,2],[1.6,1.5,3]]){e.box(1.9,.75,.9,`#c9853f`,U(n,.38,r),.03),e.box(1.9,.08,.95,`#a86a32`,U(n,.78,r),0);for(let a=0;a<6;a++){let o=t[(a+i)%t.length],s=n-.6+a%3*.6,c=r-.2+Math.floor(a/3)*.4;e.box(.5,.12,.34,`#8a5a3b`,U(s,.88,c),0);for(let t=0;t<3;t++)e.sphere(.1,o,U(s-.14+t*.14,1,c),1,5)}for(let t of[-.9,.9])for(let i of[-.5,.5])e.cyl(.035,.035,2.1,`#e6ebf2`,U(n+t,1.05,r+i),void 0,6);_s(e,n,2.1,r+.15,2.1,1.3,hs[i%hs.length],7,.28);let a=n+(i%2?1.25:-1.25);e.box(.45,.4,.45,`#d9a35a`,U(a,.2,r+.3),.02),e.box(.4,.36,.4,`#c48a45`,U(a,.58,r+.3),.02)}e.cyl(.1,.14,3.2,`#3d434d`,U(0,1.6,0),void 0,8),e.box(.62,.62,.62,`#3d434d`,U(0,3.35,0),.04);for(let t of[0,Math.PI/2,Math.PI,-Math.PI/2]){let n=Math.sin(t)*.32,r=Math.cos(t)*.32;e.cyl(.24,.24,.03,`#ffffff`,U(n,3.35,r),[Math.PI/2,0,-t],12)}e.cyl(0,.46,.4,`#2f7ad6`,U(0,3.86,0),void 0,4)})}function Cs(){return ds(`greenhouse2`,e=>{let t=.34;e.cyl(2.75,2.85,t,ms,U(0,t/2,0),void 0,28),e.cyl(2.48,2.48,.08,`#7a5238`,U(0,.38,0),void 0,28),e.cyl(1.62,1.62,.1,`#ece4d2`,U(0,.39,0),void 0,24),e.cyl(.78,.84,.26,`#d8cfbd`,U(0,.47000000000000003,0),void 0,18),e.cyl(.7,.7,.04,`#6b4a30`,U(0,.6100000000000001,0),void 0,18);let n=[`#ff5a8a`,`#ffd23f`,`#ff7a3d`,`#ffffff`,`#b06cf0`,`#ff4d4d`],r=[`#3f9a4a`,`#4fae43`,`#5fb84a`];for(let t=0;t<26;t++){let i=t/26*Math.PI*2+.06;if(Math.abs(Math.sin(i)-1)<.08)continue;let a=2.02+t%2*.22,o=Math.cos(i)*a,s=Math.sin(i)*a;t%3==0?e.add(new ce(.26,0),r[t%3],U(o,.5800000000000001,s),[t,t*2,0]):(e.cyl(.015,.02,.24,`#4f8f3a`,U(o,.52,s),void 0,4),e.sphere(.1,n[t%n.length],U(o,.67,s),U(1,.75,1),6))}let i=0,a=.6200000000000001,o=0;for(let t=0;t<6;t++){let n=.15-t*.016;e.cyl(n-.012,n,.32,t%2?`#b8905e`:`#a67e4e`,U(i,a+.16,o),[.05,0,-.06],8),a+=.32,i+=.016,o-=.019}for(let t=0;t<8;t++){let n=t/8*Math.PI*2+.2,r=.42+t%2*.2,s=Math.sin(n)*Math.cos(r),c=-Math.sin(r),l=Math.cos(n)*Math.cos(r);e.add(new re(.5,8,5),t%2?`#4fae43`:`#62c252`,U(i+s*.58,a-.06+c*.58,o+l*.58),new Xt(r,n,0,`YXZ`),U(.36,.07,1.25))}for(let t=0;t<3;t++)e.sphere(.075,`#8a5a32`,U(i+Math.cos(t*2.1)*.12,a-.12,o+Math.sin(t*2.1)*.12),1,6);e.cyl(.52,.56,.16,`#d8cfbd`,U(-1.05,.42000000000000004,.72),void 0,16),e.cyl(.44,.44,.04,`#5cc7e8`,U(-1.05,.49,.72),void 0,16),e.cyl(.12,.12,.02,`#5cb85c`,U(-.95,.52,.66),void 0,8),e.sphere(.05,`#ff9ac6`,U(-.95,.55,.66),1,6);for(let[t,n]of[[-1.15,-1],[1.2,-.85]]){e.cyl(.24,.18,.32,`#c96a3a`,U(t,.5,n),void 0,10);for(let r=0;r<4;r++){let i=r*1.6+t;e.sphere(.32,r%2?`#2f8a3f`:`#3f9a4a`,U(t+Math.cos(i)*.2,.9199999999999999+r%2*.12,n+Math.sin(i)*.2),U(1,.25,.7),7)}}for(let n=0;n<6;n++)e.add(new P(2.57,.045,4,18,Math.PI),`#ffffff`,U(0,t,0),[0,n*Math.PI/6,0]);e.torus(2.6,.07,`#ffffff`,U(0,.4,0),[Math.PI/2,0,0],28),e.torus(1.82,.05,`#ffffff`,U(0,2.14,0),[Math.PI/2,0,0],22),e.cyl(.42,.5,.5,`#ffffff`,U(0,2.95,0),void 0,12),e.torus(.44,.03,`#ffffff`,U(0,3.22,0),[Math.PI/2,0,0],14),e.cyl(.03,.05,.5,`#ffcf3c`,U(0,3.8,0),void 0,6),e.sphere(.1,`#ffcf3c`,U(0,4.08,0),1,8);for(let t of[-.42,.42])e.box(.1,1.45,.42,`#ffffff`,U(t,1.06,2.44),.03);e.box(.95,.12,.46,`#ffffff`,U(0,1.8,2.44),.03),e.prism([[-.5,0],[.5,0],[0,.28]],.44,`#ffffff`,U(0,1.86,2.44),[0,Math.PI/2,0]),e.box(.8,.06,.5,`#d8cfbd`,U(0,.36000000000000004,2.5),.02);for(let t=0;t<7;t++){let n=t/7*Math.PI*2+.2;e.sphere(.32,t%2?`#4fae43`:`#6cc452`,U(Math.cos(n)*3,.32,Math.sin(n)*3),U(1,.8,1),7),t%2&&e.sphere(.08,`#ff7ab8`,U(Math.cos(n)*3,.62,Math.sin(n)*3),1,5)}})}function ws(){return ds(`greenhouseGlass`,e=>{e.add(new re(2.53,28,10,0,Math.PI*2,0,Math.PI/2),`#ffffff`,U(0,.34,0)),e.add(new re(.43,14,5,0,Math.PI*2,0,Math.PI/2),`#ffffff`,U(0,3.2,0)),e.box(.72,1.3,.03,`#ffffff`,U(0,1,2.6),.01)})}var Ts={value:0},Es=null;function Ds(){return Es||(Es=new Le({uniforms:{uTime:Ts,uSun:{value:new L(-9,22,11).normalize()},uTint:{value:new I(`#bfeefa`)}},vertexShader:`
varying vec3 vN;
varying vec3 vW;
varying vec3 vL;
void main() {
  vec4 w = modelMatrix * vec4(position, 1.0);
  vW = w.xyz;
  vL = w.xyz - modelMatrix[3].xyz;
  vN = normalize(mat3(modelMatrix) * normal);
  gl_Position = projectionMatrix * viewMatrix * w;
}`,fragmentShader:`
uniform float uTime;
uniform vec3 uSun;
uniform vec3 uTint;
varying vec3 vN;
varying vec3 vW;
varying vec3 vL;
void main() {
  vec3 n = normalize(vN);
  if (!gl_FrontFacing) n = -n;
  vec3 v = normalize(cameraPosition - vW);
  float f = pow(1.0 - clamp(dot(n, v), 0.0, 1.0), 2.2);
  float spec = pow(max(dot(n, normalize(uSun + v)), 0.0), 110.0);
  // a glint sweeps diagonally over the glass every few seconds
  float s = fract(uTime * 0.21) * 9.0 - 3.5;
  float band = 1.0 - smoothstep(0.0, 0.32, abs(vL.x * 0.45 + vL.y * 0.7 - vL.z * 0.2 - s));
  float back = gl_FrontFacing ? 1.0 : 0.55;
  float a = (0.13 + f * 0.5 + band * 0.34) * back + spec * 0.9;
  vec3 col = mix(uTint, vec3(1.0), clamp(f * 0.5 + spec + band * 0.8, 0.0, 1.0));
  gl_FragColor = vec4(col, clamp(a, 0.0, 0.92));
}`,transparent:!0,depthWrite:!1,side:2}),Es)}function Os(){return ds(`ferrisStand`,e=>{e.box(4.4,.2,2,`#d8d2c4`,U(0,.1,0),.03);for(let t of[-.55,.55])for(let n of[-1,1])e.box(.16,4.9,.16,`#e6ebf2`,U(n*.82,2.35,t),0,[0,0,n*.36]);e.cyl(.18,.18,1.5,`#8b95a2`,U(0,4.45,0),[Math.PI/2,0,0],10),e.box(.9,1.1,.8,`#ffd23f`,U(1.7,.75,.3),.04),e.box(.6,.4,.05,`#a9e2ff`,U(1.7,.9,.72),0),e.cyl(0,.7,.45,`#e8453c`,U(1.7,1.55,.3),void 0,4)})}function ks(){let e=3.3;return{geo:ds(`ferrisWheel`,t=>{for(let n of[-.36,.36])t.torus(e,.07,`#ff5a8a`,U(0,0,n),[0,0,0],36),t.torus(e*.55,.05,`#ffd23f`,U(0,0,n),[0,0,0],24);for(let n=0;n<12;n++){let r=n/12*Math.PI*2;for(let n of[-.36,.36])t.box(.06,e,.06,`#ffffff`,U(Math.cos(r)*e/2,Math.sin(r)*e/2,n),0,[0,0,r-Math.PI/2]);t.box(.05,.05,.75,`#ffffff`,U(Math.cos(r)*e,Math.sin(r)*e,0),0),t.sphere(.09,n%3==0?`#ffd23f`:n%3==1?`#7fc8ff`:`#ff7ab8`,U(Math.cos(r+.26)*e,Math.sin(r+.26)*e,.42),1,6)}t.cyl(.32,.32,.9,`#e8453c`,U(0,0,0),[Math.PI/2,0,0],12)}),y:4.45,axis:`z`,speed:.32,cabin:{geo:ds(`ferrisCabin`,e=>{e.box(.62,.5,.52,`#ffffff`,U(0,-.55,0),.06),e.box(.5,.2,.54,`#e8f6ff`,U(0,-.45,0),0),e.box(.7,.08,.6,`#ffffff`,U(0,-.26,0),.02),e.box(.04,.24,.04,`#8b95a2`,U(0,-.12,0),0)}),r:e,n:12,colors:[`#ff5a4f`,`#3a8df0`,`#35c46a`,`#ffd23f`,`#b06cf0`,`#ff8a3d`]}}}function As(){return ds(`carouselBase`,e=>{e.cyl(2.1,2.2,.3,`#ffd23f`,U(0,.15,0),void 0,20),e.cyl(2,2,.06,`#ffffff`,U(0,.32,0),void 0,20),e.cyl(.2,.2,2.6,`#e8453c`,U(0,1.6,0),void 0,10)})}function js(){return{geo:ds(`carouselTop`,e=>{for(let t=0;t<10;t++)e.add(new In(.1,2.25,.95,2,1,!1,t*Math.PI/5,Math.PI/5),t%2?`#ffffff`:`#e8453c`,U(0,2.35,0));e.cyl(2.25,2.25,.22,`#ffd23f`,U(0,1.8,0),void 0,20);for(let t=0;t<10;t++)e.sphere(.07,`#fff3b0`,U(Math.cos(t/10*Math.PI*2)*2.27,1.7,Math.sin(t/10*Math.PI*2)*2.27),1,5);e.sphere(.18,`#ffd23f`,U(0,2.95,0),1,8);let t=[`#ffffff`,`#c98a4a`,`#ffffff`,`#3a3430`,`#ffffff`,`#ff7ab8`];for(let n=0;n<6;n++){let r=n/6*Math.PI*2,i=Math.cos(r)*1.45,a=Math.sin(r)*1.45,o=.75+n%2*.22;e.cyl(.03,.03,1.5,`#ffcf3c`,U(i,1.05,a),void 0,5),e.box(.24,.26,.62,t[n],U(i,o,a),.08,[0,-r,0]),e.box(.16,.34,.18,t[n],U(i-Math.sin(r)*.3,o+.22,a+Math.cos(r)*.3),.05,[0,-r,0]),e.box(.27,.06,.2,`#e8453c`,U(i,o+.15,a),0,[0,-r,0])}}),y:0,axis:`y`,speed:.9}}var Ms=.86;function Ns(){return ds(`stage`,e=>{e.box(5.4,.8,2.8,`#3d434d`,U(0,.4,0),.04),e.box(5.4,.08,2.8,`#5b6270`,U(0,.82,0),0),e.box(1.2,.4,.6,`#5b6270`,U(1.6,.2,1.65),0),e.box(5.2,2.8,.2,`#6a3fc4`,U(0,2.2,-1.32),.03);for(let t=0;t<5;t++)e.box(.24,1,.06,`#ffd23f`,U(0,2.4,-1.17),0,[0,0,t*Math.PI/5]);for(let t of[-1,1])e.box(.3,4,.3,`#c9ced6`,U(t*2.85,2,1),0),e.box(.3,4,.3,`#c9ced6`,U(t*2.85,2,-1),0),e.box(.8,1.4,.7,`#1f2228`,U(t*3.35,.7,1),.04),e.cyl(.26,.26,.04,`#5b6270`,U(t*3.35,.95,1.36),[Math.PI/2,0,0],12),e.cyl(.14,.14,.04,`#5b6270`,U(t*3.35,.4,1.36),[Math.PI/2,0,0],10);e.box(6,.3,.3,`#c9ced6`,U(0,4,1),0),e.box(6,.3,.3,`#c9ced6`,U(0,4,-1),0);let t=[`#ff5a4f`,`#ffd23f`,`#35c46a`,`#3a8df0`,`#ff7ab8`,`#ffffff`];for(let n=0;n<6;n++){let r=-2.25+n*.9;e.cyl(.14,.2,.3,`#26282c`,U(r,3.72,1),void 0,8),e.sphere(.13,t[n],U(r,3.55,1),1,6)}e.cyl(.02,.02,1.2,`#26282c`,U(0,1.45,.6),void 0,5),e.sphere(.06,`#26282c`,U(0,2.07,.6),1,6)})}function Ps(e,t){return ds(`apartments`+e+t,n=>{let r=5.4;n.box(5.7,.5,3.6999999999999997,`#c9bfae`,U(0,.25,0),.02),n.box(r,4.2,3.4,e,U(0,2.6,0),.03);for(let e of[1.85,3.2])n.box(5.5200000000000005,.1,3.52,`#ffffff`,U(0,e,0),0);n.box(5.7,.24,3.6999999999999997,`#ffffff`,U(0,4.8,0),.02);for(let e=0;e<3;e++){let t=1.2+e*1.35;for(let r=0;r<5;r++){let i=-2.1+r*1.05;(e!==0||r!==2)&&(n.box(.52,.72,.05,`#a9e2ff`,U(i,t,1.71),0),n.box(.64,.08,.1,`#ffffff`,U(i,t-.42,1.74),0),n.box(.64,.1,.06,`#ffffff`,U(i,t+.42,1.73),0),e>0&&r%2==1&&(n.box(.8,.06,.38,`#ffffff`,U(i,t-.45,1.9),0),n.box(.8,.26,.04,`#ffffff`,U(i,t-.3,2.08),0),n.sphere(.09,e%2?`#ff5a4f`:`#ff7ab8`,U(i-.25,t-.3,2.06),1,5)))}for(let e of[-1,1])for(let i of[-.8,.8])n.box(.05,.72,.52,`#a9e2ff`,U(e*r/2+e*.01,t,i),0)}n.box(1,1.25,.06,`#8a5a3b`,U(0,1.12,1.72),0);for(let e of[-.62,.62])n.cyl(.09,.11,1.5,`#ffffff`,U(e,1.25,2.25),void 0,8);n.box(1.6,.14,.75,`#ffffff`,U(0,2.05,2.08),0),gs(n,1.7,.45,.75,`#ffffff`,0,2.12,2.08),n.hipRoof(5.6000000000000005,3.6,1.05,t,U(0,4.94,0),`#ffffff`,.38),n.box(.36,.9,.36,`#b85a3a`,U(1.6,5.7,-.6),.03),n.box(.44,.08,.44,`#8a3f28`,U(1.6,6.17,-.6),.02)})}function Fs(){return ds(`townhall`,e=>{e.box(7.6,.2,5.2,ms,U(0,.1,.2),.02),e.box(7.2,.2,4.8,ms,U(0,.3,.2),.02),e.box(6.6,3,3.4,ps,U(0,1.9,-.3),.03),e.box(6.8,.26,3.6,`#ffffff`,U(0,3.5,-.3),.02),e.box(6.6,.3,3.2,`#5fa88a`,U(0,3.75,-.4),.02);for(let t=0;t<2;t++)for(let n of[-2.7,-1.9,1.9,2.7])e.box(.5,.8,.05,`#a9e2ff`,U(n,1.25+t*1.3,1.41),0),e.box(.6,.08,.1,`#ffffff`,U(n,.8+t*1.3,1.44),0);e.box(3.8,.12,1.3,ms,U(0,.46,1.9),0);for(let t=0;t<6;t++){let n=-1.6+t*.64;e.cyl(.13,.16,2.6,`#ffffff`,U(n,1.82,2.2),void 0,10),e.box(.34,.12,.34,`#ffffff`,U(n,3.16,2.2),0)}e.box(4,.36,1.1,`#ffffff`,U(0,3.38,1.95),0),gs(e,4.1,.85,1.1,`#ffffff`,0,3.56,1.95),e.cyl(.26,.26,.04,`#ffcf3c`,U(0,3.86,2.52),[Math.PI/2,0,0],12),e.box(.9,1.6,.06,`#8a5a3b`,U(0,1.32,1.42),0),e.box(1.7,2.6,1.7,ps,U(0,4.9,-.5),.03),e.box(1.9,.18,1.9,`#ffffff`,U(0,6.25,-.5),0);for(let t of[0,Math.PI/2,-Math.PI/2]){let n=Math.sin(t)*.86,r=Math.cos(t)*.86;e.cyl(.55,.55,.05,`#ffffff`,U(n,5.1,-.5+r),[Math.PI/2,0,-t],16),e.add(new P(.55,.04,4,16),`#ffcf3c`,U(n*1.03,5.1,-.5+r*1.03),[0,t,0]),e.box(.05,.4,.03,`#2a2f3a`,U(n*1.06,5.25,-.5+r*1.06),0,[0,t,0]),e.box(.3,.05,.03,`#2a2f3a`,U(n*1.06+Math.cos(t)*.12,5.1,-.5+r*1.06-Math.sin(t)*.12),0,[0,t,0])}for(let t of[-.62,.62])for(let n of[-.62,.62])e.box(.18,1,.18,`#ffffff`,U(t,6.85,-.5+n),0);e.box(1.6,.16,1.6,`#ffffff`,U(0,7.42,-.5),0),e.cyl(.25,.3,.5,`#ffcf3c`,U(0,6.7,-.5),void 0,8),e.add(new re(.85,14,6,0,Math.PI*2,0,Math.PI/2),`#5fa88a`,U(0,7.5,-.5),void 0,U(1,1.1,1)),e.cyl(.03,.06,1.2,`#ffcf3c`,U(0,8.9,-.5),void 0,6),e.box(.6,.36,.03,`#e8453c`,U(.32,9.25,-.5),0)})}function Is(){return ds(`monument`,e=>{e.cyl(3,3.05,.08,`#e3dccd`,U(0,.04,0),void 0,26),e.add(new P(2.2,.22,4,22),`#4fae43`,U(0,.12,0),[Math.PI/2,0,0]);for(let t=0;t<12;t++){let n=t/12*Math.PI*2;e.sphere(.1,[`#ff5a4f`,`#ffd23f`,`#ff7ab8`][t%3],U(Math.cos(n)*2.2,.32,Math.sin(n)*2.2),1,5)}e.box(1.9,.35,1.9,`#b8b0a2`,U(0,.25,0),.03),e.box(1.4,1.5,1.4,`#cfc7b6`,U(0,1.15,0),.03),e.box(1.6,.16,1.6,`#b8b0a2`,U(0,1.98,0),.03),e.box(.8,.4,.04,`#ffcf3c`,U(0,1.15,.72),0);let t=`#ffcf3c`,n=`#e0a412`;e.box(.62,.18,1.3,n,U(0,2.38,0),.04),e.box(.5,.3,.45,t,U(0,2.6100000000000003,.32),.06),e.box(.55,.06,.45,t,U(0,3.06,-.12),.02);for(let n of[-.25,.25])e.box(.05,.5,.05,t,U(n,2.81,-.3),0);e.sphere(.12,t,U(0,2.84,-.08),1,8),e.sphere(.13,n,U(0,2.9,-.08),U(1,.6,1),8);for(let t of[-.4,.4])e.cyl(.3,.3,.18,n,U(t,2.36,-.35),[0,0,Math.PI/2],12),e.cyl(.2,.2,.14,n,U(t*.95,2.2600000000000002,.42),[0,0,Math.PI/2],10);e.box(.08,.08,.6,n,U(0,2.34,.85),0),e.cyl(.42,.42,.04,t,U(0,2.3,1.2),[Math.PI/2,0,0],16);for(let t=0;t<12;t++){let n=t/12*Math.PI*2;e.box(.08,.08,.05,`#fff2a0`,U(Math.cos(n)*.45,2.3+Math.sin(n)*.45,1.22),0,[0,0,n])}})}function Ls(){return ds(`pier`,e=>{for(let t=0;t<9;t++)e.box(1.3,.07,.3,t%2?`#b7854f`:`#c9955c`,U(0,0,.2+t*.32),.01);for(let t of[-.58,.58]){e.box(.06,.06,2.9,`#8a5a3b`,U(t,-.06,1.48),0);for(let n of[.3,1.5,2.7])e.cyl(.07,.07,.9,`#7a4f33`,U(t,-.35,n),void 0,6);e.cyl(.04,.04,.55,`#8a5a3b`,U(t,.3,2.75),void 0,5)}e.box(1.2,.05,.05,`#ffffff`,U(0,.53,2.75),0),e.torus(.16,.05,`#ff5a4f`,U(.58,.32,2.2),[0,Math.PI/2,0],10)})}function Rs(){return ds(`rowboat`,e=>{let t=new re(.5,10,6,0,Math.PI*2,Math.PI/2,Math.PI/2);e.add(t,`#e8453c`,U(0,.18,0),void 0,U(.9,.55,2)),e.add(new In(.42,.42,.04,12),`#c9955c`,U(0,.15,0),void 0,U(.95,1,2.1)),e.box(.8,.05,.16,`#8a5a3b`,U(0,.2,.15),0),e.box(.06,.04,1.3,`#b7854f`,U(.38,.25,0),0,[0,.25,.3])})}function zs(){return ds(`reeds`,e=>{for(let t=0;t<7;t++){let n=t*2.3,r=.08+t%3*.06,i=.6+t%4*.14;e.cyl(.012,.02,i,t%2?`#5a9a3a`:`#6fb04a`,U(Math.cos(n)*r,i/2,Math.sin(n)*r),[Math.cos(n)*.12,0,Math.sin(n)*.12],3),t%3==0&&e.cyl(.035,.035,.16,`#7a4f2a`,U(Math.cos(n)*r,i-.05,Math.sin(n)*r),void 0,5)}})}function Bs(){return ds(`clockPost`,e=>{e.cyl(.55,.65,.3,`#d8d2c4`,U(0,.15,0),void 0,14),e.cyl(.11,.15,3.2,`#3d434d`,U(0,1.75,0),void 0,8),e.box(.66,.66,.66,`#3d434d`,U(0,3.5,0),.04);for(let t of[0,Math.PI/2,Math.PI,-Math.PI/2]){let n=Math.sin(t)*.34,r=Math.cos(t)*.34;e.cyl(.26,.26,.03,`#ffffff`,U(n,3.5,r),[Math.PI/2,0,-t],12),e.box(.03,.18,.02,`#2a2f3a`,U(n*1.06,3.56,r*1.06),0,[0,t,0])}e.cyl(0,.5,.42,`#2f7ad6`,U(0,4.04,0),void 0,4),e.sphere(.08,`#ffcf3c`,U(0,4.3,0),1,6)})}function Vs(){return ds(`guitarStatue`,e=>{e.cyl(1.1,1.25,.35,`#d8d2c4`,U(0,.18,0),void 0,16),e.box(1,.9,1,`#cfc7b6`,U(0,.8,0),.04);let t=`#ffcf3c`,n=`#e0a412`,r=[0,0,-.35],i=new H;i.cyl(.62,.62,.22,t,U(0,0,0),[Math.PI/2,0,0],16),i.cyl(.48,.48,.22,t,U(0,.72,0),[Math.PI/2,0,0],16),i.cyl(.16,.16,.24,`#2a2f3a`,U(0,.35,.02),[Math.PI/2,0,0],10),i.box(.16,1.6,.12,n,U(0,1.75,0),.02),i.box(.3,.4,.13,n,U(0,2.7,0),.03);for(let e=-1;e<=1;e+=2)i.box(.025,2.2,.02,`#ffffff`,U(e*.04,1.45,.12),0);let a=i.build();e.addColored(a,U(0,1.85,0),r),a.dispose()})}function Hs(){return ds(`flowerBed`,e=>{e.cyl(1.25,1.3,.22,`#d8d2c4`,U(0,.11,0),void 0,18),e.cyl(1.12,1.12,.28,`#7a5238`,U(0,.14,0),void 0,18),e.cyl(1.02,1.02,.36,`#ff7ab8`,U(0,.18,0),void 0,18),e.cyl(.7,.7,.44,`#ffd23f`,U(0,.22,0),void 0,16),e.cyl(.38,.38,.52,`#ff5a4f`,U(0,.26,0),void 0,12),e.sphere(.3,`#4fae43`,U(0,.75,0),1,8)})}var Us=[],Ws=new Pt,Gs=new L,Ks=new Zn,qs=new L(1,1,1);function Js(e,t,n,r,i,a,o,s=0){let c=new B;c.position.set(r,s+e.y*o,i),c.rotation.y=a,c.scale.setScalar(o);let l=new F(e.geo,n);l.userData.shared=!0,l.castShadow=!0,c.add(l);let u=null;if(e.cabin){u=new yn(e.cabin.geo,n,e.cabin.n),u.castShadow=!0,u.userData.shared=!0;let t=new I;for(let n=0;n<e.cabin.n;n++)u.setColorAt(n,t.set(e.cabin.colors[n%e.cabin.colors.length]));c.add(u)}t.add(c);let d={pivot:c,wheel:l,part:e,cabins:u,a:Math.random()*6};return e.tag&&fs.set(e.tag,l),Us.push(d),Xs(d),c}function Ys(e){let t=e;for(;t;){if(t.isScene)return!0;t=t.parent}return!1}function Xs(e){if(e.part.axis===`y`?e.wheel.rotation.y=e.a:e.wheel.rotation.z=e.a,e.cabins&&e.part.cabin){let{r:t,n}=e.part.cabin;for(let r=0;r<n;r++){let i=e.a+r/n*Math.PI*2;Gs.set(Math.cos(i)*t,Math.sin(i)*t+Math.sin(e.a*3+r)*.02,0),e.cabins.setMatrixAt(r,Ws.compose(Gs,Ks,qs))}e.cabins.instanceMatrix.needsUpdate=!0,e.cabins.computeBoundingSphere()}}function Zs(e){Ts.value+=e;for(let t=Us.length-1;t>=0;t--){let n=Us[t];if(!Ys(n.pivot)){Us.splice(t,1);continue}n.a+=n.part.speed*e,Xs(n)}}var Qs=new Map;function $s(e,t){let n=Qs.get(e);if(!n){let r=new H;t(r),n=r.build(),Qs.set(e,n)}return n}var ec=(e,t)=>new I(e).multiplyScalar(t);function tc(e=`#5fb84a`){return $s(`roundTree`+e,t=>{t.cyl(.13,.18,1.2,`#8a5a3b`,U(0,.6,0),void 0,6),t.add(new ce(1,1),e,U(0,1.8,0)),t.add(new ce(.7,1),ec(e,1.1),U(.45,2.35,.2)),t.add(new ce(.6,1),ec(e,.92),U(-.5,2.2,-.25))})}function nc(e=`#3f9a4a`){return $s(`pineTree`+e,t=>{t.cyl(.12,.16,.8,`#8a5a3b`,U(0,.4,0),void 0,6),t.cyl(0,1,1.4,e,U(0,1.35,0),void 0,8),t.cyl(0,.78,1.2,ec(e,1.1),U(0,2.05,0),void 0,8),t.cyl(0,.52,.9,ec(e,1.2),U(0,2.65,0),void 0,8)})}function rc(e=`#58b04a`,t=null){return $s(`bush`+e+t,n=>{if(n.add(new ce(.5,1),e,U(0,.35,0),void 0,U(1.2,.85,1)),n.add(new ce(.36,1),ec(e,1.1),U(.42,.3,.1)),t)for(let e=0;e<6;e++){let r=e*1.1;n.sphere(.07,t,U(Math.cos(r)*.45,.5+e%2*.12,Math.sin(r)*.35),1,5)}})}function ic(){return $s(`bench`,e=>{for(let t=0;t<3;t++)e.box(1.5,.05,.12,`#c9853f`,U(0,.45,-.14+t*.14),0);for(let t=0;t<2;t++)e.box(1.5,.12,.05,`#c9853f`,U(0,.7+t*.16,-.26),0);for(let t of[-.62,.62])e.box(.07,.45,.07,`#3d434d`,U(t,.22,.12),0),e.box(.07,.85,.07,`#3d434d`,U(t,.42,-.29),0)})}function ac(){return $s(`lamp`,e=>{e.cyl(.06,.08,2.6,`#3d434d`,U(0,1.3,0),void 0,6),e.cyl(.2,.12,.2,`#3d434d`,U(0,2.62,0),void 0,8),e.sphere(.16,`#fff3b0`,U(0,2.5,0),1,8)})}function oc(){return $s(`fountain`,e=>{e.cyl(2,2.1,.12,`#d8d2c4`,U(0,.06,0),void 0,20),e.cyl(1.35,1.45,.5,`#e8e2d6`,U(0,.25,0),void 0,18),e.cyl(1.18,1.18,.06,`#5cc7e8`,U(0,.46,0),void 0,18),e.cyl(.18,.26,.9,`#e8e2d6`,U(0,.8,0),void 0,10),e.cyl(.62,.42,.16,`#e8e2d6`,U(0,1.28,0),void 0,14),e.cyl(.52,.52,.04,`#5cc7e8`,U(0,1.37,0),void 0,14),e.cyl(.08,.12,.5,`#e8e2d6`,U(0,1.55,0),void 0,8),e.add(new rn(.3,.5,10),`#bfeaff`,U(0,1.95,0))})}function sc(){return $s(`playground`,e=>{e.box(4.2,.08,3,`#f0d49a`,U(0,.04,0),0);for(let[t,n]of[[-1.6,-.9],[-.8,-.9],[-1.6,-.1],[-.8,-.1]])e.box(.1,1.5,.1,`#3a8df0`,U(t,.75,n),0);e.box(1,.1,1,`#ff8a3d`,U(-1.2,1.5,-.5),0),e.add(rs(new rn(.8,.7,4)),`#ff5a4f`,U(-1.2,2.2,-.5),[0,Math.PI/4,0]),e.box(.7,.08,1.9,`#ffd23f`,U(-1.2,.8,.9),0,[.72,0,0]),e.box(.08,.2,1.9,`#ffb020`,U(-1.55,.9,.9),0,[.72,0,0]),e.box(.08,.2,1.9,`#ffb020`,U(-.85,.9,.9),0,[.72,0,0]);for(let t of[.6,1.9])e.box(.1,1.9,.1,`#35c46a`,U(t,.95,-.9),0,[0,0,t<1?.25:-.25]),e.box(.1,1.9,.1,`#35c46a`,U(t,.95,.5),0,[0,0,t<1?.25:-.25]);e.box(1.5,.1,.1,`#35c46a`,U(1.25,1.85,-.9),0),e.box(1.5,.1,.1,`#35c46a`,U(1.25,1.85,.5),0),e.box(.1,.1,1.5,`#35c46a`,U(1.25,1.85,-.2),0);for(let t of[-.55,.15])e.box(.02,1.2,.02,`#8b95a2`,U(1.1,1.2,t),0),e.box(.02,1.2,.02,`#8b95a2`,U(1.4,1.2,t),0),e.box(.42,.05,.22,`#ff5a4f`,U(1.25,.6,t),0)})}function cc(e,t){return $s(`cottage`+e+t,n=>{n.box(3.2,.2,2.8,`#b8b0a2`,U(0,.1,0),.04),n.box(3,1.8,2.6,t,U(0,1.1,0),.06),n.box(3.06,.22,2.66,`#d8cbb4`,U(0,.31,0),.04),n.gableRoof({y:2,w:3,d:2.6,rise:1.25,color:e,wall:t,trim:`#ffffff`,over:.24,overG:.2,t:.13,rows:3}),n.box(.62,1.1,.06,`#8a5a3b`,U(-.6,.75,1.31),.02),n.box(.74,.08,.1,`#ffffff`,U(-.6,1.33,1.33),.02),n.box(.86,.07,.36,e,U(-.6,1.5,1.44),.03,[.25,0,0]),n.box(.8,.1,.3,`#cfc6b6`,U(-.6,.25,1.45),.03),n.sphere(.04,`#ffd23f`,U(-.4,.75,1.35),1,6);for(let e of[.55,1.1])n.box(.46,.5,.05,`#a9e2ff`,U(e,1.25,1.31),0),n.box(.52,.06,.08,`#ffffff`,U(e,.98,1.33),.02),n.box(.52,.06,.06,`#ffffff`,U(e,1.52,1.32),.02);n.box(.46,.5,.05,`#a9e2ff`,U(1.51,1.25,.2),0,[0,Math.PI/2,0]),n.box(.36,1,.36,`#b85a3a`,U(.9,2.95,-.4),.03),n.box(.44,.08,.44,`#8a3f28`,U(.9,3.47,-.4),.02),n.box(.55,.12,.14,`#8a5a3b`,U(.55,.93,1.42),0);for(let e=0;e<4;e++)n.sphere(.06,[`#ff5a4f`,`#ffd23f`,`#ff7ab8`,`#ffffff`][e],U(.36+e*.13,1.06,1.42),1,5)})}function lc(e){return $s(`fence`+e.toFixed(1),t=>{let n=Math.max(2,Math.round(e/.3));for(let r=0;r<n;r++){let i=-e/2+(r+.5)*(e/n);t.box(.1,.62,.04,`#ffffff`,U(i,.31,0),0),t.add(rs(new rn(.07,.1,4)),`#ffffff`,U(i,.66,0),[0,Math.PI/4,0])}t.box(e,.06,.03,`#f0ede6`,U(0,.44,-.03),0),t.box(e,.06,.03,`#f0ede6`,U(0,.2,-.03),0)})}function uc(){return $s(`pond`,e=>{let t=new In(2.3,2.4,.1,22);e.add(t,`#b9b3a6`,U(0,.05,0),void 0,U(1.3,1,1));let n=new In(2.05,2.05,.06,22);e.add(n,`#4fb6e3`,U(0,.09,0),void 0,U(1.3,1,1));for(let[t,n,r]of[[-1.2,.5,.3],[1,-.6,.26],[.3,1.1,.22]])e.cyl(r,r,.03,`#5cb85c`,U(t,.13,n),void 0,8);e.sphere(.08,`#ff7ab8`,U(-1.2,.18,.5),1,6);for(let[t,n,r]of[[.4,-.2,.3],[-.4,-.7,2.2]])e.sphere(.2,`#ffd23f`,U(t,.2,n),U(1.3,.8,1),8),e.sphere(.12,`#ffd23f`,U(t+Math.sin(r)*.22,.38,n+Math.cos(r)*.22),1,8),e.box(.08,.04,.1,`#ff8a3d`,U(t+Math.sin(r)*.33,.37,n+Math.cos(r)*.33),0,[0,r,0]);for(let t=0;t<6;t++){let n=t/6*Math.PI*2+.3;e.add(new D(.22,0),`#9aa1a8`,U(Math.cos(n)*2.95,.12,Math.sin(n)*2.25))}for(let t=0;t<5;t++)e.cyl(.02,.03,.8,`#5a9a3a`,U(2.2+t%3*.12,.4,-.9+t*.1),[.1*(t-2),0,.1],4)})}function dc(){return $s(`court`,e=>{e.box(5,.06,3.4,`#e8793a`,U(0,.03,0),0),e.box(4.6,.02,.06,`#ffffff`,U(0,.07,1.5),0),e.box(4.6,.02,.06,`#ffffff`,U(0,.07,-1.5),0),e.box(.06,.02,3,`#ffffff`,U(2.3,.07,0),0),e.box(.06,.02,3,`#ffffff`,U(-2.3,.07,0),0),e.box(.06,.02,3,`#ffffff`,U(0,.07,0),0),e.add(new P(.55,.04,4,20),`#ffffff`,U(0,.07,0),[Math.PI/2,0,0]);for(let t of[-1,1])e.cyl(.07,.07,2.4,`#3d434d`,U(t*2.6,1.2,0),void 0,6),e.box(.06,.7,1,`#ffffff`,U(t*2.45,2.3,0),0),e.add(new P(.2,.03,4,10),`#ff5a4f`,U(t*2.2,2.05,0),[Math.PI/2,0,0])})}function fc(){return $s(`garden`,e=>{for(let t=0;t<3;t++){let n=-1.1+t*1.1;e.box(3.6,.2,.7,`#7a5238`,U(0,.1,n),0);for(let r=0;r<6;r++){let i=-1.5+r*.6;t===1?e.sphere(.2,`#ff8a2a`,U(i,.32,n),U(1.1,.8,1.1),7):(e.add(new ce(.2,0),t?`#6fce4f`:`#4fae3f`,U(i,.34,n)),t===2&&e.sphere(.07,`#ff4d4d`,U(i+.1,.42,n+.08),1,5))}}e.cyl(.04,.04,1.8,`#8a5a3b`,U(2.3,.9,0),void 0,5),e.box(.9,.06,.06,`#8a5a3b`,U(2.3,1.35,0),0),e.box(.4,.5,.2,`#3a8df0`,U(2.3,1.3,0),0),e.sphere(.18,`#f0d49a`,U(2.3,1.75,0),1,8),e.cyl(.26,.26,.04,`#d9b44a`,U(2.3,1.9,0),void 0,8),e.cyl(.14,.16,.18,`#d9b44a`,U(2.3,2,0),void 0,8)})}var pc=`#8a4a2a`,mc=`#a35a32`,hc=`#6b3a24`,gc=`#1d1f24`,_c=`#d9a33a`,vc=`#a9a59c`,yc=`#8f8b82`,bc=`#7a4a32`;function xc(e,t,n,r,i){e.box(.22*i,1*i,.05,_c,U(t-.2*i,n,r),0,[0,0,-.38]),e.box(.22*i,1*i,.05,_c,U(t+.2*i,n,r),0,[0,0,.38])}function Sc(){let e=new H;for(let t of[-1.9,1.9])e.box(.24,3.1,.24,`#3d434d`,U(t,1.55,0),.02),e.box(.6,.2,.6,vc,U(t,.1,0),.02);e.box(1.6,.08,.08,`#3d434d`,U(-1.1,1.6,-.05),0,[0,0,.6]),e.box(5.2,2.6,.18,gc,U(0,4.2,0),.03),e.box(5.3,.12,.22,_c,U(0,5.55,0),.02),e.box(5.3,.12,.22,_c,U(0,2.85,0),.02),e.box(3,1.9,.04,`#7fc8ff`,U(.85,4.25,.1),0),e.box(2.98,.5,.06,`#2f6fd0`,U(.85,3.55,.1),0),e.box(.7,1.5,.05,`#dfe8f0`,U(.95,4.2,.12),0);for(let t=0;t<5;t++)e.box(.6,.06,.052,`#9fb6c8`,U(.95,3.6+t*.28,.13),0);e.box(.5,1,.05,`#c9d6e2`,U(1.75,3.95,.12),0);for(let t of[-.25,2.15])e.box(.06,.8,.05,`#7a5236`,U(t,3.9,.13),0),e.sphere(.22,`#3f9a4a`,U(t,4.35,.14),U(1.4,.5,.3),6);xc(e,-1.6,4.65,.11,.9);for(let t=0;t<3;t++)e.box(1.3-t*.25,.14,.04,t?`#e8e2d6`:_c,U(-1.55,3.95-t*.3,.11),0);for(let t=0;t<3;t++)e.box(.2,.2,.3,`#2a2c31`,U(-1.6+t*1.6,5.78,.25),.02,[.5,0,0]);return e.box(.8,.6,.03,`#e8e2d6`,U(2.2,3.2,.12),0,[0,0,.5]),e.build()}function Cc(e,t,n,r,i,a){e.box(i,a,.05,`#2b2f36`,U(t,n,r),0);for(let[o,s]of[[a*.22,.12],[-a*.18,-.1]])e.box(i+.14,.1,.05,`#9c7a52`,U(t,n+o,r+.04),0,[0,0,s])}function wc(e,t,n,r,i){e.box(.12*i,.9*i,.03,`#d23a32`,U(t,n,r),0,[0,0,.75]),e.box(.12*i,.9*i,.03,`#d23a32`,U(t,n,r),0,[0,0,-.75])}function Tc(e){let t=new H,n=[`#c9a98a`,`#a9b9a0`,`#c8b0a8`][e-1],r=e===3?2.4:3.2,i=2.6,a=e===2?1:e===3?3:2,o=1.25,s=a*o+.2;t.box(r+.2,.25,2.8000000000000003,`#8f8b82`,U(0,.12,0),.02),t.box(r,s,i,n,U(0,.25+s/2,0),.03,[0,0,e===2?.03:-.02]);for(let e=0;e<4;e++)t.box(.5+e%2*.3,.35,.03,e%2?`#b0623e`:`#e2d8c8`,U(-r/2+.5+e*.7,.6+e%3*.7,1.31),0);for(let e=0;e<a;e++){let n=.25+e*o+o*.55;for(let e of r>3?[-.8,.8]:[0])Cc(t,e,n,1.32,.6,.66)}t.box(.7,1,.05,`#3a2a22`,U(r>3?0:.5,.75,1.32),0),wc(t,r>3?-.8:0,.9375,1.36,1.1);let c=new H;c.gableRoof({y:0,w:r,d:i,rise:1,color:`#5a5550`,wall:n,over:.2,overG:.12,rows:2});let l=c.build();t.addColored(l,U(0,.25+s,0),[.06,0,e===2?.05:-.04]),l.dispose(),t.box(.8,.12,.6,`#2b2f36`,U(.4,.25+s+.62,.35),0,[.7,0,0]);for(let e=0;e<5;e++)t.box(r/5,.12,.03,e%2?_c:gc,U(-r/2+(e+.5)*(r/5),1.25,1.37),0,[0,0,(e%2?1:-1)*.04]);t.box(.4,.5,.03,`#f2ecdc`,U(-r/2+.4,1.7,1.35),0),t.box(.25,.06,.035,_c,U(-r/2+.4,1.85,1.36),0);for(let e=0;e<5;e++)t.box(.3,.2,.25,e%2?`#b0623e`:`#8f8b82`,U(-r/2+.3+e*.55,.12,1.75+e%2*.2),.03,[.2*e,e,0]);return t.cyl(.05,.05,1.6,`#7d838c`,U(r/2+.05,1.4,i/2-.1),[0,0,.3],5),t.build()}function Ec(){let e=new H;e.box(6.6,.12,4,`#9a948a`,U(0,.06,0),0);for(let t=0;t<4;t++){let n=-2.7+t*1.8,r=t===2;if(e.add(new P(1.9,.08,4,14,Math.PI),t%2?`#5b6a72`:`#4a5860`,U(n,r?.5:1.3,0),[0,Math.PI/2,r?.9:0]),!r)for(let t of[-1.9,1.9])e.box(.12,1.3,.12,`#4a5860`,U(n,.65,t),0)}for(let t of[-1.2,0,1.2])e.box(5.6,.06,.06,pc,U(0,2.6-Math.abs(t)*.5,t),0,[0,0,t===0?.12:0]);for(let t=0;t<6;t++)e.box(.9,.04,.7,t%2?`#8fb8c4`:`#6f8f99`,U(-2.2+t*.9,1.8+t%3*.4,t%2?.7:-.7),0,[t%2?.5:-.5,0,.1*t]);for(let t=0;t<5;t++)e.box(.6,.03,.5,`#8fb8c4`,U(-2+t*1.1,.15,1.4-t%2*2.4),0,[.1,t,.1]);for(let t=0;t<3;t++)e.box(1.2,.7,.7,hc,U(-1.8+t*1.8,.35,.3),.03,[0,0,.1*(t-1)]);return e.box(1.8,.5,.08,`#2f4a6b`,U(1.2,2,2),.02,[0,0,.6]),e.build()}function Dc(e){let t=new H,n=e===1?`#8c847a`:`#7a7168`,r=e===1?3.6:4.4;t.cyl(.18,.32,r,n,U(0,r/2,0),[.04,0,-.03],7);for(let e=0;e<4;e++){let n=e/4*Math.PI*2+.4;t.box(.14,.12,.6,`#6f675e`,U(Math.cos(n)*.32,.06,Math.sin(n)*.32),.03,[0,-n+Math.PI/2,0])}let i=e===1?[[1.9,.9,.3,.9,1.3],[2.5,-.8,-.2,-.8,1.1],[3.1,.4,.5,.6,.9],[3.4,-.3,-.4,-.5,.8]]:[[2.2,.8,-.2,.7,1.4],[2.9,-.9,.3,-.9,1.2],[3.6,.5,.2,.5,1]];for(let[e,r,a,o,s]of i)t.cyl(.05,.1,s,n,U(o*s*.42,e+s*.3,a*s*.42),[a,0,-r],5),t.cyl(.02,.05,s*.5,n,U(o*s*.9,e+s*.65,a*s*.6),[a*1.4,0,-r*1.6],4);e===2&&t.add(rs(new rn(.2,.5,4)),`#5f574e`,U(.05,r+.15,0),[0,0,.5]),t.cyl(.09,.09,.04,`#2a241e`,U(0,1.4,.28),[Math.PI/2-.1,0,0],6),t.cyl(.18,.2,.05,`#c9a36a`,U(.2,1,.18),[.2,0,.3],7);for(let e=0;e<6;e++)t.sphere(.07,`#8a7a4a`,U(Math.sin(e*1.7)*.28,.4+e*.35,Math.cos(e*1.7)*.28),1,4);return t.build()}function Oc(e){let t=new H,n=3.7;e===`bow`?(t.box(3.1,1.8,3.2,mc,U(.3,1.05,0),.25),t.add(rs(new In(.15,1.6,2.2,4,1)),mc,U(-1.45,1.15,0),[0,Math.PI/4,Math.PI/2],U(1,1,1.15)),t.box(.8,.5,2.6,hc,U(-1.6,2.05,0),.05,[0,0,.25]),t.box(.1,.8,.1,`#3d434d`,U(-1.9,1.3,1.3),0),t.add(new P(.28,.06,4,8,Math.PI),`#3d434d`,U(-1.9,.95,1.3),[0,0,Math.PI])):t.box(n,1.8,3.2,e===`mid`?pc:mc,U(0,1.05,0),.25),t.box(n+(e===`bow`?-.6:0),.22,3.3,`#b8432e`,U(e===`bow`?.3:0,.3,0),.06);for(let e=0;e<5;e++)t.box(.1,1.2,.03,hc,U(-3.7/2+.4+e*.75,1.2,1.61),0);if(e===`mid`){t.box(3.3000000000000003,.3,2.6,`#3a3330`,U(0,1.98,0),0);for(let e=0;e<9;e++)t.sphere(.32,[`#2b2d31`,`#4f86d8`,`#58ad55`,`#e8bd3a`][e%4],U(-1.3+e%3*1.3,2.25,-.9+Math.floor(e/3)*.9),U(1,.8,1),6);t.add(new P(.35,.14,4,8),`#2b2d31`,U(.6,2.3,.4),[Math.PI/2-.3,0,0]),t.box(.2,2.6,.2,`#d9a33a`,U(-1.2,3.1,-1),.02,[0,0,.35]),t.box(.16,.16,1.8,`#c9902e`,U(-1.6,4.2,-.3),.02,[.5,0,0])}return e===`stern`&&(t.box(2,1.6,2.2,`#d9d2c4`,U(.4,2.75,0),.04),t.box(1.8,.4,.05,`#2b3440`,U(.4,3.1,1.11),0),t.box(2.2,.14,2.4,gc,U(.4,3.6,0),.02),xc(t,.4,2.55,1.12,.7),t.cyl(.32,.38,1.3,gc,U(1,4.3,-.4),void 0,10),t.cyl(.39,.39,.18,_c,U(1,4.65,-.4),void 0,10),t.box(.1,1.2,.1,`#3d434d`,U(-.4,4.2,.4),0),t.box(.8,.5,.05,`#c9352e`,U(-.4,4.6,.62),0),t.box(.6,1,.1,`#5b6270`,U(1.95,1.2,0),.03)),t.build()}function kc(){let e=new H,t=3.6,n=1.7;e.box(5.8,.3,4.4,yc,U(0,.15,0),.02);for(let r=0;r<3;r++){let i=.3+r*n;for(let a of[-1,0,1])for(let o of[-1,1])(r!==2||a!==1||o!==1)&&e.box(.32,n,.32,r%2?vc:yc,U(a*(5/2-.2),i+n/2,o*(t/2-.2)),.02);if(e.box(5,.2,t,vc,U(0,i+n,0),.02,r===2?[0,0,.04]:void 0),r===2)for(let r=0;r<9;r++)e.cyl(.025,.025,.9,bc,U(-2.2+r*.55,i+n+.5,t/2-.2),[.2*Math.sin(r),0,.15*Math.cos(r*2)],4)}for(let n=0;n<3;n++)e.box(1.6,.36,.25,`#b0623e`,U(-1.2,.5+n*.36,t/2-.2),.02);for(let t of[-2.9,-2.1])e.cyl(.04,.04,4.6,`#c9ced6`,U(t,2.6,2.2),void 0,5);for(let t=0;t<4;t++)e.box(1,.06,.4,`#c9a477`,U(-2.5,1+t*1.1,2.2),0);return e.box(3,.9,.05,gc,U(.7,3,1.85),0,[0,0,-.04]),xc(e,-.3,3,1.8900000000000001,.6),e.box(1.6,.14,.04,_c,U(1.2,3.1,1.8900000000000001),0),e.box(1.2,.1,.04,`#e8e2d6`,U(1,2.85,1.8900000000000001),0),e.sphere(.45,`#e8a33a`,U(2.8,1,1.6),U(1,1.2,1),8),e.box(.8,.4,.6,`#5b6270`,U(2.8,.35,1.6),.03),e.build()}function Ac(){let e=new H;e.box(2.4,1.8,1.8,`#7fa8b8`,U(0,.9,0),.04,[0,0,.08]),e.box(1.8,.8,.05,`#2b3440`,U(0,1.2,.92),0),e.box(.7,.6,.06,`#a9e2ff`,U(-.4,1.3,.94),0,[0,0,.6]);for(let t=0;t<6;t++)e.box(.4,.06,1,t%2?`#f2ecdc`:`#e8453c`,U(-1+t*.4,1.7-t*.12,1.2),0,[.9,0,.15]);e.box(2.6,.16,2,`#5b6a72`,U(.1,1.9,0),.03,[0,0,.12]),e.cyl(.035,.035,2,`#e6ebf2`,U(1.9,.15,.4),[0,0,Math.PI/2-.1],5);for(let t=0;t<8;t++)e.add(new In(.05,.9,.34,2,1,!1,t*Math.PI/4,Math.PI/4),t%2?`#ffffff`:`#3a8df0`,U(2.95,.4,.4),[0,0,Math.PI/2+.3]);for(let t=0;t<2;t++)e.box(.55,.06,1.4,`#e8e2d6`,U(-1.6+t*.7,.2+t*.1,1),.02,[.3*t,.4,.5-t]);return e.box(.5,.5,.5,`#4f86d8`,U(-1.6,.25,-.6),.04,[0,.6,.3]),e.build()}function jc(){let e=new H,t=(t,n,r,i,a=0)=>{e.box(4.2,1.5,1.7,i,U(t,n+.75,r),.04,[0,a,0]);let o=Math.cos(a),s=Math.sin(a);for(let c=0;c<9;c++){let l=-1.9+c*.475;e.box(.06,1.4,.05,new I(i).multiplyScalar(.8).getStyle(),U(t+l*o,n+.75,r-l*s+.86*o),0,[0,a,0])}};t(-.4,.05,.9,gc,.05),t(.3,.05,-.95,`#4a5560`,-.04),t(0,1.6,0,gc,.12),t(-.6,1.63,-1.25,`#8a2e24`,-.08),xc(e,-1,.8,1.78,.9),e.box(1.8,.2,.04,_c,U(.6,1.1,1.79),0),e.box(.14,.2,.08,_c,U(1.8,.8,1.8),.02);for(let t=0;t<5;t++)e.add(new P(.06,.02,3,6),`#9aa3ad`,U(1.8,1+t*.1,1.82),[0,t%2?Math.PI/2:0,0]);return e.box(.1,1.2,.1,`#3d434d`,U(2.6,.6,2.2),0),e.box(.9,.5,.05,`#e8453c`,U(2.6,1.2,2.25),.02),e.box(.7,.08,.06,`#ffffff`,U(2.6,1.2,2.28),0),e.build()}var Mc=`#8a4a2a`,Nc=`#a35a32`,Pc=`#6b3a24`;function Fc(){let e=new H,t=5.2;for(let[n,r]of[[-1,-1],[1,-1],[-1,1],[1,1]])e.box(.2,5.5,.2,Mc,U(n*1.05,t/2,r*1.05),.02,[r*.06,0,-n*.06]),e.box(.5,.25,.5,`#7d786f`,U(n*1.22,.12,r*1.22),.02);for(let t of[1.6,3.3])e.box(2.2,.1,.1,Nc,U(0,t,1),0),e.box(2.2,.1,.1,Nc,U(0,t,-1),0),e.box(.1,.1,2.2,Nc,U(1,t,0),0),e.box(.1,.1,2.2,Nc,U(-1,t,0),0);e.box(.07,2.4,.07,Pc,U(0,2.45,1.02),0,[0,0,.75]),e.box(.07,2.4,.07,Pc,U(1.02,2.45,0),0,[.75,0,0]),e.box(.07,1.4,.07,Pc,U(-.5,2,-1.02),0,[0,0,-.75]),e.cyl(1.45,1.45,.25,Pc,U(0,5.3,0),void 0,16),e.cyl(1.35,1.35,1.9,`#9a6a4a`,U(0,6.4,0),void 0,16);for(let n of[.55,1.2,1.85])e.cyl(1.38,1.38,.08,Mc,U(0,t+n,0),void 0,16);e.cyl(.15,1.45,.9,Pc,U(0,7.800000000000001,0),void 0,16),e.box(.8,.5,.05,Mc,U(.6,6.6,1.34),0,[0,.4,0]),e.box(.5,.4,.05,`#5b3a2a`,U(-.5,6.1000000000000005,1.33),0,[0,-.3,0]);for(let t of[1.35,1.6])e.box(.05,7,.05,`#5b5048`,U(t,7/2,1.2),0);for(let t=.4;t<6.800000000000001;t+=.4)e.box(.3,.04,.04,`#5b5048`,U(1.475,t,1.2),0);return e.cyl(.12,.12,2.6,`#7a6a5a`,U(-.4,4.2,.2),[.3,0,.2],8),e.build()}function Ic(){let e=new H,t=3.6;for(let t of[-.5,.5])for(let n of[-1,1])e.box(.16,4.2,.16,Mc,U(n*.95,1.95,t),0,[0,0,n*.38]);e.cyl(.16,.16,1.3,Pc,U(0,t,0),[Math.PI/2,0,0],8);let n=new H;n.torus(3,.08,Nc,U(0,0,.3),[0,0,0],28),n.torus(3,.08,Nc,U(0,0,-.3),[0,0,0],28);for(let e=0;e<10;e++){if(e===3||e===7)continue;let t=e/10*Math.PI*2;n.box(.06,3,.06,Mc,U(Math.cos(t)*3/2,Math.sin(t)*3/2,.3),0,[0,0,t-Math.PI/2])}for(let e=0;e<6;e++){let t=e/6*Math.PI*2+.3,r=Math.cos(t)*3,i=Math.sin(t)*3-.55;n.box(.6,.5,.5,e%2?`#7f8a8f`:`#9a6a4a`,U(r,i,0),.04,[0,0,(e-2)*.12])}let r=n.build();return e.addColored(r,U(0,t,0),[0,.12,.25]),r.dispose(),e.box(2.6,.2,1.6,`#6f6a62`,U(0,.1,0),.02),e.build()}function Lc(){let e=new H,t=8.5,n=`#d9a33a`,r=`#b88a2e`;for(let[r,i]of[[-1,-1],[1,-1],[-1,1],[1,1]])e.box(.1,t,.1,n,U(r*.4,t/2,i*.4),0);for(let n=.6;n<t;n+=.9)e.box(.8,.06,.06,r,U(0,n,.4),0,[0,0,.8]),e.box(.8,.06,.06,r,U(0,n,-.4),0,[0,0,-.8]),e.box(.06,.06,.8,r,U(.4,n,0),0,[.8,0,0]),e.box(.06,.06,.8,r,U(-.4,n,0),0,[-.8,0,0]);e.box(1.4,.3,1.4,`#7d786f`,U(0,.15,0),.02),e.box(.9,.8,.9,n,U(.2,8.9,.55),.04),e.box(.7,.4,.04,`#5b6a72`,U(.2,9,1.01),0),e.box(7.5,.25,.25,n,U(3.6,9.4,0),.02);for(let t=.4;t<7.2;t+=.7)e.box(.05,.45,.05,r,U(t,9.6,0),0,[0,0,.6]);return e.box(7.5,.06,.06,n,U(3.6,9.85,0),0),e.box(3,.25,.25,n,U(-1.5,9.4,0),.02),e.box(.9,.9,.7,`#9a958c`,U(-2.6,8.95,0),.03),e.cyl(.25,.4,1.1,r,U(0,10.1,0),void 0,6),e.cyl(.02,.02,4.5,`#3a3d44`,U(5.5,7.1,0),void 0,4),e.box(.35,.35,.35,`#3a3d44`,U(5.5,4.8,0),.04),e.box(.14,2.5,.14,Mc,U(.415,3.2,.415),0),e.build()}function Rc(){let e=new H;e.box(3,1.6,2.6,`#8a8178`,U(0,.8,.4),.04),e.box(.9,1,.05,`#3a3d44`,U(0,.6,1.71),0),e.box(3.1,.15,2.7,`#5b5650`,U(0,1.62,.4),0);for(let t=0;t<14;t++){let n=1.05-t/14*.35,r=t===9||t===10?`#e8e2d6`:t>=12?`#3a3330`:t%2?`#a64a32`:`#b8573a`;e.cyl(n-.02,n,.7242857142857143,r,U(0,1.6+(t+.5)*(10/14),0),void 0,14)}e.cyl(.78,.74,.25,`#2a2522`,U(0,11.7,0),void 0,14);for(let t=2.2;t<10;t+=.5)e.box(.25,.04,.06,`#4a4440`,U(.15,t,1.05-(t-1.6)/10*.35),0);return e.box(.06,2.2,.04,`#2a2522`,U(-.4,5,.86),0,[0,0,.2]),e.build()}function zc(){let e=new H;return e.box(2.2,2.2,1.9,`#7f9aa8`,U(0,1.1,0),.04,[0,0,.04]),e.box(2.5,.2,2.2,`#5b6a72`,U(.05,2.3,0),.03,[0,0,.08]),e.box(1.5,.9,.05,`#2b3440`,U(0,1.4,.96),0),e.box(.6,.5,.06,`#a9e2ff`,U(-.35,1.5,.97),0,[0,0,.5]),e.box(1.9,.45,.06,`#c9573a`,U(0,2,.98),.01),e.box(.9,.7,.06,Mc,U(.55,.5,.97),0),e.box(.8,.05,1.3,`#9aa1a8`,U(-1.5,.6,.3),0,[0,.4,1.2]),e.build()}function Bc(){let e=new H;for(let t of[-1.8,1.8])e.box(.25,3.6,.25,Mc,U(t,1.8,0),.02);e.box(5,2.4,.15,`#3d434d`,U(0,3.7,0),.02,[0,0,-.07]);let t=[`#e8b53a`,`#3a8df0`,`#e8453c`,`#f2efe8`,`#35c46a`];for(let n=0;n<7;n++)e.box(.9+n%3*.3,.7+n%2*.3,.03,t[n%t.length],U(-1.9+n*.62,3.3+n%3*.35,.1+n*.022),0,[0,0,(n-3)*.08]);e.box(5.1,.12,.3,`#2a2c31`,U(0,2.45,.1),0,[0,0,-.07]);for(let t=0;t<4;t++)e.box(.14,.3,.14,`#ffe680`,U(-1.6+t*1.05,5.05,.2),0);return e.build()}function Vc(){let e=new H;e.cyl(2.7,2.8,.3,`#9a958c`,U(0,.15,0),void 0,20);for(let t=0;t<6;t++){if(t===2)continue;let n=t===4?.5:t%2?.08:-.06;e.add(new P(2.45,.06,4,16,Math.PI),t%2?`#c9c4b8`:`#a8a296`,U(0,.3,0),[n,t*Math.PI/6,0])}for(let t=0;t<9;t++){let n=t*.7;e.box(.9,.7,.04,t%3?`#8fb8c4`:`#6f8f99`,U(Math.cos(n)*1.8,.6+t%3*.6,Math.sin(n)*1.8),0,[t%2*.3,n,.4])}return e.box(.9,1.4,.4,`#c9c4b8`,U(0,.95,2.4),.04,[0,0,.12]),e.build()}function Hc(){let e=new H;e.box(5.4,.7,2.8,`#4a4440`,U(0,.35,0),.04,[.04,0,0]);for(let t of[-1,1])e.box(.25,3.8,.25,`#8a8f96`,U(t*2.7,1.9,1),0,[0,0,t*.1]),e.box(.25,2.2,.25,`#8a8f96`,U(t*2.7,1.1,-1),0,[.3,0,0]);return e.box(5.8,.25,.25,`#8a8f96`,U(-.2,2.7,1),0,[0,0,-.42]),e.box(.8,1.3,.7,`#26282c`,U(-3.3,.65,1.1),.04),e.box(.8,1.3,.7,`#26282c`,U(-3.2,1.95,1),.04,[0,.3,.2]),e.box(.7,1.1,.6,`#26282c`,U(3.2,.55,1.2),.04,[0,-.4,1.4]),e.box(4.6,1.8,.06,`#6a3fc4`,U(.2,1.5,-1.25),0,[.25,0,.1]),e.box(1.6,1,.07,`#b06cf0`,U(-1.2,1.2,-1.15),0,[.3,0,-.3]),e.build()}var Uc={tower:{r:1.75,volume:14,tough:2,material:`metal`,falls:!0,chips:[Mc,Nc,`#9a6a4a`],build:Fc},wheel:{r:2.4,volume:16,tough:2.2,material:`metal`,falls:!0,chips:[Mc,Nc,`#7f8a8f`],build:Ic},crane:{r:1.2,volume:18,tough:2.4,material:`steel`,falls:!0,chips:[`#d9a33a`,Mc,`#9a958c`],build:Lc},chimney:{r:1.9,volume:22,tough:2.6,material:`concrete`,falls:!0,chips:[`#a64a32`,`#b8573a`,`#3a3330`],build:Rc},kiosk:{r:1.45,volume:6,tough:1.3,material:`metal`,falls:!1,chips:[`#7f9aa8`,`#c9573a`,`#5b6a72`],build:zc},billboard:{r:1.7,volume:9,tough:1.6,material:`metal`,falls:!0,chips:[`#e8b53a`,`#3a8df0`,Mc],build:Bc},greenhouseRuin:{r:2.5,volume:10,tough:1.8,material:`metal`,falls:!1,chips:[`#c9c4b8`,`#8fb8c4`,`#9a958c`],build:Vc},stageRuin:{r:2.6,volume:12,tough:2,material:`metal`,falls:!1,chips:[`#4a4440`,`#6a3fc4`,`#8a8f96`],build:Hc},vaneSign:{r:1.9,volume:9,tough:1.6,material:`steel`,falls:!0,chips:[`#1d1f24`,`#d9a33a`,`#7fc8ff`],build:Sc},condemned1:{r:2.1,volume:8,tough:1.3,material:`concrete`,falls:!1,chips:[`#c9a98a`,`#b0623e`,`#5a5550`],build:()=>Tc(1)},condemned2:{r:2.1,volume:6,tough:1.3,material:`concrete`,falls:!1,chips:[`#a9b9a0`,`#b0623e`,`#5a5550`],build:()=>Tc(2)},condemned3:{r:1.8,volume:9,tough:1.4,material:`concrete`,falls:!1,chips:[`#c8b0a8`,`#b0623e`,`#5a5550`],build:()=>Tc(3)},marketRoof:{r:2.7,volume:12,tough:1.9,material:`metal`,falls:!1,chips:[`#5b6a72`,`#8fb8c4`,Mc],build:Ec},deadTree1:{r:.62,volume:2.2,tough:.8,material:`soft`,falls:!0,slowmo:!1,announce:!1,chips:[`#8c847a`,`#6f675e`,`#c9a36a`],build:()=>Dc(1)},deadTree2:{r:.66,volume:2.6,tough:.8,material:`soft`,falls:!0,slowmo:!1,announce:!1,chips:[`#7a7168`,`#5f574e`,`#8a7a4a`],build:()=>Dc(2)},bargeBow:{r:1.9,volume:9,tough:2.2,material:`steel`,falls:!1,chips:[Mc,Nc,`#b8432e`],build:()=>Oc(`bow`)},bargeMid:{r:1.9,volume:10,tough:2.2,material:`steel`,falls:!1,chips:[Mc,`#2b2d31`,`#e8bd3a`],build:()=>Oc(`mid`)},bargeStern:{r:1.9,volume:10,tough:2.3,material:`steel`,falls:!1,chips:[Nc,`#1d1f24`,`#d9a33a`],build:()=>Oc(`stern`)},hotelFrame:{r:2.7,volume:18,tough:2.5,material:`concrete`,falls:!1,chips:[`#a9a59c`,`#8f8b82`,`#7a4a32`],build:kc},beachRuin:{r:1.6,volume:7,tough:1.4,material:`metal`,falls:!1,chips:[`#7fa8b8`,`#e8453c`,`#f2ecdc`],build:Ac},containers:{r:2.6,volume:20,tough:2.4,material:`steel`,falls:!1,chips:[`#1d1f24`,`#d9a33a`,`#8a2e24`],build:jc}},Wc=new Map;function Gc(e){let t=Wc.get(e);return t||Wc.set(e,t=Uc[e].build()),t}var Kc=class{constructor(e){this.group=new B,this.list=[],this.onGrind=null,this.onChunk=null,this.onTopple=null,this.onDown=null,e.add(this.group)}populate(e,t,n){for(let e of this.list)e.pivot.removeFromParent();this.list=[];for(let i of e.specials){var r;let a=Uc[i.kind],o=new B,s=R(i.x,i.z)-.05;o.position.set(i.x,s,i.z),o.rotation.y=i.rot;let c=new F(Gc(i.kind),qo());c.castShadow=!0,c.receiveShadow=!0,o.add(c);let l=new F(Gc(i.kind),new Fn({color:`#fff4d6`,transparent:!0,opacity:0,blending:2,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}));l.visible=!1,l.renderOrder=3,o.add(l),this.group.add(o);let u=a.volume*a.tough*Fe(e.n),d=Gc(i.kind);d.boundingBox||d.computeBoundingBox();let f=(r=i.id)==null?i.kind:r,p={kind:i.kind,id:f,pos:new L(i.x,s,i.z),r:a.r,hp:u,maxHp:u,stage:0,alive:!0,pivot:o,mesh:c,hit:0,fall:null,plot:t(i.x,i.z),height:d.boundingBox.max.y,wobble:0,flash:0,pulse:0,flashMesh:l};n.includes(f)&&(p.alive=!1,o.visible=!1),this.list.push(p)}}special(e){var t;return(t=this.list.find(t=>t.kind===e&&t.alive))==null?null:t}gone(){return this.list.filter(e=>!e.alive).map(e=>e.id)}blocksPlot(e){return this.list.some(t=>t.alive&&!t.fall&&t.plot===e)}obstacle(e,t,n){for(let r of this.list){if(!r.alive||r.fall)continue;let i=n+r.r*.8;if((r.pos.x-e)**2+(r.pos.z-t)**2<i*i)return r}return null}update(e,t){for(let a of this.list){if(!a.alive)continue;let o=Uc[a.kind];if(a.fall){this.animateFall(a,o,e);continue}let s=a.pos.x-t.sawX,c=a.pos.z-t.sawZ,l=t.sawR+a.r*.85;if(t.canCut&&t.pushing&&s*s+c*c<l*l){var n;for(a.hp-=t.power*e,a.hit=1,a.pulse-=e,a.pulse<=0&&(a.pulse=.16,a.flash=Math.max(a.flash,.7)),(n=this.onGrind)==null||n.call(this,a,e);a.hp>0&&a.stage<3&&1-a.hp/a.maxHp>=(a.stage+1)*.25;){var r;a.stage++,a.wobble=1,a.flash=1,(r=this.onChunk)==null||r.call(this,a)}if(a.hp<=0){var i;let e=a.pos.x-t.bodyX,n=a.pos.z-t.bodyZ,r=Math.hypot(e,n)||1;e/=r,n/=r,a.fall={a:a.stage*.05,w:.15,dx:e,dz:n,landed:!1,t:0},a.hit=0,(i=this.onTopple)==null||i.call(this,a)}}a.hit=Math.max(0,a.hit-e*3),a.wobble=Math.max(0,a.wobble-e*1.6),a.flash=Math.max(0,a.flash-e*6.5),a.flashMesh.visible=a.flash>.01,a.flashMesh.material.opacity=a.flash*.55;let u=Math.sin(a.wobble*22)*.07*a.wobble*a.wobble,d=a.stage*.045+u,f=a.hit*.045;this.pose(a,d,Math.atan2(t.bodyX-a.pos.x,t.bodyZ-a.pos.z)+Math.PI,(Math.random()-.5)*f,(Math.random()-.5)*f)}}pose(e,t,n,r,i){let a=new Zn().setFromAxisAngle(new L(Math.cos(n),0,-Math.sin(n)),t),o=new Zn().setFromAxisAngle(Jt.DEFAULT_UP,e.pivot.rotation.y);e.pivot.quaternion.copy(a.multiply(o)),e.pivot.position.set(e.pos.x+r,e.pos.y,e.pos.z+i)}animateFall(e,t,n){let r=e.fall;if(r.t+=n,t.falls){if(!r.landed&&(r.w+=(2.2+Math.sin(r.a)*6)*n,r.a+=r.w*n,r.a>=Math.PI/2-.08)){var i;r.a=Math.PI/2-.08,r.landed=!0,r.t=0,(i=this.onDown)==null||i.call(this,e)}let t=r.landed?Math.max(0,Math.sin(r.t*9)*Math.exp(-r.t*6))*.12:0;if(this.pose(e,r.a-t,Math.atan2(r.dx,r.dz),0,0),r.landed){let t=Math.max(0,r.t-.5)/.7;e.pivot.position.y=e.pos.y-t*1.2,e.pivot.scale.setScalar(Math.max(.01,1-t*.5)),t>=1&&(e.alive=!1,e.pivot.visible=!1)}}else{let t=Math.min(1,r.t/.55);if(e.pivot.scale.set(1+t*.25,Math.max(.02,1-t*t),1+t*.25),t>=1&&!r.landed){var a;r.landed=!0,(a=this.onDown)==null||a.call(this,e)}r.landed&&r.t>.9&&(e.alive=!1,e.pivot.visible=!1)}}impactPoint(e,t,n=.65){var r,i;let a=e.fall,o=(Uc[e.kind].falls?e.height:0)*n,s=e.pos.x+((r=a==null?void 0:a.dx)==null?0:r)*o,c=e.pos.z+((i=a==null?void 0:a.dz)==null?0:i)*o;return t.set(s,R(s,c)+.3,c)}clearPlot(e){for(let t of this.list)t.plot===e&&t.alive&&(t.alive=!1,t.pivot.visible=!1)}},qc={recycle:`M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z`,wrench:`M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z`,car:`M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z`,factory:`M22 22H2V10l7-3v2l5-2v3h3l1-8h3l1 8v12zM12 9.95l-5 2V10l-3 1.32V20h16v-8h-8V9.95zM11 18h2v-4h-2v4zm-4 0h2v-4H7v4zm10-4h-2v4h2v-4z`,soundOn:`M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z`,soundOff:`M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z`,flag:`M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z`,lock:`M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z`,bolt:`M7 2v11h3v9l7-12h-4l4-8z`,truck:`M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z`,cash:`M19 14V6c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zm-9-1c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm13-6v11c0 1.1-.9 2-2 2H4v-2h17V7h2z`,star:`M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z`,speed:`M20.38 8.57l-1.23 1.85a8 8 0 0 1-.22 7.58H5.07A8 8 0 0 1 15.58 6.85l1.85-1.23A10 10 0 0 0 3.35 19a2 2 0 0 0 1.72 1h13.85a2 2 0 0 0 1.74-1 10 10 0 0 0-.27-10.44zm-9.79 6.84a2 2 0 0 0 2.83 0l5.66-8.49-8.49 5.66a2 2 0 0 0 0 2.83z`,hand:`M9 11.24V7.5C9 6.12 10.12 5 11.5 5S14 6.12 14 7.5v3.74c1.21-.81 2-2.18 2-3.74C16 5.01 13.99 3 11.5 3S7 5.01 7 7.5c0 1.56.79 2.93 2 3.74zm9.84 4.63l-4.54-2.26c-.17-.07-.35-.11-.54-.11H13v-6c0-.83-.67-1.5-1.5-1.5S10 6.67 10 7.5v10.74l-3.43-.72c-.08-.01-.15-.03-.24-.03-.31 0-.59.13-.79.33l-.79.8 4.94 4.94c.27.27.65.44 1.06.44h6.79c.75 0 1.33-.55 1.44-1.28l.75-5.27c.01-.07.02-.14.02-.2 0-.62-.38-1.16-.91-1.38z`,close:`M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z`,arrowUp:`M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z`,saw:Yc(),ingot:`M3 17l3-8h12l3 8H3zm4.2-6.5L5.5 15h13l-1.7-4.5H7.2z`,wheel:Jc(),play:`M8 5v14l11-7z`,walk:`M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7`,heart:`M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z`};function Jc(){let e=(e,t)=>(12+Math.cos(e)*t).toFixed(2)+` `+(12+Math.sin(e)*t).toFixed(2),t=``,n=9.6,r=11.5;for(let i=0;i<12;i++){let a=(i-.27)/12*Math.PI*2,o=(i+.27)/12*Math.PI*2;t+=(i===0?`M`:`L`)+e(a,n)+`L`+e(a,r)+`L`+e(o,r)+`L`+e(o,n)}t+=`Z`,t+=`M12 5a7 7 0 1 0 0.001 0Z`,t+=`M12 9.5a2.5 2.5 0 1 1 -0.001 0Z`;for(let n=0;n<5;n++){let r=n/5*Math.PI*2-Math.PI/2,i=.2;t+=`M`+e(r-i*1.5,2.5)+`L`+e(r-i*.42,7)+`L`+e(r+i*.42,7)+`L`+e(r+i*1.5,2.5)+`Z`}return t}function Yc(){let e=8.6,t=11.2,n=``;for(let r=0;r<14;r++){let i=r/14*Math.PI*2,a=(r+.6)/14*Math.PI*2,o=[12+Math.cos(i)*e,12+Math.sin(i)*e],s=[12+Math.cos(a)*t,12+Math.sin(a)*t];n+=(r===0?`M`:`L`)+o[0].toFixed(2)+` `+o[1].toFixed(2)+`L`+s[0].toFixed(2)+` `+s[1].toFixed(2)}return n+=`Z`,n+=`M12 9a3 3 0 1 0 0.001 0Z`,n}function Xc(e,t=`ico`,n=`currentColor`){return`<svg class="${t}" viewBox="0 0 24 24" aria-hidden="true"><path fill="${n}" fill-rule="evenodd" d="${qc[e]}"/></svg>`}function Zc(e,t,n,r,i,a){e.save(),e.translate(n,r),e.scale(i/24,i/24),e.fillStyle=a,e.fill(new Path2D(qc[t]),`evenodd`),e.restore()}var Qc=`#ffcb1f`,$c=`#26282c`;function el(e,t,n,r,i){e.box(t+.02,i,n+.02,Qc,U(0,r,0),.01);let a=.42;for(let o=-t/2+a/2;o<t/2;o+=a)e.box(.13,i*1.25,.03,$c,U(o,r,-n/2-.012),0,[0,0,.7]),e.box(.13,i*1.25,.03,$c,U(o,r,n/2+.012),0,[0,0,-.7]);for(let o=-n/2+a/2;o<n/2;o+=a)e.box(.03,i*1.25,.13,$c,U(-t/2-.012,r,o),0,[.7,0,0]),e.box(.03,i*1.25,.13,$c,U(t/2+.012,r,o),0,[-.7,0,0])}function tl(e,t,n=1.6,r=1.6){let i=document.createElement(`canvas`);i.width=i.height=128;let a=i.getContext(`2d`);a.fillStyle=`#ffffff`,a.beginPath(),a.roundRect(4,4,120,120,26),a.fill(),a.fillStyle=t,a.beginPath(),a.roundRect(12,12,104,104,20),a.fill(),Zc(a,e,24,24,80,`#ffffff`);let o=new $t(i);return o.colorSpace=ee,new F(new Ne(n,r),new Fn({map:o,transparent:!0}))}function nl(){let e=new B,t=new H;t.box(3.7,.2,3.4,`#aeb6bf`,U(0,.1,.1),.05),t.box(3,1.5,2.6,`#3d86e6`,U(0,.95,.2),.14),t.box(3.04,.28,2.64,`#2b3442`,U(0,.34,.2),.05),el(t,3,2.6,1.62,.18);for(let e=0;e<3;e++)t.box(.55,.08,.04,`#274f8f`,U(-.75+e*.75,1.05,1.52),.02);for(let e=0;e<3;e++)t.box(.55,.08,.04,`#274f8f`,U(-.75+e*.75,.85,1.52),.02);t.box(.06,1,2,`#3374c9`,U(-1.51,.95,.2),.02),t.box(.06,1,2,`#3374c9`,U(1.51,.95,.2),.02),t.cyl(.2,.24,1.8,`#8b95a2`,U(1.05,2.3,1.05),void 0,10),t.cyl(.28,.28,.14,`#5d6672`,U(1.05,3.2,1.05),void 0,10),t.box(.8,.12,1,`#59636f`,U(-.6,.6,1.9),.03,[-.35,0,0]);let n=new F(t.build(),qo());n.castShadow=!0,n.receiveShadow=!0,e.add(n);let r=new In(1.75,1.05,.9,4,1,!0);r.rotateY(Math.PI/4);let i=new F(r,new Wn({color:`#2f6fc6`,side:2}));i.position.set(0,2.1,0),i.castShadow=!0,i.userData.noFade=!0,e.add(i);let a=new P(1.75,.08,4,4);a.rotateX(Math.PI/2),a.rotateY(Math.PI/4);let o=new F(a,new Wn({color:Qc}));o.position.set(0,2.55,0),o.userData.noFade=!0,e.add(o);let s=new F(new Ne(1.45,1.45),new Wn({color:`#1d2128`}));s.rotation.x=-Math.PI/2,s.position.set(0,1.68,0),s.userData.noFade=!0,e.add(s);let c=[],l=new H;l.cyl(.24,.24,1.36,`#555e6b`,U(0,0,0),[0,0,Math.PI/2],10);for(let e=0;e<6;e++){let t=e/6*Math.PI*2;for(let e=-2;e<=2;e++)l.box(.1,.15,.1,`#c7ced8`,U(e*.27,Math.cos(t)*.28,Math.sin(t)*.28),0,[t,0,0])}let u=l.build();for(let t of[-.3,.3]){let n=new F(u,ns());n.position.set(0,1.85,t),n.userData.noFade=!0,e.add(n),c.push(n)}return{group:e,rollers:c,hopperTop:new L(0,2.55,0),chimneyTop:new L(1.05,3.35,1.05),body:n,outlet:new L(-.6,.45,2.45)}}function rl(){let e=new B,t=new H,n=`#f6f2ea`,r=`#2f7fe0`;t.box(4,.16,3.9,`#c3c8cf`,U(0,.08,.3),.05,void 0,2),t.box(2.6,.04,.9,`#9aa2ad`,U(0,.17,-1.45),.02);for(let e of[-1.05,1.05])t.box(.12,.045,.86,`#ffcb1f`,U(e,.18,-1.45),.015);let i=3.3,a=.45;t.box(i,2.15,3,n,U(0,1.2349999999999999,a),.08,void 0,2),t.box(3.36,.34,3.06,`#d6cfc2`,U(0,.33,a),.05,void 0,2);for(let e of[-1,1])for(let n of[-1,1])t.box(.24,2.01,.24,r,U(e*i/2,.16+2.01/2,a+n*3/2),.06,void 0,2);t.box(3.42,.2,3.12,r,U(0,2.185,a),.06,void 0,2),t.gableRoof({y:2.31,w:i,d:3,rise:1,color:`#ff6a3d`,wall:n,trim:`#ffffff`,over:.26,overG:.22,t:.13,rows:3,z:a}),t.box(2.25,1.85,.06,`#3b4250`,U(0,1.09,a-3/2-.01),.02);for(let e of[-1,1])t.box(.16,1.95,.14,`#2262b8`,U(e*1.2,1.13,a-3/2-.04),.04);for(let e=0;e<8;e++)t.box(.3,.16,.06,e%2?`#26282c`:`#ffcb1f`,U(-1.05+e*.3,2.07,a-3/2-.06),.01);for(let e of[-.78,.78])t.box(.16,1.5,.16,`#ffcb1f`,U(e,.92,-.14999999999999997),.04),t.box(.5,.06,.08,`#d9dee5`,U(e*.72,.62,-.39999999999999997),.02);t.box(.04,.95,1.5,`#a9e2ff`,U(-1.678,1.12,.8),.02),t.box(.08,.08,1.62,`#ffffff`,U(-1.706,1.62,.8),.02),t.box(.08,.08,1.62,`#ffffff`,U(-1.706,.62,.8),.02),t.box(.08,1.04,.07,`#ffffff`,U(-1.706,1.12,.8),.02),t.box(.06,1.25,.6,`#5aa0f0`,U(-1.69,.8,-.39999999999999997),.02),t.box(.08,.06,.66,`#ffffff`,U(-1.7,1.45,-.39999999999999997),.02),t.box(.12,.42,2.4,r,U(-1.75,1.88,a),.05,void 0,2),t.box(.14,.12,2.2,`#ffffff`,U(-1.77,1.88,a),.04);for(let e=0;e<3;e++)t.torus(.3,.12,`#2a2c31`,U(1.55,.27+e*.22,-1.25),[Math.PI/2,0,0],12);t.torus(.3,.12,`#2a2c31`,U(-1.95,.42,1.55),[.2,Math.PI/2,0],12),t.cyl(.24,.24,.62,`#e8453c`,U(-1.95,.47,-.65),void 0,14),t.cyl(.25,.25,.05,`#ffffff`,U(-1.95,.6,-.65),void 0,14),t.cyl(.25,.25,.04,`#b8332b`,U(-1.95,.79,-.65),void 0,14),t.box(.55,.38,.38,`#e8453c`,U(-1.5,.35,-1.25),.05),t.box(.57,.07,.4,`#b8332b`,U(-1.5,.56,-1.25),.02),t.cyl(.13,.13,.5,`#d9dee5`,U(.8,3.55,.95),void 0,10),t.cyl(.2,.2,.06,`#9aa2ad`,U(.8,3.82,.95),void 0,10);let o=new F(t.build(),qo());o.castShadow=!0,o.receiveShadow=!0,e.add(o);let s=new H;for(let e=0;e<5;e++)s.box(2.05,.15,.06,e%2?`#d9dee5`:`#c9d0d9`,U(0,e*.16,0),.02);let c=new F(s.build(),ns());c.position.set(0,1.25,-1.075),e.add(c);let l=tl(`wrench`,`#3a8df0`,1.3,1.3);l.position.set(-.9,4.3,.5),l.rotation.set(-.6,-Math.PI/2,0,`YXZ`),e.add(l);let u=new F(new re(.11,8,6),new Fn({color:`#ffe066`}));return u.position.set(1.2,2.17,-1.19),e.add(u),{group:e,door:c,lamp:u}}var il=class{constructor(e,t,n,r,i,a,o=``){this.x=e,this.z=t,this.size=n,this.color=r,this.icon=i,this.label=o,this.active=!1,this.highlight=!1,this.t=Math.random()*10,this.progress=-1,this.progMesh=null,this.cv=document.createElement(`canvas`),this.cv.width=this.cv.height=256,this.tex=new $t(this.cv),this.tex.colorSpace=ee,this.tex.anisotropy=4,this.draw(),this.mat=new Fn({map:this.tex,transparent:!0,depthWrite:!1}),this.mesh=new F(new Ne(n,n),this.mat),this.mesh.rotation.x=-Math.PI/2,this.mesh.position.set(e,.02,t),this.mesh.renderOrder=1,a.add(this.mesh),this.ringMat=new Fn({color:`#ffffff`,transparent:!0,opacity:0,depthWrite:!1});let s=new l(n*.62,n*.68,48);this.ring=new F(s,this.ringMat),this.ring.rotation.x=-Math.PI/2,this.ring.position.set(e,.025,t),this.ring.renderOrder=1,a.add(this.ring)}setLabel(e){this.label=e,this.draw()}setIcon(e,t){this.icon=e,t&&(this.color=t),this.draw()}draw(){let e=this.cv.getContext(`2d`);e.clearRect(0,0,256,256);let t=(t,n,r,i,a)=>{e.beginPath(),e.moveTo(t+a,n),e.arcTo(t+r,n,t+r,n+i,a),e.arcTo(t+r,n+i,t,n+i,a),e.arcTo(t,n+i,t,n,a),e.arcTo(t,n,t+r,n,a),e.closePath()};t(10,14,236,236,34),e.fillStyle=`rgba(0,0,0,0.12)`,e.fill(),t(10,8,236,236,34),e.fillStyle=this.color,e.globalAlpha=.92,e.fill(),e.globalAlpha=1,e.lineWidth=12,e.strokeStyle=`#ffffff`,e.stroke(),e.setLineDash([18,14]),e.lineWidth=5,e.strokeStyle=`rgba(255,255,255,0.65)`,t(34,32,188,188,20.4),e.stroke(),e.setLineDash([]);let n=this.label?104:132;Zc(e,this.icon,128-n/2,(this.label?58:128-n/2-2)+4,n,`rgba(0,0,0,0.18)`),Zc(e,this.icon,128-n/2,this.label?56:128-n/2-4,n,`#ffffff`),this.label&&(e.font=`900 38px Rubik, system-ui, sans-serif`,e.textAlign=`center`,e.textBaseline=`middle`,e.fillStyle=`rgba(0,0,0,0.2)`,e.fillText(this.label,128,193),e.fillStyle=`#ffffff`,e.fillText(this.label,128,190)),this.tex.needsUpdate=!0}contains(e,t=0){let n=this.size/2+t;return Math.abs(e.x-this.x)<n&&Math.abs(e.z-this.z)<n}setVisible(e){this.mesh.visible=e,this.ring.visible=e}update(e){this.t+=e;let t=this.highlight?.5+.5*Math.sin(this.t*5):0;this.ringMat.opacity=this.highlight?.35+t*.45:0,this.ring.visible=this.highlight&&this.mesh.visible;let n=this.highlight?1+t*.06:1;this.ring.scale.set(n,n,1);let r=this.active?1.06:this.highlight?1+t*.03:1,i=this.mesh.scale.x,a=i+(r-i)*Math.min(1,e*12);this.mesh.scale.set(a,a,1)}};function al(e){let t=new Map,n=new Map,r=e.clone();return ol(e,r,function(e,r){t.set(r,e),n.set(e,r)}),r.traverse(function(e){if(!e.isSkinnedMesh)return;let r=e,i=t.get(e),a=i.skeleton.bones;r.skeleton=i.skeleton.clone(),r.bindMatrix.copy(i.bindMatrix),r.skeleton.bones=a.map(function(e){return n.get(e)}),r.bind(r.skeleton,r.bindMatrix)}),r}function ol(e,t,n){n(e,t);for(let r=0;r<e.children.length;r++)ol(e.children[r],t.children[r],n)}var sl=class extends Tt{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new ml(e)}),this.register(function(e){return new hl(e)}),this.register(function(e){return new wl(e)}),this.register(function(e){return new Tl(e)}),this.register(function(e){return new El(e)}),this.register(function(e){return new _l(e)}),this.register(function(e){return new vl(e)}),this.register(function(e){return new yl(e)}),this.register(function(e){return new bl(e)}),this.register(function(e){return new pl(e)}),this.register(function(e){return new xl(e)}),this.register(function(e){return new gl(e)}),this.register(function(e){return new Cl(e)}),this.register(function(e){return new Sl(e)}),this.register(function(e){return new dl(e)}),this.register(function(e){return new Dl(e,ul.EXT_MESHOPT_COMPRESSION)}),this.register(function(e){return new Dl(e,ul.KHR_MESHOPT_COMPRESSION)}),this.register(function(e){return new Ol(e)})}load(e,t,n,r){let i=this,a;if(this.resourcePath!==``)a=this.resourcePath;else if(this.path!==``){let t=jt.extractUrlBase(e);a=jt.resolveURL(t,this.path)}else a=jt.extractUrlBase(e);this.manager.itemStart(e);let o=function(t){r?r(t):console.error(t),i.manager.itemError(e),i.manager.itemEnd(e)},s=new Oe(this.manager);s.setPath(this.path),s.setResponseType(`arraybuffer`),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,function(n){try{i.parse(n,a,function(n){t(n),i.manager.itemEnd(e)},o)}catch(e){o(e)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let i,a={},o={},s=new TextDecoder;if(typeof e==`string`)i=JSON.parse(e);else if(e instanceof ArrayBuffer){if(s.decode(new Uint8Array(e,0,4))===kl){try{a[ul.KHR_BINARY_GLTF]=new Ml(e)}catch(e){r&&r(e);return}i=JSON.parse(a[ul.KHR_BINARY_GLTF].content)}else i=JSON.parse(s.decode(e))}else i=e;if(i.asset===void 0||i.asset.version[0]<2){r&&r(Error(`THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported.`));return}let c=new iu(i,{path:t||this.resourcePath||``,crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let e=0;e<this.pluginCallbacks.length;e++){let t=this.pluginCallbacks[e](c);t.name||console.error(`THREE.GLTFLoader: Invalid plugin found: missing name`),o[t.name]=t,a[t.name]=!0}if(i.extensionsUsed)for(let e=0;e<i.extensionsUsed.length;++e){let t=i.extensionsUsed[e],n=i.extensionsRequired||[];switch(t){case ul.KHR_MATERIALS_UNLIT:a[t]=new fl;break;case ul.KHR_DRACO_MESH_COMPRESSION:a[t]=new Nl(i,this.dracoLoader);break;case ul.KHR_TEXTURE_TRANSFORM:a[t]=new Pl;break;case ul.KHR_MESH_QUANTIZATION:a[t]=new Fl;break;default:n.indexOf(t)>=0&&o[t]===void 0&&console.warn(`THREE.GLTFLoader: Unknown extension "`+t+`".`)}}c.setExtensions(a),c.setPlugins(o),c.parse(n,r)}parseAsync(e,t){let n=this;return new Promise(function(r,i){n.parse(e,t,r,i)})}};function cl(){let e={};return{get:function(t){return e[t]},add:function(t,n){e[t]=n},remove:function(t){delete e[t]},removeAll:function(){e={}}}}function ll(e,t,n){let r=e.json.materials[t];return r.extensions&&r.extensions[n]?r.extensions[n]:null}var ul={KHR_BINARY_GLTF:`KHR_binary_glTF`,KHR_DRACO_MESH_COMPRESSION:`KHR_draco_mesh_compression`,KHR_LIGHTS_PUNCTUAL:`KHR_lights_punctual`,KHR_MATERIALS_CLEARCOAT:`KHR_materials_clearcoat`,KHR_MATERIALS_DISPERSION:`KHR_materials_dispersion`,KHR_MATERIALS_IOR:`KHR_materials_ior`,KHR_MATERIALS_SHEEN:`KHR_materials_sheen`,KHR_MATERIALS_SPECULAR:`KHR_materials_specular`,KHR_MATERIALS_TRANSMISSION:`KHR_materials_transmission`,KHR_MATERIALS_IRIDESCENCE:`KHR_materials_iridescence`,KHR_MATERIALS_ANISOTROPY:`KHR_materials_anisotropy`,KHR_MATERIALS_UNLIT:`KHR_materials_unlit`,KHR_MATERIALS_VOLUME:`KHR_materials_volume`,KHR_TEXTURE_BASISU:`KHR_texture_basisu`,KHR_TEXTURE_TRANSFORM:`KHR_texture_transform`,KHR_MESH_QUANTIZATION:`KHR_mesh_quantization`,KHR_MATERIALS_EMISSIVE_STRENGTH:`KHR_materials_emissive_strength`,EXT_MATERIALS_BUMP:`EXT_materials_bump`,EXT_TEXTURE_WEBP:`EXT_texture_webp`,EXT_TEXTURE_AVIF:`EXT_texture_avif`,EXT_MESHOPT_COMPRESSION:`EXT_meshopt_compression`,KHR_MESHOPT_COMPRESSION:`KHR_meshopt_compression`,EXT_MESH_GPU_INSTANCING:`EXT_mesh_gpu_instancing`},dl=class{constructor(e){this.parser=e,this.name=ul.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n=`light:`+e,r=t.cache.get(n);if(r)return r;let i=t.json,a=((i.extensions&&i.extensions[this.name]||{}).lights||[])[e],o,s=new I(16777215);a.color!==void 0&&s.setRGB(a.color[0],a.color[1],a.color[2],Qt);let c=a.range===void 0?0:a.range;switch(a.type){case`directional`:o=new Ke(s),o.target.position.set(0,0,-1),o.add(o.target);break;case`point`:o=new k(s),o.distance=c;break;case`spot`:o=new _e(s),o.distance=c,a.spot=a.spot||{},a.spot.innerConeAngle=a.spot.innerConeAngle===void 0?0:a.spot.innerConeAngle,a.spot.outerConeAngle=a.spot.outerConeAngle===void 0?Math.PI/4:a.spot.outerConeAngle,o.angle=a.spot.outerConeAngle,o.penumbra=1-a.spot.innerConeAngle/a.spot.outerConeAngle,o.target.position.set(0,0,-1),o.add(o.target);break;default:throw Error(`THREE.GLTFLoader: Unexpected light type: `+a.type)}return o.position.set(0,0,0),Xl(o,a),a.intensity!==void 0&&(o.intensity=a.intensity),o.name=t.createUniqueName(a.name||`light_`+e),r=Promise.resolve(o),t.cache.add(n,r),r}getDependency(e,t){if(e===`light`)return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],i=(r.extensions&&r.extensions[this.name]||{}).light;return i===void 0?null:this._loadLight(i).then(function(e){return n._getNodeRef(t.cache,i,e)})}},fl=class{constructor(){this.name=ul.KHR_MATERIALS_UNLIT}getMaterialType(){return Fn}extendParams(e,t,n){let r=[];e.color=new I(1,1,1),e.opacity=1;let i=t.pbrMetallicRoughness;if(i){if(Array.isArray(i.baseColorFactor)){let t=i.baseColorFactor;e.color.setRGB(t[0],t[1],t[2],Qt),e.opacity=t[3]}i.baseColorTexture!==void 0&&r.push(n.assignTexture(e,`map`,i.baseColorTexture,ee))}return Promise.all(r)}},pl=class{constructor(e){this.parser=e,this.name=ul.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=ll(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},ml=class{constructor(e){this.parser=e,this.name=ul.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return ll(this.parser,e,this.name)===null?null:Be}extendMaterialParams(e,t){let n=ll(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&r.push(this.parser.assignTexture(t,`clearcoatMap`,n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,`clearcoatRoughnessMap`,n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(r.push(this.parser.assignTexture(t,`clearcoatNormalMap`,n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let e=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new xt(e,e)}return Promise.all(r)}},hl=class{constructor(e){this.parser=e,this.name=ul.KHR_MATERIALS_DISPERSION}getMaterialType(e){return ll(this.parser,e,this.name)===null?null:Be}extendMaterialParams(e,t){let n=ll(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion===void 0?0:n.dispersion),Promise.resolve()}},gl=class{constructor(e){this.parser=e,this.name=ul.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return ll(this.parser,e,this.name)===null?null:Be}extendMaterialParams(e,t){let n=ll(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&r.push(this.parser.assignTexture(t,`iridescenceMap`,n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,`iridescenceThicknessMap`,n.iridescenceThicknessTexture)),Promise.all(r)}},_l=class{constructor(e){this.parser=e,this.name=ul.KHR_MATERIALS_SHEEN}getMaterialType(e){return ll(this.parser,e,this.name)===null?null:Be}extendMaterialParams(e,t){let n=ll(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];if(t.sheenColor=new I(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let e=n.sheenColorFactor;t.sheenColor.setRGB(e[0],e[1],e[2],Qt)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&r.push(this.parser.assignTexture(t,`sheenColorMap`,n.sheenColorTexture,ee)),n.sheenRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,`sheenRoughnessMap`,n.sheenRoughnessTexture)),Promise.all(r)}},vl=class{constructor(e){this.parser=e,this.name=ul.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return ll(this.parser,e,this.name)===null?null:Be}extendMaterialParams(e,t){let n=ll(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&r.push(this.parser.assignTexture(t,`transmissionMap`,n.transmissionTexture)),Promise.all(r)}},yl=class{constructor(e){this.parser=e,this.name=ul.KHR_MATERIALS_VOLUME}getMaterialType(e){return ll(this.parser,e,this.name)===null?null:Be}extendMaterialParams(e,t){let n=ll(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];t.thickness=n.thicknessFactor===void 0?0:n.thicknessFactor,n.thicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,`thicknessMap`,n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let i=n.attenuationColor||[1,1,1];return t.attenuationColor=new I().setRGB(i[0],i[1],i[2],Qt),Promise.all(r)}},bl=class{constructor(e){this.parser=e,this.name=ul.KHR_MATERIALS_IOR}getMaterialType(e){return ll(this.parser,e,this.name)===null?null:Be}extendMaterialParams(e,t){let n=ll(this.parser,e,this.name);return n===null?Promise.resolve():(t.ior=n.ior===void 0?1.5:n.ior,t.ior===0&&(t.ior=1e3),Promise.resolve())}},xl=class{constructor(e){this.parser=e,this.name=ul.KHR_MATERIALS_SPECULAR}getMaterialType(e){return ll(this.parser,e,this.name)===null?null:Be}extendMaterialParams(e,t){let n=ll(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];t.specularIntensity=n.specularFactor===void 0?1:n.specularFactor,n.specularTexture!==void 0&&r.push(this.parser.assignTexture(t,`specularIntensityMap`,n.specularTexture));let i=n.specularColorFactor||[1,1,1];return t.specularColor=new I().setRGB(i[0],i[1],i[2],Qt),n.specularColorTexture!==void 0&&r.push(this.parser.assignTexture(t,`specularColorMap`,n.specularColorTexture,ee)),Promise.all(r)}},Sl=class{constructor(e){this.parser=e,this.name=ul.EXT_MATERIALS_BUMP}getMaterialType(e){return ll(this.parser,e,this.name)===null?null:Be}extendMaterialParams(e,t){let n=ll(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return t.bumpScale=n.bumpFactor===void 0?1:n.bumpFactor,n.bumpTexture!==void 0&&r.push(this.parser.assignTexture(t,`bumpMap`,n.bumpTexture)),Promise.all(r)}},Cl=class{constructor(e){this.parser=e,this.name=ul.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return ll(this.parser,e,this.name)===null?null:Be}extendMaterialParams(e,t){let n=ll(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&r.push(this.parser.assignTexture(t,`anisotropyMap`,n.anisotropyTexture)),Promise.all(r)}},wl=class{constructor(e){this.parser=e,this.name=ul.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;let i=r.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw Error(`THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures`);return null}return t.loadTextureImage(e,i.source,a)}},Tl=class{constructor(e){this.parser=e,this.name=ul.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,r=n.json,i=r.textures[e];if(!i.extensions||!i.extensions[t])return null;let a=i.extensions[t],o=r.images[a.source],s=n.textureLoader;if(o.uri){let e=n.options.manager.getHandler(o.uri);e!==null&&(s=e)}return n.loadTextureImage(e,a.source,s)}},El=class{constructor(e){this.parser=e,this.name=ul.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,r=n.json,i=r.textures[e];if(!i.extensions||!i.extensions[t])return null;let a=i.extensions[t],o=r.images[a.source],s=n.textureLoader;if(o.uri){let e=n.options.manager.getHandler(o.uri);e!==null&&(s=e)}return n.loadTextureImage(e,a.source,s)}},Dl=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let e=n.extensions[this.name],r=this.parser.getDependency(`buffer`,e.buffer),i=this.parser.options.meshoptDecoder;if(!i||!i.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw Error(`THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files`);return null}return r.then(function(t){let n=e.byteOffset||0,r=e.byteLength||0,a=e.count,o=e.byteStride,s=new Uint8Array(t,n,r);return i.decodeGltfBufferAsync?i.decodeGltfBufferAsync(a,o,s,e.mode,e.filter).then(function(e){return e.buffer}):i.ready.then(function(){let t=new ArrayBuffer(a*o);return i.decodeGltfBuffer(new Uint8Array(t),a,o,s,e.mode,e.filter),t})})}return null}},Ol=class{constructor(e){this.name=ul.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let r=t.meshes[n.mesh];for(let e of r.primitives)if(e.mode!==zl.TRIANGLES&&e.mode!==zl.TRIANGLE_STRIP&&e.mode!==zl.TRIANGLE_FAN&&e.mode!==void 0)return null;let i=n.extensions[this.name].attributes,a=[],o={};for(let e in i)a.push(this.parser.getDependency(`accessor`,i[e]).then(t=>(o[e]=t,o[e])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(e=>{let t=e.pop(),n=t.isGroup?t.children:[t],r=e[0].count,i=[];for(let e of n){let t=new Pt,n=new L,a=new Zn,s=new L(1,1,1),c=new yn(e.geometry,e.material,r);for(let e=0;e<r;e++)o.TRANSLATION&&n.fromBufferAttribute(o.TRANSLATION,e),o.ROTATION&&a.fromBufferAttribute(o.ROTATION,e),o.SCALE&&s.fromBufferAttribute(o.SCALE,e),c.setMatrixAt(e,t.compose(n,a,s));let l=null;for(let e in o)if(e===`_COLOR_0`){let t=o[e];c.instanceColor=new et(t.array,t.itemSize,t.normalized)}else if(e!==`TRANSLATION`&&e!==`ROTATION`&&e!==`SCALE`){if(l===null){let e=c.geometry;l=new Tn,l.name=e.name;for(let t in e.attributes)l.setAttribute(t,e.attributes[t]);for(let t in e.morphAttributes)l.morphAttributes[t]=e.morphAttributes[t];e.index!==null&&l.setIndex(e.index),l.morphTargetsRelative=e.morphTargetsRelative;for(let t of e.groups)l.addGroup(t.start,t.count,t.materialIndex);e.boundingBox!==null&&(l.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(l.boundingSphere=e.boundingSphere.clone()),l.drawRange.start=e.drawRange.start,l.drawRange.count=e.drawRange.count,l.userData=Object.assign({},e.userData),c.geometry=l}let t=o[e];l.setAttribute(e,new et(t.array,t.itemSize,t.normalized))}Jt.prototype.copy.call(c,e),this.parser.assignFinalMaterial(c),i.push(c)}return t.isGroup?(t.clear(),t.add(...i),t):i[0]}))}},kl=`glTF`,Al=12,jl={JSON:1313821514,BIN:5130562},Ml=class{constructor(e){this.name=ul.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Al),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==kl)throw Error(`THREE.GLTFLoader: Unsupported glTF-Binary header.`);if(this.header.version<2)throw Error(`THREE.GLTFLoader: Legacy binary file detected.`);let r=this.header.length-Al,i=new DataView(e,Al),a=0;for(;a<r;){let t=i.getUint32(a,!0);a+=4;let r=i.getUint32(a,!0);if(a+=4,r===jl.JSON){let r=new Uint8Array(e,Al+a,t);this.content=n.decode(r)}else if(r===jl.BIN){let n=Al+a;this.body=e.slice(n,n+t)}a+=t}if(this.content===null)throw Error(`THREE.GLTFLoader: JSON content not found.`)}},Nl=class{constructor(e,t){if(!t)throw Error(`THREE.GLTFLoader: No DRACOLoader instance provided.`);this.name=ul.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,r=this.dracoLoader,i=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},s={},c={};for(let e in a){let t=Wl[e]||e.toLowerCase();o[t]=a[e]}for(let t in e.attributes){let r=Wl[t]||t.toLowerCase();if(a[t]!==void 0){let i=n.accessors[e.attributes[t]];c[r]=Bl[i.componentType].name,s[r]=i.normalized===!0}}return t.getDependency(`bufferView`,i).then(function(e){return new Promise(function(t,n){r.decodeDracoFile(e,function(e){for(let t in e.attributes){let n=e.attributes[t],r=s[t];r!==void 0&&(n.normalized=r)}t(e)},o,c,Qt,n)})})}},Pl=class{constructor(){this.name=ul.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let t=Math.cos(e.rotation),n=Math.sin(e.rotation);e.matrix.set(e.repeat.x*t,e.repeat.y*n,e.offset.x,-e.repeat.x*n,e.repeat.y*t,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Fl=class{constructor(){this.name=ul.KHR_MESH_QUANTIZATION}},Il=class extends ct{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r*3+r;for(let e=0;e!==r;e++)t[e]=n[i+e];return t}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=o*2,c=o*3,l=r-t,u=(n-t)/l,d=u*u,f=d*u,p=e*c,m=p-c,h=-2*f+3*d,g=f-d,_=1-h,v=g-d+u;for(let e=0;e!==o;e++){let t=a[m+e+o],n=a[m+e+s]*l,r=a[p+e+o],c=a[p+e]*l;i[e]=_*t+v*n+h*r+g*c}return i}},Ll=new Zn,Rl=class extends Il{interpolate_(e,t,n,r){let i=super.interpolate_(e,t,n,r);return Ll.fromArray(i).normalize().toArray(i),i}},zl={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Bl={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Vl={9728:We,9729:dn,9984:x,9985:St,9986:E,9987:wn},Hl={33071:Et,33648:zn,10497:je},Ul={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Wl={POSITION:`position`,NORMAL:`normal`,TANGENT:`tangent`,TEXCOORD_0:`uv`,TEXCOORD_1:`uv1`,TEXCOORD_2:`uv2`,TEXCOORD_3:`uv3`,COLOR_0:`color`,WEIGHTS_0:`skinWeight`,JOINTS_0:`skinIndex`},Gl={scale:`scale`,translation:`position`,rotation:`quaternion`,weights:`morphTargetInfluences`},Kl={CUBICSPLINE:void 0,LINEAR:o,STEP:N},ql={OPAQUE:`OPAQUE`,MASK:`MASK`,BLEND:`BLEND`};function Jl(e){return e.DefaultMaterial===void 0&&(e.DefaultMaterial=new _({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:0})),e.DefaultMaterial}function Yl(e,t,n){for(let r in n.extensions)e[r]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[r]=n.extensions[r])}function Xl(e,t){t.extras!==void 0&&(typeof t.extras==`object`?Object.assign(e.userData,t.extras):console.warn(`THREE.GLTFLoader: Ignoring primitive type .extras, `+t.extras))}function Zl(e,t,n){let r=!1,i=!1,a=!1;for(let e=0,n=t.length;e<n;e++){let n=t[e];if(n.POSITION!==void 0&&(r=!0),n.NORMAL!==void 0&&(i=!0),n.COLOR_0!==void 0&&(a=!0),r&&i&&a)break}if(!r&&!i&&!a)return Promise.resolve(e);let o=[],s=[],c=[];for(let l=0,u=t.length;l<u;l++){let u=t[l];if(r){let t=u.POSITION===void 0?e.attributes.position:n.getDependency(`accessor`,u.POSITION);o.push(t)}if(i){let t=u.NORMAL===void 0?e.attributes.normal:n.getDependency(`accessor`,u.NORMAL);s.push(t)}if(a){let t=u.COLOR_0===void 0?e.attributes.color:n.getDependency(`accessor`,u.COLOR_0);c.push(t)}}return Promise.all([Promise.all(o),Promise.all(s),Promise.all(c)]).then(function(t){let n=t[0],o=t[1],s=t[2];return r&&(e.morphAttributes.position=n),i&&(e.morphAttributes.normal=o),a&&(e.morphAttributes.color=s),e.morphTargetsRelative=!0,e})}function Ql(e,t){if(e.updateMorphTargets(),t.weights!==void 0)for(let n=0,r=t.weights.length;n<r;n++)e.morphTargetInfluences[n]=t.weights[n];if(t.extras&&Array.isArray(t.extras.targetNames)){let n=t.extras.targetNames;if(e.morphTargetInfluences.length===n.length){e.morphTargetDictionary={};for(let t=0,r=n.length;t<r;t++)e.morphTargetDictionary[n[t]]=t}else console.warn(`THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.`)}}function $l(e){let t,n=e.extensions&&e.extensions[ul.KHR_DRACO_MESH_COMPRESSION];if(t=n?`draco:`+n.bufferView+`:`+n.indices+`:`+eu(n.attributes):e.indices+`:`+eu(e.attributes)+`:`+e.mode,e.targets!==void 0)for(let n=0,r=e.targets.length;n<r;n++)t+=`:`+eu(e.targets[n]);return t}function eu(e){let t=``,n=Object.keys(e).sort();for(let r=0,i=n.length;r<i;r++)t+=n[r]+`:`+e[n[r]]+`;`;return t}function tu(e){switch(e){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw Error(`THREE.GLTFLoader: Unsupported normalized accessor component type.`)}}function nu(e){return e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0?`image/jpeg`:e.search(/\.webp($|\?)/i)>0||e.search(/^data\:image\/webp/)===0?`image/webp`:e.search(/\.ktx2($|\?)/i)>0||e.search(/^data\:image\/ktx2/)===0?`image/ktx2`:`image/png`}var ru=new Pt,iu=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new cl,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=-1,i=!1,a=-1;if(typeof navigator<`u`&&navigator.userAgent!==void 0){let e=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(e)===!0;let t=e.match(/Version\/(\d+)/);r=n&&t?parseInt(t[1],10):-1,i=e.indexOf(`Firefox`)>-1,a=i?e.match(/Firefox\/([0-9]+)\./)[1]:-1}this.textureLoader=typeof createImageBitmap>`u`||n&&r<17||i&&a<98?new it(this.options.manager):new Ye(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Oe(this.options.manager),this.fileLoader.setResponseType(`arraybuffer`),this.options.crossOrigin===`use-credentials`&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,r=this.json,i=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(e){return e._markDefs&&e._markDefs()}),Promise.all(this._invokeAll(function(e){return e.beforeRoot&&e.beforeRoot()})).then(function(){return Promise.all([n.getDependencies(`scene`),n.getDependencies(`animation`),n.getDependencies(`camera`)])}).then(function(t){let a={scene:t[0][r.scene||0],scenes:t[0],animations:t[1],cameras:t[2],asset:r.asset,parser:n,userData:{}};return Yl(i,a,r),Xl(a,r),Promise.all(n._invokeAll(function(e){return e.afterRoot&&e.afterRoot(a)})).then(function(){for(let e of a.scenes)e.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let n=0,r=t.length;n<r;n++){let r=t[n].joints;for(let t=0,n=r.length;t<n;t++)e[r[t]].isBone=!0}for(let t=0,r=e.length;t<r;t++){let r=e[t];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let r=n.clone(),i=(e,t)=>{let n=this.associations.get(e);n!=null&&this.associations.set(t,n);for(let[n,r]of e.children.entries())i(r,t.children[n])};return i(n,r),r.name+=`_instance_`+e.uses[t]++,r}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let r=e(t[n]);if(r)return r}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let r=0;r<t.length;r++){let i=e(t[r]);i&&n.push(i)}return n}getDependency(e,t){let n=e+`:`+t,r=this.cache.get(n);if(!r){switch(e){case`scene`:r=this.loadScene(t);break;case`node`:r=this._invokeOne(function(e){return e.loadNode&&e.loadNode(t)});break;case`mesh`:r=this._invokeOne(function(e){return e.loadMesh&&e.loadMesh(t)});break;case`accessor`:r=this.loadAccessor(t);break;case`bufferView`:r=this._invokeOne(function(e){return e.loadBufferView&&e.loadBufferView(t)});break;case`buffer`:r=this.loadBuffer(t);break;case`material`:r=this._invokeOne(function(e){return e.loadMaterial&&e.loadMaterial(t)});break;case`texture`:r=this._invokeOne(function(e){return e.loadTexture&&e.loadTexture(t)});break;case`skin`:r=this.loadSkin(t);break;case`animation`:r=this._invokeOne(function(e){return e.loadAnimation&&e.loadAnimation(t)});break;case`camera`:r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(n){return n!=this&&n.getDependency&&n.getDependency(e,t)}),!r)throw Error(`Unknown type: `+e)}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,r=this.json[e+(e===`mesh`?`es`:`s`)]||[];t=Promise.all(r.map(function(t,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!==`arraybuffer`)throw Error(`THREE.GLTFLoader: `+t.type+` buffer type is not supported.`);if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ul.KHR_BINARY_GLTF].body);let r=this.options;return new Promise(function(e,i){n.load(jt.resolveURL(t.uri,r.path),e,void 0,function(){i(Error(`THREE.GLTFLoader: Failed to load buffer "`+t.uri+`".`))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency(`buffer`,t.buffer).then(function(e){let n=t.byteLength||0,r=t.byteOffset||0;return e.slice(r,r+n)})}loadAccessor(e){let t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){let e=Ul[r.type],t=Bl[r.componentType],n=r.normalized===!0,i=new t(r.count*e);return Promise.resolve(new fn(i,e,n))}let i=[];return r.bufferView===void 0?i.push(null):i.push(this.getDependency(`bufferView`,r.bufferView)),r.sparse!==void 0&&(i.push(this.getDependency(`bufferView`,r.sparse.indices.bufferView)),i.push(this.getDependency(`bufferView`,r.sparse.values.bufferView))),Promise.all(i).then(function(e){let i=e[0],a=Ul[r.type],o=Bl[r.componentType],s=o.BYTES_PER_ELEMENT,c=s*a,l=r.byteOffset||0,u=r.bufferView===void 0?void 0:n.bufferViews[r.bufferView].byteStride,d=r.normalized===!0,f,p;if(u&&u!==c){let e=Math.floor(l/u),n=`InterleavedBuffer:`+r.bufferView+`:`+r.componentType+`:`+e+`:`+r.count,c=t.cache.get(n);c||(f=new o(i,e*u,r.count*u/s),c=new at(f,u/s),t.cache.add(n,c)),p=new nt(c,a,l%u/s,d)}else f=i===null?new o(r.count*a):new o(i,l,r.count*a),p=new fn(f,a,d);if(r.sparse!==void 0){let t=Ul.SCALAR,n=Bl[r.sparse.indices.componentType],s=r.sparse.indices.byteOffset||0,c=r.sparse.values.byteOffset||0,l=new n(e[1],s,r.sparse.count*t),u=new o(e[2],c,r.sparse.count*a);i!==null&&(p=new fn(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let e=0,t=l.length;e<t;e++){let t=l[e];if(p.setX(t,u[e*a]),a>=2&&p.setY(t,u[e*a+1]),a>=3&&p.setZ(t,u[e*a+2]),a>=4&&p.setW(t,u[e*a+3]),a>=5)throw Error(`THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.`)}p.normalized=d}return p})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,i=t.images[r],a=this.textureLoader;if(i.uri){let e=n.manager.getHandler(i.uri);e!==null&&(a=e)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let r=this,i=this.json,a=i.textures[e],o=i.images[t],s=(o.uri||o.bufferView)+`:`+a.sampler;if(this.textureCache[s])return this.textureCache[s];let c=this.loadImageSource(t,n).then(function(t){t.flipY=!1,t.name=a.name||o.name||``,t.name===``&&typeof o.uri==`string`&&o.uri.startsWith(`data:image/`)===!1&&(t.name=o.uri);let n=(i.samplers||{})[a.sampler]||{};return t.magFilter=Vl[n.magFilter]||1006,t.minFilter=Vl[n.minFilter]||1008,t.wrapS=Hl[n.wrapS]||1e3,t.wrapT=Hl[n.wrapT]||1e3,t.generateMipmaps=!t.isCompressedTexture&&t.minFilter!==1003&&t.minFilter!==1006,r.associations.set(t,{textures:e}),t}).catch(function(){return null});return this.textureCache[s]=c,c}loadImageSource(e,t){let n=this,r=this.json,i=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(e=>e.clone());let a=r.images[e],o=self.URL||self.webkitURL,s=a.uri||``,c=!1;if(a.bufferView!==void 0)s=n.getDependency(`bufferView`,a.bufferView).then(function(e){c=!0;let t=new Blob([e],{type:a.mimeType});return s=o.createObjectURL(t),s});else if(a.uri===void 0)throw Error(`THREE.GLTFLoader: Image `+e+` is missing URI and bufferView`);let l=Promise.resolve(s).then(function(e){return new Promise(function(n,r){let a=n;t.isImageBitmapLoader===!0&&(a=function(e){let t=new me(e);t.needsUpdate=!0,n(t)}),t.load(jt.resolveURL(e,i.path),a,void 0,r)})}).then(function(e){return c===!0&&o.revokeObjectURL(s),Xl(e,a),e.userData.mimeType=a.mimeType||nu(a.uri),e}).catch(function(e){throw console.error(`THREE.GLTFLoader: Couldn't load texture`,s),e});return this.sourceCache[e]=l,l}assignTexture(e,t,n,r){let i=this;return this.getDependency(`texture`,n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),i.extensions[ul.KHR_TEXTURE_TRANSFORM]){let e=n.extensions===void 0?void 0:n.extensions[ul.KHR_TEXTURE_TRANSFORM];if(e){let t=i.associations.get(a);a=i.extensions[ul.KHR_TEXTURE_TRANSFORM].extendTexture(a,e),i.associations.set(a,t)}}return r!==void 0&&(a.colorSpace=r),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,r=t.attributes.tangent===void 0,i=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let e=`PointsMaterial:`+n.uuid,t=this.cache.get(e);t||(t=new be,mn.prototype.copy.call(t,n),t.color.copy(n.color),t.map=n.map,t.sizeAttenuation=!1,this.cache.add(e,t)),n=t}else if(e.isLine){let e=`LineBasicMaterial:`+n.uuid,t=this.cache.get(e);t||(t=new xn,mn.prototype.copy.call(t,n),t.color.copy(n.color),t.map=n.map,this.cache.add(e,t)),n=t}if(r||i||a){let e=`ClonedMaterial:`+n.uuid+`:`;r&&(e+=`derivative-tangents:`),i&&(e+=`vertex-colors:`),a&&(e+=`flat-shading:`);let t=this.cache.get(e);t||(t=n.clone(),i&&(t.vertexColors=!0),a&&(t.flatShading=!0),r&&(t.normalScale&&(t.normalScale.y*=-1),t.clearcoatNormalScale&&(t.clearcoatNormalScale.y*=-1)),this.cache.add(e,t),this.associations.set(t,this.associations.get(n))),n=t}e.material=n}getMaterialType(){return _}loadMaterial(e){let t=this,n=this.json,r=this.extensions,i=n.materials[e],a,o={},s=i.extensions||{},c=[];if(s[ul.KHR_MATERIALS_UNLIT]){let e=r[ul.KHR_MATERIALS_UNLIT];a=e.getMaterialType(),c.push(e.extendParams(o,i,t))}else{let n=i.pbrMetallicRoughness||{};if(o.color=new I(1,1,1),o.opacity=1,Array.isArray(n.baseColorFactor)){let e=n.baseColorFactor;o.color.setRGB(e[0],e[1],e[2],Qt),o.opacity=e[3]}n.baseColorTexture!==void 0&&c.push(t.assignTexture(o,`map`,n.baseColorTexture,ee)),o.metalness=n.metallicFactor===void 0?1:n.metallicFactor,o.roughness=n.roughnessFactor===void 0?1:n.roughnessFactor,n.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,`metalnessMap`,n.metallicRoughnessTexture)),c.push(t.assignTexture(o,`roughnessMap`,n.metallicRoughnessTexture))),a=this._invokeOne(function(t){return t.getMaterialType&&t.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(t){return t.extendMaterialParams&&t.extendMaterialParams(e,o)})))}i.doubleSided===!0&&(o.side=2);let l=i.alphaMode||ql.OPAQUE;if(l===ql.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,l===ql.MASK&&(o.alphaTest=i.alphaCutoff===void 0?.5:i.alphaCutoff)),i.normalTexture!==void 0&&a!==Fn&&(c.push(t.assignTexture(o,`normalMap`,i.normalTexture)),o.normalScale=new xt(1,1),i.normalTexture.scale!==void 0)){let e=i.normalTexture.scale;o.normalScale.set(e,e)}if(i.occlusionTexture!==void 0&&a!==Fn&&(c.push(t.assignTexture(o,`aoMap`,i.occlusionTexture)),i.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=i.occlusionTexture.strength)),i.emissiveFactor!==void 0&&a!==Fn){let e=i.emissiveFactor;o.emissive=new I().setRGB(e[0],e[1],e[2],Qt)}return i.emissiveTexture!==void 0&&a!==Fn&&c.push(t.assignTexture(o,`emissiveMap`,i.emissiveTexture,ee)),Promise.all(c).then(function(){let n=new a(o);return i.name&&(n.name=i.name),Xl(n,i),t.associations.set(n,{materials:e}),i.extensions&&Yl(r,n,i),n})}createUniqueName(e){let t=Ie.sanitizeNodeName(e||``);return t in this.nodeNamesUsed?t+`_`+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,r=this.primitiveCache;function i(e){return n[ul.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(e,t).then(function(n){return ou(n,e,t)})}let a=[];for(let n=0,o=e.length;n<o;n++){let o=e[n],s=$l(o),c=r[s];if(c)a.push(c.promise);else{let e;e=o.extensions&&o.extensions[ul.KHR_DRACO_MESH_COMPRESSION]?i(o):ou(new Tn,o,t),o.mode===zl.TRIANGLE_STRIP?e=e.then(e=>Uo(e,1)):o.mode===zl.TRIANGLE_FAN&&(e=e.then(e=>Uo(e,2))),r[s]={primitive:o,promise:e},a.push(e)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,r=this.extensions,i=n.meshes[e],a=i.primitives,o=[];for(let e=0,t=a.length;e<t;e++){let t=a[e].material===void 0?Jl(this.cache):this.getDependency(`material`,a[e].material);o.push(t)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(n){let o=n.slice(0,n.length-1),s=n[n.length-1],c=[];for(let n=0,l=s.length;n<l;n++){let l=s[n],u=a[n],d,f=o[n];if(u.mode===zl.TRIANGLES||u.mode===zl.TRIANGLE_STRIP||u.mode===zl.TRIANGLE_FAN||u.mode===void 0){let e=i.isSkinnedMesh===!0,t=l.hasAttribute(`skinIndex`)&&l.hasAttribute(`skinWeight`);e&&t===!1&&console.warn(`THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled.`),d=e&&t?new Je(l,f):new F(l,f),d.isSkinnedMesh===!0&&d.normalizeSkinWeights()}else if(u.mode===zl.LINES)d=new mt(l,f);else if(u.mode===zl.LINE_STRIP)d=new Dn(l,f);else if(u.mode===zl.LINE_LOOP)d=new Ht(l,f);else if(u.mode===zl.POINTS)d=new ue(l,f);else throw Error(`THREE.GLTFLoader: Primitive mode unsupported: `+u.mode);Object.keys(d.geometry.morphAttributes).length>0&&Ql(d,i),d.name=t.createUniqueName(i.name||`mesh_`+e),Xl(d,i),u.extensions&&Yl(r,d,u),t.assignFinalMaterial(d),c.push(d)}for(let n=0,r=c.length;n<r;n++)t.associations.set(c[n],{meshes:e,primitives:n});if(c.length===1)return i.extensions&&Yl(r,c[0],i),c[0];let l=new B;i.extensions&&Yl(r,l,i),t.associations.set(l,{meshes:e});for(let e=0,t=c.length;e<t;e++)l.add(c[e]);return l})}loadCamera(e){let t,n=this.json.cameras[e],r=n[n.type];if(!r){console.warn(`THREE.GLTFLoader: Missing camera parameters.`);return}return n.type===`perspective`?t=new we(nn.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type===`orthographic`&&(t=new c(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Xl(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let e=0,r=t.joints.length;e<r;e++)n.push(this._loadNodeShallow(t.joints[e]));return t.inverseBindMatrices===void 0?n.push(null):n.push(this.getDependency(`accessor`,t.inverseBindMatrices)),Promise.all(n).then(function(e){let n=e.pop(),r=e,i=[],a=[];for(let e=0,o=r.length;e<o;e++){let o=r[e];if(o){i.push(o);let t=new Pt;n!==null&&t.fromArray(n.array,e*16),a.push(t)}else console.warn(`THREE.GLTFLoader: Joint "%s" could not be found.`,t.joints[e])}return new se(i,a)})}loadAnimation(e){let t=this.json,n=this,r=t.animations[e],i=r.name?r.name:`animation_`+e,a=[],o=[],s=[],c=[],l=[];for(let e=0,t=r.channels.length;e<t;e++){let t=r.channels[e],n=r.samplers[t.sampler],i=t.target,u=i.node,d=r.parameters===void 0?n.input:r.parameters[n.input],f=r.parameters===void 0?n.output:r.parameters[n.output];i.node!==void 0&&(a.push(this.getDependency(`node`,u)),o.push(this.getDependency(`accessor`,d)),s.push(this.getDependency(`accessor`,f)),c.push(n),l.push(i))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(s),Promise.all(c),Promise.all(l)]).then(function(e){let t=e[0],a=e[1],o=e[2],s=e[3],c=e[4],l=[];for(let e=0,r=t.length;e<r;e++){let r=t[e],i=a[e],u=o[e],d=s[e],f=c[e];if(r===void 0)continue;r.updateMatrix&&r.updateMatrix();let p=n._createAnimationTracks(r,i,u,d,f);if(p)for(let e=0;e<p.length;e++)l.push(p[e])}let u=new On(i,void 0,l);return Xl(u,r),u})}createNodeMesh(e){let t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency(`mesh`,r.mesh).then(function(e){let t=n._getNodeRef(n.meshCache,r.mesh,e);return r.weights!==void 0&&t.traverse(function(e){if(e.isMesh)for(let t=0,n=r.weights.length;t<n;t++)e.morphTargetInfluences[t]=r.weights[t]}),t})}loadNode(e){let t=this.json,n=this,r=t.nodes[e],i=n._loadNodeShallow(e),a=[],o=r.children||[];for(let e=0,t=o.length;e<t;e++)a.push(n.getDependency(`node`,o[e]));let s=r.skin===void 0?Promise.resolve(null):n.getDependency(`skin`,r.skin);return Promise.all([i,Promise.all(a),s]).then(function(e){let t=e[0],n=e[1],r=e[2];r!==null&&t.traverse(function(e){e.isSkinnedMesh&&e.bind(r,ru)});for(let e=0,r=n.length;e<r;e++)t.add(n[e]);if(t.userData.pivot!==void 0&&n.length>0){let e=t.userData.pivot,r=n[0];t.pivot=new L().fromArray(e),t.position.x-=e[0],t.position.y-=e[1],t.position.z-=e[2],r.position.set(0,0,0),delete t.userData.pivot}return t})}_loadNodeShallow(e){let t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let i=t.nodes[e],a=i.name?r.createUniqueName(i.name):``,o=[],s=r._invokeOne(function(t){return t.createNodeMesh&&t.createNodeMesh(e)});return s&&o.push(s),i.camera!==void 0&&o.push(r.getDependency(`camera`,i.camera).then(function(e){return r._getNodeRef(r.cameraCache,i.camera,e)})),r._invokeAll(function(t){return t.createNodeAttachment&&t.createNodeAttachment(e)}).forEach(function(e){o.push(e)}),this.nodeCache[e]=Promise.all(o).then(function(t){let o;if(o=i.isBone===!0?new Sn:t.length>1?new B:t.length===1?t[0]:new Jt,o!==t[0])for(let e=0,n=t.length;e<n;e++)o.add(t[e]);if(i.name&&(o.userData.name=i.name,o.name=a),Xl(o,i),i.extensions&&Yl(n,o,i),i.matrix!==void 0){let e=new Pt;e.fromArray(i.matrix),o.applyMatrix4(e)}else i.translation!==void 0&&o.position.fromArray(i.translation),i.rotation!==void 0&&o.quaternion.fromArray(i.rotation),i.scale!==void 0&&o.scale.fromArray(i.scale);if(!r.associations.has(o))r.associations.set(o,{});else if(i.mesh!==void 0&&r.meshCache.refs[i.mesh]>1){let e=r.associations.get(o);r.associations.set(o,{...e})}return r.associations.get(o).nodes=e,o}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],r=this,i=new B;n.name&&(i.name=r.createUniqueName(n.name)),Xl(i,n),n.extensions&&Yl(t,i,n);let a=n.nodes||[],o=[];for(let e=0,t=a.length;e<t;e++)o.push(r.getDependency(`node`,a[e]));return Promise.all(o).then(function(e){for(let t=0,n=e.length;t<n;t++){let n=e[t];n.parent===null?i.add(n):i.add(al(n))}return r.associations=(e=>{let t=new Map;for(let[e,n]of r.associations)(e instanceof mn||e instanceof me)&&t.set(e,n);return e.traverse(e=>{let n=r.associations.get(e);n!=null&&t.set(e,n)}),t})(i),i})}_createAnimationTracks(e,t,n,r,i){let a=[],s=e.name?e.name:e.uuid,c=[];function l(e){e.morphTargetInfluences&&c.push(e.name?e.name:e.uuid)}Gl[i.path]===Gl.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(s);let u;switch(Gl[i.path]){case Gl.weights:u=Ae;break;case Gl.rotation:u=f;break;case Gl.translation:case Gl.scale:u=wt;break;default:switch(n.itemSize){case 1:u=Ae;break;default:u=wt}}let d=r.interpolation===void 0?o:Kl[r.interpolation],p=this._getArrayFromAccessor(n);for(let e=0,n=c.length;e<n;e++){let n=new u(c[e]+`.`+Gl[i.path],t.array,p,d);r.interpolation===`CUBICSPLINE`&&this._createCubicSplineTrackInterpolant(n),a.push(n)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let e=tu(t.constructor),n=new Float32Array(t.length);for(let r=0,i=t.length;r<i;r++)n[r]=t[r]*e;t=n}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(e){return new(this instanceof f?Rl:Il)(this.times,this.values,this.getValueSize()/3,e)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function au(e,t,n){let r=t.attributes,i=new Ut;if(r.POSITION!==void 0){let e=n.json.accessors[r.POSITION],t=e.min,a=e.max;if(t!==void 0&&a!==void 0){if(i.set(new L(t[0],t[1],t[2]),new L(a[0],a[1],a[2])),e.normalized){let t=tu(Bl[e.componentType]);i.min.multiplyScalar(t),i.max.multiplyScalar(t)}}else{console.warn(`THREE.GLTFLoader: Missing min/max properties for accessor POSITION.`);return}}else return;let a=t.targets;if(a!==void 0){let e=new L,t=new L;for(let r=0,i=a.length;r<i;r++){let i=a[r];if(i.POSITION!==void 0){let r=n.json.accessors[i.POSITION],a=r.min,o=r.max;if(a!==void 0&&o!==void 0){if(t.setX(Math.max(Math.abs(a[0]),Math.abs(o[0]))),t.setY(Math.max(Math.abs(a[1]),Math.abs(o[1]))),t.setZ(Math.max(Math.abs(a[2]),Math.abs(o[2]))),r.normalized){let e=tu(Bl[r.componentType]);t.multiplyScalar(e)}e.max(t)}else console.warn(`THREE.GLTFLoader: Missing min/max properties for accessor POSITION.`)}}i.expandByVector(e)}e.boundingBox=i;let o=new $e;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,e.boundingSphere=o}function ou(e,t,n){let r=t.attributes,i=[];function a(t,r){return n.getDependency(`accessor`,t).then(function(t){e.setAttribute(r,t)})}for(let t in r){let n=Wl[t]||t.toLowerCase();n in e.attributes||i.push(a(r[t],n))}if(t.indices!==void 0&&!e.index){let r=n.getDependency(`accessor`,t.indices).then(function(t){e.setIndex(t)});i.push(r)}return hn.workingColorSpace!==`srgb-linear`&&`COLOR_0`in r&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${hn.workingColorSpace}" not supported.`),Xl(e,t),au(e,t,n),Promise.all(i).then(function(){return t.targets===void 0?e:Zl(e,t.targets,n)})}var su=new sl,cu=new Map;async function lu(e){let t=cu.get(e);if(t)return t;let n=(await su.loadAsync(e)).scene,r=new Map;return n.traverse(e=>{let t=e;if(!t.isMesh)return;let n=e=>{let t=r.get(e);if(!t){var n,i;let a=e;t=new Wn({map:(n=a.map)==null?null:n,color:(i=a.color)==null?new I(1,1,1):i}),a.map&&(a.map.colorSpace=ee),r.set(e,t)}return t};t.material=Array.isArray(t.material)?t.material.map(n):n(t.material),t.castShadow=!0,t.receiveShadow=!1}),cu.set(e,n),n}function uu(e,t,n){let r=e.clone(!0),i=new B,a=new B;i.add(a),a.add(r),n&&a.rotation.copy(n),a.updateMatrixWorld(!0);let o=new Ut().setFromObject(a),s=o.getSize(new L),c=1;t&&(c=t/Math.max(s.x,s.z)),a.scale.multiplyScalar(c),a.updateMatrixWorld(!0),o.setFromObject(a);let l=o.getCenter(new L);return a.position.x-=l.x,a.position.z-=l.z,a.position.y-=o.min.y,i}var du={len:3.1,wid:1.5,axle:.95,wheelR:.34,track:.72},fu=`#2a2c31`,pu=`#d9dee5`,mu=`#26405e`,hu=`#cfe8ff`,gu=`#3d4452`,_u=[`body`,`doorL`,`doorR`,`roof`,`trim`],vu={frame:new L(0,0,0),engine:new L(0,.55,1),wheelFL:new L(-du.track,du.wheelR,du.axle),wheelFR:new L(du.track,du.wheelR,du.axle),wheelRL:new L(-du.track,du.wheelR,-du.axle),wheelRR:new L(du.track,du.wheelR,-du.axle),interior:new L(0,0,0),body:new L(0,0,0),doorL:new L(-.765,.66,-.03),doorR:new L(.765,.66,-.03),roof:new L(0,0,0),glass:new L(0,0,0),front:new L(0,0,0),rear:new L(0,0,0),trim:new L(0,0,0)};function yu(e,t,n){let r=du.wid,i=du.len;switch(t){case`frame`:for(let t of[-.45,.45])e.box(.14,.12,i-.3,`#3a3f48`,U(t,.34,0),.03);for(let t of[-1.1,-.4,.4,1.1])e.box(1,.08,.12,`#59636f`,U(0,.34,t),.02);e.box(1.36,.05,2,`#4a515c`,U(0,.4,-.15),.02);for(let t of[-du.axle,du.axle])e.cyl(.05,.05,du.track*2,`#8d97a3`,U(0,du.wheelR,t),[0,0,Math.PI/2],8);e.cyl(.05,.05,1.2,`#8d97a3`,U(.42,.26,-.95),[Math.PI/2,0,0],8);break;case`engine`:e.box(.62,.32,.56,`#5b6270`,U(0,0,0),.04),e.box(.5,.1,.46,`#e8333a`,U(0,.2,-.02),.03);for(let t of[-.14,0,.14])e.box(.06,.03,.4,`#ffcf3c`,U(t,.26,-.02),.01);e.cyl(.16,.16,.1,`#26282c`,U(.16,.3,.12),void 0,12),e.box(.92,.36,.06,`#30353e`,U(0,.02,.36),.02);for(let t=0;t<6;t++)e.box(.86,.02,.07,`#8d97a3`,U(0,-.12+t*.05,.383),0);e.cyl(.07,.07,.06,`#26282c`,U(-.2,-.05,.31),[Math.PI/2,0,0],10);break;case`wheelFL`:case`wheelFR`:case`wheelRL`:case`wheelRR`:{let n=t.endsWith(`L`)?-1:1,r=du.wheelR;e.cyl(r,r,.22,fu,U(0,0,0),[0,0,Math.PI/2],18),e.cyl(r*.92,r*.92,.26,`#1f2124`,U(0,0,0),[0,0,Math.PI/2],18);for(let t=0;t<12;t++){let n=t/12*Math.PI*2;e.box(.2,.035,.07,`#1f2124`,U(0,Math.cos(n)*(r+.006),Math.sin(n)*(r+.006)),0,[n,0,0])}e.cyl(r*.62,r*.62,.25,`#9aa1a8`,U(n*.03,0,0),[0,0,Math.PI/2],16),e.cyl(r*.5,r*.5,.2,`#3a3f48`,U(n*.065,0,0),[0,0,Math.PI/2],14);for(let t=0;t<5;t++){let i=t/5*Math.PI*2+.3;e.box(.03,r*.5,.06,pu,U(n*.175,Math.cos(i)*r*.26,Math.sin(i)*r*.26),0,[i,0,0])}e.cyl(.07,.07,.04,pu,U(n*.185,0,0),[0,0,Math.PI/2],10),e.cyl(.035,.035,.03,`#e8333a`,U(n*.21,0,0),[0,0,Math.PI/2],8);break}case`interior`:for(let t of[-.34,.34])e.box(.44,.14,.46,gu,U(t,.56,0),.05),e.box(.44,.52,.12,gu,U(t,.84,-.24),.05,[-.12,0,0]),e.box(.3,.12,.1,gu,U(t,1.12,-.28),.04);e.box(1.2,.14,.42,gu,U(0,.56,-.78),.05),e.box(1.2,.46,.12,gu,U(0,.82,-1),.05,[-.12,0,0]),e.box(1.3,.2,.3,`#30353e`,U(0,.82,.5),.05),e.torus(.15,.025,`#26282c`,U(-.34,.95,.36),[-1.1,0,0],12),e.box(.3,.05,.03,`#7fd0ff`,U(.2,.93,.36),0,[-.5,0,0]);break;case`body`:e.box(r,.44,i,n,U(0,.63,0),.12);for(let t of[-du.axle,du.axle])for(let i of[-1,1])e.box(.13,.22,.98,n,U(i*(r/2+.035),.74,t),.05);e.box(r-.06,.1,.98,n,U(0,.86,1.03),.06,[-.07,0,0]),e.box(r-.06,.1,.62,n,U(0,.88,-1.2),.06,[.05,0,0]),e.box(.5,.05,.7,n,U(0,.93,1.05),.04,[-.07,0,0]),e.cyl(.06,.06,.02,pu,U(-(r/2+.012),.72,-.85),[0,0,Math.PI/2],10);break;case`doorL`:case`doorR`:{let r=t===`doorL`?-1:1;e.box(.05,.36,1.04,n,U(0,0,0),.02),e.box(.012,.36,.02,`#1b1d22`,U(r*.027,0,0),0),e.box(.012,.36,.02,`#1b1d22`,U(r*.027,0,.52),0),e.box(.012,.36,.02,`#1b1d22`,U(r*.027,0,-.52),0);for(let t of[-.16,.36])e.box(.03,.035,.12,pu,U(r*.04,.09,t),.01);e.box(.02,.025,1,pu,U(r*.035,-.1,0),0);break}case`roof`:for(let t of[-.63,.63])e.box(.07,.56,.08,n,U(t,1.07,.47),.02,[-.62,0,0]),e.box(.07,.46,.09,n,U(t,1.08,-.16),.02),e.box(.07,.56,.1,n,U(t,1.06,-.74),.02,[.6,0,0]);e.box(1.32,.08,1.02,n,U(0,1.33,-.14),.04),e.box(1.1,.025,.06,pu,U(0,1.38,-.5),0),e.box(1.1,.025,.06,pu,U(0,1.38,.2),0);break;case`glass`:{let t=(t,n,r,i,a=!1)=>{e.box(a?.025:t,n,a?t:.025,mu,r,.01,i);let o=new Xt(i[0],i[1],i[2]),s=new L(a?Math.sign(r.x):0,0,+!a).applyEuler(o).multiplyScalar(.018);for(let[o,c]of[[-.12,.09],[.06,.04]]){let l=U(r.x+s.x+(a?0:o*t),r.y+s.y,r.z+s.z+(a?o*t:0)),u=a?[i[0]+.7,i[1],i[2]]:[i[0],i[1],i[2]+.7];e.box(a?.01:c,n*.9,a?c:.01,hu,l,0,u)}};t(1.2,.5,U(0,1.08,.47),[-.62,0,0]);let n=new Xt(.6,Math.PI,0);t(1.16,.44,U(0,1.08,-.75),[n.x,n.y,n.z]);for(let e of[-.645,.645])t(.5,.42,U(e,1.06,.13),[0,0,0],!0),t(.46,.4,U(e,1.06,-.43),[0,0,0],!0);break}case`front`:e.box(.78,.2,.06,`#1f2228`,U(0,.64,i/2+.01),.02);for(let t=0;t<4;t++)e.box(.72,.022,.03,pu,U(0,.57+t*.05,i/2+.045),0);e.box(.84,.03,.04,pu,U(0,.755,i/2+.03),0);for(let t of[-.56,.56])e.box(.32,.17,.05,pu,U(t,.68,i/2+0),.04),e.box(.26,.12,.05,`#fff6c8`,U(t,.68,i/2+.02),.04),e.box(.12,.05,.05,`#ffb020`,U(t*1.08,.53,i/2+.005),.015);e.box(r+.04,.13,.16,pu,U(0,.46,i/2+.03),.05),e.box(.38,.11,.02,`#f6f6f2`,U(0,.46,i/2+.12),.01);for(let t of[-.1,0,.1])e.box(.06,.04,.01,`#2a2f3a`,U(t,.46,i/2+.135),0);break;case`rear`:for(let t of[-.58,.58])e.box(.32,.16,.05,`#c82828`,U(t,.72,-i/2-0),.03),e.box(.12,.1,.05,`#ff7a3a`,U(t*.84,.72,-i/2-.02),.02);e.box(r+.04,.13,.16,pu,U(0,.46,-i/2-.03),.05),e.box(.38,.11,.02,`#f6f6f2`,U(0,.62,-i/2-.02),.01);for(let t of[-.1,0,.1])e.box(.06,.04,.01,`#2a2f3a`,U(t,.62,-i/2-.035),0);break;case`trim`:for(let t of[-1,1])e.box(.16,.1,.06,n,U(t*.83,.94,.42),.02),e.box(.12,.07,.02,mu,U(t*.83,.94,.385),0);e.box(1.3,.04,.16,n,U(0,1,-1.46),.015);for(let t of[-.5,.5])e.box(.05,.08,.06,n,U(t,.95,-1.44),.01);e.cyl(.006,.006,.5,`#26282c`,U(.55,1.12,-1.1),[-.4,0,0],4)}}var bu=[`frame`,`engine`,`wheelFL`,`wheelFR`,`wheelRL`,`wheelRR`,`interior`,`body`,`doorL`,`doorR`,`roof`,`glass`,`front`,`rear`,`trim`],xu=new Map;function Su(e){let t=xu.get(e);if(t)return t;let n=new H;for(let t of bu){let r=new H;yu(r,t,e);let i=r.build(),a=vu[t];n.addColored(i,U(a.x,a.y,a.z)),i.dispose()}return t=n.build(),xu.set(e,t),t}var Cu=new L(-5.5,0,12.9),wu=[`#e8453c`,`#3a8df0`,`#f5c02a`,`#35c46a`,`#f4f1ea`,`#8a5cf0`,`#ff8a3d`,`#20c3c9`],Tu=new I(`#c9ced6`),Eu=Math.PI/2,Du=1.45,Ou=1.3,ku=new L,Au=new L;function ju(e){let t=new H;e(t);let n=new F(t.build(),ns());return n.castShadow=!0,n}var Mu=class{constructor(e){this.group=new B,this.car=new B,this.parts=[],this.arms=[],this.lights=[],this.time=0,this.lastP=-1,this.spin=0,this.color=wu[0],this.paint=new I(wu[0]),this.onSpark=null,this.onSpray=null,this.onPart=null,this.onHonk=null,e.add(this.group),this.group.position.copy(Cu);let t=ju(e=>{e.box(4.8,.14,4.4,`#59636f`,U(0,.07,0),.04);for(let t=0;t<10;t++)e.box(.48,.15,.2,t%2?`#26282c`:`#ffcb1f`,U(-2.16+t*.48,.075,2.1),0,[0,.5,0]);for(let t of[-2.25,2.25])for(let n of[-1.7,1.7])e.box(.16,3.4,.16,`#d9dee5`,U(t,1.7,n),.03);for(let t of[-2.25,2.25])e.box(.2,.22,3.6,`#ffcb1f`,U(t,3.42,0),.03);e.box(4.7,.18,.24,`#ffcb1f`,U(0,3.5,0),.03);for(let t of[-2.25,2.25])e.box(.18,.4,.18,`#3d434d`,U(t,2.7,-1.7),.03);e.box(.9,.7,.5,`#3d434d`,U(-1.9,.5,-2),.04),e.box(.7,.04,.36,`#7fd0ff`,U(-1.9,.86,-1.95),0,[-.5,0,0])});this.group.add(t),this.trolley=ju(e=>e.box(.5,.26,.4,`#3d434d`,U(0,0,0),.04)),this.trolley.position.set(0,3.3,0),this.group.add(this.trolley),this.cable=new F(new In(.02,.02,1,5).translate(0,-.5,0),ns()),this.cable.geometry.setAttribute(`color`,new j(Array(this.cable.geometry.attributes.position.count*3).fill(.15),3)),this.group.add(this.cable),this.hook=ju(e=>{e.box(.3,.12,.2,`#ffcb1f`,U(0,0,0),.03),e.torus(.08,.025,`#8d97a3`,U(0,-.14,0),[0,0,0],10)}),this.group.add(this.hook),this.table=new B,this.table.position.y=.14,this.table.add(ju(e=>{e.cyl(1.85,1.9,.12,`#9aa1a8`,U(0,.06,0),void 0,32);for(let t=0;t<8;t++){let n=t/8*Math.PI*2;e.box(.1,.02,1.3,`#ffcb1f`,U(Math.sin(n)*1,.125,Math.cos(n)*1),0,[0,n,0])}})),this.car.position.y=.12,this.table.add(this.car),this.table.rotation.y=Eu,this.group.add(this.table);for(let[e,t,n,r]of[[`frame`,0,.05,`drop`],[`engine`,.06,.07,`crane`],[`wheelFL`,.14,.05,`screw`],[`wheelFR`,.18,.05,`screw`],[`wheelRL`,.22,.05,`screw`],[`wheelRR`,.26,.05,`screw`],[`interior`,.31,.04,`drop`],[`body`,.36,.09,`crane`],[`doorL`,.47,.05,`side`],[`doorR`,.51,.05,`side`],[`roof`,.56,.07,`crane`],[`glass`,.64,.04,`pop`],[`front`,.69,.04,`front`],[`rear`,.73,.04,`rear`],[`trim`,.77,.03,`pop`]]){let i=_u.includes(e),a=ju(t=>yu(t,e,`#ffffff`)),o=vu[e].clone();a.position.copy(o),this.car.add(a);let s={name:e,mesh:a,at:t,dur:n,how:r,base:o};if(i){let e=a.geometry.attributes.position;s.carZ=new Float32Array(e.count);for(let t=0;t<e.count;t++)s.carZ[t]=e.getZ(t)+o.z}this.parts.push(s)}for(let[e,t,n]of[[-.56,du.len/2+.06,`#fff6c8`],[.56,du.len/2+.06,`#fff6c8`],[-.58,-du.len/2-.05,`#ff4a3a`],[.58,-du.len/2-.05,`#ff4a3a`]]){let r=new F(new Mn(.22,16),new Fn({color:n,transparent:!0,opacity:0,blending:2,depthWrite:!1}));r.position.set(e,.7,t),t<0&&(r.rotation.y=Math.PI),r.renderOrder=5,this.car.add(r),this.lights.push(r)}for(let e of[-1,1]){let t=new B;t.position.set(e*1.15,.14,-2.05),t.add(ju(e=>{e.cyl(.38,.44,.3,`#ff8a3d`,U(0,.15,0),void 0,12),e.cyl(.3,.3,.06,`#3d434d`,U(0,.32,0),void 0,12)}));let n=new B;n.position.y=.35,t.add(n);let r=new B;r.position.y=.22,n.add(r),r.add(ju(e=>{e.cyl(.16,.16,.38,`#3d434d`,U(0,0,0),[0,0,Math.PI/2],12),e.box(.22,Du,.22,`#ff8a3d`,U(0,Du/2,0),.06),e.box(.1,Du*.7,.04,`#26282c`,U(0,Du/2,.12),.01)}));let i=new B;i.position.y=Du,r.add(i);let a=new F(new rn(.06,.16,8),new Fn({color:`#ffe680`}));a.position.y=1.3800000000000001,i.add(ju(e=>{e.cyl(.13,.13,.32,`#3d434d`,U(0,0,0),[0,0,Math.PI/2],10),e.box(.17,Ou,.17,`#ffb070`,U(0,Ou/2,0),.05),e.cyl(.07,.05,.16,`#d9dee5`,U(0,Ou,0),void 0,8)})),i.add(a);let o=new Jt;o.position.y=1.46,i.add(o),this.group.add(t),this.arms.push({root:t,yaw:n,shoulder:r,elbow:i,tip:o,nozzle:a})}this.reset()}reset(){this.color=wu[Math.floor(Math.random()*wu.length)],this.paint.set(this.color);for(let e of this.parts)e.mesh.visible=!1;for(let e of this.lights)e.material.opacity=0;this.lastP=-1,this.spin=0,this.table.rotation.y=Eu,this.paintSweep(99)}paintSweep(e){for(let t of this.parts){if(!t.carZ)continue;let n=t.mesh.geometry.attributes.color;for(let r=0;r<n.count;r++){let i=nn.smoothstep(t.carZ[r],e-.25,e+.25);n.setXYZ(r,Tu.r+(this.paint.r-Tu.r)*i,Tu.g+(this.paint.g-Tu.g)*i,Tu.b+(this.paint.b-Tu.b)*i)}n.needsUpdate=!0}}carWorld(e,t,n,r){return this.car.localToWorld(r.set(e,t,n))}reach(e,t,n,r=6){let i=e.root.position,a=t.x-this.group.position.x-i.x,o=t.z-this.group.position.z-i.z,s=t.y-this.group.position.y-(i.y+.35+.22),c=Math.atan2(a,o),l=Math.hypot(a,o),u=Math.min(2.73,Math.max(.3,Math.hypot(l,s))),d=(u*u-Du*Du-Ou*Ou)/(2*Du*Ou),f=Math.acos(nn.clamp(d,-1,1)),p=Math.atan2(l,s)-Math.atan2(Ou*Math.sin(f),Du+Ou*Math.cos(f)),m=Math.min(1,n*r),h=c-e.yaw.rotation.y;for(;h>Math.PI;)h-=Math.PI*2;for(;h<-Math.PI;)h+=Math.PI*2;e.yaw.rotation.y+=h*m,e.shoulder.rotation.x+=(p-e.shoulder.rotation.x)*m,e.elbow.rotation.x+=(f-e.elbow.rotation.x)*m}update(e,t){var n,r,i;this.time+=e;let a=t>=0&&t<1,o=3,s=0,c=null,l=null;for(let e of this.parts){let n=a?(t-e.at)/e.dur:+(t>=1),r=e.mesh;if(n<=0){r.visible=!1;continue}r.visible||(r.visible=!0);let i=Math.min(1,n),o=1-(1-i)*(1-i);switch(r.position.copy(e.base),r.rotation.set(0,0,0),r.scale.setScalar(1),n<1&&(l=e),e.how){case`drop`:r.position.y+=(1-o)*1.6;break;case`crane`:{let t=2.6-e.base.y;r.position.y+=(1-o)*t,n<1&&(c=e);break}case`screw`:{let t=e.base.x<0?-1:1;r.position.x+=t*(1-o)*.9,r.rotation.x=(1-i)*9;break}case`side`:{let t=e.base.x<0?-1:1;r.position.x+=t*(1-o)*1.4,r.position.y+=Math.sin(i*Math.PI)*.35,r.rotation.y=t*(1-o)*.6;break}case`front`:r.position.z+=(1-o)*1.2;break;case`rear`:r.position.z-=(1-o)*1.2;break;case`pop`:{let e=i<1?Math.max(.01,i*(1+Math.sin(i*Math.PI)*.25)):1;r.scale.setScalar(e);break}}if(a&&n>=1&&this.lastP>=0&&(this.lastP-e.at)/e.dur<1){var u,d;(u=this.onPart)==null||u.call(this,e.how),(d=this.onSpark)==null||d.call(this,r.getWorldPosition(ku).setY(ku.y+.4),!0)}}if(c){s=this.carWorld(c.base.x,0,c.base.z,ku).x-this.group.position.x;let e=c.name===`engine`?.45:c.name===`body`?1.02:1.48;o=Math.max(.9,c.mesh.position.y+this.car.position.y+this.table.position.y+e)}let f=this.trolley.position;f.x+=(s-f.x)*Math.min(1,e*6);let p=this.hook.position.y||3,m=p+(o-p)*Math.min(1,e*(c?14:3));this.hook.position.set(f.x,m,0),this.cable.position.set(f.x,3.2,0),this.cable.scale.set(1,Math.max(.05,3.2-m-.06),1);let h=a?nn.clamp((t-.8)/.1,0,1):+(t>=1),g=du.len/2+.4-h*(du.len+.8);h>0&&h<1&&this.paintSweep(g),a&&this.lastP<.8&&t>=.8?(n=this.onPart)==null||n.call(this,`paint`):this.lastP<.8&&t>=.8&&a&&this.paintSweep(99),t>=1&&this.lastP<1&&this.paintSweep(-99);for(let n=0;n<this.arms.length;n++){var _,v;let r=this.arms[n],i=n===0?-1:1,o,s=`rest`;if(a&&h>0&&h<1)o=this.carWorld(Math.sin(this.time*7+n*2)*.5,1.75,g+i*.15,Au),s=`spray`;else if(a&&l&&t<.8){let e=l.mesh.getWorldPosition(Au),t=(e.x-this.group.position.x)*i>-.3;o=t?e.setY(e.y+.5+Math.sin(this.time*9+n)*.08):Au.set(this.group.position.x+i*1.2,2.2,this.group.position.z-1.2),s=t?`weld`:`rest`}else a&&t>=.9?(o=this.carWorld(Math.cos(this.time*6)*.3,1.1,i*1+Math.sin(this.time*6)*.2,Au),s=`weld`):o=Au.set(this.group.position.x+i*1.15,2.6,this.group.position.z-1.4);this.reach(r,o,e,s===`rest`?3:7);let c=r.tip.getWorldPosition(ku);r.nozzle.material.color.set(s===`spray`?this.color:s===`weld`?`#fff3b0`:`#8d97a3`),s===`weld`&&Math.random()<e*16&&((_=this.onSpark)==null||_.call(this,c,!1)),s===`spray`&&Math.random()<e*30&&((v=this.onSpray)==null||v.call(this,c.clone().setY(c.y-.3),this.paint))}a&&t>=.9&&Math.random()<e*10&&((r=this.onSpark)==null||r.call(this,this.carWorld((Math.random()-.5)*1.4,.9+Math.random()*.5,(Math.random()-.5)*2.8,ku),!1));let y=a&&t>=.92?Math.max(0,Math.sin((t-.92)*120)):t>=1?.6:0;for(let e of this.lights)e.material.opacity=y*.9;a&&this.lastP<.93&&t>=.93&&((i=this.onHonk)==null||i.call(this)),a&&t>=.95?this.spin=Math.min(1,(t-.95)/.05):a||(this.spin=+(t>=1));let b=this.spin*this.spin*(3-2*this.spin);this.table.rotation.y=Eu+b*Math.PI*4+(t>=1?this.time*.4:0),this.lastP=t}carPosition(e){return e.copy(Cu).setY(.14)}get tableYaw(){return this.table.rotation.y}},Nu=(()=>{let e=navigator.userAgent;return/Android|iPhone|iPad|iPod|Mobile|Silk|Kindle|Opera Mini/i.test(e)?!0:/Macintosh/.test(e)&&(navigator.maxTouchPoints||0)>1})(),Pu=(()=>{let e=new URLSearchParams(location.search).get(`shadows`);return e===`1`||e!==`0`&&!Nu})(),Fu=[{name:[`Ржавый диск`,`Rusty Disc`],blade:`#b8754a`,teeth:`#d4b08e`,ring:`#7a4a2a`,hub:`#5b6270`,accent:`#3a2a20`,tooth:`tri`,count:16,pattern:`slots`,pn:3},{name:[`Стальной диск`,`Steel Disc`],blade:`#cfd6de`,teeth:`#f4f7fa`,ring:`#8d97a3`,hub:`#ffc21f`,accent:`#30353e`,tooth:`tri`,count:18,pattern:`slots`,pn:4},{name:[`Акулий зуб`,`Shark Tooth`],blade:`#5a88bd`,teeth:`#eef3f8`,ring:`#2f5e9e`,hub:`#ffffff`,accent:`#1f3550`,tooth:`hook`,count:18,pattern:`holes`,pn:6},{name:[`Лесоруб`,`Lumberjack`],blade:`#3fa34d`,teeth:`#f4f7fa`,ring:`#2a6b33`,hub:`#ffd23f`,accent:`#1f3a24`,tooth:`hook`,count:22,pattern:`slots`,pn:5,hubStyle:`gear`},{name:[`Медный зверь`,`Copper Beast`],blade:`#d9844a`,teeth:`#ffd0a8`,ring:`#9a4f22`,hub:`#3a3f48`,accent:`#6a3414`,tooth:`chisel`,count:16,pattern:`spokes`,pn:5},{name:[`Победит`,`Carbide`],blade:`#4b525c`,teeth:`#9aa3ad`,tip:`#ffe066`,ring:`#30353e`,hub:`#e8333a`,accent:`#ffe066`,tooth:`chisel`,count:20,pattern:`holes`,pn:8},{name:[`Бронзовый вихрь`,`Bronze Whirl`],blade:`#c89a3c`,teeth:`#f6dc96`,ring:`#8a6420`,hub:`#ffffff`,accent:`#5a3c10`,tooth:`wave`,count:14,pattern:`laser`,pn:4},{name:[`Чёрный карбон`,`Black Carbon`],blade:`#26282c`,teeth:`#d9dee5`,ring:`#e8333a`,hub:`#e8333a`,accent:`#e8333a`,tooth:`tri`,count:28,pattern:`star`,pn:5},{name:[`Золотой`,`Golden`],blade:`#f0c850`,teeth:`#fff4c0`,tip:`#ffffff`,ring:`#b8862a`,hub:`#e8333a`,accent:`#b8862a`,tooth:`chisel`,count:22,pattern:`spokes`,pn:6,hubStyle:`crown`},{name:[`Алмазный`,`Diamond`],blade:`#d9dee5`,teeth:`#7fd0ff`,ring:`#2f7ad6`,hub:`#ffffff`,accent:`#2f7ad6`,tooth:`segment`,count:12,pattern:`holes`,pn:6},{name:[`Двойной удар`,`Double Strike`],blade:`#cfd6de`,teeth:`#ffffff`,ring:`#e8333a`,hub:`#26282c`,accent:`#e8333a`,tooth:`tri`,count:24,pattern:`slots`,pn:6,double:`#e8333a`},{name:[`Изумруд`,`Emerald`],blade:`#2fbf8a`,teeth:`#c8ffe8`,ring:`#1a7a56`,hub:`#ffd23f`,accent:`#0f5a3e`,tooth:`spike`,count:14,pattern:`rings`,pn:2,glow:`#5effc0`},{name:[`Цепной`,`Chainsaw`],blade:`#ff8a1c`,teeth:`#3a3f48`,ring:`#26282c`,hub:`#26282c`,accent:`#26282c`,tooth:`tri`,count:30,pattern:`slots`,pn:4,chain:!0},{name:[`Ледяной`,`Ice`],blade:`#bfe9ff`,teeth:`#ffffff`,ring:`#7fc8ff`,hub:`#2f7ad6`,accent:`#5fb0ff`,tooth:`spike`,count:18,pattern:`star`,pn:6,glow:`#a8e8ff`},{name:[`Раскалённый`,`Red-Hot`],blade:`#3a2a24`,teeth:`#ffb020`,tip:`#fff2a0`,ring:`#ff5a2a`,hub:`#ffd23f`,accent:`#ff6a2a`,tooth:`hook`,count:24,pattern:`cracks`,pn:9,glow:`#ff7a2a`},{name:[`Вулкан`,`Volcano`],blade:`#1f1c1a`,teeth:`#ff6a2a`,ring:`#b8331c`,hub:`#ff8a2a`,accent:`#ff8a2a`,tooth:`chisel`,count:18,pattern:`cracks`,pn:14,glow:`#ff4a1a`,double:`#ff8a2a`},{name:[`Королевский`,`Royal`],blade:`#7a4ad0`,teeth:`#ffe680`,ring:`#ffcf3c`,hub:`#ffcf3c`,accent:`#ffcf3c`,tooth:`star`,count:10,pattern:`rings`,pn:2,hubStyle:`crown`},{name:[`Сапфир`,`Sapphire`],blade:`#2246a8`,teeth:`#bfe0ff`,ring:`#7fb0ff`,hub:`#ffffff`,accent:`#dbeaff`,tooth:`segment`,count:16,pattern:`dots`,pn:14,glow:`#4f8aff`},{name:[`Молния`,`Thunder`],blade:`#2a2f3a`,teeth:`#fff35a`,ring:`#ffd23f`,hub:`#ffd23f`,accent:`#ffe600`,tooth:`spike`,count:20,pattern:`bolt`,pn:3,glow:`#fff35a`},{name:[`Плазма`,`Plasma`],blade:`#c79bff`,teeth:`#f8eeff`,ring:`#6a3fc4`,hub:`#7dffea`,accent:`#7dffea`,tooth:`hook`,count:28,pattern:`laser`,pn:6,double:`#7dffea`,glow:`#c27bff`},{name:[`Радуга`,`Rainbow`],blade:`#ffffff`,teeth:`#ffffff`,ring:`#ff5a8a`,hub:`#ffd23f`,accent:`#ff5a8a`,tooth:`wave`,count:18,pattern:`rainbow`,pn:7,glow:`#ffffff`},{name:[`Сюрикен`,`Shuriken`],blade:`#30353e`,teeth:`#e6ebf2`,ring:`#e8333a`,hub:`#e8333a`,accent:`#e8333a`,tooth:`star`,count:6,pattern:`holes`,pn:6,double:`#e8333a`},{name:[`Титан`,`Titan`],blade:`#8b95a2`,teeth:`#e6ebf2`,tip:`#4fc8ff`,ring:`#3d434d`,hub:`#4fc8ff`,accent:`#4fc8ff`,tooth:`chisel`,count:32,pattern:`spokes`,pn:8,glow:`#4fc8ff`,hubStyle:`gear`},{name:[`Галактика`,`Galaxy`],blade:`#1a1f4a`,teeth:`#c9b8ff`,ring:`#5a4ad0`,hub:`#ffffff`,accent:`#ffffff`,tooth:`spike`,count:24,pattern:`dots`,pn:24,glow:`#8a7aff`,double:`#5a4ad0`},{name:[`Легенда`,`Legend`],blade:`#ffcf3c`,teeth:`#e8f8ff`,tip:`#7fd0ff`,ring:`#ffffff`,hub:`#7fd0ff`,accent:`#ffffff`,tooth:`hook`,count:32,pattern:`star`,pn:8,double:`#7fd0ff`,glow:`#fff2a0`,hubStyle:`crown`}],Iu=e=>Fu[Math.max(0,Math.min(Fu.length-1,e-1))],Lu=e=>Iu(e).name[t()===`ru`?0:1];function Ru(e,t){let n=[],r=e.count,i=Math.PI*2/r,a=(e,t)=>n.push([Math.cos(e)*t,Math.sin(e)*t]);for(let n=0;n<r;n++){let r=n*i;switch(e.tooth){case`tri`:a(r,t*.88),a(r+i*.62,t);break;case`hook`:a(r,t*.85),a(r+i*.2,t),a(r+i*.6,t*.94);break;case`chisel`:a(r,t*.88),a(r+i*.08,t),a(r+i*.5,t),a(r+i*.58,t*.88);break;case`wave`:for(let e=0;e<6;e++)a(r+i*e/6,t*(.9+.1*Math.sin(Math.PI*e/6)));break;case`spike`:a(r,t*.84),a(r+i*.5,t*1.12),a(r+i*.62,t*.9);break;case`star`:a(r,t*.62),a(r+i*.3,t*.8),a(r+i*.56,t*1.15),a(r+i*.64,t*.92),a(r+i*.82,t*.7);break;case`segment`:a(r,t*.84),a(r+i*.05,t*.84),a(r+i*.08,t),a(r+i*.92,t),a(r+i*.95,t*.84)}}return n}var zu=(e,t)=>e.tooth===`star`?t*.6:t*.84;function Bu(e,t){let n=Math.PI*2/e.count,r=e.tooth===`tri`?.62:e.tooth===`hook`?.2:e.tooth===`chisel`?.3:e.tooth===`star`?.56:.5;return t*n+n*r}function Vu(e){let t=new Qn;return e.forEach(([e,n],r)=>r?t.lineTo(e,n):t.moveTo(e,n)),t.closePath(),t}var Hu=[`#ff4d4d`,`#ff9a2a`,`#ffd23f`,`#4fd16a`,`#3aa8ff`,`#5a6cff`,`#b05cff`];function Uu(e,t){let n=Iu(e),r=new H,i=(e,t,n)=>{e.rotateX(-Math.PI/2),r.add(e,t,U(0,n,0))},a=Ru(n,t),o=new Te(Vu(a),{depth:.05,bevelEnabled:!1,curveSegments:1});if(o.rotateX(-Math.PI/2),r.add(o,n.teeth,U(0,-.02,0)),n.double){let e=Math.PI/n.count,i=Ru(n,t*.96).map(([t,n])=>[t*Math.cos(e)-n*Math.sin(e),t*Math.sin(e)+n*Math.cos(e)]),a=new Te(Vu(i),{depth:.04,bevelEnabled:!1,curveSegments:1});a.rotateX(-Math.PI/2),r.add(a,n.double,U(0,-.07,0))}let s=zu(n,t);if(r.cyl(s,s,.06,n.blade,U(0,-.005,0),void 0,32),r.cyl(s*.74,s*.74,.08,n.ring,U(0,0,0),void 0,28),r.cyl(s*.66,s*.66,.08,n.blade,U(0,.01,0),void 0,28),n.tip)for(let e=0;e<n.count;e++){let i=Bu(n,e);r.box(t*.09,.07,t*.07,n.tip,U(Math.cos(i)*t*.95,.005,-Math.sin(i)*t*.95),0,[0,i,0])}if(n.chain)for(let e=0;e<n.count*2;e++){let i=e/(n.count*2)*Math.PI*2;r.box(t*.12,.08,t*.06,e%2?n.teeth:n.ring,U(Math.cos(i)*t*.9,.01,-Math.sin(i)*t*.9),0,[0,i+Math.PI/2,0])}let c=.058,u=n.pn;switch(n.pattern){case`slots`:for(let e=0;e<u;e++){let i=e/u*Math.PI*2;r.box(s*.5,.075,t*.1,n.accent,U(Math.cos(i)*s*.5,.022,-Math.sin(i)*s*.5),.02,[0,i,0])}break;case`holes`:for(let e=0;e<u;e++){let t=e/u*Math.PI*2;r.cyl(s*.11,s*.11,.08,n.accent,U(Math.cos(t)*s*.5,.024,-Math.sin(t)*s*.5),void 0,10)}break;case`spokes`:for(let e=0;e<u;e++){let t=Math.PI*2/u*.55;i(new l(s*.3,s*.62,6,1,e/u*Math.PI*2,t),n.accent,c)}break;case`star`:{let e=[];for(let t=0;t<u*2;t++){let n=t/(u*2)*Math.PI*2,r=t%2?s*.3:s*.62;e.push([Math.cos(n)*r,Math.sin(n)*r])}i(new p(Vu(e)),n.accent,c);break}case`rings`:for(let e=0;e<u;e++)i(new l(s*(.36+e*.16),s*(.42+e*.16),28),n.accent,c);break;case`laser`:for(let e=0;e<u;e++)i(new l(s*.42,s*.5,10,1,e/u*Math.PI*2,Math.PI*2/u*.6),n.accent,c);break;case`cracks`:for(let e=0;e<u;e++){let i=e/u*Math.PI*2+Math.sin(e*7.1)*.3,a=s*(.25+.2*Math.abs(Math.sin(e*3.3))),o=s*(.2+.25*Math.abs(Math.cos(e*5.7)));r.box(o,.075,t*.03,n.accent,U(Math.cos(i)*(a+o/2),.022,-Math.sin(i)*(a+o/2)),0,[0,i+Math.sin(e)*.4,0])}break;case`bolt`:for(let e=0;e<u;e++){let t=e/u*Math.PI*2,r=Math.cos(t),a=Math.sin(t),o=[[.22,.05],[.5,.1],[.42,-.02],[.68,.02],[.4,-.12],[.46,-.03],[.22,-.06]].map(([e,t])=>[(e*r-t*a)*s,(e*a+t*r)*s]);i(new p(Vu(o)),n.accent,c)}break;case`dots`:for(let e=0;e<u;e++){let i=e*2.39996,a=s*(.25+.42*(e*.618%1));r.sphere(t*(e%4?.022:.04),n.accent,U(Math.cos(i)*a,.054,Math.sin(i)*a),U(1,.4,1),5)}break;case`rainbow`:for(let e=0;e<u;e++)i(new l(s*.28,s*.66,6,1,e/u*Math.PI*2,Math.PI*2/u),Hu[e%Hu.length],c)}if(r.cyl(t*.2,t*.22,.14,n.hub,U(0,.04,0),void 0,12),r.cyl(t*.08,t*.08,.18,`#3a3f48`,U(0,.06,0),void 0,8),n.hubStyle===`gear`)for(let e=0;e<8;e++){let i=e/8*Math.PI*2;r.box(t*.07,.12,t*.07,n.hub,U(Math.cos(i)*t*.23,.04,Math.sin(i)*t*.23),0,[0,i,0])}if(n.hubStyle===`crown`)for(let e=0;e<5;e++){let n=e/5*Math.PI*2;r.add(new rn(t*.05,t*.14,4),`#ffcf3c`,U(Math.cos(n)*t*.15,.17,Math.sin(n)*t*.15))}return r.build()}var Wu=new Map;function Gu(e,t=96){let n=e*1e3+t,r=Wu.get(n);if(r)return r;let i=Iu(e),a=document.createElement(`canvas`);a.width=a.height=t;let o=a.getContext(`2d`),s=t/2,c=t*.42,l=(e,n,r=!0)=>{o.beginPath(),e.forEach(([e,t],n)=>n?o.lineTo(s+e,s-t):o.moveTo(s+e,s-t)),o.closePath(),o.fillStyle=n,o.fill(),r&&(o.lineWidth=t/48,o.strokeStyle=`rgba(30,34,42,0.85)`,o.stroke())},u=(e,t,n=0,r=0)=>{o.beginPath(),o.arc(s+n,s-r,e,0,Math.PI*2),o.fillStyle=t,o.fill()};if(i.glow){let e=o.createRadialGradient(s,s,c*.8,s,s,c*1.2);e.addColorStop(0,i.glow),e.addColorStop(1,`rgba(255,255,255,0)`),o.fillStyle=e,o.fillRect(0,0,t,t)}if(i.double){let e=Math.PI/i.count;l(Ru(i,c*.96).map(([t,n])=>[t*Math.cos(e)-n*Math.sin(e),t*Math.sin(e)+n*Math.cos(e)]),i.double)}l(Ru(i,c),i.teeth);let d=zu(i,c);if(u(d,i.blade),o.lineWidth=t/40,o.strokeStyle=i.ring,o.beginPath(),o.arc(s,s,d*.7,0,Math.PI*2),o.stroke(),i.tip)for(let e=0;e<i.count;e++){let n=Bu(i,e);u(t/40,i.tip,Math.cos(n)*c*.95,Math.sin(n)*c*.95)}o.fillStyle=i.accent,o.strokeStyle=i.accent;let f=i.pn;switch(i.pattern){case`slots`:o.lineWidth=t/18,o.lineCap=`round`;for(let e=0;e<f;e++){let t=e/f*Math.PI*2;o.beginPath(),o.moveTo(s+Math.cos(t)*d*.28,s-Math.sin(t)*d*.28),o.lineTo(s+Math.cos(t)*d*.72,s-Math.sin(t)*d*.72),o.stroke()}break;case`holes`:for(let e=0;e<f;e++){let t=e/f*Math.PI*2;u(d*.11,i.accent,Math.cos(t)*d*.5,Math.sin(t)*d*.5)}break;case`spokes`:case`laser`:case`rainbow`:for(let e=0;e<f;e++){let t=e/f*Math.PI*2,n=Math.PI*2/f*(i.pattern===`rainbow`?1:i.pattern===`laser`?.6:.55),r=i.pattern===`laser`?d*.42:d*.3,a=i.pattern===`laser`?d*.5:i.pattern===`rainbow`?d*.66:d*.62;o.beginPath(),o.arc(s,s,a,-t,-t-n,!0),o.arc(s,s,r,-t-n,-t,!1),o.closePath(),o.fillStyle=i.pattern===`rainbow`?Hu[e%Hu.length]:i.accent,o.fill()}break;case`star`:{let e=[];for(let t=0;t<f*2;t++){let n=t/(f*2)*Math.PI*2,r=t%2?d*.3:d*.62;e.push([Math.cos(n)*r,Math.sin(n)*r])}l(e,i.accent,!1);break}case`rings`:o.lineWidth=d*.06;for(let e=0;e<f;e++)o.beginPath(),o.arc(s,s,d*(.39+e*.16),0,Math.PI*2),o.stroke();break;case`cracks`:o.lineWidth=t/40;for(let e=0;e<f;e++){let t=e/f*Math.PI*2+Math.sin(e*7.1)*.3,n=d*(.25+.2*Math.abs(Math.sin(e*3.3))),r=d*(.2+.25*Math.abs(Math.cos(e*5.7)));o.beginPath(),o.moveTo(s+Math.cos(t)*n,s-Math.sin(t)*n),o.lineTo(s+Math.cos(t+.2)*(n+r),s-Math.sin(t+.2)*(n+r)),o.stroke()}break;case`bolt`:for(let e=0;e<f;e++){let t=e/f*Math.PI*2,n=Math.cos(t),r=Math.sin(t);l([[.22,.05],[.5,.1],[.42,-.02],[.68,.02],[.4,-.12],[.46,-.03],[.22,-.06]].map(([e,t])=>[(e*n-t*r)*d,(e*r+t*n)*d]),i.accent,!1)}break;case`dots`:for(let e=0;e<f;e++){let n=e*2.39996,r=d*(.25+.42*(e*.618%1));u(e%4?t/70:t/40,i.accent,Math.cos(n)*r,Math.sin(n)*r)}}u(c*.22,i.hub),u(c*.08,`#3a3f48`);let p=a.toDataURL();return Wu.set(n,p),p}var Ku,qu={body:`#ffc21f`,bodyDark:`#f0a81a`,chassis:`#5d6878`,tire:`#33363d`,hub:`#ffd54a`,glass:`#a9e2ff`,steel:`#cfd6de`,steelDark:`#8d97a3`,skin:`#f4c7a1`,helmet:`#ff8a1c`,shirt:`#2f7ad6`,seat:`#a8503a`},Ju=[{paint:`#f0602a`,dark:`#c9481c`,trim:`#ffd54a`},{paint:`#e8453c`,dark:`#b8302a`,trim:`#ffffff`},{paint:`#2f7ad6`,dark:`#2259a8`,trim:`#ffd54a`},{paint:`#2fa46a`,dark:`#22804f`,trim:`#e6ebf2`},{paint:`#8a5cf0`,dark:`#6a3fc4`,trim:`#ffd23f`}],Yu=[`#7d8794`,`#d9dee5`,`#2e3138`,`#ffcf3c`,`#ff5a4f`],Xu=[`#ffd54a`,`#e6ebf2`,`#ffd54a`,`#ffcf3c`,`#ff5a4f`];function Zu(e){let t=Math.min(4,Math.floor((e.saw-1)/5)),n=Math.min(4,Math.floor((e.engine-1)/4)),r=Math.min(4,Math.floor((e.bed-1)/5)),i=Math.min(3,Math.floor((e.engine-1)/5)),a=(e.engine-1)%5,o=i===0?.42+a*.014:i===1?.5+a*.016:i===2?.62+a*.022:.5;return{sawR:ot(e.saw),st:t,et:n,bt:r,wt:i,wi:a,bi:(e.bed-1)%5,bedW:1.2+(e.bed-1)*.045,bedL:.95+(e.bed-1)*.05,wallH:.24+(e.bed-1)*.016,rearR:o,frontR:i===3?.4:o*(i===2?.86:.7),lift:i===3?.22:(o-.48)*.85,layers:Math.min(12,3+Math.floor((e.bed-1)/2.6)),rust:Math.max(0,Math.min(1,(14-(e.saw+e.bed+e.engine))/11))}}var Qu=class e{constructor(e){this.root=new B,this.bodyGroup=new B,this.bedGroup=new B,this.sawPivot=new B,this.sawScale=new B,this.sawSpin=new B,this.bedAnchor=new B,this.beacon=new B,this.exhaust=new L(.36,1.62,.55),this.armZ0=.85,this.wheels=[],this.bedSize={w:1.2,l:.9},this.stackLayers=3,this.sawOffset=2,this.rearExtent=1.6,this.marks={at:[{x:-.78,z:-.6},{x:.78,z:-.6}],width:.4},this.sawR=.85,this.sawLift=0,this.pops=[],this.swap=null,this.onSawLand=null,this.tracks=null,this.look=e,this.root.add(this.bodyGroup),this.bodyGroup.add(this.sawPivot),this.sawPivot.add(this.sawScale),this.sawScale.add(this.sawSpin),this.bodyGroup.add(this.bedGroup),this.bedGroup.add(this.bedAnchor),this.bodyGroup.add(this.beacon);let t=new F(new Ne(1,1),id());t.rotation.x=-Math.PI/2,t.position.y=.03,t.renderOrder=-1,this.shadow=t,this.root.add(t),this.blur=new F(new Mn(1,32),nd()),this.blur.rotation.x=-Math.PI/2,this.blur.renderOrder=2,this.sawSpin.add(this.blur),this.glow=new F(new l(.93,1.16,48),new Fn({transparent:!0,depthWrite:!1,blending:2,opacity:.6})),this.glow.rotation.x=-Math.PI/2,this.glow.renderOrder=3,this.sawScale.add(this.glow),this.rebuild(e)}rebuild(e,t=!1){this.look={...e};let n=Zu(e);for(let e of[this.body,this.bedMesh,this.arms]){var r;e&&((r=e.parent)==null||r.remove(e),e.geometry.dispose())}for(let e of this.wheels)this.bodyGroup.remove(e.mesh),e.mesh.geometry.dispose();if(this.wheels=[],this.sawMesh){if(this.sawSpin.remove(this.sawMesh),this.sawScale.remove(this.guardMesh),t){this.endSwap();let e=new B;e.position.copy(this.sawPivot.position),e.rotation.copy(this.sawPivot.rotation);let t=new B;t.rotation.y=this.sawSpin.rotation.y,t.add(this.sawMesh),e.add(t,this.guardMesh),this.bodyGroup.add(e),this.swap={old:e,spin:t,oldK:this.sawScale.scale.x,t:0,landed:!1}}else this.sawMesh.geometry.dispose(),this.guardMesh.geometry.dispose()}let i=e.engine,a=e.bed,o=e.saw,s=n.et,c=n.bt,l=n.st,u=i+a+o,d={...qu},f=Yu[s],p=n.lift,m=n.bedL,h=n.bedW,g=-.56-m/2,_=g-m/2;this.rearExtent=-_;let v=new H,y=1.1-_;v.box(1.25,.3,y,d.chassis,U(0,.62+p,(1.1+_)/2),.08),v.box(1.1,.14,.32,f,U(0,.56+p,1.12),.05);let b=.8+i*.012,x=.62;v.box(1.02,.52,b,d.body,U(0,1.02+p,x),.12),v.box(.86,.3,.06,`#3a404a`,U(0,.98+p,x+b/2+.01),.02),v.box(.92,.36,.04,f,U(0,.98+p,x+b/2+.005),.02);for(let e=-1;e<=1;e++)v.box(.8,.035,.03,`#8a939f`,U(0,.98+p+e*.08,x+b/2+.035),.01);if(v.sphere(.075,`#fff6c8`,U(-.36,1.1+p,x+b/2+.01),1,8),v.sphere(.075,`#fff6c8`,U(.36,1.1+p,x+b/2+.01),1,8),v.box(1.06,.06,b+.02,d.bodyDark,U(0,.77+p,x),.02),n.rust>.05){let e=n.rust;v.box(.18*e+.06,.02,.14*e+.06,`#c8743a`,U(.25,1.285+p,.77),.01,[0,.4,0]),v.box(.012,.1*e+.05,.16*e+.06,`#c06a34`,U(.515,.95+p,.44),.005),e>.6&&v.box(.12,.02,.1,`#b8642f`,U(-.2,1.285+p,.37),.01,[0,-.3,0])}if(u>=30)for(let e of[-.52,.52])v.box(.015,.05,b*.9,`#e6ebf2`,U(e,.86+p,x),.01);if(u>=45)for(let e of[-.12,.12])v.box(.12,.012,b+.03,`#e8333a`,U(e,1.285+p,x),.005);if(i>=3&&v.box(1.16,.08,.1,`#e6ebf2`,U(0,.66+p,1.3),.03),i>=5&&v.box(.4,.16,.34,`#2c3036`,U(-.18,1.34+p,.6799999999999999),.06),i>=5&&v.box(.3,.05,.05,f,U(-.18,1.36+p,.86),.02),i>=7)for(let e of[-.68,.68])v.box(.12,.06,.7,f,U(e,.52+p,-.1),.02);if(i>=9)for(let e of[-.515,.515])for(let t=0;t<3;t++)v.box(.012,.09-t*.02,.22-t*.04,t%2?`#ffd23f`:`#ff5a2a`,U(e+Math.sign(e)*t*.007,.98+p+t*.03,.72-t*.12),.01,[0,0,0]);if(i>=13){v.box(1.3,.05,.26,f,U(0,2.22+p,-.62),.02);for(let e of[-.5,.5])v.box(.05,.22,.08,`#2c3036`,U(e,2.1+p,-.6),.02)}if(i>=19)for(let e of[-.3,.3])v.cyl(.08,.08,.5,`#3a8df0`,U(e,1.36+p,.42),[Math.PI/2,0,0],8);let S=1+Math.min(3,Math.floor((i-1)/3)),C=.5+s*.08;for(let e=0;e<S;e++){let t=.38-e*.16;v.cyl(.055,.055,C,s>=1?`#d9dee5`:`#9aa3ae`,U(t,1.45+p+s*.04,.5),void 0,8),v.cyl(.07,.06,.06,`#5d6672`,U(t,1.45+p+s*.04+C/2,.5),void 0,8)}this.exhaust.set(.38,1.5+p+s*.04+C/2,.5);let w=p;v.box(1.1,.14,.95,d.chassis,U(0,.84+w,-.12),.05),v.box(.5,.36,.45,d.seat,U(0,1.08+w,-.27),.08),v.box(.5,.45,.12,d.seat,U(0,1.36+w,-.48),.05);let T=-.5800000000000001,E=1.98+w,D=.86+w;for(let e of[-.5,.5])v.box(.1,E-D,.1,d.body,U(e,(E+D)/2,T),.04),v.sphere(.075,d.body,U(e,E,T),1,8),v.box(.18,.06,.16,d.chassis,U(e,D+.03,T),.02),v.box(.07,.62,.07,d.body,U(e*.98,1.2+w,.28),.025);if(v.box(1,.1,.1,d.body,U(0,E,T),.04),v.box(1.02,.07,.07,d.body,U(0,1.52+w,.28),.025),v.box(.94,.4,.03,d.glass,U(0,1.3+w,.3),.01),v.torus(.13,.025,`#3a3f48`,U(0,1.32+w,.08000000000000002),[-1,0,0],10),v.box(.36,.4,.26,d.shirt,U(0,1.43+w,-.26),.1),v.sphere(.18,d.skin,U(0,1.76+w,-.2),1,12),v.sphere(.2,d.helmet,U(0,1.85+w,-.21),U(1,.66,1.05),12),v.box(.05,.06,.4,`#ffffff`,U(0,1.98+w,-.21),.02),v.box(.34,.04,.14,d.helmet,U(0,1.8+w,-.03),.015),v.sphere(.03,`#222`,U(-.07,1.77+w,-.03),1,6),v.sphere(.03,`#222`,U(.07,1.77+w,-.03),1,6),i>=11){let e=Math.min(5,i-10);v.box(.2+e*.15,.06,.12,`#3a404a`,U(0,E+.08,T),.02);for(let t=0;t<e;t++)v.box(.11,.08,.06,`#fff3b0`,U((t-(e-1)/2)*.15,E+.1,-.52),.02)}if(v.cyl(.1,.12,.08,`#4a515c`,U(.4,E+.07,T),void 0,10),i>=15&&v.cyl(.1,.12,.08,`#4a515c`,U(-.4,E+.07,T),void 0,10),n.wt<=1){let e=n.rearR+.1,t=(n.wt===0?.32+n.wi*.012:.4+n.wi*.015)+.1,r=.76+n.wi*.008;for(let i of[-r,r]){let r=new In(e,e,t,18,1,!0,.2,Math.PI-.55);r.rotateZ(Math.PI/2),v.add(r,d.body,U(i,n.rearR,-.6));let a=new In(e-.03,e-.03,t,18,1,!0,.2,Math.PI-.55);a.rotateZ(Math.PI/2),a.scale(-1,1,1);let o=a.attributes.normal;for(let e=0;e<o.count;e++)o.setXYZ(e,-o.getX(e),-o.getY(e),-o.getZ(e));v.add(a,d.chassis,U(i,n.rearR,-.6))}}if(this.body=new F(v.build(),od()),this.body.castShadow=!0,this.bodyGroup.add(this.body),this.buildBed(n,a,p),this.bedGroup.position.set(0,.86+p,g),this.bedAnchor.position.set(0,.06,0),this.bedSize={w:h-.12,l:m-.12},this.stackLayers=n.layers,this.beacon.position.set(.4,2.14+w,-.48),!this.beacon.children.length){let e=new F(new In(.075,.09,.14,10),new Fn({color:`#ffae1a`}));this.beacon.add(e);let t=e.clone();t.position.x=-.8,t.name=`b2`,this.beacon.add(t)}this.beacon.getObjectByName(`b2`).visible=i>=15;let O=n.rearR,k=n.frontR,ee=Xu[s];if(this.clearTracks(),n.wt===3)this.buildTracks(n.wi,d.body),this.marks={at:[-.8,.8].map(e=>({x:e,z:0})),width:.5};else{let e=n.wt===0?.32+n.wi*.012:n.wt===1?.4+n.wi*.015:.52+n.wi*.02,t=n.wt===2?.86+n.wi*.015:.76+n.wi*.008;this.marks={at:[-t,t].map(e=>({x:e,z:-.6})),width:e*.95},this.addAxle(O,e,t,U(0,O,-.6),ee,n.wt,n.wi),this.addAxle(k,e*.78,t-.08,U(0,k,.66),ee,n.wt,n.wi)}c>=3&&this.addAxle(.36,.26,h/2-.08,U(0,.36,_+.38),ee,1,2),c>=4&&this.addAxle(.36,.26,h/2-.08,U(0,.36,_+.9),ee,1,2);let te=new H,ne=l>=2?`#3a404a`:`#6b7583`,re=.12+l*.02;for(let e of[-.34,.34])te.box(re,re,1,ne,U(e,0,.5),.03);if(l>=1)for(let e of[-.2,.2])te.cyl(.05,.05,.8,`#d9dee5`,U(e,.08,.45),[Math.PI/2,0,0],6);this.arms=new F(te.build(),od()),this.arms.castShadow=!0,this.arms.position.set(0,.48,this.armZ0),this.bodyGroup.add(this.arms);let ie=n.sawR;this.sawR=ie,this.sawOffset=1.05+ie*.92,this.sawMesh=new F(Uu(o,ie),od()),this.sawMesh.castShadow=!0,this.sawSpin.add(this.sawMesh);let ae=Iu(o);this.glow.visible=!!ae.glow,ae.glow&&this.glow.material.color.set(ae.glow),this.glow.scale.setScalar(ie),this.glow.position.y=.07,this.guardMesh=new F(ed(ie,ae.ring),od()),this.guardMesh.castShadow=!0,this.sawScale.add(this.guardMesh),this.blur.scale.setScalar(ie*1.02),this.blur.position.y=.09,this.placeSaw(1);let oe=this.sawOffset+ie-_+.4;this.shadow.scale.set(Math.max(2.4,h+.9)+ie*.5,oe,1),this.shadow.position.z=(this.sawOffset+ie+_)/2}placeSaw(e){let t=this.sawR*e,n=1.05+t*.92,r=this.sawLift*(Math.PI/4),i=t*.9,a=.34+this.sawLift*.22+Math.sin(r)*i,o=n-i+Math.cos(r)*i;this.sawPivot.position.set(0,a,o),this.sawPivot.rotation.x=-r,this.sawScale.scale.setScalar(e);let s=a-.48,c=o-this.armZ0,l=Math.max(.1,Math.hypot(s,c)-t*.2);this.arms.scale.set(1,1,l),this.arms.rotation.x=Math.atan2(-s,c)}buildBed(e,t,n){let r=Ju[e.bt],i=e.bedW,a=e.bedL,o=e.wallH,s=e.bi,c=new H,l=(e,t=o,n=.7)=>{c.box(i,t,.06,e,U(0,t/2,-a/2+.03),.02),c.box(i,t*n,.06,e,U(0,t*n/2,a/2-.03),.02),c.box(.06,t,a,e,U(-i/2+.03,t/2,0),.02),c.box(.06,t,a,e,U(i/2-.03,t/2,0),.02)},u=(e,t=-.14)=>{for(let n=0;n<e;n++){let r=(n-(e-1)/2)*Math.min(.32,(i-.3)/Math.max(1,e-1));c.box(.14,.08,.05,`#ff3b3b`,U(r,t,-a/2-.02),.02)}};if(e.bt===0){c.box(i-.03,.1,a-.03,`#8a6244`,U(0,0,0),.03);let e=2+s,t=o/e;for(let n=0;n<e;n++){let r=(n+.5)*t,o=n%2?`#c48e52`:`#d29d5e`;(s!==0||n!==1)&&c.box(.06,t*.86,a,o,U(i/2-.03,r,0),.01),c.box(.06,t*.86,a,o,U(-i/2+.03,r,0),.01),c.box(i,t*.86,.06,o,U(0,r,-a/2+.03),.01),n<e-1&&c.box(i,t*.86,.06,o,U(0,r,a/2-.03),.01)}for(let e of[-1,1])for(let t of[-1,1])c.box(.08,o+.04,.08,`#9a5a34`,U(e*i/2,o/2,t*a/2),.01);u(2)}else if(e.bt===1){c.box(i-.03,.1,a-.03,r.dark,U(0,0,0),.03),l(r.paint);let e=3+s;for(let t=0;t<e;t++){let n=-a/2+(t+.5)*a/e;for(let e of[-i/2-.005,i/2+.005])c.box(.04,o*.86,.07,r.dark,U(e,o*.45,n),.01)}for(let e of[-i/2+.03,i/2-.03])c.cyl(.035,.035,a,`#d9dee5`,U(e,o+.04,0),[Math.PI/2,0,0],6);for(let e of[-i/2+.2,i/2-.2])c.box(.24,.26,.03,`#26282c`,U(e,-.3,-a/2-.03),.01);u(2+Math.floor(s/2))}else if(e.bt===2){c.box(i-.03,.12,a-.03,r.dark,U(0,0,0),.03);let e=.12;for(let t of[-1,1])c.box(.06,o,a,r.paint,U(t*(i/2-.03+e/2),o/2,0),.02,[0,0,-t*.18]);c.box(i+e,o,.06,r.paint,U(0,o/2,-a/2+.03),.02),c.box(i+e,o*1.5,.08,r.paint,U(0,o*.75,a/2-.04),.02),c.box(i+e,.06,.32,r.dark,U(0,o*1.5,a/2+.1),.02),c.cyl(.07,.07,.6,`#d9dee5`,U(0,-.2,a/2-.25),[.9,0,0],8);for(let t=0;t<=s;t++)for(let n of[-1,1])c.box(.065,.04,a*.84,r.trim,U(n*(i/2+e/2+.005),o*(.25+t*.15),0),.01,[0,0,-n*.18]);u(3)}else if(e.bt===3){c.box(i-.03,.12,a-.03,r.dark,U(0,0,0),.03),l(r.paint);let e=o+.5+s*.05,t=2+Math.round(a/.55);for(let n=0;n<t;n++){let o=-a/2+.04+n*(a-.08)/(t-1);for(let t of[-i/2-.012,i/2+.012])c.box(.05,e,.05,r.trim,U(t,e/2,o),.01)}for(let t of[-i/2-.012,i/2+.012])c.box(.05,.05,a,r.trim,U(t,e,0),.01);for(let e=0;e<3+s;e++)c.box(.12,o*.55,.065,e%2?`#26282c`:`#ffcf3c`,U((e-(2+s)/2)*i/(4+s),o*.42,-a/2+.005),0,[0,0,.5]);for(let t=0;t<5;t++)c.box(.1,.06,.04,`#ffb020`,U((t-2)*(i/6),e+.06,-a/2),.01);u(4)}else{c.box(i-.03,.14,a-.03,r.dark,U(0,0,0),.03),l(r.paint,o,1);for(let e of[-1,1])c.box(.08,.08,a+.04,`#ffcf3c`,U(e*i/2,o,0),.02);c.box(i+.04,.08,.08,`#ffcf3c`,U(0,o,-a/2),.02);let e=4+s*2;for(let t=0;t<e;t++)for(let n of[-1,1])c.box(.03,.06,.06,`#fff3b0`,U(n*(i+.08)/2,o*.55,-a/2+(t+.5)*a/e),.01);let t=new Qn;for(let e=0;e<10;e++){let n=-Math.PI/2+e*Math.PI/5,r=e%2?.07:.17;e===0?t.moveTo(Math.cos(n)*r,Math.sin(n)*r):t.lineTo(Math.cos(n)*r,Math.sin(n)*r)}c.add(new Te(t,{depth:.03,bevelEnabled:!1}),`#ffcf3c`,U(0,o*.5,-a/2-.04),[0,Math.PI,Math.PI]),u(6)}this.bedMesh=new F(c.build(),od()),this.bedMesh.castShadow=!0,this.bedGroup.add(this.bedMesh)}clearTracks(){this.tracks&&(this.bodyGroup.remove(this.tracks.links,this.tracks.fender),this.tracks.links.geometry.dispose(),this.tracks.fender.geometry.dispose(),this.tracks=null)}buildTracks(t,n){let r=e.TRACK,i=.8+t*.012,a=new H;a.box(.46,.06,.13,`#2a2c31`,U(0,0,0),.01),a.box(.46,.05,.04,`#3d4148`,U(0,-.05,0),.005);let o=2*(r.zF-r.zR)+2*Math.PI*r.r,s=Math.round(o/.15),c=new yn(a.build(),od(),s*2);c.castShadow=!0,c.frustumCulled=!1,this.bodyGroup.add(c);let l=new H;for(let e of[-i,i])l.box(.52,.06,r.zF-r.zR+.95,n,U(e,r.y+r.r+.1,0),.02),l.box(.04,.1,r.zF-r.zR+.8,`#ffcf3c`,U(e+Math.sign(e)*.26,r.y+r.r+.08,0),.01);let u=new F(l.build(),od());u.castShadow=!0,this.bodyGroup.add(u),this.tracks={links:c,len:o,offset:0,half:i,fender:u};let d=(e,t,n)=>{let a=new H;for(let e of[-i,i]){a.cyl(t,t,.3,`#5b6270`,U(e,0,0),[0,0,Math.PI/2],12),a.cyl(t*.55,t*.55,.32,n,U(e,0,0),[0,0,Math.PI/2],8);for(let n=0;n<4;n++){let r=n/4*Math.PI*2;a.box(.33,.05,t*.5,`#3d4148`,U(e,Math.cos(r)*t*.7,Math.sin(r)*t*.7),0,[r,0,0])}}let o=new F(a.build(),od());o.position.set(0,e===r.zF||e===r.zR?r.y:t+.04,e),o.castShadow=!0,this.bodyGroup.add(o),this.wheels.push({mesh:o,r:t})};d(r.zR,r.r-.05,`#ffcf3c`),d(r.zF,r.r-.07,`#ffcf3c`);for(let e of[-.33,0,.33])d(e,.24,`#d9dee5`)}poseTracks(t,n){let r=this.tracks;if(!r)return;let i=e.TRACK;r.offset=(r.offset+n*t)%r.len;let a=i.zF-i.zR,o=Math.PI*i.r,s=r.links.count/2,c=new Pt,l=new Zn,u=new L,d=new L(1,1,1),f=new L(1,0,0);for(let e=0;e<s;e++){let t=((e/s*r.len+r.offset)%r.len+r.len)%r.len,n,p,m;if(t<a)p=i.zF-t,n=i.y-i.r,m=0;else if((t-=a)<o){let e=t/i.r;p=i.zR-Math.sin(e)*i.r,n=i.y-Math.cos(e)*i.r,m=-e}else if((t-=o)<a)p=i.zR+t,n=i.y+i.r,m=-Math.PI;else{t-=a;let e=t/i.r;p=i.zF+Math.sin(e)*i.r,n=i.y+Math.cos(e)*i.r,m=-Math.PI-e}l.setFromAxisAngle(f,m);for(let t of[0,1])u.set(t?r.half:-r.half,n,p),r.links.setMatrixAt(e*2+t,c.compose(u,l,d))}r.links.instanceMatrix.needsUpdate=!0}addAxle(e,t,n,r,i,a=1,o=0){let s=new H;for(let r of[-1,1]){let c=r*n;if(a===0){s.cyl(e,e,t,`#3b3d42`,U(c,0,0),[0,0,Math.PI/2],14);for(let n of[-.25,.25])s.cyl(e+.01,e+.01,t*.06,`#2e3034`,U(c+n*t,0,0),[0,0,Math.PI/2],14);s.cyl(e*.5,e*.5,t*1.04,o<2?`#e0a83c`:`#efc65a`,U(c,0,0),[0,0,Math.PI/2],10),s.cyl(e*.16,e*.16,t*1.18,`#9a6a3a`,U(c+r*.01,0,0),[0,0,Math.PI/2],6),s.box(t*1.06,.06,e*.4,`#6b625a`,U(c,e*.98,0),0)}else{let n=a===2?12:10;s.cyl(e,e,t,qu.tire,U(c,0,0),[0,0,Math.PI/2],16);for(let r=0;r<n;r++){let i=r/n*Math.PI*2;a===2?(s.box(t*.5,.12,e*.3,`#1f2124`,U(c-t*.24,Math.cos(i)*e,Math.sin(i)*e),0,[i,.35,0]),s.box(t*.5,.12,e*.3,`#1f2124`,U(c+t*.24,Math.cos(i+.26)*e,Math.sin(i+.26)*e),0,[i+.26,-.35,0])):s.box(t*1.07,.07,e*.36,`#1f2124`,U(c,Math.cos(i)*e,Math.sin(i)*e),0,[i,0,0])}let l=a===2?[`#e6ebf2`,`#ffcf3c`,`#e6ebf2`,`#ff5a4f`,`#ffcf3c`][o]:i;if(s.cyl(e*.52,e*.52,t*1.04,l,U(c,0,0),[0,0,Math.PI/2],12),a===2)for(let n=0;n<6;n++){let r=n/6*Math.PI*2;s.box(t*1.08,.05,e*.36,`#9aa1a8`,U(c,Math.cos(r)*e*.3,Math.sin(r)*e*.3),0,[r,0,0])}s.cyl(e*.2,e*.2,t*1.18,a===2?`#e8333a`:`#e0a412`,U(c+r*.01,0,0),[0,0,Math.PI/2],8)}}let c=new F(s.build(),od());c.position.set(r.x,r.y,r.z),c.castShadow=!0,this.bodyGroup.add(c),this.wheels.push({mesh:c,r:e})}pop(e,t){this.pops=this.pops.filter(t=>t.part!==e),this.pops.push({part:e,t:0,from:t})}get popping(){return this.pops.length>0||this.swap!==null}endSwap(){let e=this.swap;e&&(e.old&&(e.old.traverse(e=>e.isMesh?e.geometry.dispose():0),e.old.removeFromParent()),this.swap=null)}animate(e,t,n,r,i){for(let n of this.wheels)n.mesh.rotation.x+=t*e/n.r;this.poseTracks(e,t);let a=0,o=0,s=-1,c=this.swap;if(c){if(c.t+=e,c.old){let t=Math.min(1,c.t/.5);c.old.position.y+=e*(7-c.t*16),c.old.position.z+=e*3,c.old.rotation.x+=e*8,c.old.rotation.z+=e*5,c.spin.rotation.y-=e*30,c.old.scale.setScalar(Math.max(.001,c.oldK*(1-t*t))),t>=1&&(c.old.traverse(e=>e.isMesh?e.geometry.dispose():0),c.old.removeFromParent(),c.old=null)}let t=(c.t-.32)/.42;if(s=t<=0?.001:t<1?.35+.65*t:$u(Math.min(1,.55+(t-1)*.9)),o=t<=0?2.6:t<1?2.6*(1-t*t):0,t>=1&&!c.landed){var l;c.landed=!0,(l=this.onSawLand)==null||l.call(this)}a=45*Math.max(0,1-Math.max(0,c.t-.6)/1.2),c.t>1.9&&!c.old&&(this.swap=null)}this.sawSpin.rotation.y-=(n+a)*e,this.blur.material.opacity=Math.min(.85,Math.max(0,(n+a-4)/10)),this.glow.visible&&(this.glow.material.opacity=.45+.2*Math.sin(i*7)+Math.min(.4,a/60)),this.beacon.rotation.y+=e*9;let u=r?1+Math.sin(i*30)*.08:1;this.beacon.scale.setScalar(u);let d=1,f=1,p=1;for(let t=this.pops.length-1;t>=0;t--){let n=this.pops[t];n.t+=e/.9;let r=Math.min(1,n.t),i=$u(r);n.part===`saw`?d=n.from/this.sawR*(1-i)+i:n.part===`bed`?f=n.from/this.lookBedW()*(1-i)+i:p=1+Math.sin(r*Math.PI*3)*.16*(1-r),n.t>=1&&this.pops.splice(t,1)}s>=0&&(d=s),this.placeSaw(d),o>0&&(this.sawPivot.position.y+=o),this.bedGroup.scale.set(f,.6+.4*f,f);for(let e of this.wheels)e.mesh.scale.setScalar(p)}lookBedW(){return Zu(this.look).bedW}};Ku=Qu,Ku.TRACK={zF:.66,zR:-.66,y:.4,r:.4};function $u(e){return e<=0?0:e>=1?1:1-Math.cos(e*Math.PI*3.5)*Math.exp(-e*5.5)}function ed(e,t){let n={guard:t},r=new H,i=Math.PI*.95,a=Math.PI-i/2,o=new In(e*1.06,e*1.06,.2,24,1,!0,a,i);r.add(o,n.guard,U(0,.1,0));let s=new l(e*.8,e*1.07,24,1,Math.PI/2-i/2,i);s.rotateX(-Math.PI/2),r.add(s,n.guard,U(0,.2,0));let c=new l(e*.9,e*.97,24,1,Math.PI/2-i/2+.08,i-.16);return c.rotateX(-Math.PI/2),r.add(c,`#ffd23f`,U(0,.214,0)),r.build()}var td=null;function nd(){if(!td){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(64,64,8,64,64,64);n.addColorStop(0,`rgba(255,255,255,0)`),n.addColorStop(.55,`rgba(255,255,255,0.05)`),n.addColorStop(.86,`rgba(255,255,255,0.35)`),n.addColorStop(.95,`rgba(255,255,255,0.6)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.beginPath(),t.arc(64,64,64,0,Math.PI*2),t.fill(),t.strokeStyle=`rgba(255,255,255,0.35)`,t.lineWidth=3;for(let e=0;e<10;e++){let n=e/10*Math.PI*2;t.beginPath(),t.arc(64,64,34+e%3*9,n,n+.9),t.stroke()}td=new $t(e),td.colorSpace=ee}return new Fn({map:td,transparent:!0,depthWrite:!1,opacity:0})}var rd=null;function id(){if(rd)return rd;let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(32,32,4,32,32,32),r=Pu?1:1.3;n.addColorStop(0,`rgba(0,0,0,${.42*r})`),n.addColorStop(.6,`rgba(0,0,0,${.22*r})`),n.addColorStop(1,`rgba(0,0,0,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let i=new $t(e);return rd=new Fn({map:i,transparent:!0,depthWrite:!1}),rd}var ad=null;function od(){if(ad)return ad;let e=new Wn({vertexColors:!0});return e.onBeforeCompile=e=>{e.fragmentShader=e.fragmentShader.replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>
{
  float facing = clamp(abs(dot(normal, normalize(vViewPosition))), 0.0, 1.0);
  float rim = pow(1.0 - facing, 3.0);
  totalEmissiveRadiance += diffuseColor.rgb * 0.17 + vec3(1.0, 0.97, 0.9) * rim * 0.16;
}`)},e.customProgramCacheKey=()=>`tractor-hero-v1`,ad=e,e}var sd=[`#ff5a4f`,`#3a8df0`,`#35c46a`,`#ffb020`,`#b06cf0`,`#ff7ab8`,`#20c3c9`,`#f4f1ea`],cd=[`#f4c7a1`,`#e0a984`,`#c68c62`,`#8d5a3b`],ld=[`#3b2a20`,`#e8c15a`,`#6b3b1f`,`#1f1f24`,`#c8573a`],ud=[`#3b4a6b`,`#2f5e9e`,`#6b4a32`,`#3d6b47`,`#4a4f5a`],dd=.66,fd=1.17;function pd(e,t){let n=new H;e(n);let r=n.build(),i=r.attributes.position.count;return r.setAttribute(`aLimb`,new fn(new Float32Array(i).fill(t),1)),r}function md(e){let t=pd(t=>{var n,r;t.box(.44,.52,.28,e.shirt,U(0,.93,0),0),t.box(.36,.06,.24,(n=e.sleeves)==null?e.shirt:n,U(0,1.2,0),0),t.sphere(.2,e.skin,U(0,1.41,0),1,7),e.hairStyle===`round`?t.sphere(.215,e.hair,U(0,1.47,-.04),U(1,.75,1.05),7):e.hairStyle!==`none`&&t.sphere(.21,e.hair,U(0,1.5,-.03),U(1,.62,1),7),t.box(.05,.05,.03,`#222`,U(-.07,1.44,.19),0),t.box(.05,.05,.03,`#222`,U(.07,1.44,.19),0),e.noSmile||t.box(.1,.03,.03,`#b8573a`,U(0,1.34,.19),0),(r=e.extra)==null||r.call(e,t)},0),n=(t,n)=>pd(n=>{var r;n.box(.15,.5,.16,e.pants,U(t*.11,.41000000000000003,0),0),n.box(.17,.08,.25,(r=e.shoes)==null?`#2a2c31`:r,U(t*.11,.04,.04),0)},n),r=(t,n)=>pd(n=>{var r,i;n.box(.1,.38,.1,(r=e.sleeves)==null?e.shirt:r,U(t*.28,.98,0),0),n.box(.11,.1,.11,e.skin,U(t*.28,.76,0),0),t>0&&((i=e.hand)==null||i.call(e,n,t*.28,.76))},n),i=Bo([t,n(-1,1),n(1,2),r(-1,3),r(1,4)],!1);return i.computeBoundingSphere(),i}var hd=new Map;function gd(e){let t=hd.get(e);if(t)return t;let n=sd[e%sd.length];return t=md({shirt:n,skin:cd[(e*3+1)%cd.length],hair:ld[e*2%ld.length],pants:ud[e*3%ud.length],hairStyle:e%3==1?`round`:`short`,extra:e%4==2?e=>e.cyl(.24,.24,.04,n,U(0,1.6,.02),void 0,8):void 0}),hd.set(e,t),t}var _d=null,vd={none:0,cheer:1,wave:2,clap:3,bum:4,point:5};function yd(){if(_d)return _d;let e=new Wn({vertexColors:!0});return e.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
attribute float aLimb;
attribute vec4 aWalk;
attribute vec2 aPose;
varying float vFlash;
vec3 rotX(vec3 v, float a) { float c = cos(a), s = sin(a); return vec3(v.x, v.y * c - v.z * s, v.y * s + v.z * c); }
vec3 rotY(vec3 v, float a) { float c = cos(a), s = sin(a); return vec3(v.x * c + v.z * s, v.y, -v.x * s + v.z * c); }
vec3 rotZ(vec3 v, float a) { float c = cos(a), s = sin(a); return vec3(v.x * c - v.y * s, v.x * s + v.y * c, v.z); }`).replace(`#include <beginnormal_vertex>`,`float limbA = 0.0;
float limbY = 0.0;
float limbZ = 0.0;
float limbP = 0.0;
float side = 0.0;
{
  float sw = sin(aWalk.x) * aWalk.y;
  float mode = aWalk.z, k = aWalk.w, t = aPose.x;
  vFlash = aPose.y;
  if (aLimb > 0.5 && aLimb < 1.5) { limbA = sw; limbP = ${dd.toFixed(2)}; }
  else if (aLimb > 1.5 && aLimb < 2.5) { limbA = -sw; limbP = ${dd.toFixed(2)}; }
  else if (aLimb > 2.5) {
    side = aLimb > 3.5 ? 1.0 : -1.0;
    float base = side * sw * 0.9;
    float ax = base, ay = 0.0, az = 0.0;
    // t = seconds: arms up swaying (0.8 Hz), a hand waving (1.6 Hz), clapping (2.5 claps a second)
    if (mode > 0.5 && mode < 1.5) { ax = -2.75 + sin(t * 5.0 + side * 1.4) * 0.3; az = 0.3; }
    else if (mode > 1.5 && mode < 2.5) { if (side > 0.0) { ax = -2.95; az = 0.25 + sin(t * 10.0) * 0.42; } }
    else if (mode > 2.5 && mode < 3.5) { ax = -1.4; ay = -0.28 - pow(abs(sin(t * 7.8)), 0.7) * 0.42; }
    else if (mode > 3.5 && mode < 4.5) { ax = 0.9; ay = 0.45; }
    else if (mode > 4.5) { if (side > 0.0) { ax = -1.55; ay = -0.15; } }
    limbA = mix(base, ax, k);
    limbY = mix(0.0, ay, k) * side;
    limbZ = mix(0.0, az, k) * side;
    limbP = ${fd.toFixed(2)};
  }
}
#include <beginnormal_vertex>
objectNormal = rotY(rotZ(rotX(objectNormal, limbA), limbZ), limbY);`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
{
  vec3 piv = vec3(side * 0.24, limbP, 0.0);
  transformed = rotY(rotZ(rotX(transformed - piv, limbA), limbZ), limbY) + piv;
}`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying float vFlash;`).replace(`#include <color_fragment>`,`#include <color_fragment>
diffuseColor.rgb = mix(diffuseColor.rgb, vec3(1.0), vFlash);
totalEmissiveRadiance += vec3(0.6, 0.6, 0.55) * vFlash;`)},e.customProgramCacheKey=()=>`walker-v5`,_d=e,e}function bd(e){let t=new Ne(1,1);t.rotateX(-Math.PI/2);let n=new yn(t,id(),e);return n.count=0,n.frustumCulled=!1,n.renderOrder=1,n}var xd=new L,Sd=new Zn,Cd=new L,wd=new Pt;function Td(e,t,n,r,i,a,o){let s=a/(1+Math.max(0,o)*1.4);e.setMatrixAt(t,wd.compose(xd.set(n,r+.025,i),Sd,Cd.set(s,1,s)))}function Ed(e,t,n){let r=(n==null?gd(e):n).clone();r.setAttribute(`aWalk`,new et(new Float32Array(t*4),4).setUsage(C)),r.setAttribute(`aPose`,new et(new Float32Array(t*2),2).setUsage(C));let i=new yn(r,yd(),t);return i.count=0,i.frustumCulled=!1,i.castShadow=!0,i}function Dd(e,t,n,r,i=0,a=0,o=n,s=0){let c=e.geometry.attributes.aWalk;c.setXYZW(t,n,r,i,a),c.needsUpdate=!0;let l=e.geometry.attributes.aPose;l.setXY(t,o,s),l.needsUpdate=!0}var Od=new Map;function kd(e){let t=Od.get(e);if(t)return t;let n=[`#c98a4a`,`#f2efe8`,`#3a3430`][e%3],r=[`#8a5a32`,`#c9b9a0`,`#1f1c1a`][e%3],i=pd(e=>{e.box(.5,.42,1.25,n,U(0,.78,0),.12),e.box(.42,.42,.46,n,U(0,1.12,.72),.12),e.box(.24,.2,.26,r,U(0,1.02,1.02),.06),e.box(.1,.08,.06,`#1a1a1a`,U(0,1.09,1.15),.02),e.box(.12,.26,.1,r,U(-.2,1.32,.66),.03,[0,0,.35]),e.box(.12,.26,.1,r,U(.2,1.32,.66),.03,[0,0,-.35]),e.box(.06,.06,.03,`#111`,U(-.1,1.1800000000000002,.95),0),e.box(.06,.06,.03,`#111`,U(.1,1.1800000000000002,.95),0),e.box(.1,.1,.5,n,U(0,1.06,-.75),.04,[-.7,0,0]),e.box(.52,.08,.1,`#e8333a`,U(0,.96,.5),.02)},0),a=(e,t,i)=>pd(i=>{i.box(.16,dd,.16,n,U(e,dd/2,t),.04),i.box(.18,.08,.2,r,U(e,.04,t+.03),.02)},i);return t=Bo([i,a(-.16,.42,1),a(.16,-.42,1),a(.16,.42,2),a(-.16,-.42,2)],!1),t.computeBoundingSphere(),Od.set(e,t),t}var W={factory:new L(-9.6,0,12.6),factoryDoor:new L(-7.3,0,12.6),belt0:new L(-8.9,0,4.1),belt1:new L(-9.5,0,10.3),stands:[new L(.4,0,13.2),new L(4,0,13.2),new L(7.6,0,13.2)],kiosk:new L(10.4,0,13.6),cashPad:new L(0,0,6.3),factoryPad:new L(-9.4,0,12),lotPad:new L(3.6,0,9.3)},Ad=(()=>{let e=new Qn;e.moveTo(-.24,0),e.lineTo(.24,0),e.lineTo(.18,.14),e.lineTo(-.18,.14),e.closePath();let t=new Te(e,{depth:.36,bevelEnabled:!1});return t.translate(0,0,-.18),t})();function jd(e,t,n){e.box(.08,.13,.25,`#4fbf63`,U(t+.02,n-.07,.08),.02),e.box(.086,.136,.05,`#eaf8da`,U(t+.02,n-.07,.08),.005)}var Md=[{shirt:`#2f3f66`,skin:`#f4c7a1`,hair:`#3b2a20`,pants:`#2a3350`,shoes:`#1f1f24`,hand:jd,extra:e=>{e.box(.17,.07,.05,`#ffffff`,U(0,1.15,.13),0),e.box(.06,.3,.03,`#e8333a`,U(0,.99,.15),0)}},{shirt:`#e8453c`,skin:`#e0a984`,hair:`#e8c15a`,pants:`#e8453c`,shoes:`#b8302a`,hairStyle:`round`,hand:jd},{shirt:`#ffc21f`,skin:`#c68c62`,hair:`#1f1f24`,pants:`#3b4a6b`,hand:jd,extra:e=>e.cyl(.24,.24,.04,`#2f7ad6`,U(0,1.6,.04),void 0,8)},{shirt:`#35c46a`,skin:`#f4c7a1`,hair:`#e6e6e6`,pants:`#6b4a32`,hairStyle:`round`,hand:jd,extra:e=>{e.cyl(.27,.27,.03,`#d9a84a`,U(0,1.57,0),void 0,12),e.cyl(.16,.18,.14,`#d9a84a`,U(0,1.65,0),void 0,10),e.cyl(.18,.18,.03,`#e8453c`,U(0,1.6,0),void 0,10)}}],Nd=new Pt().makeScale(0,0,0),Pd=new L(-.05,.56,-.18),Fd=new L,Id=new Zn,Ld=new Xt(0,0,0,`YXZ`),Rd=new L,zd=new Pt,Bd=new Pt,Vd=new Zn,Hd=new L,Ud=new L(1,1,1),Wd=[`sedan_a`,`sedan_b`,`sedan_c`,`sedan_d`,`pickup_a`,`pickup_b`,`pickup_c`,`pickup_d`],Gd=class{get templates(){return this.carTemplates}constructor(e,t){this.cb=t,this.group=new B,this.factoryBuilt=!1,this.lotBuilt=!1,this.factoryObj=null,this.lotObj=null,this.beltObj=null,this.turntables=[],this.beltIngots=[],this.ingotsStored=0,this.buildT=-1,this.carTemplates=[],this.cars=[],this.standCar=[null,null,null],this.buyers=[null,null,null],this.buyerSpawnT=[.6,2.8,5],this.buyerCrowds=[],this.standHold=[!1,!1,!1],this.visitor=null,this.onEmote=null,this.cash=0,this.cashBundles=0,this.popAnims=[],this.factoryLight=null,this.smokeT=0,this.time=0,this.ingotsPerCar=4,this.buildTime=5,this.price=150,this.readyCars=0,this.onPuff=null,this.onBuildingAdded=null,this.assembly=null,this.onSpark=null,this.onPart=null,this.onSpray=null,e.add(this.group),this.factoryPad=new il(W.factoryPad.x,W.factoryPad.z,3,`#8a5cf0`,`factory`,this.group),this.lotPad=new il(W.lotPad.x,W.lotPad.z,3,`#ff8a3d`,`car`,this.group),this.cashPad=new il(W.cashPad.x,W.cashPad.z,2.6,`#2fae5a`,`cash`,this.group),this.factoryPad.setVisible(!1),this.lotPad.setVisible(!1),this.cashPad.setVisible(!1),this.ingotMesh=new yn(Ad,new Wn({color:`#c9d3de`}),24),this.ingotMesh.count=0,this.ingotMesh.castShadow=!0,this.ingotMesh.frustumCulled=!1,this.group.add(this.ingotMesh);let n=new ht(.62,.16,.34);this.cashMesh=new yn(n,new Wn({map:qd()}),60),this.cashMesh.count=0,this.cashMesh.castShadow=!0,this.cashMesh.frustumCulled=!1,this.group.add(this.cashMesh)}async loadCars(){try{let e=await Promise.all(Wd.map(e=>lu(`./models/${e}.json`)));this.carTemplates=e.map((e,t)=>uu(e,t<4?3:3.2,new Xt(Math.PI/2,0,0)))}catch{this.carTemplates=[`#e8453c`,`#3a8df0`,`#f5c02a`,`#35c46a`,`#f4f1ea`,`#8a5cf0`].map(e=>Kd(e))}}setBuilt(e,t,n=!1){if(e&&!this.factoryObj){var r;this.factoryObj=Jd(),this.factoryObj.position.copy(W.factory),this.group.add(this.factoryObj),(r=this.onBuildingAdded)==null||r.call(this,this.factoryObj),this.factoryLight=this.factoryObj.getObjectByName(`light`),this.beltObj=Yd(W.belt0,W.belt1),this.group.add(this.beltObj),this.assembly=new Mu(this.group),this.assembly.onSpark=(e,t)=>{var n;return(n=this.onSpark)==null?void 0:n.call(this,e,t)},this.assembly.onPart=e=>{var t;return(t=this.onPart)==null?void 0:t.call(this,e)},this.assembly.onSpray=(e,t)=>{var n;return(n=this.onSpray)==null?void 0:n.call(this,e,t)},this.assembly.onHonk=()=>this.cb.sound(`honk`),n&&this.pop(this.assembly.group),n&&(this.pop(this.factoryObj),this.pop(this.beltObj))}if(t&&!this.lotObj){let{group:e,tables:t}=Xd();this.lotObj=e,this.turntables=t,this.group.add(e),n&&this.pop(e),this.initBuyers()}this.factoryBuilt=e,this.lotBuilt=t}pop(e){e.scale.setScalar(.01),this.popAnims.push({obj:e,t:0})}updatePads(e,t,n,r,i){this.factoryPad.setVisible(e&&!this.factoryBuilt),this.lotPad.setVisible(e&&this.factoryBuilt&&!this.lotBuilt),this.cashPad.setVisible(this.lotBuilt),this.factoryPad.progress=t/r,this.lotPad.progress=n/i}addIngot(){if(this.factoryBuilt){if(this.beltIngots.length>=20){this.ingotsStored++;return}this.beltIngots.push(0)}}freeStand(){for(let e=0;e<3;e++)if(!this.standCar[e])return e;return-1}spawnCar(){var e,t;let n=this.freeStand();if(n<0||!this.carTemplates.length){this.readyCars++;return}let r=this.assembly?Kd(this.assembly.color):this.carTemplates[Math.floor(Math.random()*this.carTemplates.length)].clone(!0),i=W.stands[n],a=Cu,o=[new L(a.x,.14,a.z),new L(a.x+1.4,0,10.5),new L(i.x,0,10.5),new L(i.x,0,i.z-1.2),new L(i.x,.21,i.z)];r.position.copy(o[0]),r.rotation.y=this.assembly?this.assembly.tableYaw:Math.PI/2,(e=this.assembly)==null||e.reset(),(t=this.onPuff)==null||t.call(this,new L(a.x,.8,a.z),!1),this.group.add(r);let s={obj:r,path:o,seg:0,segT:0,speed:4.5,state:`toStand`,stand:n,yaw:Math.PI/2,price:this.price,held:!1,bounce:0};this.standCar[n]=s,this.cars.push(s),this.cb.onCarBuilt()}initBuyers(){if(!this.buyerCrowds.length)for(let e of Md){let t={money:Ed(0,3,md(e)),free:Ed(0,3,md({...e,hand:void 0}))};for(let e of[t.money,t.free]){e.count=3;for(let t=0;t<3;t++)e.setMatrixAt(t,Nd);this.group.add(e)}this.buyerCrowds.push(t)}}waitSpot(e){let t=W.stands[e];return new L(t.x-.3,0,t.z+2.25)}spawnBuyer(e){let t=this.waitSpot(e),n={look:Math.floor(Math.random()*Md.length),stand:e,x:-1.6+Math.random()*.7,z:31,y:0,vy:0,yaw:Math.PI,roll:0,state:`arrive`,t:0,path:[new L(-1.15,0,18.8),new L(t.x,0,17.4),t],seg:0,phase:Math.random()*6,amp:0,pose:0,poseT:0,curPose:0,poseK:0,gesture:1.5,paid:!1,car:null,from:new L};return this.buyers[e]=n,n}seatWorld(e,t){let n=e.obj,r=n.rotation.y,i=Math.cos(r),a=Math.sin(r);return t.set(n.position.x+Pd.x*i+Pd.z*a,n.position.y+Pd.y*n.scale.y,n.position.z-Pd.x*a+Pd.z*i)}pay(e){var t,n;e.paid=!0;let r=(t=(n=e.car)==null?void 0:n.price)==null?this.price:t;this.cash+=r,this.addBundles(r);let i=new L(e.x,2.2,e.z);this.cb.onCash(r,i),this.cb.onSale(i)}sendOff(e){e.state=`leaving`;let t=e.obj.position.clone();e.path=[t,new L(t.x,.21,t.z+.6),new L(t.x,0,15.8),new L(1.1,0,18.5),new L(1.1,0,45)],e.seg=0,e.segT=0,e.speed=2,this.standCar[e.stand]=null,this.standHold[e.stand]=!1,this.cb.sound(`honk`)}wantAt(e,t){var n;let r=this.buyers[e];return!r||!this.lotBuilt||r.state!==`wait`&&!(r.state===`arrive`&&r.seg>=1)||((n=this.standCar[e])==null?void 0:n.state)===`onStand`?!1:(t.set(r.x,r.y+2.35,r.z),!0)}updateBuyers(e){for(let t=0;t<3;t++){let n=this.buyers[t];if(!n){if(this.buyerSpawnT[t]-=e,this.buyerSpawnT[t]>0)continue;n=this.spawnBuyer(t)}if(this.stepBuyer(n,e),n.state===`gone`){let e=this.buyerCrowds[n.look];e.money.setMatrixAt(t,Nd),e.free.setMatrixAt(t,Nd),e.money.instanceMatrix.needsUpdate=e.free.instanceMatrix.needsUpdate=!0,this.buyers[t]=null,this.buyerSpawnT[t]=1.2+Math.random()*2.5;continue}this.poseBuyer(n)}}stepBuyer(e,t){e.t+=t;let n=W.stands[e.stand],r=this.standCar[e.stand],i=null,a=0,o=0,s=null,c=e.x,l=e.z;switch(e.state){case`arrive`:i=e.path[e.seg],a=2.6,Math.hypot(i.x-e.x,i.z-e.z)<.15&&(e.seg<e.path.length-1?e.seg++:(e.state=`wait`,e.t=0));break;case`wait`:{let o=e.path[e.path.length-1];if(Math.hypot(o.x-e.x,o.z-e.z)>.15&&(i=o,a=1.6),s=Math.atan2(n.x-e.x,n.z-e.z),r&&r.state===`onStand`){var u;e.state=`cheer`,e.t=0,e.car=r,r.held=!0,this.standHold[e.stand]=!0,(u=this.onEmote)==null||u.call(this,Math.random()<.5?`heart`:`wow`,e.x,2.35,e.z);break}e.gesture-=t,e.gesture<=0&&(e.pose=Math.random()<.5?vd.point:vd.wave,e.poseT=1.4,e.gesture=3+Math.random()*4);break}case`cheer`:o=vd.cheer,s=Math.atan2(n.x-e.x,n.z-e.z),e.y<=0&&e.vy===0&&e.t<.8&&(e.vy=3.3),e.t>1.1&&e.y<=0&&(e.state=`step`,e.t=0);break;case`step`:i=Fd.set(n.x-.1,0,n.z+1.6),a=2,s=Math.atan2(n.x-e.x,n.z-e.z),(Math.hypot(i.x-e.x,i.z-e.z)<.12||e.t>2.5)&&(e.paid||this.pay(e),(e.t>.35||Math.hypot(i.x-e.x,i.z-e.z)<.12)&&(e.state=`jump`,e.t=0,e.from.set(e.x,0,e.z)));break;case`jump`:{let t=e.car,n=Math.min(1,e.t/.62),r=n*n*(3-2*n),i=this.seatWorld(t,Fd);if(e.x=e.from.x+(i.x-e.from.x)*r,e.z=e.from.z+(i.z-e.from.z)*r,e.y=i.y*n+Math.sin(Math.PI*n)*1.8,e.vy=0,e.roll=-n*Math.PI*2,o=vd.cheer,s=t.obj.rotation.y,n>=1){var d,f;e.state=`ride`,e.t=0,e.roll=0,t.bounce=1,(d=this.onEmote)==null||d.call(this,`heart`,i.x,i.y+2,i.z),(f=this.onPuff)==null||f.call(this,new L(t.obj.position.x,.3,t.obj.position.z),!1)}break}case`ride`:{let t=e.car,n=this.seatWorld(t,Fd);e.x=n.x,e.z=n.z,e.y=n.y,e.yaw=t.obj.rotation.y,o=e.t>.25?vd.wave:vd.cheer,t.state===`onStand`&&e.t>.55&&this.sendOff(t),this.cars.includes(t)||(e.state=`gone`);break}}let p=this.visitor;if(p&&(e.state===`arrive`||e.state===`wait`||e.state===`cheer`||e.state===`step`)){let n=p.bx-p.ax,r=p.bz-p.az,i=Math.max(0,Math.min(1,((e.x-p.ax)*n+(e.z-p.az)*r)/(n*n+r*r||1))),a=e.x-(p.ax+n*i),o=e.z-(p.az+r*i),c=Math.hypot(a,o)||1,l=c-.95;if(l<1.1){let n=Math.min(3.2,(1.1-l)*4);a/=c,o/=c,e.x+=a*n*t,e.z+=o*n*t,e.state!==`cheer`&&(s=Math.atan2(-a,-o))}}if(i&&a>0){let n=i.x-e.x,r=i.z-e.z,o=Math.hypot(n,r);if(o>.01){let i=Math.min(o,a*t);e.x+=n/o*i,e.z+=r/o*i,s===null&&(s=Math.atan2(n,r))}}e.state!==`jump`&&e.state!==`ride`&&(e.vy!==0||e.y>0)&&(e.vy-=18*t,e.y+=e.vy*t,e.y<=0&&(e.y=0,e.vy=0));let m=e.state===`jump`||e.state===`ride`?0:Math.hypot(e.x-c,e.z-l),h=m/Math.max(t,1e-4)>.15;e.amp+=((h?.6:0)-e.amp)*Math.min(1,t*7),h?e.phase+=m*5.4:e.phase+=(Math.round(e.phase/Math.PI)*Math.PI-e.phase)*Math.min(1,t*5),e.poseT-=t;let g=o||(e.poseT>0?e.pose:0);if(g?e.curPose!==g&&e.poseK>.05?e.poseK=Math.max(0,e.poseK-t*7):(e.curPose=g,e.poseK=Math.min(1,e.poseK+t*5)):e.poseK=Math.max(0,e.poseK-t*4),s!==null){let n=s-e.yaw;for(;n>Math.PI;)n-=Math.PI*2;for(;n<-Math.PI;)n+=Math.PI*2;e.yaw+=n*Math.min(1,t*(e.state===`ride`?30:8))}}poseBuyer(e){let t=this.buyerCrowds[e.look],n=e.paid?t.free:t.money,r=e.paid?t.money:t.free,i=e.state===`ride`?.82:e.state===`jump`?.95-.13*Math.min(1,e.t/.62):.95;Id.setFromEuler(Ld.set(e.roll,e.yaw,0,`YXZ`)),n.setMatrixAt(e.stand,zd.compose(Fd.set(e.x,e.y,e.z),Id,Rd.setScalar(i))),r.setMatrixAt(e.stand,Nd),Dd(n,e.stand,e.phase,e.amp,e.curPose,e.poseK,this.time+e.stand*.7,0),n.instanceMatrix.needsUpdate=r.instanceMatrix.needsUpdate=!0}followPath(e,t,n,r){for(;r>0&&n.seg<t.length-1;){let e=t[n.seg],i=t[n.seg+1],a=e.distanceTo(i),o=(1-n.segT)*a;r>=o?(r-=o,n.seg++,n.segT=0):(n.segT+=r/a,r=0)}if(n.seg>=t.length-1)return e.position.copy(t[t.length-1]),!0;let i=t[n.seg],a=t[n.seg+1];return e.position.lerpVectors(i,a,n.segT),!1}faceTowards(e,t,n,r=8){let i=t.x-e.position.x,a=t.z-e.position.z;if(i*i+a*a<1e-6)return;let o=Math.atan2(i,a)-e.rotation.y;for(;o>Math.PI;)o-=Math.PI*2;for(;o<-Math.PI;)o+=Math.PI*2;e.rotation.y+=o*Math.min(1,n*r)}collectCash(){let e=this.cash;return this.cash=0,this.cashBundles=0,this.cashMesh.count=0,e}cashPos(e,t){let n=W.cashPad,r=Math.floor(e/4),i=e%4;return t.set(n.x-.36+i%2*.72,.1+r*.17,n.z-.2+Math.floor(i/2)*.4)}update(e){var t;this.time+=e;for(let t of[this.factoryPad,this.lotPad,this.cashPad])t.update(e);for(let t=this.popAnims.length-1;t>=0;t--){let n=this.popAnims[t];n.t+=e/.7;let r=Math.max(.01,b(Math.min(1,n.t),2.2));n.obj.scale.setScalar(r),n.t>=1&&(n.obj.scale.setScalar(1),this.popAnims.splice(t,1))}let n=Bd,r=Vd.identity(),i=Hd,a=Ud;for(let t=this.beltIngots.length-1;t>=0;t--)this.beltIngots[t]+=e*.38,this.beltIngots[t]>=1&&(this.beltIngots.splice(t,1),this.ingotsStored++);this.beltIngots.sort((e,t)=>t-e);for(let e=1;e<this.beltIngots.length;e++)this.beltIngots[e]=Math.min(this.beltIngots[e],this.beltIngots[e-1]-.08);this.ingotMesh.count=this.beltIngots.length,r.setFromAxisAngle(Jt.DEFAULT_UP,Math.atan2(W.belt1.x-W.belt0.x,W.belt1.z-W.belt0.z));for(let e=0;e<this.beltIngots.length;e++)i.lerpVectors(W.belt0,W.belt1,Math.max(0,this.beltIngots[e])),i.y=.62,n.compose(i,r,a),this.ingotMesh.setMatrixAt(e,n);this.ingotMesh.instanceMatrix.needsUpdate=!0,this.factoryBuilt&&(this.buildT<0&&this.ingotsStored>=this.ingotsPerCar&&this.readyCars<3&&(this.ingotsStored-=this.ingotsPerCar,this.buildT=0),this.buildT>=0?(this.buildT+=e,this.factoryLight&&this.factoryLight.material.color.set(Math.sin(this.time*14)>0?`#ff4d4d`:`#ffcf3c`),this.smokeT-=e,this.smokeT<=0&&this.onPuff&&(this.smokeT=.15,this.onPuff(new L(W.factory.x-1.2,3.9,W.factory.z+.8),!0)),this.buildT>=this.buildTime&&(this.buildT=-1,this.lotBuilt?this.spawnCar():this.readyCars++,this.cb.sound(`car`))):this.factoryLight&&this.factoryLight.material.color.set(`#7a8290`),this.lotBuilt&&this.readyCars>0&&this.freeStand()>=0&&(this.readyCars--,this.spawnCar())),(t=this.assembly)==null||t.update(e,this.buildT>=0?this.buildT/this.buildTime:this.readyCars>0?1:-1);for(let t=0;t<this.turntables.length;t++)this.standHold[t]||(this.turntables[t].rotation.y+=e*.6);for(let t of this.cars){if(t.bounce<=0)continue;t.bounce=Math.max(0,t.bounce-e*2.2);let n=Math.sin((1-t.bounce)*17)*t.bounce*.13;t.obj.scale.set(1+n*.4,1-n,1+n*.4)}for(let t=this.cars.length-1;t>=0;t--){let n=this.cars[t];if(n.state===`toStand`){let t=n.path[Math.min(n.path.length-1,n.seg+1)];this.faceTowards(n.obj,t,e,10),this.followPath(n.obj,n.path,n,n.speed*e)&&(n.state=`onStand`)}else if(n.state===`onStand`){if(n.held){let t=-n.obj.rotation.y;t=(t%(Math.PI*2)+Math.PI*3)%(Math.PI*2)-Math.PI,n.obj.rotation.y+=t*Math.min(1,e*3)}else this.turntables[n.stand]&&(n.obj.rotation.y+=e*.6)}else if(n.state===`leaving`){let r=n.path[Math.min(n.path.length-1,n.seg+1)];this.faceTowards(n.obj,r,e,6),n.speed=Math.min(9,n.speed+e*5),this.followPath(n.obj,n.path,n,n.speed*e)&&(this.group.remove(n.obj),this.cars.splice(t,1))}}this.lotBuilt&&this.buyerCrowds.length&&this.updateBuyers(e);let o=Bd,s=Vd,c=Hd;for(let e=0;e<this.cashMesh.count;e++)this.cashPos(e,c),s.setFromAxisAngle(Jt.DEFAULT_UP,e*37%10*.02-.1),o.compose(c,s,a),this.cashMesh.setMatrixAt(e,o);this.cashMesh.instanceMatrix.needsUpdate=!0}addBundles(e){let t=Math.max(1,Math.round(e/50));this.cashBundles=Math.min(60,this.cashBundles+t),this.cashMesh.count=this.cashBundles}setCash(e){this.cash=e,this.cashBundles=Math.min(60,Math.ceil(e/50)),this.cashMesh.count=e>0?Math.max(1,this.cashBundles):0}get busy(){return this.buildT>=0}};function Kd(e){let t=new F(Su(e),ns());t.castShadow=!0,t.userData.shared=!0;let n=new B;return n.add(t),n}function qd(){let e=document.createElement(`canvas`);e.width=128,e.height=64;let t=e.getContext(`2d`);t.fillStyle=`#5cc46a`,t.fillRect(0,0,128,64),t.strokeStyle=`#2f8a3f`,t.lineWidth=6,t.strokeRect(4,4,120,56),t.fillStyle=`#e9f7d6`,t.fillRect(52,0,24,64),t.fillStyle=`#2f8a3f`,t.font=`bold 34px sans-serif`,t.textAlign=`center`,t.textBaseline=`middle`,t.fillText(`$`,30,34),t.fillText(`$`,100,34);let n=new $t(e);return n.colorSpace=ee,n}function Jd(){let e=new B,t=new H;t.box(4.6,.2,4.2,`#aeb6bf`,U(0,.1,0),.05),t.box(4,2.4,3.6,`#e9e4da`,U(0,1.4,0),.1),t.box(4.04,.34,3.64,`#8a5cf0`,U(0,.37,0),.04);for(let e=0;e<3;e++){let n=-1.2+e*1.2,r=rs(new In(.75,.75,4.1,3,1));r.rotateZ(Math.PI/2),t.add(r,e%2?`#7b4fe0`:`#8a5cf0`,U(0,2.75,n),[Math.PI/6,0,0],U(1,1,.8))}t.box(.1,1.8,2,`#3b4250`,U(2.03,1.1,0),.03),t.box(.14,.18,2.2,`#ffcb1f`,U(2.05,2.08,0),.03);for(let e=-1;e<=1;e++)t.box(.8,.5,.05,`#a9e2ff`,U(e*1.2,1.7,1.82),.02);t.cyl(.26,.3,2.4,`#8b95a2`,U(-1.2,3,.8),void 0,10),t.cyl(.34,.34,.16,`#5d6672`,U(-1.2,4.25,.8),void 0,10),t.box(1,.8,.3,`#59636f`,U(.1,.9,-1.9),.04);let n=new F(t.build(),qo());n.castShadow=!0,n.receiveShadow=!0,e.add(n);let r=new F(new re(.16,8,6),new Fn({color:`#7a8290`}));r.name=`light`,r.position.set(2.1,2.35,0),e.add(r);let i=tl(`car`,`#8a5cf0`,1.4,1.4);return i.position.set(.9,3.9,1.1),i.rotation.x=-.6,e.add(i),e}function Yd(e,t){let n=new B,r=new H,i=e.distanceTo(t);r.box(.8,.12,i,`#2e333b`,U(0,.5,i/2),.03),r.box(.1,.2,i,`#ffcb1f`,U(-.45,.52,i/2),.02),r.box(.1,.2,i,`#ffcb1f`,U(.45,.52,i/2),.02);for(let e=.3;e<i;e+=.9)r.box(.08,.45,.08,`#59636f`,U(-.4,.22,e),.02),r.box(.08,.45,.08,`#59636f`,U(.4,.22,e),.02);let a=new F(r.build(),ns());return a.castShadow=!0,a.position.copy(e),a.rotation.y=Math.atan2(t.x-e.x,t.z-e.z),n.add(a),n}function Xd(){let e=new B,t=new H;t.box(12.8,.06,5.6,`#d3d7de`,U(5.2,.03,13.8),.02),t.box(12.6,.02,.1,`#ffffff`,U(5.2,.065,11.15),0);let n=W.kiosk;t.box(1.8,1.6,1.4,`#ffffff`,U(n.x,.85,n.z),.08),t.box(2.1,.16,1.7,`#ff8a3d`,U(n.x,1.72,n.z),.05);for(let e=0;e<4;e++)t.box(.48,.3,.1,e%2?`#ffffff`:`#ff8a3d`,U(n.x-.75+e*.5,1.5,n.z-.86),.02,[.35,0,0]);t.box(1.2,.5,.05,`#a9e2ff`,U(n.x,1.05,n.z-.71),.02);let r=[[-1.4,16.1],[11.7,16.1]];for(let[e,n]of r)t.cyl(.05,.06,2.9,`#c9ced6`,U(e,1.45,n),void 0,8),t.sphere(.08,`#ffcf3c`,U(e,2.95,n),1,8),t.box(.62,.42,.03,e<0?`#ff5a4f`:`#3a8df0`,U(e+.34,2.62,n),.01);let i=[`#ff5a4f`,`#ffcf3c`,`#3a8df0`,`#ffffff`,`#35c46a`],[a,o]=r[0],[s]=r[1];for(let e=0;e<=24;e++){let n=e/24,r=a+(s-a)*n,c=2.75-Math.sin(Math.PI*n)*.55;if(e<24){let l=a+(s-a)*(n+1/24),u=2.75-Math.sin(Math.PI*(n+1/24))*.55;t.box(Math.hypot(l-r,u-c)+.02,.02,.02,`#8b95a2`,U((r+l)/2,(c+u)/2,o),0,[0,0,Math.atan2(u-c,l-r)]),t.prism([[-.16,0],[.16,0],[0,-.3]],.02,i[e%i.length],U((r+l)/2,(c+u)/2-.01,o),[0,Math.PI/2,0])}}let c=new F(t.build(),ns());c.receiveShadow=!0,c.castShadow=!0,e.add(c);let l=[`#ff5a4f`,`#3a8df0`,`#ffcb1f`],u=[];W.stands.forEach((t,n)=>{let r=new H;r.cyl(1.64,1.68,.06,`#c3c9d1`,U(0,.03,0),void 0,40),r.cyl(1.5,1.56,.12,`#f4f6f9`,U(0,.11,0),void 0,40),r.torus(1.52,.035,`#ffffff`,U(0,.17,0),[Math.PI/2,0,0],40);for(let e=0;e<16;e++){let t=e/16*Math.PI*2;r.sphere(.05,`#fff2b0`,U(Math.cos(t)*1.6,.1,Math.sin(t)*1.6),1,6)}let i=new F(r.build(),ns());i.position.copy(t),i.receiveShadow=!0,e.add(i);let a=new H;a.cyl(1.4,1.42,.05,`#3a4150`,U(0,.185,0),void 0,40),a.torus(1.16,.03,l[n%l.length],U(0,.215,0),[Math.PI/2,0,0],40),a.torus(.55,.02,`#5d6878`,U(0,.212,0),[Math.PI/2,0,0],28);for(let e=0;e<6;e++){let t=e/6*Math.PI*2;a.cyl(.05,.05,.03,`#d9dee5`,U(Math.cos(t)*1.3,.21,Math.sin(t)*1.3),void 0,8)}let o=new F(a.build(),ns());o.position.copy(t),o.receiveShadow=!0,e.add(o),u.push(o)});let d=tl(`car`,`#ff8a3d`,1.2,1.2);return d.position.set(n.x,2.7,n.z),d.rotation.x=-.5,e.add(d),{group:e,tables:u}}var Zd=new Map;function Qd(e,t){let n=Zd.get(e);if(!n){let r=new H;t(r),n=r.build(),Zd.set(e,n)}return n}var $d=new Map,G=`#fbf8f1`,ef=`#24365c`,tf=`#b0875a`,nf=`#8f6a43`,rf=`#ecd9a8`,af=`#4f6070`,of=(e,t)=>new I(e).multiplyScalar(t);function sf(e,t,n,r,i,a,o,s=6,c=.32){for(let l=0;l<s;l++)e.box(i/s,.06,a,o[l%2],U(t-i/2+(l+.5)*(i/s),n,r),0,[c,0,0]);let l=r+a/2*Math.cos(c),u=n-a/2*Math.sin(c)-.08;for(let n=0;n<s;n++)e.box(i/s-.02,.16,.03,o[n%2],U(t-i/2+(n+.5)*(i/s),u,l),0)}function cf(e,t,n,r,i=.5,a=.66,o=null,s=null){if(e.box(i,a,.05,`#9fd6f2`,U(t,n,r+.01),0),e.box(i+.12,.08,.1,G,U(t,n-a/2-.02,r+.04),0),e.box(i+.1,.07,.06,G,U(t,n+a/2+.02,r+.03),0),e.box(.05,a,.06,G,U(t,n,r+.035),0),s)for(let o of[-1,1])e.box(i*.45,a,.05,s,U(t+o*(i*.5+i*.24),n,r+.03),0);if(o){e.box(i+.06,.12,.16,`#b5652e`,U(t,n-a/2-.1,r+.1),.02);for(let s=0;s<4;s++)e.sphere(.06,s%2?o:`#4fae43`,U(t-i/2+.08+s*(i-.16)/3,n-a/2-.01,r+.12),1,5)}}function lf(e,t,n,r,i,a,o,s=0){e.cyl(.035,.035,r,`#e6ebf2`,U(t,r/2,n),[s,0,0],6);for(let c=0;c<8;c++)e.add(new In(.05,i,i*.38,2,1,!1,c*Math.PI/4,Math.PI/4),c%2?o:a,U(t,r+i*.12,n-Math.sin(s)*r*.5),[s,0,0])}function uf(){return Qd(`iceCafe`,e=>{e.cyl(2.6,2.65,.08,`#f2e6d0`,U(0,.04,0),void 0,24);for(let t=0;t<12;t++)e.add(new In(1.3,1.3,1.7,2,1,!0,t*Math.PI/6,Math.PI/6),t%2?`#8fdcc4`:G,U(0,.95,0));e.cyl(1.25,1.25,1.7,`#e9f7f1`,U(0,.95,0),void 0,16),e.box(1.3,.62,.08,`#3a5a72`,U(0,1.25,1.24),0),e.box(1.5,.08,.36,`#ffffff`,U(0,.92,1.36),.02);for(let t=0;t<3;t++)e.sphere(.09,[`#ff9ac8`,`#fff1c4`,`#9b6a45`][t],U(-.35+t*.35,1.02,1.42),1,6);for(let t=0;t<16;t++){let n=t/16*Math.PI*2;e.add(new In(1,1.75,.42,2,1,!1,n,Math.PI/8),t%2?`#ff7aa8`:G,U(0,2.05,0)),e.sphere(.13,t%2?`#ff7aa8`:G,U(Math.sin(n+Math.PI/16)*1.72,1.8,Math.cos(n+Math.PI/16)*1.72),U(1,.7,1),6)}e.cyl(1.05,1.05,.14,`#ff7aa8`,U(0,2.32,0),void 0,16),e.cyl(.56,.06,1.25,`#d9a45a`,U(0,3,0),[Math.PI,0,0],10);for(let t=0;t<4;t++)e.add(new P(.42-t*.09,.025,3,10),`#b9823e`,U(0,3.2-t*.24+.24,0),[Math.PI/2,0,0]);e.sphere(.52,`#fff1c4`,U(0,3.7,0),U(1,.85,1),10),e.sphere(.46,`#ff9ac8`,U(.18,4.15,.1),U(1,.85,1),10),e.sphere(.38,`#9b6a45`,U(-.12,4.52,-.05),U(1,.85,1),10),e.sphere(.12,`#e8333a`,U(-.08,4.86,0),1,7);for(let[t,n,r]of[[-1.95,1.2,`#7fc8ff`],[1.95,1.2,`#ffd23f`],[-1.6,-1.7,`#ff9ac8`]]){e.cyl(.34,.34,.05,G,U(t,.7,n),void 0,10),e.cyl(.04,.07,.68,`#5b6270`,U(t,.35,n),void 0,6),lf(e,t,n,1.75,.8,r,G);for(let r of[.6,3.6])e.box(.3,.05,.3,`#e8f0f6`,U(t+Math.cos(r)*.55,.42,n+Math.sin(r)*.55),.02)}e.box(.9,.7,.55,`#ffffff`,U(1.6,.35,-1.2),.06),e.box(.92,.06,.57,`#7fc8ff`,U(1.6,.72,-1.2),.02),e.box(.6,.8,.06,`#3d434d`,U(-.9,.62,1.95),.02,[-.2,.3,0]),e.box(.5,.06,.04,`#ffd23f`,U(-.9,.82,1.99),0,[-.2,.3,0]),e.box(.5,.06,.04,`#ff9ac8`,U(-.9,.62,1.99),0,[-.2,.3,0])})}function df(){return Qd(`promenade`,e=>{e.box(5.2,.06,2.6,`#e6dccb`,U(0,.03,0),0);for(let t=0;t<=8;t++)e.cyl(.04,.04,.9,ef,U(-2.5+t*.625,.45,-1.2),void 0,6);e.box(5.1,.06,.08,ef,U(0,.92,-1.2),.02),e.box(5.1,.04,.05,ef,U(0,.55,-1.2),0);for(let t of[-1.5,1.5]){for(let n=0;n<3;n++)e.box(1.4,.05,.12,tf,U(t,.45,-.3+n*.14),0);for(let n=0;n<2;n++)e.box(1.4,.12,.05,tf,U(t,.7+n*.16,0),0);for(let n of[-.58,.58])e.box(.07,.45,.07,ef,U(t+n,.22,-.32),0),e.box(.07,.85,.07,ef,U(t+n,.42,.04),0)}e.cyl(.07,.1,1,`#3d434d`,U(0,.5,-.7),void 0,8),e.cyl(.14,.14,.18,`#3d434d`,U(0,1.06,-.7),void 0,8),e.cyl(.1,.13,.62,`#c9a43a`,U(0,1.22,-.8),[-1.25,0,0],8),e.cyl(.13,.13,.06,`#2a2c31`,U(0,1.36,-1.08),[-1.25,0,0],8),e.box(.1,1.3,.1,G,U(2.5,.65,.6),0),e.add(new P(.34,.09,6,14),`#e8453c`,U(2.5,1.05,.67),[0,0,0]);for(let t=0;t<4;t++){let n=t/4*Math.PI*2+Math.PI/4;e.box(.1,.19,.2,G,U(2.5+Math.cos(n)*.34,1.05+Math.sin(n)*.34,.68),0,[0,0,n])}for(let[t,n,r]of[[-2.4,.8,`#ff7ab8`],[0,.9,`#ffd23f`]]){e.cyl(.32,.26,.42,G,U(t,.21,n),void 0,10),e.sphere(.32,`#4fae43`,U(t,.55,n),U(1,.7,1),7);for(let i=0;i<5;i++)e.sphere(.07,r,U(t+Math.cos(i*1.3)*.22,.68,n+Math.sin(i*1.3)*.2),1,5)}})}function ff(e,t,n=2,r=null){return Qd(`townhouse${e}${t}${n}${r}`,i=>{let a=2.6,o=2.4,s=1.25,c=n*s+.3;i.box(2.84,.3,2.6399999999999997,`#c9bfae`,U(0,.15,0),.03),i.box(a,c,o,e,U(0,.3+c/2,0),.04),i.box(2.72,.1,2.52,G,U(0,.3+c,0),.02);for(let e=0;e<n;e++){let t=.3+s*e+s*.55;e>0&&i.box(2.68,.06,2.48,G,U(0,.3+s*e,0),0);for(let a of e===0?[-.75]:[-.65,.65])cf(i,a,t,o/2,.5,.62,e>0?n%2?`#ff5a4f`:`#ffd23f`:null,r)}i.box(.62,.95,.06,`#5b3a26`,U(.6,.78,1.22),.02),i.box(.72,.08,.1,G,U(.6,1.28,1.25),0),i.sphere(.04,`#ffd23f`,U(.84,.3+.52,1.26),1,5),i.box(.9,.1,.4,`#c9bfae`,U(.6,.25,1.5),.02),i.box(.9,.1,.3,`#c9bfae`,U(.6,.12,1.75),.02),i.gableRoof({y:.3+c,w:a,d:o,rise:1.15,color:t,wall:e,trim:G,over:.22,overG:.14,rows:2}),i.box(.32,.8,.32,`#b85a3a`,U(-.75,.3+c+.75,-.4),.02),i.box(.4,.08,.4,`#8a3f28`,U(-.75,.3+c+1.18,-.4),.02)})}function pf(){return Qd(`rowHouses`,e=>{let t=[[-2.85,3,`#f2b8a0`,`#c9573a`],[-.95,4,`#8fd0c8`,af],[.95,3,`#f6d77a`,`#c9573a`],[2.85,4,`#a9c4ef`,af]];e.box(8,.3,3,`#c9bfae`,U(0,.15,0),.03);for(let[n,r,i,a]of t){let t=1.9,o=2.6,s=1.1,c=r*s;e.box(t,c,o,i,U(n,.3+c/2,0),.02);for(let t=0;t<r;t++){let r=.3+s*t+s*.55;if(t>0&&e.box(1.94,.05,2.64,G,U(n,.3+s*t,0),0),t!==0)for(let i of[-.45,.45])cf(e,n+i,r,o/2,.4,.56,t===1?`#ff5a4f`:null)}for(let r=0;r<4;r++){let a=t*(1-(r+1)/5.4),s=.3+c+r*.34;e.box(a,.34,.3,i,U(n,s+.17,o/2-.15),0),e.box(a+.08,.06,.34,G,U(n,s+.34,o/2-.15),0)}e.box(.24,.24,.06,`#9fd6f2`,U(n,.3+c+.55,1.31),0);let l=new H;l.gableRoof({y:0,w:2.3000000000000003,d:t,rise:1.2,color:a,wall:i,over:.08,overG:.05,rows:1});let u=l.build();e.addColored(u,U(n,.3+c,-.15),[0,Math.PI/2,0]),u.dispose()}e.box(1.5,.75,.05,`#9fd6f2`,U(-2.85,.3+.62,1.31),0),sf(e,-2.85,1.45,1.6,1.8,.6,[`#c9573a`,G],6,.35);for(let[t,n]of[[-.95,`#2f4a6b`],[.95,`#5b3a26`],[2.85,`#6a2a3a`]])e.box(.6,.9,.06,n,U(t+.35,.75,1.32),.02),cf(e,t-.45,.3+.6,1.3,.4,.5);for(let t of[-.36,.36])e.add(new P(.22,.025,4,12),`#2a2c31`,U(-1.9+t,.52,1.75),[0,0,0]);e.box(.72,.04,.04,`#3a8df0`,U(-1.9,.62,1.75),0,[0,0,.25]),e.box(.04,.4,.04,`#3a8df0`,U(-1.75,.62,1.75),0,[0,0,-.3]),e.box(.2,.05,.12,`#2a2c31`,U(-2.08,.82,1.75),0)})}function mf(){return Qd(`fishMarket`,e=>{let t=7.2,n=4.2;e.box(7.8,.12,5,`#d9cfbd`,U(0,.06,.2),0);for(let r of[-1,1])for(let i of[-1,1])e.box(.5,2.6,.5,`#b85a3a`,U(r*t/2,1.4000000000000001,i*n/2),.03);e.box(t,.5,n,`#b85a3a`,U(0,2.45,0),.03);for(let t=0;t<4;t++){let r=-2.7+t*1.8;t>0&&e.box(.3,2.2,.3,`#c96a45`,U(r-.9,2.2/2+.1,n/2),.02),e.add(new P(.75,.1,4,12,Math.PI),`#e8d8c0`,U(r,1.85,2.12))}e.box(6.8,2,.1,`#5a3a2e`,U(0,1.1,-2),0);for(let t=0;t<4;t++){let n=-2.7+t*1.8;e.box(1.4,.8,.8,`#5b7f9a`,U(n,.5,.6),.03),e.box(1.36,.08,.76,`#eaf6ff`,U(n,.94,.6),0);for(let t=0;t<4;t++)e.sphere(.13,t%2?`#c7d3dc`:`#ff9a6a`,U(n-.45+t*.3,1,.6),U(1.6,.5,.7),6)}e.gableRoof({y:2.7,w:7.5,d:4.5,rise:1.5,color:`#4f6f8a`,wall:`#b85a3a`,trim:G,over:.3,overG:.2,rows:3}),e.box(6.6000000000000005,.06,.6,`#bfe6f7`,U(0,4.15,.42),0,[.62,0,0]),e.box(3.2,.62,.12,ef,U(0,3.02,2.22),.03);for(let t=0;t<3;t++)e.sphere(.13,`#ff9a6a`,U(-.9+t*.9,3.02,2.3000000000000003),U(1.8,.7,.4),6);e.cyl(.03,.03,1,`#3d434d`,U(0,2.7+1.6+.5,0),void 0,5),e.sphere(.24,`#d9a33a`,U(.05,4.95,0),U(1.8,.75,.25),8),e.add(rs(new rn(.2,.3,3)),`#d9a33a`,U(-.42,4.95,0),[0,0,Math.PI/2]);for(let[t,n]of[[-3.3,2.5],[-2.7,2.6],[3,2.5]]){e.box(.55,.3,.42,`#4f86d8`,U(t,.15,n),.02);for(let r=0;r<3;r++)e.sphere(.08,`#c7d3dc`,U(t-.15+r*.15,.33,n),U(1.7,.5,.7),5)}e.box(.9,.12,.6,tf,U(2.2,.45,2.7),.02);for(let t of[-.45,.45])e.cyl(.2,.2,.06,`#3d434d`,U(2.2+t,.2,2.7),[0,0,Math.PI/2],10)})}function hf(){return Qd(`fishStalls`,e=>{e.box(5,.05,3.6,`#e2dbcd`,U(0,.025,0),0);for(let[t,n,r]of[[-1.4,-.7,0],[1.4,-.7,1],[0,1.2,2]]){e.box(1.8,.75,.9,r===2?`#c9853f`:`#5b7f9a`,U(t,.38,n),.03),e.box(1.76,.08,.86,`#eaf6ff`,U(t,.8,n),0);for(let i=0;i<5;i++)e.sphere(.12,[`#c7d3dc`,`#ff9a6a`,`#9aa9b5`,`#e8c27a`,`#c7d3dc`][(i+r)%5],U(t-.6+i*.3,.88,n+(i%2?.12:-.12)),U(1.7,.5,.7),6);for(let r of[-.85,.85])for(let i of[-.45,.45])e.cyl(.03,.03,2,`#e6ebf2`,U(t+r,1,n+i),void 0,5);sf(e,t,2,n+.1,2,1.2,r===1?[`#e8453c`,G]:[`#3a6fd0`,G],6,.28)}e.cyl(.02,.02,.5,`#3d434d`,U(-1.4,1.6,-.2),void 0,4),e.cyl(.18,.18,.04,`#c9ced6`,U(-1.4,1.35,-.2),void 0,10),e.cyl(.3,.3,.42,nf,U(2,.21,1.4),void 0,8),e.cyl(.32,.32,.04,`#d9a33a`,U(2,.42,1.4),void 0,8)})}function gf(){return Qd(`fishCafe`,e=>{e.box(5,.2,3.8,tf,U(0,.1,.1),.02);for(let t=0;t<7;t++)e.box(5,.02,.03,nf,U(0,.21,-1.6+t*.55),0);e.box(2.4,1.7,1.5,ef,U(-1.1,1.05,-1),.04),cf(e,-1.6,1.15,-.25,.5,.55),e.box(.6,.95,.06,G,U(-.6,.68,-.23),.02),e.gableRoof({y:1.9,w:2.4,d:1.5,rise:.6,color:G,wall:ef,trim:ef,x:-1.1,z:-1,over:.2,overG:.15,rows:1}),e.sphere(.32,`#e8333a`,U(-1.1,2.9,-.8),U(1.4,.7,.8),8),e.sphere(.2,`#e8333a`,U(-.55,2.95,-.8),U(1.2,.7,.7),7);for(let t of[-1,1])e.box(.36,.08,.08,`#e8333a`,U(-1.1+t*.45,3.05,-.8),0,[0,0,t*.7]),e.sphere(.12,`#e8333a`,U(-1.1+t*.7,3.25,-.8),U(1.4,1,.6),6);for(let[t,n]of[[.8,-.6],[1.6,.9],[-.4,1.2]]){e.box(.8,.05,.8,`#3a8df0`,U(t,.76,n),0);for(let r=0;r<4;r++)e.box(.18,.06,.78,G,U(t-.3+r*.2,.765,n),0);e.cyl(.05,.08,.55,`#5b6270`,U(t,.48,n),void 0,6);for(let r of[-.55,.55])e.box(.32,.45,.32,nf,U(t+r,.43,n),.03)}e.box(.1,1.1,.1,`#3d434d`,U(2.2,.75,-1.3),.02),e.box(.6,.1,.1,`#3d434d`,U(2.2,1.15,-1.3),.02),e.add(new P(.34,.06,4,10,Math.PI),`#3d434d`,U(2.2,.55,-1.3),[0,0,Math.PI])})}function _f(){return Qd(`netRacks`,e=>{for(let t of[-.8,.6]){for(let n of[-1.8,0,1.8])e.box(.1,1.7,.1,nf,U(n,.85,t),0);e.box(3.8,.08,.08,nf,U(0,1.66,t),0);for(let n=0;n<6;n++)e.box(.58,1.1-n%2*.12,.04,n%2?`#3f8f88`:`#4fa39b`,U(-1.5+n*.6,1.08,t+(n%2?.04:-.04)),0,[0,0,n%2?.04:-.04]);for(let n=0;n<6;n++)e.sphere(.07,`#ff8a2a`,U(-1.6+n*.65,1.62,t+.06),1,5)}e.box(.9,.5,.7,nf,U(-.9,.25,2),.02),e.box(.9,.5,.7,nf,U(.9,.25,2),.02),e.sphere(1,`#3a7ac2`,U(0,.82,2),U(1.7,.3,.6),10),e.box(3.2,.06,.9,G,U(0,.74,2),.03)})}function vf(e,t,n,r=1){e.cyl(.42*r,.62*r,2.6*r,`#7a5236`,U(t,1.3*r,n),void 0,9);for(let i=0;i<5;i++){let a=i/5*Math.PI*2+.3;e.box(.24*r,.22*r,.9*r,`#6f4a30`,U(t+Math.cos(a)*.55*r,.1*r,n+Math.sin(a)*.55*r),.05,[0,-a+Math.PI/2,.2])}for(let[i,a,o,s,c]of[[0,4.3,-.9,1.7,`#4f9a3c`],[1.35,3.9,-.6,1.2,`#5aa846`],[-1.4,4,-.8,1.25,`#4a9238`],[.3,5.1,-1.1,1.15,`#62b24c`],[-.7,3.6,-1.6,1,`#58a443`]])e.add(new ce(s*r,1),c,U(t+i*r,a*r,n+o*r))}function yf(){return Qd(`treehouse`,e=>{vf(e,0,0,1.15),e.box(2.6,.12,2.2,tf,U(0,2.4,.5),.02);for(let t of[-1.2,1.2])e.box(.1,.5,.1,nf,U(t,2.7,1.45),0);e.box(2.5,.06,.06,nf,U(0,2.92,1.45),0);for(let[t,n]of[[-1.15,1.4],[1.15,1.4]])e.box(.1,2.4,.1,nf,U(t,1.2,n),0,[.06,0,0]);e.box(1.5,1.2,1.2,`#d9a066`,U(.3,3.06,.75),.03),e.box(.5,.75,.05,`#5b3a26`,U(.05,2.86,1.37),.02),e.box(.36,.32,.05,`#9fd6f2`,U(.65,3.16,1.37),0),e.gableRoof({y:3.66,w:1.5,d:1.2,rise:.55,color:`#c9573a`,wall:`#d9a066`,trim:G,x:.3,z:.75,over:.14,overG:.12,rows:1});for(let t of[-.62,-.22])e.cyl(.02,.02,2.4,`#e2c28a`,U(t,1.2,1.55),void 0,4);for(let t=0;t<6;t++)e.box(.46,.05,.08,tf,U(-.42,.3+t*.36,1.55),0);e.box(1.6,.16,.16,`#6f4a30`,U(-1.5,3.3,-.2),.04,[0,0,-.2]);for(let t of[-.42,.02])e.cyl(.015,.015,2.2,`#e2c28a`,U(-1.9,2.15,t),void 0,4);e.box(.3,.05,.6,`#e8453c`,U(-1.9,1.05,-.2),.02),e.cyl(.08,.08,.2,`#ffd86a`,U(1.05,2.72,1.45),void 0,6),e.cyl(.015,.015,.9,nf,U(.9,4.15,.2),void 0,4),e.box(.4,.24,.02,`#3a8df0`,U(1.1,4.45,.2),0)})}function bf(){return Qd(`grove`,e=>{for(let[t,n,r,i]of[[-1.6,-1,1,`#62b24c`],[.2,-1.6,.85,`#58a443`],[1.7,-.6,.95,`#6cc452`],[-.6,.9,.8,`#4fa33f`],[1.4,1.3,.9,`#62b24c`]])e.cyl(.06*r,.08*r,1.1*r,`#8a5a3b`,U(t,.55*r,n),void 0,5),e.add(new ce(.55*r,1),i,U(t,1.3*r,n)),e.cyl(.03,.03,1*r,`#c9a477`,U(t+.18,.5*r,n),void 0,4),e.box(.22,.04,.04,`#e2c28a`,U(t+.09,.7*r,n),0);e.cyl(.22,.22,1.6,`#8a5a3b`,U(-.4,.24,2),[0,0,Math.PI/2],8),e.cyl(.18,.18,.02,`#d9b27a`,U(.41,.24,2),[0,0,Math.PI/2],8);for(let[t,n,r]of[[.9,.2,`#e8453c`],[1.1,.35,`#e8453c`],[-1.4,.2,`#d9a33a`]])e.cyl(.04,.05,.16,`#f6f0e2`,U(t,.08,n),void 0,5),e.add(new re(.11,8,4,0,Math.PI*2,0,Math.PI/2),r,U(t,.15,n));for(let[t,n]of[[-2,.5],[2.2,.6],[.3,-.2]])for(let r=0;r<5;r++)e.box(.08,.02,.5,`#4fa33f`,U(t,.18,n),0,[.5,r/5*Math.PI*2,0])})}function xf(){return Qd(`picnic`,e=>{for(let[t,n]of[[-1.2,-.6],[1.4,.4]]){e.box(1.5,.08,.7,tf,U(t,.74,n),.02);for(let r of[-.55,.55])e.box(1.5,.06,.26,tf,U(t,.42,n+r),.02);for(let r of[-.6,.6])e.box(.07,.8,.07,nf,U(t+r,.4,n-.25),0,[.35,0,0]),e.box(.07,.8,.07,nf,U(t+r,.4,n+.25),0,[-.35,0,0])}e.sphere(.32,`#2a2c31`,U(.2,.75,-1.5),U(1,.55,1),10);for(let t=0;t<3;t++)e.cyl(.02,.02,.75,`#2a2c31`,U(.2+Math.cos(t*2.1)*.2,.37,-1.5+Math.sin(t*2.1)*.2),void 0,4);e.box(1.4,.03,1.1,`#e8453c`,U(-.6,.02,1.4),0);for(let t=0;t<4;t++)e.box(.16,.04,1.08,G,U(-1.15+t*.36,.024,1.4),0);e.box(.42,.26,.3,`#c9853f`,U(-.3,.16,1.3),.04),e.add(new P(.15,.025,4,10,Math.PI),`#a86a32`,U(-.3,.29,1.3)),e.box(.1,1.5,.1,nf,U(2.4,.75,-1.2),0),e.box(.9,.22,.05,`#e8c27a`,U(2.65,1.3,-1.18),.02,[0,0,.08]),e.box(.8,.22,.05,`#e8c27a`,U(2.15,1,-1.18),.02,[0,0,-.08])})}function Sf(){return Qd(`forestPond`,e=>{e.cyl(2.5,2.6,.08,`#7a6a52`,U(0,.04,0),void 0,22),e.cyl(2.25,2.25,.06,`#3f86a8`,U(0,.09,0),void 0,22),e.cyl(1.5,1.5,.07,`#2f6f92`,U(.2,.095,-.2),void 0,18);for(let t=0;t<18;t++){let n=t/18*Math.PI*2;t%3!=0&&(e.cyl(.02,.025,.7,`#5f8f3a`,U(Math.cos(n)*2.3,.35,Math.sin(n)*2.3),[.1*Math.sin(t),0,.1*Math.cos(t)],3),t%2&&e.cyl(.04,.04,.16,`#6b4a30`,U(Math.cos(n)*2.3,.68,Math.sin(n)*2.3),void 0,4))}for(let[t,n]of[[.8,.6],[-.9,-.4],[.2,1.3]])e.add(new Mn(.25,8,.4,Math.PI*2-.8),`#4fa83f`,U(t,.142,n),[-Math.PI/2,0,0]),e.sphere(.06,`#ffffff`,U(t+.05,.17,n),1,5);for(let t=0;t<9;t++)e.box(.8,.06,.24,t%2?tf:`#c09460`,U(-1.6+t*.4,.42+Math.sin(t/8*Math.PI)*.25,1.65),.01,[0,Math.PI/2,0]);for(let t of[1.25,2.05])e.box(3.4,.05,.05,nf,U(0,.95,t),0);for(let t of[-1.6,0,1.6])for(let n of[1.25,2.05])e.box(.06,.6,.06,nf,U(t,.68,n),0);e.cyl(.015,.015,.5,`#e8b04a`,U(-1.4,.36,-.9),void 0,3),e.sphere(.16,`#c9d1da`,U(-1.4,.68,-.9),U(.8,.8,1.4),7),e.cyl(.03,.04,.35,`#c9d1da`,U(-1.4,.92,-.78),[.4,0,0],4),e.sphere(.06,`#e8eef4`,U(-1.4,1.08,-.7),1,5),e.cyl(0,.02,.18,`#e8b04a`,U(-1.4,1.08,-.58),[Math.PI/2,0,0],3)})}function Cf(e,t,n,r=0){for(let i of[-.9,.9]){e.box(1.4,.5,.18,`#d9a33a`,U(t,r+.25,n+i),.02);for(let a of[-.5,.5])e.box(.12,.7,.12,`#d9a33a`,U(t+a,r+.55,n+i),0,[0,0,a*.4])}e.sphere(1,G,U(t,r+1.25,n),U(.62,.55,2.7),14),e.box(1.18,.12,4.6,`#2f6fd0`,U(t,r+1.08,n),.05),e.box(.12,.8,1.6,ef,U(t,r+.55,n+.1),.04),e.box(1.05,.08,4.4,`#d9b27a`,U(t,r+1.55,n),.03),e.box(.8,.4,1.4,G,U(t,r+1.78,n+.3),.08);for(let i of[-.2,.3,.8])e.box(.82,.14,.24,`#5ab2e0`,U(t,r+1.82,n+i),0);e.cyl(.05,.06,5.6,`#e6ebf2`,U(t,r+4.3,n-.4),void 0,6),e.cyl(.04,.04,2,`#e6ebf2`,U(t,r+2.15,n-1.4),[Math.PI/2,0,0],6),e.cyl(.14,.11,1.9,`#f2ecdc`,U(t,r+2.3,n-1.4),[Math.PI/2,0,0],7),e.box(.02,.18,.5,`#e8453c`,U(t,r+7,n-.15),0),e.cyl(.01,.01,3.5,`#9aa3ad`,U(t,r+4.1,n+1),[-.38,0,0],3)}function wf(){return Qd(`boathouse`,e=>{e.box(7,.12,6.2,`#cfc5b3`,U(0,.06,.4),0);for(let t of[-.8,.8])e.box(.12,.08,5.6,`#7d838c`,U(t,.16,.9),0);for(let t=0;t<9;t++)e.box(2,.06,.14,nf,U(0,.13,-1.6+t*.62),0);let t=5.4,n=2.6,r=2.4;e.box(t,r,n,`#b5402f`,U(0,1.3,-2),.03);for(let t=0;t<14;t++)e.box(.05,r,.04,`#8f3022`,U(-2.5+t*.385,1.3,-.69),0);e.box(2.4,2,.06,`#3a2a22`,U(0,1.1,-.7+.02),0);for(let t of[-1,1])e.box(1.15,1.95,.08,G,U(0+t*1.85,1.08,-.7+.3),.02,[0,t*.9,0]);e.gableRoof({y:2.5,w:t,d:n,rise:1.3,color:`#3f4650`,wall:`#b5402f`,trim:G,x:0,z:-2,over:.3,overG:.2,rows:2}),e.box(1.2,.5,.06,G,U(0,3.15,-.7+.06),.02),e.add(new P(.18,.05,4,10),ef,U(0,3.15,-.6)),Cf(e,0,.9),e.cyl(.25,.25,.5,`#3d434d`,U(-2.4,.4,.6),[0,0,Math.PI/2],10),e.box(.6,.3,.4,`#5b6270`,U(-2.4,.18,.6),.02),e.add(new P(.22,.07,5,10),`#e2c28a`,U(2.3,.1,1.6),[Math.PI/2,0,0]);for(let[t,n]of[[2.1,`#2f6fd0`],[2.45,G]])e.cyl(.12,.12,.22,n,U(t,.11,2.3),void 0,8)})}function Tf(){return Qd(`workshop`,e=>{e.box(4.4,.08,3.4,`#cfc5b3`,U(0,.04,0),0),e.box(2.6,1.8,1.6,`#8a6a4a`,U(-.8,1,-.8),.03),e.box(1.2,1.4,.06,`#3a2a22`,U(-1.2,.8,.01),0);for(let t=0;t<6;t++)e.box(.05,1.8,.04,`#6f5236`,U(-2+t*.48,1,.01),0);e.box(3,.1,2,`#6f7680`,U(-.8,1.95,-.6),.03,[.12,0,0]),e.box(1.4,.08,.6,tf,U(.9,.82,-.6),.02);for(let t of[-.6,.6])e.box(.08,.8,.5,nf,U(.9+t,.4,-.6),0);e.box(1.4,.8,.05,`#c9a477`,U(.9,1.45,-.92),0),e.box(.06,.4,.04,`#5b6270`,U(.5,1.45,-.88),0),e.box(.4,.06,.04,`#e8453c`,U(.9,1.6,-.88),0),e.add(new P(.12,.03,4,10),`#3d434d`,U(1.3,1.4,-.88)),e.box(.12,.12,2.4,nf,U(1,.35,.9),0);for(let t=0;t<6;t++)e.add(new P(.55-Math.abs(t-2.5)*.06,.04,4,10,Math.PI),tf,U(1,.95,-.15+t*.42),[0,Math.PI/2,Math.PI]);e.box(1.1,.05,1.6,tf,U(1.45,.7,.9),0,[0,0,-.9]);for(let[t,n]of[[-1.9,1],[-1.4,1.3]]){e.cyl(.28,.28,.7,`#8a5a3b`,U(t,.35,n),void 0,10);for(let r of[.15,.55])e.cyl(.29,.29,.05,`#3d434d`,U(t,r,n),void 0,10)}})}function Ef(){return Qd(`dockCrane`,e=>{e.box(4,.06,3.2,`#cfc5b3`,U(0,.03,0),0);for(let t of[-1.5,1.5]){for(let n of[-.9,.9])e.box(.18,3.4,.18,`#e8453c`,U(t,1.7,n),.02);e.box(.12,.12,1.8,G,U(t,1.2,0),0),e.box(.5,.2,2.2,`#3d434d`,U(t,.1,0),.03)}e.box(3.4,.3,.3,`#e8453c`,U(0,3.5,0),.03);for(let t=0;t<6;t++)e.box(.56,.31,.32,t%2?G:`#e8453c`,U(-1.4+t*.56,3.5,0),0);e.box(.5,.4,.5,`#ffd23f`,U(.4,3.2,0),.04),e.cyl(.015,.015,1.6,`#2a2c31`,U(.4,2.2,0),void 0,3),e.add(new P(.12,.03,4,8,Math.PI*1.3),`#2a2c31`,U(.4,1.32,0),[0,0,Math.PI*.85]);for(let[t,n,r]of[[-.6,.2,`#4f86d8`],[.8,-.3,`#ff8a2a`],[.3,1.1,`#35c46a`]])e.box(.9,.12,.9,tf,U(t,.06,n),0),e.box(.8,.5,.8,r,U(t,.37,n),.03),e.box(.82,.06,.82,of(r,.8),U(t,.45,n),0)})}var Df=5.2;function Of(){return Qd(`windmill`,e=>{e.cyl(2.2,2.3,.2,`#cfc5b3`,U(0,.1,0),void 0,16),e.cyl(1.25,1.75,4.6,G,U(0,2.5,0),void 0,14);for(let t of[1.6,3.2])e.cyl(1.55-(t-1.6)*.06,1.6-(t-1.6)*.06,.08,`#d9d2c4`,U(0,t,0),void 0,14);e.cyl(2,2,.1,tf,U(0,2.4,0),void 0,16);for(let t=0;t<16;t++){let n=t/16*Math.PI*2;e.box(.05,.55,.05,nf,U(Math.cos(n)*1.95,2.7,Math.sin(n)*1.95),0)}e.add(new P(1.95,.03,3,24),nf,U(0,2.98,0),[Math.PI/2,0,0]),e.box(.62,1.1,.06,`#3f6f8a`,U(0,.75,1.72),.02,[-.1,0,0]);for(let[t,n]of[[3.5,1.45],[1.9,1.62]])e.box(.38,.48,.06,`#9fd6f2`,U(0,t,n),0,[-.11,0,0]);e.cyl(1.38,1.28,.2,nf,U(0,4.8,0),void 0,14),e.add(new re(1.32,14,7,0,Math.PI*2,0,Math.PI/2),`#8a5a3b`,U(0,4.9,0),void 0,U(1,.85,1.12)),e.cyl(.18,.26,1.8,`#6f4a30`,U(0,Df,1.2),[Math.PI/2,0,0],8),e.box(1.2,.08,.36,tf,U(-1.8,.45,1.5),.02,[0,.5,0]);for(let[t,n,r]of[[1.6,1.3,`#ff5a4f`],[1.95,.8,`#ffd23f`]])e.cyl(.2,.15,.3,`#c9573a`,U(t,.15,n),void 0,8),e.sphere(.18,r,U(t,.38,n),U(1,.7,1),6)})}function kf(){let e=$d.get(`sails`);if(e)return e;let t=new H;t.cyl(.26,.26,.4,`#6f4a30`,U(0,0,2.1),[Math.PI/2,0,0],8);for(let e=0;e<4;e++){let n=e/4*Math.PI*2+Math.PI/4,r=Math.cos(n),i=Math.sin(n);t.box(.14,4,.1,`#7a5236`,U(r*2,i*2,2.2),0,[0,0,n-Math.PI/2]);let a=-i*.42,o=r*.42;t.box(.78,2.9,.05,`#f2ecdc`,U(r*2.4+a,i*2.4+o,2.24),0,[0,0,n-Math.PI/2]);for(let e=0;e<5;e++){let s=1.1+e*.7;t.box(.86,.05,.06,`#7a5236`,U(r*s+a,i*s+o,2.2800000000000002),0,[0,0,n-Math.PI/2])}}return e={geo:t.build(),y:Df,axis:`z`,speed:.55},$d.set(`sails`,e),e}function Af(){return Qd(`gazebo`,e=>{e.cyl(1.8,1.9,.3,`#d9d2c4`,U(0,.15,0),void 0,8);for(let t=0;t<8;t++){let n=t/8*Math.PI*2+Math.PI/8;e.cyl(.07,.08,2,G,U(Math.cos(n)*1.55,1.3,Math.sin(n)*1.55),void 0,6),t!==2&&e.box(1.15,.06,.06,G,U(Math.cos(n+Math.PI/8)*1.45,.85,Math.sin(n+Math.PI/8)*1.45),0,[0,-(n+Math.PI/8)+Math.PI/2,0])}e.cyl(1.85,1.85,.14,G,U(0,2.35,0),void 0,8),e.add(rs(new rn(2.05,1.4,8)),`#5fa88a`,U(0,3.1,0),[0,Math.PI/8,0]),e.sphere(.12,`#ffcf3c`,U(0,3.86,0),1,6),e.box(1.6,.08,.4,tf,U(0,.75,-.8),.02),e.box(1.6,.4,.06,tf,U(0,1.05,-1),.02);for(let t=0;t<7;t++)e.sphere(.12,t%2?`#ff7ab8`:`#4fae43`,U(-1.45+Math.sin(t)*.1,.6+t*.25,.75+Math.cos(t)*.1),1,5)})}function jf(){return Qd(`lifeguard`,e=>{e.cyl(3,3,.05,rf,U(0,.02,0),void 0,20);for(let t of[-.8,.8])for(let n of[-.7,.7])e.box(.14,2.3,.14,G,U(t,1.15,n),0,[n*.08,0,-t*.06]);e.box(2.1,.12,1.9,tf,U(0,2.3,0),.02),e.box(1.7,1.2,1.5,`#e8453c`,U(0,2.96,-.1),.03);for(let t=0;t<4;t++)e.box(1.72,.12,1.52,G,U(0,2.5+t*.3,-.1),0);e.box(1.2,.5,.05,`#9fd6f2`,U(0,3.1,.66),0),e.box(2.2,.1,2,G,U(0,3.62,-.1),.03,[.08,0,0]),e.box(2,.05,.05,G,U(0,2.75,.9),0);for(let t=0;t<7;t++)e.box(.62,.05,.08,tf,U(1.4,.25+t*.33,1.2-t*.1),0,[0,0,0]);for(let t of[1.1,1.7])e.box(.06,2.4,.06,nf,U(t,1.2,.95),0,[-.15,0,0]);e.cyl(.03,.03,1.6,`#e6ebf2`,U(-.9,4.2,-.6),void 0,5),e.box(.6,.36,.02,`#e8453c`,U(-.6,4.8,-.6),0),e.box(.59,.12,.03,`#ffd23f`,U(-.6,4.8,-.6),0),e.box(.36,2.2,.08,`#ffd23f`,U(-1.5,1.15,.8),.15,[.05,0,.2]),e.box(.39,.4,.1,`#e8453c`,U(-1.42,1.5,.8),.1,[.05,0,.2]),e.add(new P(.32,.08,6,14),`#e8453c`,U(.9,1.4,.75))})}function Mf(){return Qd(`umbrellas`,e=>{e.cyl(2.9,2.9,.05,rf,U(0,.02,0),void 0,20);let t=[[-1.4,-.8,`#3a8df0`,G],[1.3,-1,`#ff5a4f`,G],[.1,1.2,`#ffd23f`,`#ff8a2a`]];for(let[n,r,i,a]of t){lf(e,n,r,2,1,i,a,.12),e.box(.55,.06,1.4,G,U(n+.45,.32,r+.4),.02,[0,.2,0]),e.box(.55,.06,.5,G,U(n+.4,.5,r-.38),.02,[.6,.2,0]);for(let t of[-.3,.9])e.box(.5,.3,.05,`#c9ced6`,U(n+.45,.15,r+t),0,[0,.2,0]);e.box(.6,.02,1.2,i,U(n-.5,.06,r+.6),0,[0,-.3,0])}e.cyl(.42,.5,.36,`#e3c98e`,U(1.8,.18,1.3),void 0,8);for(let t=0;t<4;t++)e.cyl(.12,.14,.32,`#e3c98e`,U(1.8+Math.cos(t*1.57)*.38,.5,1.3+Math.sin(t*1.57)*.38),void 0,6);e.cyl(.18,.2,.44,`#e3c98e`,U(1.8,.58,1.3),void 0,8),e.cyl(.01,.01,.4,`#5b6270`,U(1.8,1,1.3),void 0,3),e.box(.2,.12,.01,`#e8453c`,U(1.9,1.12,1.3),0),e.box(.24,.2,.2,`#3a8df0`,U(2.3,.1,.9),.03)})}function Nf(){return Qd(`volley`,e=>{e.box(6,.05,3.6,rf,U(0,.025,0),0);for(let[t,n,r,i]of[[5.92,.08,0,-1.72],[5.92,.08,0,1.72],[.08,3.52,-2.92,0],[.08,3.52,2.92,0]])e.box(t,.058,n,`#3a8df0`,U(r,.03,i),0);for(let t of[-2,2])e.cyl(.05,.05,2.6,`#e6ebf2`,U(0,1.3,t),void 0,6);e.box(.03,.9,4,`#2a2c31`,U(0,2,0),0);for(let t=0;t<12;t++)e.box(.045,.86,.02,`#e6ebf2`,U(0,2,-1.9+t*.35),0);e.box(.05,.1,4.04,G,U(0,2.45,0),0),e.sphere(.13,`#ffd23f`,U(1.4,.13,.6),1,8),e.box(.27,.02,.05,`#3a8df0`,U(1.4,.2,.6),0)})}function Pf(){return Qd(`beachBar`,e=>{e.box(4.2,.1,3.2,tf,U(0,.05,0),.02),e.box(2.8,1,.6,`#c9853f`,U(0,.6,.2),.03);for(let t=0;t<7;t++)e.box(.05,.95,.04,`#a86a32`,U(-1.3+t*.43,.6,.51),0);e.box(3,.08,.8,nf,U(0,1.12,.25),.02);for(let t of[-1.3,1.3])for(let n of[-.9,.4])e.cyl(.07,.08,2.4,nf,U(t,1.2,n),void 0,6);e.add(rs(new rn(2.4,1.2,4)),`#e3c26a`,U(0,2.9,-.25),[0,Math.PI/4,0],U(1.15,1,.85));for(let t=0;t<16;t++)e.box(.28,.32,.04,`#d4ad52`,U(-2+t%8*.57,2.22,t<8?1.05:-1.55),0,[t<8?.4:-.4,0,0]);e.box(2.6,.06,.25,tf,U(0,1.5,-.8),0);for(let t=0;t<8;t++)e.cyl(.05,.05,.24,[`#3fae6a`,`#e8a33a`,`#5ab2e0`,`#e8453c`][t%4],U(-1.1+t*.31,1.65,-.8),void 0,6);for(let t=0;t<3;t++){let n=-.9+t*.9;e.cyl(.2,.2,.06,`#e8453c`,U(n,.78,.95),void 0,10),e.cyl(.04,.06,.74,`#3d434d`,U(n,.38,.95),void 0,5)}e.box(.45,2.2,.08,`#3fb8c8`,U(2,1.1,.9),.16,[.1,0,-.18]),e.box(.46,.24,.085,G,U(1.98,1.4,.9),.08,[.1,0,-.18]);for(let t=0;t<9;t++)e.sphere(.05,[`#ff5a4f`,`#ffd23f`,`#35c46a`,`#3a8df0`][t%4],U(-1.6+t*.4,2.05-Math.sin(t/8*Math.PI)*.18,1.1),1,5)})}var Ff=.75;function If(){return Qd(`bandstand`,e=>{e.cyl(2.3,2.4,Ff,G,U(0,Ff/2,0),void 0,16),e.cyl(2.32,2.32,.08,ef,U(0,Ff,0),void 0,16);for(let t=0;t<3;t++)e.box(1.2,.2,.4,G,U(0,.1+t*.22,2.4-t*.3),.02);for(let t=0;t<8;t++){let n=t/8*Math.PI*2;e.cyl(.06,.07,2.4,G,U(Math.cos(n)*2.05,1.95,Math.sin(n)*2.05),void 0,6)}e.cyl(2.25,2.25,.18,G,U(0,3.2,0),void 0,16);for(let t=0;t<16;t++)e.add(new In(.15,2.45,1.1,2,1,!1,t*Math.PI/8,Math.PI/8),t%2?`#e8453c`:G,U(0,3.85,0));e.sphere(.14,`#ffcf3c`,U(0,4.5,0),1,6);for(let t=0;t<16;t++){let n=t/16*Math.PI*2;e.add(rs(new rn(.12,.24,3)),[`#ff5a4f`,`#ffd23f`,`#3a8df0`,`#35c46a`][t%4],U(Math.cos(n)*2.3,2.95,Math.sin(n)*2.3),[Math.PI,n,0])}for(let t of[-1.3,1.3])e.box(.5,.8,.45,`#1f2228`,U(t,1.15,1.2),.03);e.cyl(.02,.02,1.2,`#26282c`,U(0,1.35,.9),void 0,5)})}var Lf=8.55;function Rf(e=!1){let t=e?`#8a5a4a`:`#e8453c`,n=e?`#bdb8ad`:G,r=e?`#2f353d`:`#d6f2ff`,i=e?`#6b3a24`:`#c9352e`;return Qd(e?`lighthouseOld`:`lighthouse`,a=>{a.cyl(1.9,2,.4,`#a9a59c`,U(0,.2,0),void 0,14);let o=7.2;for(let e=0;e<6;e++){let r=e/6,i=(e+1)/6,s=1.35-r*.5,c=1.35-i*.5;a.cyl(c,s,o/6,e%2?t:n,U(0,.4+(e+.5)*(o/6),0),void 0,14)}for(let e=0;e<3;e++)a.box(.24,.36,.06,`#3a5a72`,U(0,1.9+e*2,1.32-e*.18-.02),0,[-.07,0,0]);a.box(.62,1,.08,ef,U(0,.9,1.36),.02,[-.07,0,0]),a.cyl(1.25,1.05,.2,`#3d434d`,U(0,7.7,0),void 0,14);for(let e=0;e<14;e++){let t=e/14*Math.PI*2;a.box(.04,.5,.04,`#3d434d`,U(Math.cos(t)*1.2,8.05,Math.sin(t)*1.2),0)}a.add(new P(1.2,.03,3,20),`#3d434d`,U(0,8.3,0),[Math.PI/2,0,0]),a.cyl(.72,.72,.16,`#3d434d`,U(0,7.880000000000001,0),void 0,10);for(let e=0;e<8;e++){let t=e/8*Math.PI*2;a.box(.05,1,.05,`#3d434d`,U(Math.cos(t)*.68,8.46,Math.sin(t)*.68),0)}a.cyl(.7,.7,.95,r,U(0,8.46,0),void 0,8),a.cyl(.8,.8,.12,`#3d434d`,U(0,9,0),void 0,10),a.add(new re(.72,10,5,0,Math.PI*2,0,Math.PI/2),i,U(0,9.06,0)),a.cyl(.02,.05,.6,`#3d434d`,U(0,10,0),void 0,5),a.sphere(.08,`#3d434d`,U(0,10.32,0),1,5);let s=2.4,c=.6;if(a.box(2.4,1.5,2,n,U(s,.95,c),.04),e){a.box(.5,.5,.05,`#2b2f36`,U(2.9,1.05,1.6099999999999999),0);for(let e of[.3,-.3])a.box(.62,.08,.05,`#9c7a52`,U(2.9,1.05,1.6400000000000001),0,[0,0,e]);a.box(.55,.95,.06,`#3a2a22`,U(1.8499999999999999,.72,1.62),.02),a.box(.66,.08,.05,`#9c7a52`,U(1.8499999999999999,.8,1.6600000000000001),0,[0,0,.6])}else cf(a,2.9,1.05,1.6,.5,.5,`#ff5a4f`,`#3f6f8a`),a.box(.55,.95,.06,`#3f6f8a`,U(1.8499999999999999,.72,1.62),.02);a.gableRoof({y:1.7,w:2.4,d:2,rise:.8,color:i,wall:n,trim:n,x:s,z:c,over:.18,overG:.12,rows:2}),a.box(.3,.6,.3,`#a9a59c`,U(3.0999999999999996,2.6,.19999999999999996),.02)})}function zf(){let e=$d.get(`lamp`);if(e)return e;let t=new H;t.cyl(.18,.22,.5,`#3d434d`,U(0,-.2,0),void 0,8);for(let e of[-1,1])t.box(.22,.42,.42,`#fff6c4`,U(e*.3,.08,0),.06),t.box(.06,.48,.48,`#ffd86a`,U(e*.43,.08,0),.03);return e={geo:t.build(),y:Lf,axis:`y`,speed:1.6,tag:`lamp`},$d.set(`lamp`,e),e}function Bf(){return Qd(`keeperGarden`,e=>{e.box(4,.06,3,`#a37a52`,U(0,.03,0),0);for(let t=0;t<3;t++){e.box(3.2,.18,.6,`#6b4a30`,U(0,.12,-.9+t*.85),.02);for(let n=0;n<7;n++)e.sphere(.13,t===1?`#e8453c`:`#4fae43`,U(-1.4+n*.47,.3,-.9+t*.85),U(1,.8,1),5)}for(let t=0;t<15;t++)e.box(.08,.55,.05,G,U(-1.95+t*.28,.3,1.55),.01);e.box(4,.06,.04,G,U(0,.42,1.55),0),e.sphere(1,`#3a7ac2`,U(2.6,.3,-.2),U(.5,.32,1.25),10),e.box(.9,.06,2.2,tf,U(2.6,.42,-.2),.02);for(let t=0;t<7;t++)e.sphere(.13,[`#ff7ab8`,`#ffd23f`,`#ffffff`][t%3],U(2.6+Math.sin(t*2)*.25,.55,-1+t*.26),1,5);e.cyl(.04,.05,3.6,`#e6ebf2`,U(-2.4,1.8,-1.2),void 0,6),e.box(.9,.55,.02,ef,U(-1.92,3.25,-1.2),0),e.box(.89,.12,.03,`#e8453c`,U(-1.92,3.25,-1.2),0)})}function Vf(){return Qd(`sailorStatue`,e=>{let t=`#8a6a3a`,n=`#6f5530`;e.cyl(1,1.1,.5,`#bdb5a5`,U(0,.25,0),void 0,10),e.cyl(.65,.75,1,`#cfc7b6`,U(0,1,0),void 0,10),e.cyl(.8,.8,.12,`#bdb5a5`,U(0,1.55,0),void 0,10);for(let t of[-.13,.13])e.cyl(.1,.12,.8,n,U(t,2,0),void 0,6);e.cyl(.3,.26,.8,t,U(0,2.75,0),void 0,8),e.sphere(.2,t,U(0,3.35,0),1,8),e.cyl(.26,.26,.06,n,U(0,3.48,0),void 0,10),e.cyl(.16,.2,.2,n,U(0,3.58,-.03),void 0,8),e.cyl(.07,.07,.7,t,U(.32,3.1,.15),[.5,0,-.5],6),e.box(.18,.24,.18,n,U(.52,3.5,.32),.02),e.sphere(.08,`#ffd86a`,U(.52,3.5,.32),1,5),e.cyl(.07,.07,.6,t,U(-.32,2.65,.05),[0,0,.4],6),e.add(new P(.22,.06,4,10),n,U(-.3,1.66,.25),[Math.PI/2,0,0])})}function Hf(){return Qd(`anchorMonument`,e=>{let t=`#3d434d`;e.cyl(1.4,1.5,.3,`#bdb5a5`,U(0,.15,0),void 0,12),e.box(1,.6,1,`#cfc7b6`,U(0,.6,0),.04),e.box(.18,2.6,.18,t,U(0,2.2,0),.03),e.box(1.1,.16,.16,t,U(0,3.1,0),.03),e.add(new P(.2,.06,4,10),t,U(0,3.65,0)),e.add(new P(.7,.12,5,14,Math.PI),t,U(0,1.55,0),[0,0,Math.PI]);for(let n of[-1,1])e.add(rs(new rn(.2,.4,3)),t,U(n*.72,1.6,0),[0,0,n*.4]);for(let t=0;t<7;t++){let n=t/7*Math.PI*1.2-.3;e.add(new P(.1,.03,3,8),`#5b6270`,U(Math.cos(n)*1.1,.34,Math.sin(n)*1.1+.2),[Math.PI/2,0,n])}})}function Uf(){return Qd(`compassRose`,e=>{e.cyl(2.2,2.2,.04,`#e6dccb`,U(0,.02,0),void 0,24),e.add(new P(1.8,.06,3,32),ef,U(0,.05,0),[Math.PI/2,0,0]);for(let t=0;t<8;t++){let n=t/8*Math.PI*2,r=t%2==0;e.add(rs(new rn(r?.28:.18,r?1.6:.9,3)),t===0?`#e8453c`:r?ef:`#5ab2e0`,U(Math.sin(n)*(r?.8:.45),.05,Math.cos(n)*(r?.8:.45)),[Math.PI/2,0,-n+Math.PI])}e.cyl(.18,.18,.08,`#ffcf3c`,U(0,.07,0),void 0,10),e.cyl(.05,.07,3.4,G,U(1.5,1.7,-1.3),void 0,6),e.box(1.2,.04,.04,G,U(1.5,3,-1.3),0);for(let t=0;t<3;t++)e.box(.24,.3,.02,[`#ffd23f`,`#e8453c`,`#3a8df0`][t],U(1.1+t*.4,2.75,-1.3),0)})}var Wf=class{constructor(e){var t;this.scene=new xe,this.width=1,this.height=1,this.aspect=1,this.time=0,this.frameMs=16,this.fps=60,this.updaters=[],this.last=0,this.running=!1,this.paused=!1,this.onResize=[],this.onFrame=null,this.instanced=[],this.instancedT=0,this.canvas=e,this.dprCap=Nu?1.5:2,this.renderer=new Io({canvas:e,antialias:!0,powerPreference:`high-performance`,stencil:!1,depth:!0,alpha:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,this.dprCap)),this.renderer.outputColorSpace=ee,this.renderer.localClippingEnabled=!0,this.renderer.toneMapping=0,this.renderer.shadowMap.enabled=Pu,this.renderer.shadowMap.type=1,this.renderer.shadowMap.autoUpdate=!0,this.renderer.debug.checkShaderErrors=!1,this.camera=new we(40,1,.5,400),e.addEventListener(`webglcontextlost`,e=>e.preventDefault(),!1),window.addEventListener(`resize`,()=>this.resize()),(t=window.visualViewport)==null||t.addEventListener(`resize`,()=>this.resize()),document.addEventListener(`visibilitychange`,()=>{this.last=performance.now()}),this.resize()}setDprCap(e){this.dprCap=e,this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,this.dprCap)),this.resize()}get dpr(){return this.renderer.getPixelRatio()}resize(){let e=Math.max(1,window.innerWidth),t=Math.max(1,window.innerHeight);this.width=e,this.height=t,this.aspect=e/t,this.renderer.setSize(e,t,!1),this.camera.aspect=this.aspect,this.camera.updateProjectionMatrix();for(let e of this.onResize)e()}hideEmpty(){--this.instancedT<=0&&(this.instancedT=60,this.instanced.length=0,this.scene.traverse(e=>{e.isInstancedMesh&&this.instanced.push(e)}));for(let e of this.instanced)e.count===0?e.visible&&(e.visible=!1,e.userData.emptyHidden=!0):e.userData.emptyHidden&&(e.visible=!0,e.userData.emptyHidden=!1)}addUpdate(e){this.updaters.push(e)}step(e,t=1/60,n=!0){let r=e;for(;r>1e-6;){let e=Math.min(t,r);r-=e,this.time+=e;for(let t=0;t<this.updaters.length;t++)this.updaters[t](e)}n&&(this.hideEmpty(),this.renderer.render(this.scene,this.camera))}start(){if(this.running)return;this.running=!0,this.last=performance.now();let e=t=>{var n;requestAnimationFrame(e);let r=(t-this.last)/1e3;if(this.last=t,(n=this.onFrame)==null||n.call(this,r),r>.1&&(r=.1),!(r<=0)){this.frameMs+=(r*1e3-this.frameMs)*.05,this.fps=1e3/this.frameMs,this.paused&&(r=0),this.time+=r;for(let e=0;e<this.updaters.length;e++)this.updaters[e](r);this.hideEmpty(),this.renderer.render(this.scene,this.camera)}};requestAnimationFrame(e)}},Gf=class{constructor(e,t){this.x=0,this.y=0,this.active=!1,this.justPressed=!1,this.pointerId=-1,this.baseX=0,this.baseY=0,this.curX=0,this.curY=0,this.keys=new Set,this.enabled=!0,this.idleTime=0,this.onFirstInput=null,this.forced=null,this.radius=Math.max(44,Math.min(70,Math.min(window.innerWidth,window.innerHeight)*.12)),this.el=document.createElement(`div`),this.el.className=`joy`,this.knob=document.createElement(`div`),this.knob.className=`joy-knob`,this.el.appendChild(this.knob),t.appendChild(this.el),e.addEventListener(`pointerdown`,e=>this.down(e),{passive:!1}),window.addEventListener(`pointermove`,e=>this.move(e),{passive:!1}),window.addEventListener(`pointerup`,e=>this.up(e)),window.addEventListener(`pointercancel`,e=>this.up(e)),window.addEventListener(`blur`,()=>this.reset()),window.addEventListener(`keydown`,e=>{this.keys.add(e.code),this.fireFirst()}),window.addEventListener(`keyup`,e=>this.keys.delete(e.code))}uiScale(){var e;let t=parseFloat(((e=this.el.parentElement)==null?void 0:e.style.getPropertyValue(`--k`))||`1`);return t>0?t:1}fireFirst(){if(this.onFirstInput){let e=this.onFirstInput;this.onFirstInput=null,e()}}down(e){this.enabled&&this.pointerId===-1&&(e.preventDefault(),this.pointerId=e.pointerId,this.baseX=this.curX=e.clientX,this.baseY=this.curY=e.clientY,this.active=!0,this.justPressed=!0,this.el.style.display=`block`,this.el.style.transform=`translate(${this.baseX}px, ${this.baseY}px) scale(var(--k, 1))`,this.knob.style.transform=`translate(0px, 0px)`,this.fireFirst())}move(e){if(e.pointerId!==this.pointerId)return;e.preventDefault(),this.curX=e.clientX,this.curY=e.clientY;let t=this.curX-this.baseX,n=this.curY-this.baseY,r=Math.hypot(t,n),i=this.radius;if(r>i){let e=(r-i)/r;this.baseX+=t*e,this.baseY+=n*e,t=this.curX-this.baseX,n=this.curY-this.baseY,this.el.style.transform=`translate(${this.baseX}px, ${this.baseY}px) scale(var(--k, 1))`}this.knob.style.transform=`translate(${t/this.uiScale()}px, ${n/this.uiScale()}px)`}up(e){e.pointerId===this.pointerId&&this.reset()}reset(){this.pointerId=-1,this.active=!1,this.el.style.display=`none`}update(e){let t=0,n=0;if(this.active&&this.enabled){let e=this.curX-this.baseX,r=this.curY-this.baseY,i=Math.hypot(e,r),a=this.radius*.12;if(i>a){let o=Math.min(1,(i-a)/(this.radius*.55));t=e/i*o,n=-r/i*o}}if(this.enabled){let e=this.keys,r=0,i=0;if((e.has(`KeyA`)||e.has(`ArrowLeft`))&&--r,(e.has(`KeyD`)||e.has(`ArrowRight`))&&(r+=1),(e.has(`KeyW`)||e.has(`ArrowUp`))&&(i+=1),(e.has(`KeyS`)||e.has(`ArrowDown`))&&--i,r||i){let e=Math.hypot(r,i);t=r/e,n=i/e}}this.x=t,this.y=n,t||n?this.idleTime=0:this.idleTime+=e}endFrame(){this.justPressed=!1}applyForced(){this.forced&&(this.x=this.forced.x,this.y=this.forced.y,this.idleTime=0)}},Kf=class{constructor(e,t){this.ctx=null,this.buffers=new Map,this.muted=!1,this.hiddenMute=!1,this.adMute=!1,this.engine=null,this.saw=null,this.lastPlay=new Map,this.unlocked=!1,this.onUnlock=null,this.noiseBuf=null,this.engineOver=null,this.sawLow=null,this.talk=new hr(()=>this.ctx,()=>this.voiceBus),this.voiceQueue=[],this.voiceBus=null,this.base=e,this.files=t;let n=()=>{this.unlock()};window.addEventListener(`pointerdown`,n,{capture:!0}),window.addEventListener(`keydown`,n,{capture:!0}),document.addEventListener(`visibilitychange`,()=>{this.hiddenMute=document.visibilityState!==`visible`,this.applyGain(),this.ctx&&(this.hiddenMute?this.ctx.suspend().catch(()=>{}):this.unlocked&&this.ctx.resume().catch(()=>{}))})}unlock(){if(!this.ctx){try{let e=window.AudioContext||window.webkitAudioContext;this.ctx=new e({latencyHint:`interactive`})}catch{return}let e=this.ctx;this.master=e.createGain(),this.master.connect(e.destination),this.sfx=e.createGain(),this.sfx.gain.value=.9,this.sfx.connect(this.master),this.applyGain(),this.load(),this.startLoops(),this.makeVoiceBus(),this.loadQueuedVoices()}if(this.ctx.state!==`running`&&!this.hiddenMute&&this.ctx.resume().catch(()=>{}),!this.unlocked){var e;this.unlocked=!0,(e=this.onUnlock)==null||e.call(this)}}async load(){let e=this.ctx;await Promise.all(this.files.map(async t=>{try{let n=await(await fetch(this.base+t+`.mp3`)).arrayBuffer(),r=await e.decodeAudioData(n);this.buffers.set(t,r)}catch{}}))}setMuted(e){this.muted=e,this.applyGain()}setPaused(e){this.adMute=e,this.applyGain()}applyGain(){if(!this.ctx)return;let e=this.muted||this.hiddenMute||this.adMute?0:1;this.master.gain.setTargetAtTime(e,this.ctx.currentTime,.03)}play(e,t=1,n=1,r=.03){var i;let a=this.ctx;if(!a||this.muted)return;let o=this.buffers.get(e);if(!o)return;let s=a.currentTime;if(((i=this.lastPlay.get(e))==null?-1:i)+r>s)return;this.lastPlay.set(e,s);let c=a.createBufferSource();c.buffer=o,c.playbackRate.value=n;let l=a.createGain();l.gain.value=t,c.connect(l).connect(this.sfx),c.start()}playRandom(e,t,n=1,r=1,i=.04){let a=1+Math.floor(Math.random()*t);this.play(e+a,n,r*(.92+Math.random()*.16),i)}coin(e=0){var t;let n=this.ctx;if(!n||this.muted)return;let r=n.currentTime;if(((t=this.lastPlay.get(`coin`))==null?-1:t)+.035>r)return;this.lastPlay.set(`coin`,r);let i=1320*2**(Math.min(12,e%13)/24);for(let[e,t,a]of[[1,0,.16],[1.5,.045,.12]]){let o=n.createOscillator();o.type=`triangle`,o.frequency.value=i*e;let s=n.createGain();s.gain.setValueAtTime(0,r+t),s.gain.linearRampToValueAtTime(a,r+t+.005),s.gain.exponentialRampToValueAtTime(.001,r+t+.16),o.connect(s).connect(this.sfx),o.start(r+t),o.stop(r+t+.18)}}jingle(e=`win`){let t=this.ctx;if(!t||this.muted)return;let n=t.currentTime,r=e===`win`?[523,659,784,1047,784,1047,1319]:e===`unlock`?[392,523,659,784,1047]:[659,880,1175],i=e===`win`?.09:.07;r.forEach((a,o)=>{let s=t.createOscillator();s.type=o%2?`triangle`:`square`,s.frequency.value=a;let c=t.createGain(),l=n+o*i;c.gain.setValueAtTime(0,l),c.gain.linearRampToValueAtTime(e===`win`?.09:.07,l+.01),c.gain.exponentialRampToValueAtTime(.001,l+(o===r.length-1?.5:.16));let u=t.createBiquadFilter();u.type=`lowpass`,u.frequency.value=4e3,s.connect(u).connect(c).connect(this.sfx),s.start(l),s.stop(l+.6)})}bloom(){let e=this.ctx;if(!e||this.muted)return;let t=e.currentTime;[784,988,1175,1568,1976,2349].forEach((n,r)=>{let i=e.createOscillator();i.type=`sine`,i.frequency.value=n;let a=e.createGain(),o=t+r*.075;a.gain.setValueAtTime(0,o),a.gain.linearRampToValueAtTime(.055,o+.02),a.gain.exponentialRampToValueAtTime(.001,o+.9),i.connect(a).connect(this.sfx),i.start(o),i.stop(o+1)})}thud(e=.3){let t=this.ctx;if(!t||this.muted)return;let n=t.currentTime,r=t.createOscillator();r.type=`sine`,r.frequency.setValueAtTime(140,n),r.frequency.exponentialRampToValueAtTime(45,n+.18);let i=t.createGain();i.gain.setValueAtTime(e,n),i.gain.exponentialRampToValueAtTime(.001,n+.22),r.connect(i).connect(this.sfx),r.start(n),r.stop(n+.25)}noise(){if(this.noiseBuf)return this.noiseBuf;let e=this.ctx,t=e.sampleRate*2,n=e.createBuffer(1,t,e.sampleRate),r=n.getChannelData(0);for(let e=0;e<t;e++)r[e]=Math.random()*2-1;return this.noiseBuf=n,n}startLoops(){let e=this.ctx,t=e.createOscillator();t.type=`triangle`,t.frequency.value=48;let n=e.createOscillator();n.type=`sine`,n.frequency.value=24;let r=e.createOscillator();r.type=`sine`,r.frequency.value=96;let i=e.createGain();i.gain.value=.7;let a=e.createGain();a.gain.value=.18;let o=e.createBiquadFilter();o.type=`lowpass`,o.frequency.value=260,o.Q.value=.4;let s=e.createGain();s.gain.value=.8;let c=e.createOscillator();c.type=`sine`,c.frequency.value=7;let l=e.createGain();l.gain.value=.2,c.connect(l).connect(s.gain);let u=e.createGain();u.gain.value=0,t.connect(o),n.connect(i).connect(o),r.connect(a).connect(o),o.connect(s).connect(u).connect(this.sfx),t.start(),n.start(),r.start(),c.start(),this.engine={osc:t,osc2:n,gain:u,filter:o,lfo:c},this.engineOver=r;let d=e.createBufferSource();d.buffer=this.noise(),d.loop=!0;let f=e.createBiquadFilter();f.type=`bandpass`,f.frequency.value=1100,f.Q.value=.6;let p=e.createGain();p.gain.value=0,d.connect(f).connect(p).connect(this.sfx);let m=e.createBiquadFilter();m.type=`lowpass`,m.frequency.value=380;let h=e.createGain();h.gain.value=0,d.connect(m).connect(h).connect(this.sfx),d.start(),this.saw={src:d,gain:p,filter:f},this.sawLow=h}tok(e=.12){var t;let n=this.ctx;if(!n||this.muted)return;let r=n.currentTime;if(((t=this.lastPlay.get(`tok`))==null?-1:t)+.06>r)return;this.lastPlay.set(`tok`,r);let i=n.createOscillator();i.type=`sine`;let a=210+Math.random()*60;i.frequency.setValueAtTime(a,r),i.frequency.exponentialRampToValueAtTime(a*.55,r+.08);let o=n.createGain();o.gain.setValueAtTime(e,r),o.gain.exponentialRampToValueAtTime(.001,r+.11),i.connect(o).connect(this.sfx),i.start(r),i.stop(r+.12),this.burst(r,.025,2600,1.2,e*.5)}burst(e,t,n,r,i,a=.003,o=0){let s=this.ctx,c=s.createBufferSource();c.buffer=this.noise();let l=s.createBiquadFilter();l.type=`bandpass`,l.frequency.setValueAtTime(n,e),o>0&&l.frequency.exponentialRampToValueAtTime(o,e+t),l.Q.value=r;let u=s.createGain();u.gain.setValueAtTime(0,e),u.gain.linearRampToValueAtTime(i,e+a),u.gain.exponentialRampToValueAtTime(.001,e+t),c.connect(l).connect(u).connect(this.sfx),c.start(e,Math.random()*1.5),c.stop(e+t+.02)}rustle(e=.1){var t;let n=this.ctx;if(!n||this.muted)return;let r=n.currentTime;((t=this.lastPlay.get(`rustle`))==null?-1:t)+.12>r||(this.lastPlay.set(`rustle`,r),this.burst(r,.32,4200,.9,e,.04,2600),this.burst(r+.06,.22,5600,1.2,e*.6,.03))}flutter(e=.06){var t;let n=this.ctx;if(!n||this.muted)return;let r=n.currentTime;if(!(((t=this.lastPlay.get(`flutter`))==null?-1:t)+.15>r)){this.lastPlay.set(`flutter`,r);for(let t=0;t<4;t++)this.burst(r+t*.045,.05,1500+Math.random()*500,1.5,e*(1-t*.18),.008)}}whoosh(e=.08){var t;let n=this.ctx;if(!n||this.muted)return;let r=n.currentTime;((t=this.lastPlay.get(`whoosh`))==null?-1:t)+.05>r||(this.lastPlay.set(`whoosh`,r),this.burst(r,.2,700,1.4,e,.05,2400))}oof(e=1,t=.12,n=!1){var r;let i=this.ctx;if(!i||this.muted||t<.004)return;let a=i.currentTime;if(((r=this.lastPlay.get(`oof`))==null?-1:r)+.12>a)return;this.lastPlay.set(`oof`,a);let o=(150+Math.random()*40)*e,s=n?.42:.2,c=i.createOscillator();c.type=`triangle`,c.frequency.setValueAtTime(o*(n?1.25:1.1),a),c.frequency.exponentialRampToValueAtTime(o*(n?.7:.82),a+s);let l=i.createBiquadFilter();l.type=`lowpass`,l.frequency.value=650*Math.min(1.3,e),l.Q.value=.7;let u=i.createGain();u.gain.setValueAtTime(0,a),u.gain.linearRampToValueAtTime(t,a+.025),u.gain.setValueAtTime(t,a+s*.45),u.gain.exponentialRampToValueAtTime(.001,a+s),c.connect(l).connect(u).connect(this.sfx),c.start(a),c.stop(a+s+.02),this.thud(t*.8),n&&this.burst(a+.02,.32,600,1.2,t*.35,.05,1500)}woof(e=.08){var t;let n=this.ctx;if(!n||this.muted||e<.004)return;let r=n.currentTime;if(((t=this.lastPlay.get(`woof`))==null?-1:t)+.25>r)return;this.lastPlay.set(`woof`,r);let i=n.createOscillator();i.type=`sawtooth`,i.frequency.setValueAtTime(290+Math.random()*40,r),i.frequency.exponentialRampToValueAtTime(170,r+.11);let a=n.createBiquadFilter();a.type=`lowpass`,a.frequency.value=900;let o=n.createGain();o.gain.setValueAtTime(0,r),o.gain.linearRampToValueAtTime(e,r+.012),o.gain.exponentialRampToValueAtTime(.001,r+.13),i.connect(a).connect(o).connect(this.sfx),i.start(r),i.stop(r+.15),this.burst(r,.06,700,1,e*.4,.004)}fullHorn(e=.16){var t;let n=this.ctx;if(!n||this.muted)return;let r=n.currentTime;if(((t=this.lastPlay.get(`full`))==null?-9:t)+1.2>r)return;this.lastPlay.set(`full`,r),this.thud(e*2.2),this.play(`terrainblockcrush`,e*3,.62,.05);let i=(t,r)=>{let i=n.createGain();i.gain.setValueAtTime(0,t),i.gain.linearRampToValueAtTime(e,t+.02),i.gain.setValueAtTime(e,t+r-.05),i.gain.exponentialRampToValueAtTime(.001,t+r);let a=n.createBiquadFilter();a.type=`lowpass`,a.frequency.value=1500,a.Q.value=1.2,a.connect(i).connect(this.sfx);for(let e of[349,440]){let i=n.createOscillator();i.type=`square`,i.frequency.setValueAtTime(e*.97,t),i.frequency.linearRampToValueAtTime(e,t+.05);let o=n.createGain();o.gain.value=.5,i.connect(o).connect(a),i.start(t),i.stop(t+r+.02)}};i(r+.1,.16),i(r+.34,.34)}toot(e=.07){let t=this.ctx;if(!t||this.muted||e<.004)return;let n=t.currentTime;for(let[r,i]of[[0,.09],[.14,.14]]){let a=t.createGain();a.gain.setValueAtTime(0,n+r),a.gain.linearRampToValueAtTime(e,n+r+.012),a.gain.setValueAtTime(e,n+r+i-.03),a.gain.exponentialRampToValueAtTime(.001,n+r+i);let o=t.createBiquadFilter();o.type=`lowpass`,o.frequency.value=2200,o.connect(a).connect(this.sfx);for(let e of[523,659]){let a=t.createOscillator();a.type=`square`,a.frequency.value=e;let s=t.createGain();s.gain.value=.5,a.connect(s).connect(o),a.start(n+r),a.stop(n+r+i+.02)}}}warmVoices(e){for(let t of e)this.voiceQueue.some(e=>e.voice===t.voice)||this.voiceQueue.push(t);this.ctx&&this.loadQueuedVoices()}loadQueuedVoices(){let e=()=>{let t=this.voiceQueue.shift();t&&this.talk.load(t.voice).then(()=>setTimeout(e,30))};setTimeout(e,200)}makeVoiceBus(){let e=this.ctx,t=e.createGain(),n=e.createBiquadFilter();n.type=`lowpass`,n.frequency.value=8e3,n.Q.value=.5,t.connect(n).connect(this.sfx);for(let[n,r]of[[.019,.1],[.034,.06]]){let i=e.createDelay(.1);i.delayTime.value=n;let a=e.createBiquadFilter();a.type=`lowpass`,a.frequency.value=2200;let o=e.createGain();o.gain.value=r,t.connect(i).connect(a).connect(o).connect(this.sfx)}this.voiceBus=t}talkStart(e,t,n){this.ctx&&!this.muted&&this.talk.start(e,t,n)}talkLevel(){return this.ctx&&!this.muted?this.talk.level():-1}talkTypedOut(){this.talk.typedOut()}talkStop(){this.talk.stop()}hello(e,t=1){var n;let r=this.ctx;if(!r||this.muted)return;let i=r.currentTime;((n=this.lastPlay.get(`hello`))==null?-1:n)+1.2>i||(this.lastPlay.set(`hello`,i),this.talk.bark(e,t))}step(e=.04){let t=this.ctx;if(!t||this.muted)return;let n=t.currentTime;this.burst(n,.06,330+Math.random()*140,.8,e,.004),this.burst(n,.025,2200+Math.random()*600,1.5,e*.25,.002)}cheer(e=.06){var t;let n=this.ctx;if(!n||this.muted)return;let r=n.currentTime;if(!(((t=this.lastPlay.get(`cheer`))==null?-1:t)+.8>r)){this.lastPlay.set(`cheer`,r);for(let t=0;t<6;t++)this.burst(r+t*.11+Math.random()*.04,.06,1800+Math.random()*900,1.1,e,.002)}}knock(e,t,n,r){let i=this.ctx,a=i.createOscillator();a.type=`sine`,a.frequency.setValueAtTime(t,e),a.frequency.exponentialRampToValueAtTime(t*.58,e+n);let o=i.createGain();o.gain.setValueAtTime(0,e),o.gain.linearRampToValueAtTime(r,e+.004),o.gain.exponentialRampToValueAtTime(8e-4,e+n),a.connect(o).connect(this.sfx),a.start(e),a.stop(e+n+.02)}ping(e,t,n,r){let i=this.ctx;for(let[a,o]of[[1,1],[2.4,.35]]){let s=i.createOscillator();s.type=`sine`,s.frequency.value=t*a;let c=i.createGain();c.gain.setValueAtTime(0,e),c.gain.linearRampToValueAtTime(r*o,e+.003),c.gain.exponentialRampToValueAtTime(6e-4,e+n*(a>1?.6:1)),s.connect(c).connect(this.sfx),s.start(e),s.stop(e+n+.02)}}part(e,t=.1){let n=this.ctx;if(!n||this.muted||t<.004)return;let r=n.currentTime;if(e===`heavy`)this.knock(r,150,.17,t*1.3),this.ping(r+.006,1150+Math.random()*250,.22,t*.22);else if(e===`screw`){for(let e=0;e<6;e++)this.burst(r+e*.034,.02,1700+e*150,3,t*.45,.002);this.ping(r+.22,1600,.14,t*.18)}else e===`door`?(this.knock(r,105,.22,t*1.5),this.burst(r,.05,850,1.2,t*.35,.003)):e===`click`?(this.ping(r,900+Math.random()*180,.08,t*.35),this.burst(r,.018,3e3,2,t*.25,.001)):this.burst(r,.5,3600,.7,t*.4,.08,2300)}tada(e=.06){let t=this.ctx;if(!t||this.muted||e<.004)return;let n=t.currentTime;[[784,0],[1175,.11]].forEach(([r,i])=>{let a=t.createOscillator();a.type=`triangle`,a.frequency.value=r;let o=t.createGain();o.gain.setValueAtTime(0,n+i),o.gain.linearRampToValueAtTime(e,n+i+.01),o.gain.exponentialRampToValueAtTime(8e-4,n+i+.5);let s=t.createBiquadFilter();s.type=`lowpass`,s.frequency.value=3e3,a.connect(s).connect(o).connect(this.sfx),a.start(n+i),a.stop(n+i+.55)})}clang(e=.11){let t=this.ctx;if(!t||this.muted)return;let n=t.currentTime;for(let[r,i,a]of[[1,1,1.15],[2.76,.5,.75],[5.4,.26,.45],[8.93,.12,.28]]){let o=t.createOscillator();o.type=`sine`,o.frequency.value=330*r;let s=t.createGain();s.gain.setValueAtTime(0,n),s.gain.linearRampToValueAtTime(e*i,n+.004),s.gain.exponentialRampToValueAtTime(6e-4,n+a),o.connect(s).connect(this.sfx),o.start(n),o.stop(n+a+.05)}this.knock(n,125,.24,e*1.5),this.burst(n,.38,6200,1.1,e*.3,.004,2600)}updateLoops(e,t,n=1){var r,i;let a=this.ctx;if(!a||!this.engine||!this.saw)return;let o=a.currentTime,s=this.engine,c=44+e*26+t*5;s.osc.frequency.setTargetAtTime(c,o,.12),s.osc2.frequency.setTargetAtTime(c/2,o,.12),(r=this.engineOver)==null||r.frequency.setTargetAtTime(c*2,o,.12),s.filter.frequency.setTargetAtTime(220+e*240+t*90,o,.15),s.gain.gain.setTargetAtTime((.03+e*.03+t*.012)*n,o,.15),s.lfo.frequency.setTargetAtTime(6+e*7,o,.15);let l=this.saw;l.gain.gain.setTargetAtTime(t*.04,o,.06),l.filter.frequency.setTargetAtTime(950+t*450,o,.08),(i=this.sawLow)==null||i.gain.setTargetAtTime(t*.085,o,.06)}},qf=`scrapyard_saw_v1`;function Jf(){return{v:4,coins:0,yard:1,lv:{saw:1,bed:1,engine:1},cargo:0,cargoColor:`#e8742c`,cargoValue:5,field:null,tut:0,muted:!1,factory:!1,lot:!1,factoryPaid:0,lotPaid:0,ingots:0,carsReady:0,cash:0,earned:0,goalShown:!1,firstPlay:Date.now(),bigsDone:[],drops:[],plotsDone:[],yardRewarded:!1,visionSeen:!1,beats:[],ruinsGone:[]}}function Yf(){try{var e;if(new URLSearchParams(location.search).has(`fresh`))return Jf();let t=localStorage.getItem(qf);if(!t)return Jf();let n=JSON.parse(t),r={...Jf(),...n,lv:{...Jf().lv,...n.lv||{}}};return((e=n.v)==null?1:e)<4&&(r.field=null,r.bigsDone=[],r.drops=[],r.plotsDone=[],r.yardRewarded=!1,r.ruinsGone=[],r.v=4),r}catch{return Jf()}}function Xf(e){try{localStorage.setItem(qf,JSON.stringify(e))}catch{}}var Zf=7.5,K={bg:`#4a3f36`,bagBlack:`#383b43`,bagBlue:`#3d73c6`,bagWhite:`#e6e3dc`,bagGreen:`#4f8a3f`,bagYellow:`#e9c440`,cardboard:`#c29155`,cardboard2:`#a97a43`,tape:`#e6c483`,paper:`#eeeae0`,newsprint:`#d8d5cc`,bottleGreen:`#3f9c55`,bottleBrown:`#9c5f2b`,bottlePet:`#93cde6`,capRed:`#d9433a`,capBlue:`#2f6fd0`,canRed:`#d8403a`,canYellow:`#eab236`,canBlue:`#3572cb`,canGreen:`#3a9a5b`,silver:`#c8cdd4`,tire:`#2b2d31`,tireHub:`#6a6f77`,wood:`#a9773f`,wood2:`#8b6134`,woodGrain:`#6d4726`,metal:`#98a2ad`,rust:`#b3622d`,banana:`#f2cf3a`,apple:`#d9423a`,lettuce:`#7cc24d`,orange:`#ea8a2e`,pink:`#e77aa6`,purple:`#8a64b8`},Qf=null;function $f(){return Qf||(Qf=ep(1024)),Qf}function ep(e=1024){let t=document.createElement(`canvas`);t.width=t.height=e;let n=t.getContext(`2d`),r=new Wt(20260929),i=e/Zf;n.fillStyle=K.bg,n.fillRect(0,0,e,e);let a=()=>r.next(),o=e=>e[Math.floor(a()*e.length)],s=(t,r,i,a)=>{for(let o of[-e,0,e])for(let s of[-e,0,e]){let c=t+o,l=r+s;c<-i||c>e+i||l<-i||l>e+i||(n.save(),n.translate(c,l),a(),n.restore())}},c=(e,t,r,i,a=.35)=>{n.save(),n.translate(t*.06+2,r*.08+3),n.fillStyle=`rgba(12,8,4,0.42)`,n.fill(e),n.restore(),n.fillStyle=i,n.fill(e);let o=n.createLinearGradient(-t/2,-r/2,t/2,r/2);o.addColorStop(0,`rgba(255,255,255,0.26)`),o.addColorStop(.45,`rgba(255,255,255,0.0)`),o.addColorStop(1,`rgba(0,0,0,0.26)`),n.fillStyle=o,n.fill(e),n.lineWidth=Math.max(1.5,Math.min(t,r)*.06),n.strokeStyle=`rgba(20,14,10,${a})`,n.stroke(e)},l=(e,t,n,r)=>{let i=new Path2D,o=n*2,s=[];for(let n=0;n<o;n++){let i=n/o*Math.PI*2,c=1+(n%2?r*(.4+a()*.6):-r*a()*.5);s.push([Math.cos(i)*e*c,Math.sin(i)*t*c])}let c=(e,t)=>[(e[0]+t[0])/2,(e[1]+t[1])/2],l=c(s[o-1],s[0]);i.moveTo(l[0],l[1]);for(let e=0;e<o;e++){let t=s[e],n=s[(e+1)%o],r=c(t,n);i.quadraticCurveTo(t[0],t[1],r[0],r[1])}return i.closePath(),i},u=(e,t,n,r,i)=>{let a=new Path2D;return a.roundRect(e,t,n,r,i),a},d=(e,t)=>{let r=e*.5,i=e*.42,a=l(r,i,5,.12);c(a,e,e*.84,t,.4),n.fillStyle=t,n.strokeStyle=`rgba(20,14,10,0.4)`,n.lineWidth=Math.max(1.2,e*.03);let o=new Path2D;o.moveTo(r*.92,0),o.lineTo(r*1.3,-i*.32),o.lineTo(r*1.22,0),o.lineTo(r*1.3,i*.32),o.closePath(),n.fill(o),n.stroke(o),n.strokeStyle=`rgba(255,255,255,0.4)`,n.lineWidth=Math.max(1.2,e*.035),n.beginPath(),n.arc(-r*.15,-i*.1,r*.55,Math.PI*1.05,Math.PI*1.45),n.stroke(),n.strokeStyle=`rgba(0,0,0,0.22)`,n.beginPath(),n.moveTo(r*.85,0),n.quadraticCurveTo(r*.3,i*.25,-r*.2,i*.45),n.moveTo(r*.85,0),n.quadraticCurveTo(r*.35,-i*.15,-r*.1,-i*.55),n.stroke()},f=(e,t,r,i)=>{let a=e*.3,o=new Path2D;o.roundRect(-e*.5,-a/2,e*.7,a,a*.4),o.moveTo(e*.18,-a/2),o.lineTo(e*.36,-a*.22),o.lineTo(e*.36,a*.22),o.lineTo(e*.18,a/2),o.closePath(),c(o,e,a,t,.4),i&&(n.fillStyle=i,n.fillRect(-e*.3,-a/2+1,e*.26,a-2)),n.fillStyle=r,n.fillRect(e*.35,-a*.24,e*.13,a*.48),n.fillStyle=`rgba(255,255,255,0.55)`,n.fillRect(-e*.44,-a*.3,e*.55,Math.max(1.5,a*.12))},p=(e,t,r)=>{let i=e*.56,a;r?(a=new Path2D,a.moveTo(-e/2,-i/2),a.lineTo(-e*.15,-i*.3),a.lineTo(e*.1,-i*.55),a.lineTo(e/2,-i/2),a.lineTo(e/2,i/2),a.lineTo(e*.05,i*.3),a.lineTo(-e*.2,i*.55),a.lineTo(-e/2,i/2),a.closePath()):a=u(-e/2,-i/2,e,i,i*.2),c(a,e,i,t,.4),n.fillStyle=K.silver,n.fillRect(-e/2,-i/2+1,e*.1,i-2),n.fillRect(e*.4,-i/2+1,e*.1,i-2),n.fillStyle=`rgba(255,255,255,0.75)`,n.fillRect(-e*.2,-i*.12,e*.4,i*.22),n.fillStyle=`rgba(255,255,255,0.45)`,n.fillRect(-e*.38,-i*.38,e*.7,Math.max(1.2,i*.1))},m=(e,t,r,i)=>{let o=u(-e/2,-t/2,e,t,Math.min(e,t)*.06);if(c(o,e,t,r,.38),i){n.fillStyle=`rgba(40,24,10,0.55)`,n.fillRect(-e*.4,-t*.38,e*.8,t*.76),n.fillStyle=r,n.strokeStyle=`rgba(20,14,10,0.35)`,n.lineWidth=1.5;for(let[r,i,a,o]of[[-e*.5,-t*.72,e,t*.24],[-e*.5,t*.48,e,t*.24]])n.fillRect(r,i,a,o),n.strokeRect(r,i,a,o)}else n.fillStyle=K.tape,n.fillRect(-e/2+1,-t*.07,e-2,t*.14),n.strokeStyle=`rgba(40,24,10,0.3)`,n.lineWidth=1.5,n.beginPath(),n.moveTo(0,-t/2+2),n.lineTo(0,t/2-2),n.stroke(),a()<.5&&(n.fillStyle=`rgba(60,35,15,0.45)`,n.beginPath(),n.moveTo(-e*.3,t*.3),n.lineTo(-e*.22,t*.18),n.lineTo(-e*.14,t*.3),n.fill())},h=e=>{let t=l(e,e*.8,4,.3);c(t,e*2,e*1.6,K.paper,.3),n.strokeStyle=`rgba(80,70,60,0.28)`,n.lineWidth=1.2,n.beginPath();for(let t=0;t<3;t++){let t=a()*Math.PI*2;n.moveTo(0,0),n.lineTo(Math.cos(t)*e*.8,Math.sin(t)*e*.6)}n.stroke()},g=(e,t)=>{let r=new Path2D;r.moveTo(-e/2,-t/2),r.lineTo(e/2,-t/2),r.lineTo(e/2,t/2-t*.2),r.lineTo(e/2-t*.2,t/2),r.lineTo(-e/2,t/2),r.closePath(),c(r,e,t,K.newsprint,.3),n.fillStyle=`rgba(60,60,60,0.55)`,n.fillRect(-e*.42,-t*.38,e*.84,t*.12),n.fillStyle=`rgba(80,80,80,0.35)`;for(let r=0;r<5;r++)n.fillRect(-e*.42,-t*.15+r*t*.1,e*(.4+a()*.4),Math.max(1,t*.035));n.fillStyle=`rgba(200,70,60,0.5)`,n.fillRect(e*.08,-t*.15,e*.32,t*.28)},_=e=>{let t=new Path2D;t.arc(0,0,e,0,Math.PI*2),t.moveTo(e*.46,0),t.arc(0,0,e*.46,0,Math.PI*2,!0),c(t,e*2,e*2,K.tire,.55),n.strokeStyle=`rgba(0,0,0,0.5)`,n.lineWidth=Math.max(1.5,e*.07),n.beginPath();for(let t=0;t<14;t++){let r=t/14*Math.PI*2;n.moveTo(Math.cos(r)*e*.8,Math.sin(r)*e*.8),n.lineTo(Math.cos(r)*e*.98,Math.sin(r)*e*.98)}n.stroke(),n.strokeStyle=`rgba(255,255,255,0.18)`,n.lineWidth=Math.max(1.5,e*.08),n.beginPath(),n.arc(0,0,e*.72,Math.PI*1.1,Math.PI*1.6),n.stroke(),n.strokeStyle=K.tireHub,n.lineWidth=Math.max(1.5,e*.1),n.beginPath(),n.arc(0,0,e*.5,0,Math.PI*2),n.stroke()},v=(e,t,r)=>{let i=u(-e/2,-t/2,e,t,t*.12);c(i,e,t,r,.4),n.strokeStyle=`rgba(70,40,15,0.45)`,n.lineWidth=Math.max(1,t*.06),n.beginPath();for(let r=0;r<3;r++){let i=-t*.28+r*t*.28;n.moveTo(-e*.46,i),n.bezierCurveTo(-e*.15,i+t*.08,e*.15,i-t*.08,e*.46,i)}n.stroke(),n.fillStyle=`#7d8590`;for(let r of[-e*.4,e*.4])n.beginPath(),n.arc(r,0,Math.max(1.5,t*.1),0,Math.PI*2),n.fill()},y=e=>{let t=u(-e/2,-e/2,e,e,e*.05);c(t,e,e,`#e4cb97`,.35),n.fillStyle=`#d9433a`,n.beginPath(),n.arc(0,0,e*.22,0,Math.PI*2),n.fill(),n.fillStyle=`#fff3d6`,n.beginPath(),n.arc(0,0,e*.11,0,Math.PI*2),n.fill()},b=e=>{let t=new Path2D;for(let n=0;n<3;n++){let r=n/3*Math.PI*2;t.moveTo(0,0),t.quadraticCurveTo(Math.cos(r-.5)*e*.6,Math.sin(r-.5)*e*.6,Math.cos(r)*e,Math.sin(r)*e),t.quadraticCurveTo(Math.cos(r+.5)*e*.6,Math.sin(r+.5)*e*.6,0,0)}c(t,e*2,e*2,K.banana,.4),n.fillStyle=`#6b4a1e`,n.beginPath(),n.arc(0,0,e*.14,0,Math.PI*2),n.fill()},x=e=>{let t=new Path2D;t.ellipse(0,0,e*.3,e*.5,0,0,Math.PI*2),c(t,e,e,`#f3e7c4`,.35),n.fillStyle=K.apple,n.beginPath(),n.ellipse(0,-e*.42,e*.42,e*.16,0,0,Math.PI*2),n.ellipse(0,e*.42,e*.42,e*.16,0,0,Math.PI*2),n.fill()},S=(e,t)=>{let r=new Path2D;r.moveTo(-e/2,-t/2),r.lineTo(e/2,-t/2+t*.1),r.lineTo(e/2-e*.08,t/2),r.lineTo(-e/2+e*.1,t/2-t*.12),r.closePath(),c(r,e,t,o([K.metal,`#7fa7c9`,`#c9c3b5`]),.45),n.fillStyle=`rgba(179,98,45,0.55)`,n.beginPath(),n.ellipse(e*.1,t*.1,e*.18,t*.14,a(),0,Math.PI*2),n.fill(),n.fillStyle=`rgba(255,255,255,0.4)`,n.fillRect(-e*.4,-t*.3,e*.5,Math.max(1.2,t*.05))},C=(e,t)=>{n.strokeStyle=`rgba(12,8,4,0.4)`,n.lineWidth=Math.max(2,e*.07);let r=()=>{n.beginPath(),n.moveTo(-e/2,0),n.bezierCurveTo(-e*.2,-e*.4,e*.1,e*.4,e/2,0),n.stroke()};n.save(),n.translate(2,3),r(),n.restore(),n.strokeStyle=t,n.lineWidth=Math.max(1.5,e*.05),r()},w=(t,r,o)=>{for(let c=0;c<t;c++){let t=a()*e,c=a()*e,l=a()*Math.PI*2,u=o*i*(.8+a()*.45);s(t,c,u,()=>{n.rotate(l),r(u)})}},T=Zf*Zf;w(Math.round(T*1.3),e=>m(e,e*(.6+a()*.3),o([K.cardboard2,`#8f7358`,`#7d6a57`]),a()<.3),.55),w(Math.round(T*1.1),e=>d(e,o([K.bagBlack,`#4b4f58`,`#5a5048`])),.62),w(Math.round(T*.5),e=>v(e,e*.18,o([K.wood2,`#7b5a3c`])),1),w(Math.round(T*.5),e=>S(e,e*.7),.5),w(Math.round(T*1.2),e=>d(e,o([K.bagBlack,K.bagBlack,K.bagBlue,K.bagWhite,K.bagGreen,K.bagYellow])),.52),w(Math.round(T*.8),e=>m(e,e*(.62+a()*.3),o([K.cardboard,K.cardboard2]),a()<.35),.42),w(Math.round(T*.45),e=>_(e*.5),.62),w(Math.round(T*.35),e=>v(e,e*.17,o([K.wood,K.wood2])),.95),w(Math.round(T*.22),e=>g(e,e*.78),.34),w(Math.round(T*.25),e=>y(e),.36),w(Math.round(T*.8),e=>f(e,o([K.bottleGreen,K.bottleBrown,K.bottlePet,K.bottlePet]),o([K.capRed,K.capBlue,`#ffffff`]),a()<.5?o([`#ffffff`,K.capRed,K.canYellow]):null),.3),w(Math.round(T*.7),e=>p(e,o([K.canRed,K.canYellow,K.canBlue,K.canGreen,K.silver]),a()<.4),.2),w(Math.round(T*.25),e=>h(e*.5),.26),w(Math.round(T*.3),e=>a()<.5?b(e*.5):x(e),.18),w(Math.round(T*.3),e=>C(e,o([`#d9433a`,`#2f6fd0`,`#2b2d31`,K.canYellow])),.5);for(let t=0;t<26;t++){let t=a()*e,r=a()*e,o=(.8+a()*1.6)*i,c=a()<.6;s(t,r,o,()=>{let e=n.createRadialGradient(0,0,0,0,0,o);e.addColorStop(0,c?`rgba(30,20,10,0.22)`:`rgba(255,245,225,0.12)`),e.addColorStop(1,`rgba(0,0,0,0)`),n.fillStyle=e,n.fillRect(-o,-o,o*2,o*2)})}let E=new $t(t);return E.wrapS=E.wrapT=je,E.colorSpace=ee,E.anisotropy=4,E.generateMipmaps=!0,E.minFilter=wn,E.magFilter=dn,E}function tp(e){let t=document.createElement(`canvas`);return t.width=t.height=e,{cv:t,g:t.getContext(`2d`)}}function np(e){let t=new $t(e);return t.wrapS=t.wrapT=je,t.colorSpace=``,t.anisotropy=4,t}function rp(e,t,n=.08,r=.1){let{cv:i,g:a}=tp(256),o=new Wt(e);a.fillStyle=`rgb(128,128,128)`,a.fillRect(0,0,256,256);let s=(e,t,n,r)=>{for(let i of[-256,0,256])for(let a of[-256,0,256]){let o=t+i,s=n+a;o<-r||o>256+r||s<-r||s>256+r||e(o,s)}};for(let e=0;e<40;e++){let e=o.next()*256,t=o.next()*256,r=20+o.next()*50,i=o.next()<.5,c=n*(.5+o.next());s((e,t)=>{let n=a.createRadialGradient(e,t,0,e,t,r),o=i?`255,255,255`:`0,0,0`;n.addColorStop(0,`rgba(${o},${c})`),n.addColorStop(1,`rgba(${o},0)`),a.fillStyle=n,a.fillRect(e-r,t-r,r*2,r*2)},e,t,r)}for(let e=0;e<t;e++){let e=o.next()*256,t=o.next()*256,n=.8+o.next()*1.8;a.fillStyle=o.next()<.6?`rgba(0,0,0,${r+o.next()*r})`:`rgba(255,255,255,${.08+o.next()*.1})`,s((e,t)=>{a.beginPath(),a.ellipse(e,t,n*1.3,n,o.next()*3,0,Math.PI*2),a.fill()},e,t,4)}return np(i)}function ip(e=3,t=128,n=8){let r=new Uint8Array(t*t*4),i=new Wt(e),a=[];for(let e=0;e<n*n;e++)a.push(i.next());let o=(e,t)=>a[(t+n)%n*n+(e+n)%n];for(let e=0;e<t;e++)for(let i=0;i<t;i++){let a=i/t*n,s=e/t*n,c=Math.floor(a),l=Math.floor(s),u=a-c,d=s-l,f=u*u*(3-2*u),p=d*d*(3-2*d),m=o(c,l),h=o(c+1,l),g=o(c,l+1),_=o(c+1,l+1),v=m+(h-m)*f+(g-m)*p+(m-h-g+_)*f*p,y=(e*t+i)*4;r[y]=r[y+1]=r[y+2]=Math.round(v*255),r[y+3]=255}let s=new Gn(r,t,t,ge,Dt);return s.wrapS=s.wrapT=je,s.magFilter=dn,s.minFilter=wn,s.generateMipmaps=!0,s.colorSpace=``,s.needsUpdate=!0,s}function ap(){let{cv:e,g:t}=tp(256),n=new Wt(5);t.fillStyle=`rgb(128,128,128)`,t.fillRect(0,0,256,256);for(let e=0;e<900;e++){let e=n.next()<.5?0:255;t.fillStyle=`rgba(${e},${e},${e},${.03+n.next()*.04})`,t.fillRect(n.next()*256,n.next()*256,1+n.next()*3,1+n.next()*3)}return t.strokeStyle=`rgba(0,0,0,0.16)`,t.lineWidth=2,t.strokeRect(1,1,254,254),t.strokeStyle=`rgba(255,255,255,0.12)`,t.lineWidth=1,t.strokeRect(3,3,250,250),np(e)}function op(e,t,n,r=1){let i=new Wn({color:e}),a={uDet:{value:t},uDetScale:{value:n},uDetStr:{value:r}};return i.onBeforeCompile=e=>{Object.assign(e.uniforms,a),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
varying vec2 vDetUv;
uniform float uDetScale;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
vDetUv = (modelMatrix * vec4(transformed, 1.0)).xz * uDetScale;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying vec2 vDetUv;
uniform sampler2D uDet;
uniform float uDetStr;`).replace(`#include <color_fragment>`,`#include <color_fragment>
diffuseColor.rgb *= mix(1.0, texture2D(uDet, vDetUv).r * 2.0, uDetStr);`)},i.customProgramCacheKey=()=>`worlddetail`,i}var sp=32,cp=3.6,lp=1e6,up=.08,dp=[[1,1,1,0],[.62,.64,.7,0],[1.1,.95,.78,0],[.94,1.02,1.14,0],[1,1.05,1.14,1],[1.14,1.13,1.1,0],[1.08,1.02,.94,0],[.86,.9,.98,.5],[.9,1.04,1.06,0]],fp=class{constructor(e,t){this.ci=e,this.cj=t,this.dirty=!1,this.active=!1}},pp=class{constructor(e,t,n,r,i=.25){this.width=n,this.depth=r,this.cs=i,this.group=new B,this.heaps=[],this.zoneTotal=new Float32Array,this.zoneCleared=new Float32Array,this.totalJunk=0,this.clearedJunk=0,this.totalVolume=0,this.bounds={minX:0,maxX:0,minZ:0,maxZ:0},this.time=0,this.noShadows=!1,this.chunks=[],this.dirtyList=[],this.heapVolTmp=new Float32Array(32),this.zoneBox=[],this.x0=e,this.z0=t,this.cx=Math.ceil(n/i/sp),this.cz=Math.ceil(r/i/sp),this.nx=this.cx*sp+1,this.nz=this.cz*sp+1;let a=this.nx*this.nz;this.h=new Float32Array(a),this.h0=new Float32Array(a),this.owner=new Uint8Array(a),this.zone=new Uint8Array(a),this.patch=new Float32Array(a),this.clearT=new Float32Array(a),this.done=new Uint8Array(a),this.tint=new Float32Array(a*4),this.gy=new Float32Array(a),this.cellArea=i*i,this.material=wp();let o=new Uint16Array(6144),s=0;for(let e=0;e<sp;e++)for(let t=0;t<sp;t++){let n=e*33+t,r=n+1,i=n+33,a=i+1;t+e&1?(o[s++]=n,o[s++]=i,o[s++]=r,o[s++]=r,o[s++]=i,o[s++]=a):(o[s++]=n,o[s++]=i,o[s++]=a,o[s++]=n,o[s++]=a,o[s++]=r)}this.index=new fn(o,1);for(let e=0;e<this.cz;e++)for(let t=0;t<this.cx;t++)this.chunks.push(new fp(t,e))}get progress(){return this.totalJunk>0?this.clearedJunk/this.totalJunk:1}zoneProgress(e){let t=this.zoneTotal[e];return t>0?this.zoneCleared[e]/t:1}generate(e){this.heaps=e.mounds,this.bounds={...e.bounds},this.x0=e.bounds.minX,this.z0=e.bounds.minZ;let{nx:t,nz:n,cs:r,x0:i,z0:a,h:o,h0:s,owner:c,patch:l,zone:u,tint:d,gy:f}=this,p=e.bounds;o.fill(0),c.fill(0),u.fill(255),f.fill(0);let m=e.plots.map(e=>e.mix),h=e.plan,g=Math.abs(r-h.cs)<1e-6&&Math.abs(i-h.rect.minX)<1e-6&&Math.abs(a-h.rect.minZ)<1e-6,_=e.carpet;for(let e=0;e<n;e++)for(let n=0;n<t;n++){let s=i+n*r,l=a+e*r;if(s<p.minX-.001||s>p.maxX+.001||l<p.minZ-.001||l>p.maxZ+.001)continue;let d=e*t+n;if(f[d]=R(s,l),u[d]=g&&n<h.nx&&e<h.nz?h.zone[e*h.nx+n]:Kn(h,s,l),It(s,l)<.3)continue;let m=_.base+(Ce(s*.16+_.seed,l*.16,_.seed,3)-.5)*2*_.vary,v=Ce(s*.42,l*.42+_.seed,_.seed+5,2);m+=Math.max(0,v-.6)*1.6;let y=hp(s*1.6,l*1.6,_.seed);m+=(y.h-.5)*.07+y.edge*.02,o[d]=Math.max(.14,m),c[d]=255}for(let s=0;s<e.mounds.length;s++){var v;let l=e.mounds[s],u=Math.cos(l.rot),d=Math.sin(l.rot),f=Math.max(l.rx,l.rz)*1.35,p=Math.max(0,Math.floor((l.x-f-i)/r)),m=Math.min(t-1,Math.ceil((l.x+f-i)/r)),h=Math.max(0,Math.floor((l.z-f-a)/r)),g=Math.min(n-1,Math.ceil((l.z+f-a)/r)),_=(v=l.lumpy)==null?.5:v;for(let e=h;e<=g;e++)for(let n=p;n<=m;n++){let f=e*t+n;if(!c[f])continue;let p=i+n*r,m=a+e*r,h=p-l.x,g=m-l.z,v=(h*u+g*d)/l.rx,y=(-h*d+g*u)/l.rz;if(l.shape===`twin`){let e=(v-.42)/.62,t=(v+.42)/.62;v=Math.abs(e)<Math.abs(t)?e:t}let b=Math.atan2(y,v),x=1+(Me(Math.cos(b)*1.3+l.seed,Math.sin(b)*1.3,l.seed)-.5)*.45,S=Math.sqrt(v*v+y*y)/x;if(S>=1)continue;let C=1-S,w=1-S*S,T=C*.45+w*.55;T*=.75+.25*Math.min(1,T*2.2);let E=Ce(p*.28+l.seed*3.1,m*.28,l.seed,3);T*=1-_*.28+_*.56*E;let D=hp(p*1.25,m*1.25,l.seed),O=Math.min(1,(1-S)*3),k=l.height*T+((D.h-.5)*.18+D.edge*.05)*O;k>o[f]&&(o[f]=k,c[f]=s+1)}}this.totalJunk=0,this.totalVolume=0;let y=e.plots.length;this.zoneTotal=new Float32Array(y),this.zoneCleared=new Float32Array(y),this.zoneBox=e.plots.map(()=>({i0:t,i1:0,j0:n,j1:0}));for(let e=0;e<n;e++)for(let n=0;n<t;n++){var b,x;let f=e*t+n;s[f]=o[f];let p=i+n*r,h=a+e*r;l[f]=hp(p*1.25,h*1.25,7).id,this.done[f]=0,this.clearT[f]=o[f]>0?lp:-1e3;let g=c[f],_=(x=dp[g===0?0:g===255?(b=m[u[f]])==null?0:b:this.heaps[g-1].mix])==null?dp[0]:x,v=g===255?.45:1;if(d[f*4]=1+(_[0]-1)*v,d[f*4+1]=1+(_[1]-1)*v,d[f*4+2]=1+(_[2]-1)*v,d[f*4+3]=_[3]*v,g){let t=this.weight(f);this.totalJunk+=t,this.totalVolume+=o[f]*this.cellArea;let r=u[f];if(r!==255){this.zoneTotal[r]+=t;let i=this.zoneBox[r];n<i.i0&&(i.i0=n),n>i.i1&&(i.i1=n),e<i.j0&&(i.j0=e),e>i.j1&&(i.j1=e)}}}this.clearedJunk=0,this.heapVolTmp.length<e.mounds.length+1&&(this.heapVolTmp=new Float32Array(e.mounds.length+8)),this.setBoundsUniforms(e),this.buildAll()}weight(e){return 1+.5*this.h0[e]}setBoundsUniforms(e){this.material.userData.uniforms.uBounds.value.set(e.bounds.minX,e.bounds.maxX,e.bounds.minZ,e.bounds.maxZ)}settle(e){let t=this.h[e],n=this.h0[e];if(n<=0||(t<=up&&this.clearT[e]>=lp&&(this.clearT[e]=this.time+Ee(e,3,9)*.25),this.done[e]||t>up+.08*n))return!1;this.done[e]=1;let r=this.weight(e);this.clearedJunk+=r;let i=this.zone[e];return i!==255&&(this.zoneCleared[i]+=r),!0}buildAll(){this.dirtyList.length=0;for(let e of this.chunks){e.dirty=!1;let t=this.chunkHasJunk(e);t&&!e.active?this.createChunkMesh(e):t&&e.active&&this.writeStatic(e),!t&&e.active&&this.disposeChunk(e),e.active&&this.rebuildChunk(e)}}writeStatic(e){let{cs:t,x0:n,z0:r}=this,i=0;for(let a=0;a<=sp;a++)for(let o=0;o<=sp;o++,i++){let s=e.ci*sp+o,c=e.cj*sp+a;e.pos[i*3]=n+s*t,e.pos[i*3+2]=r+c*t;let l=c*this.nx+s;e.info[i*4+1]=this.patch[l],e.info[i*4+3]=this.h0[l],e.mix[i*4]=this.tint[l*4],e.mix[i*4+1]=this.tint[l*4+1],e.mix[i*4+2]=this.tint[l*4+2],e.mix[i*4+3]=this.tint[l*4+3],e.ground[i]=this.gy[l]}e.geo.attributes.aMix.needsUpdate=!0,e.geo.attributes.aGround.needsUpdate=!0}chunkHasJunk(e){let{nx:t,nz:n,h0:r}=this,i=Math.max(0,e.ci*sp-3),a=Math.min(t-1,e.ci*sp+sp+3),o=Math.max(0,e.cj*sp-3),s=Math.min(n-1,e.cj*sp+sp+3);for(let e=o;e<=s;e++){let n=e*t;for(let e=i;e<=a;e++)if(r[n+e]>0)return!0}return!1}createChunkMesh(e){let t=1089;e.pos=new Float32Array(t*3),e.nrm=new Float32Array(t*3),e.info=new Float32Array(t*4),e.mix=new Float32Array(t*4),e.ground=new Float32Array(t);let n=new Tn,r=(e,t,n)=>{let r=new fn(e,t);return n&&r.setUsage(C),r};n.setAttribute(`position`,r(e.pos,3,!0)),n.setAttribute(`normal`,r(e.nrm,3,!0)),n.setAttribute(`aInfo`,r(e.info,4,!0)),n.setAttribute(`aMix`,r(e.mix,4,!1)),n.setAttribute(`aGround`,r(e.ground,1,!1)),n.setIndex(this.index),e.geo=n,this.writeStatic(e),e.mesh=new F(n,this.material),e.mesh.castShadow=!0,e.mesh.receiveShadow=!0,e.mesh.frustumCulled=!0,e.mesh.matrixAutoUpdate=!1,this.group.add(e.mesh),e.active=!0}disposeChunk(e){this.group.remove(e.mesh),e.geo.dispose(),e.active=!1}rebuildChunk(e){let{nx:t,nz:n,h:r,cs:i,gy:a}=this,o=1/(2*i),s=0,c=0,l=-10,u=10,d=e=>r[e]+a[e];for(let i=0;i<=sp;i++){let f=e.cj*sp+i;for(let i=0;i<=sp;i++,s++){let p=e.ci*sp+i,m=f*t+p,h=r[m];h>c&&(c=h);let g=h+a[m];g>l&&(l=g),g<u&&(u=g),e.pos[s*3+1]=g;let _=d(p>0?m-1:m),v=d(p<t-1?m+1:m),y=d(f>0?m-t:m),b=d(f<n-1?m+t:m),x=(v-_)*o,S=(b-y)*o,C=Math.sqrt(x*x+1+S*S);e.nrm[s*3]=-x/C,e.nrm[s*3+1]=1/C,e.nrm[s*3+2]=-S/C;let w=p>=2?m-2:m,T=p<t-2?m+2:m,E=f>=2?-2*t:0,D=f<n-2?2*t:0,O=(r[w]+r[T]+r[m+E]+r[m+D]+r[w+E]+r[T+E]+r[w+D]+r[T+D]+h)/9-h;e.info[s*4+2]=O>0?Math.min(.5,O*.5):0,e.info[s*4]=this.clearT[m]}}let f=e.geo;f.attributes.position.needsUpdate=!0,f.attributes.normal.needsUpdate=!0,f.attributes.aInfo.needsUpdate=!0,f.boundingBox||(f.boundingBox=new Ut);let p=this.x0+e.ci*sp*i,m=this.z0+e.cj*sp*i;f.boundingBox.min.set(p,Math.min(0,u),m),f.boundingBox.max.set(p+sp*i,Math.max(.05,l),m+sp*i),e.mesh.castShadow=!this.noShadows&&c>.7,f.boundingSphere||(f.boundingSphere=new $e),f.boundingBox.getBoundingSphere(f.boundingSphere),e.dirty=!1}flush(e=6){let t=0;for(;this.dirtyList.length&&t<e;){let e=this.dirtyList.shift();e.active&&this.rebuildChunk(e),e.dirty=!1,t++}}markDirty(e,t,n,r){let i=Math.max(0,Math.floor((e-3)/sp)),a=Math.min(this.cx-1,Math.floor((n+3)/sp)),o=Math.max(0,Math.floor((t-3)/sp)),s=Math.min(this.cz-1,Math.floor((r+3)/sp));for(let e=o;e<=s;e++)for(let t=i;t<=a;t++){let n=this.chunks[e*this.cx+t];n.active&&!n.dirty&&(n.dirty=!0,this.dirtyList.push(n))}}heightAt(e,t){let n=(e-this.x0)/this.cs,r=(t-this.z0)/this.cs,i=Math.floor(n),a=Math.floor(r);if(i<0||a<0||i>=this.nx-1||a>=this.nz-1)return 0;let o=n-i,s=r-a,c=a*this.nx+i,l=this.h[c],u=this.h[c+1],d=this.h[c+this.nx],f=this.h[c+this.nx+1];return(l*(1-o)+u*o)*(1-s)+(d*(1-o)+f*o)*s}surfaceAt(e,t){return R(e,t)+this.heightAt(e,t)}height0At(e,t){let n=Math.round((e-this.x0)/this.cs),r=Math.round((t-this.z0)/this.cs);return n<0||r<0||n>=this.nx||r>=this.nz?0:this.h0[r*this.nx+n]}zoneAt(e,t){let n=Math.round((e-this.x0)/this.cs),r=Math.round((t-this.z0)/this.cs);return n<0||r<0||n>=this.nx||r>=this.nz?255:this.zone[r*this.nx+n]}hardnessOf(e){let t=this.owner[e];return!t||t===255?1:this.heaps[t-1].hardness}maxHeightInCircle(e,t,n,r=-1){let{cs:i,nx:a,nz:o,h:s}=this,c=Math.max(0,Math.floor((e-n-this.x0)/i)),l=Math.min(a-1,Math.ceil((e+n-this.x0)/i)),u=Math.max(0,Math.floor((t-n-this.z0)/i)),d=Math.min(o-1,Math.ceil((t+n-this.z0)/i)),f=0,p=n*n;for(let n=u;n<=d;n++){let o=this.z0+n*i-t;for(let t=c;t<=l;t++){let c=this.x0+t*i-e;if(c*c+o*o>p)continue;let l=n*a+t,u=s[l];u<=f||r>=0&&this.hardnessOf(l)<=r||(f=u)}}return f}cut(e,t,n,r,i,a=!1){let{cs:o,nx:s,nz:c,h:l}=this,u=n+3.2/cp+o,d=Math.max(0,Math.floor((e-u-this.x0)/o)),f=Math.min(s-1,Math.ceil((e+u-this.x0)/o)),p=Math.max(0,Math.floor((t-u-this.z0)/o)),m=Math.min(c-1,Math.ceil((t+u-this.z0)/o));if(i.volume=0,i.cleared=0,i.blocked=0,i.blockedHeap=-1,i.mainHeap=-1,d>f||p>m)return i;let h=this.heaps.length,g=this.heapVolTmp;g.fill(0,0,h+1);let _=!1;for(let c=p;c<=m;c++){let u=this.z0+c*o-t;for(let t=d;t<=f;t++){let d=c*s+t,f=l[d];if(f<=0)continue;let p=this.x0+t*o-e,m=Math.sqrt(p*p+u*u),v=m<=n?0:(m-n)*cp;if(f<=v)continue;let y=this.owner[d],b=this.hardnessOf(d);if(b>r){b>i.blocked&&(i.blocked=b,i.blockedHeap=y-1);continue}let x=f-v;i.volume+=x*this.cellArea,g[y===255||y===0?h:y-1]+=x,a||(l[d]=v,_=!0,this.settle(d)&&i.cleared++)}}if(_&&!a){let e=Math.max(1,d-2),t=Math.min(s-2,f+2),n=Math.max(1,p-2),a=Math.min(c-2,m+2);for(let o=n;o<=a;o++)for(let n=e;n<=t;n++){let e=o*s+n,t=l[e];if(t<=0)continue;let a=0;if(l[e-1]<.08&&a++,l[e+1]<.08&&a++,l[e-s]<.08&&a++,l[e+s]<.08&&a++,l[e-s-1]<.08&&a++,l[e-s+1]<.08&&a++,l[e+s-1]<.08&&a++,l[e+s+1]<.08&&a++,a<5||this.hardnessOf(e)>r)continue;let c=this.owner[e];i.volume+=t*this.cellArea,g[c===255||c===0?h:c-1]+=t,l[e]=0,this.settle(e)&&i.cleared++}d=e,f=t,p=n,m=a}let v=0;for(let e=0;e<h;e++)g[e]>v&&(v=g[e],i.mainHeap=e);return g[h]>v&&(i.mainHeap=-1),_&&this.markDirty(d,p,f,m),i}crush(e,t,n,r,i){let{cs:a,nx:o,nz:s,h:c}=this,l=Math.max(0,Math.floor((e-n-this.x0)/a)),u=Math.min(o-1,Math.ceil((e+n-this.x0)/a)),d=Math.max(0,Math.floor((t-n-this.z0)/a)),f=Math.min(s-1,Math.ceil((t+n-this.z0)/a));if(l>u||d>f)return 0;let p=0,m=n*n;for(let n=d;n<=f;n++){let s=this.z0+n*a-t;for(let t=l;t<=u;t++){let l=n*o+t,u=c[l];if(u<=0||u>r)continue;let d=this.x0+t*a-e;d*d+s*s>m||this.hardnessOf(l)>i||(p+=u*this.cellArea,c[l]=0,this.settle(l))}}return p>0&&this.markDirty(l,d,u,f),p}clearZone(e,t,n,r=9){let i=this.zoneBox[e];if(!i||i.i0>i.i1)return 0;let{nx:a,h:o,cs:s}=this,c=0;for(let l=i.j0;l<=i.j1;l++)for(let u=i.i0;u<=i.i1;u++){let i=l*a+u;if(this.zone[i]!==e||this.h0[i]<=0)continue;let d=this.x0+u*s,f=this.z0+l*s,p=Math.hypot(d-t,f-n)/r+Ee(u,l,5)*.2;o[i]>0&&(c+=o[i]*this.cellArea,o[i]=0),this.clearT[i]>=lp&&(this.clearT[i]=this.time+p),this.settle(i)}return this.markDirty(i.i0,i.j0,i.i1,i.j1),c}clearAll(){for(let e=0;e<this.h.length;e++)this.h[e]=0,this.settle(e);for(let e of this.chunks)e.active&&this.rebuildChunk(e)}remainingVolume(){let e=0;for(let t=0;t<this.h.length;t++)e+=this.h[t];return e*this.cellArea}zoneVolume(e){let t=this.zoneBox[e];if(!t)return 0;let n=0;for(let r=t.j0;r<=t.j1;r++)for(let i=t.i0;i<=t.i1;i++){let t=r*this.nx+i;this.zone[t]===e&&(n+=this.h[t])}return n*this.cellArea}nearestJunk(e,t,n,r,i=.12){let{cs:a,nx:o,nz:s,h:c}=this,l=1/0,u=!1;for(let d=0;d<s;d+=3)for(let s=0;s<o;s+=3){let f=d*o+s;if(c[f]<i||this.hardnessOf(f)>n)continue;let p=this.x0+s*a,m=this.z0+d*a,h=(p-e)*(p-e)+(m-t)*(m-t);h<l&&(l=h,r.set(p,c[f],m),u=!0)}return u}nearestJunkInZone(e,t,n,r,i,a=.1){let o=this.zoneBox[n];if(!o)return!1;let{cs:s,nx:c,h:l}=this,u=1/0,d=!1;for(let f=o.j0;f<=o.j1;f+=2)for(let p=o.i0;p<=o.i1;p+=2){let o=f*c+p;if(this.zone[o]!==n||l[o]<a||this.hardnessOf(o)>r)continue;let m=this.x0+p*s,h=this.z0+f*s,g=(m-e)*(m-e)+(h-t)*(h-t);g<u&&(u=g,i.set(m,l[o],h),d=!0)}return d}serialize(){let e=[],t=``,n=0,r=()=>{n&&e.push(n>2?t+`*`+n:n===2?t+`,`+t:t)};for(let e=0;e<this.h.length;e++){let i=this.h[e],a=i>=this.h0[e]-.004?`u`:String(Math.round(i*50));a===t?n++:(r(),t=a,n=1)}return r(),`v2:`+e.join(`,`)}deserialize(e){if(e.startsWith(`v2:`)){let t=0;for(let n of e.slice(3).split(`,`)){let e=n.indexOf(`*`),r=e<0?n:n.slice(0,e),i=e<0?1:parseInt(n.slice(e+1),10);for(let e=0;e<i&&t<this.h.length;e++,t++)this.h[t]=r===`u`?this.h0[t]:Math.min(parseInt(r,10)/50,this.h0[t])}}else{let t=0;for(let n of e.split(`,`)){let e=parseInt(n,10);if(e<0)for(let n=0;n<-e&&t<this.h.length;n++)this.h[t++]=0;else t<this.h.length&&(this.h[t++]=Math.min(e/50,this.h0[t-1]||e/50))}}this.clearedJunk=0,this.zoneCleared.fill(0),this.done.fill(0);let t=this.time;this.time=-1e3;for(let e=0;e<this.h.length;e++)this.clearT[e]=this.h0[e]>0?lp:-1e3,this.settle(e);this.time=t;for(let e of this.chunks)e.active&&this.rebuildChunk(e)}dispose(){for(let e of this.chunks)e.active&&this.disposeChunk(e);this.material.dispose()}get uniforms(){return this.material.userData.uniforms}setTime(e){this.time=e,this.material.userData.uniforms.uTime.value=e}setGroundTheme(e,t,n){let r=this.material.userData.uniforms;r.uSoil.value.set(e),r.uGrassA.value.set(t),r.uGrassB.value.set(n)}},mp={h:0,id:0,edge:0};function hp(e,t,n){let r=Math.floor(e),i=Math.floor(t),a=9,o=9,s=0,c=0;for(let l=-1;l<=1;l++)for(let u=-1;u<=1;u++){let d=r+u,f=i+l,p=d+.15+.7*Ee(d,f,11+n),m=f+.15+.7*Ee(d,f,23+n),h=(p-e)*(p-e)+(m-t)*(m-t);h<a?(o=a,a=h,s=d,c=f):h<o&&(o=h)}return mp.h=Ee(s,c,5+n),mp.id=Ee(s,c,37+n),mp.edge=Math.min(1,(Math.sqrt(o)-Math.sqrt(a))*3.5),mp}var gp=null,_p=null,vp=null,yp=new I(`#6b503b`),bp=new I(`#5cb84c`),xp=new I(`#62bd51`),Sp=null;function Cp(){if(Sp)return Sp;_p||(_p=rp(77,900,.07,.09)),vp||(vp=ip(5,128,8)),Ct();let e=new Wn({color:16777215}),t={uDirt:{value:_p},uNoise:{value:vp},uGrassA:{value:bp.clone()},uGrassB:{value:xp.clone()}};return e.onBeforeCompile=e=>{Object.assign(e.uniforms,t,Bt),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
varying vec3 vWPos;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
uniform sampler2D uDirt;
uniform sampler2D uNoise;
uniform vec3 uGrassA;
uniform vec3 uGrassB;
varying vec3 vWPos;
${ft}`).replace(`#include <color_fragment>`,`#include <color_fragment>
diffuseColor.rgb = cleanGround(vWPos.xz, uGrassA, uGrassB, uNoise, uDirt);`)},e.customProgramCacheKey=()=>`clean-ground-v3`,Sp=e,e}function wp(){gp||(gp=$f()),_p||(_p=rp(77,900,.07,.09)),vp||(vp=ip(5,128,8)),Ct();let e=new Wn({color:16777215}),t={uJunk:{value:gp},uDirt:{value:_p},uNoise:{value:vp},uTime:{value:0},uBounds:{value:new An(-100,100,-100,100)},uSoil:{value:yp.clone()},uGrassA:{value:bp.clone()},uGrassB:{value:xp.clone()},uSat:{value:.5},uJunkBright:{value:1.1},uContrast:{value:.6},uGrey:{value:0},uWarm:{value:new L(1.22,.98,.76)}};return e.userData.uniforms=t,e.onBeforeCompile=e=>{Object.assign(e.uniforms,t,Wo,Bt),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
attribute vec4 aInfo;
attribute vec4 aMix;
attribute float aGround;
varying vec4 vInfo;
varying vec4 vMix;
varying vec3 vWPos;
varying float vGround;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
vInfo = aInfo;
vMix = aMix;
vGround = aGround;
vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
uniform sampler2D uJunk;
uniform sampler2D uDirt;
uniform sampler2D uNoise;
uniform float uTime;
uniform vec4 uBounds;
uniform vec3 uSoil;
uniform vec3 uGrassA;
uniform vec3 uGrassB;
uniform float uSat;
uniform float uJunkBright;
uniform float uContrast;
uniform float uGrey;
uniform vec3 uWarm;
varying vec4 vInfo;
varying vec4 vMix;
varying vec3 vWPos;
varying float vGround;
${Go}
${ft}
/** the junk's colour at p; "dx, dy": the screen steps of p (it is sampled inside a branch) */
vec3 junkAt(vec2 p, vec2 dx, vec2 dy) {
  float s1 = ${(1/Zf).toFixed(5)};
  vec3 a = textureGrad(uJunk, p * s1, dx * s1, dy * s1).rgb;
  float s2 = ${(1/(Zf*1.21)).toFixed(5)};
  vec2 q = vec2(p.x * 0.8 - p.y * 0.6, p.x * 0.6 + p.y * 0.8) * s2 + vec2(0.37, 0.61);
  vec2 qx = vec2(dx.x * 0.8 - dx.y * 0.6, dx.x * 0.6 + dx.y * 0.8) * s2;
  vec2 qy = vec2(dy.x * 0.8 - dy.y * 0.6, dy.x * 0.6 + dy.y * 0.8) * s2;
  vec3 b = textureGrad(uJunk, q, qx, qy).rgb;
  float m = smoothstep(0.38, 0.62, textureGrad(uNoise, p * 0.035, dx * 0.035, dy * 0.035).r);
  return mix(a, b, m);
}
`).replace(`#include <color_fragment>`,`#include <color_fragment>
{
  vec2 p = vWPos.xz;
  if (p.x < uBounds.x || p.x > uBounds.y || p.y < uBounds.z || p.y > uBounds.w) discard;
  xrayDiscard(vWPos);
  // screen steps of the position (every derivative is taken here, before the branches: the junk and the
  // floor below read their mip-mapped textures with them, each only where it shows)
  vec3 dwx = dFdx(vWPos), dwy = dFdy(vWPos);
  vec3 fn = normalize(cross(dwx, dwy));
  vec2 dpx = dwx.xz, dpy = dwy.xz;
  // height of the junk above the terrain (the hills of the town are under it)
  float y = vWPos.y - vGround;
  // the town's map here and the screen width of its path edges
  vec4 cm = cityMap4(p);
  float sd = (cm.r - 0.5) * 3.2;
  float fw = max(fwidth(sd), 0.004);
  float floorMix = 1.0 - smoothstep(0.04, 0.15, y);
  vec3 col = vec3(0.0);
  if (floorMix < 1.0) {
    // --- junk: natural colours from the texture, a light cast per trash mix, metal is steel-grey
    vec3 junk = junkAt(p, dpx, dpy);
    float lum = dot(junk, vec3(0.3, 0.59, 0.11));
    // the mass underneath stays calm (muted, warm) so the 3D trash on top reads as the accents
    junk = mix(vec3(lum) * uWarm, junk, uSat);
    junk = (vec3(0.3) + (junk - vec3(0.3)) * uContrast) * vMix.rgb * uJunkBright;
    junk = mix(junk, vec3(lum) * vec3(0.92, 0.98, 1.08) * 1.12, vMix.a * 0.8);
    junk *= 0.84 + 0.3 * smoothstep(0.25, 2.8, y);
    col = junk;
    // --- cut walls: compressed layers of the same junk, darker
    float steep = (1.0 - smoothstep(0.3, 0.62, abs(fn.y))) * smoothstep(0.06, 0.2, y);
    if (steep > 0.0) {
      bool alongZ = abs(fn.x) > abs(fn.z);
      vec2 sideUV = alongZ ? vWPos.zy : vWPos.xy;
      vec2 ss = vec2(${(1/Zf).toFixed(5)}, ${(2.4/Zf).toFixed(5)});
      vec2 sx = (alongZ ? dwx.zy : dwx.xy) * ss, sy = (alongZ ? dwy.zy : dwy.xy) * ss;
      vec3 side = textureGrad(uJunk, sideUV * ss, sx, sy).rgb * vMix.rgb;
      side = mix(side, vec3(dot(side, vec3(0.3, 0.59, 0.11))) * 1.05, vMix.a * 0.8);
      side *= 0.62 * (0.85 + 0.15 * step(0.5, fract(y / 0.32)));
      col = mix(junk, side, steep);
    }
  }
  if (floorMix > 0.0) {
    // --- floor: soil right after the saw, then a lawn grows (per-vertex clear time), paths get paved
    float nz = textureGrad(uNoise, p * 0.21, dpx * 0.21, dpy * 0.21).r;
    float grow = clamp((uTime - vInfo.x - nz * 0.35) / 0.75, 0.0, 1.0);
    float dirt = textureGrad(uDirt, p * 0.12, dpx * 0.12, dpy * 0.12).r * 2.0;
    vec3 soil = uSoil * dirt;
    vec3 clean = cleanGroundAt(p, cm, fw, nz, textureGrad(uDirt, p * 0.9, dpx * 0.9, dpy * 0.9).r, uGrassA, uGrassB);
    float onPath = 1.0 - smoothstep(-fw, fw, sd);
    float g = smoothstep(0.0, 1.0, grow);
    vec3 floorCol = mix(soil, clean, g);
    // a quick bright pulse while the grass shoots up
    floorCol += vec3(0.14, 0.2, 0.04) * sin(grow * 3.14159) * (1.0 - onPath);
    col = mix(col, floorCol, floorMix);
  }
  col *= 1.0 - vInfo.z;
  float greyL = dot(col, vec3(0.3, 0.59, 0.11));
  col = mix(col, vec3(greyL) * vec3(0.84, 0.87, 0.93) * 0.92 + vec3(0.05), uGrey);
  diffuseColor.rgb = col;
}`).replace(`#include <normal_fragment_maps>`,`#include <normal_fragment_maps>
{
  // faceted lighting on junk (chunky pieces), smooth on the cleaned floor
  vec3 fnV = normalize(cross(dFdx(vViewPosition), dFdy(vViewPosition)));
  normal = normalize(mix(normal, fnV, 0.75 * smoothstep(0.03, 0.12, vWPos.y)));
}`)},e.customProgramCacheKey=()=>`junkfield-v5`,e}var Tp={volume:0,cleared:0,blocked:0,blockedHeap:-1,mainHeap:-1},Ep=.95,Dp=.95,Op=class{constructor(e){this.pos=new L,this.yaw=Math.PI,this.speed=0,this.load=0,this.levels={saw:1,bed:1,engine:1},this.sawR=.85,this.power=3,this.maxSpeed=4.4,this.maxHard=1,this.cutting=0,this.cutHeap=-1,this.blockedHard=0,this.blockedFull=!1,this.bumpTimer=0,this.canCut=!0,this.sawWorld=new L,this.sawPrev=new L,this.colliders={circles:[],boxes:[]},this.extraCircles=[],this.staticCircles=[],this.bounds={minX:-60,maxX:60,minZ:-80,maxZ:40},this.allowed=[],this.onCut=null,this.obstacle=null,this.obstacleAt=null,this.trap=null,this.blockedBig=!1,this.sawSpin=0,this.bob=0,this.tilt=0,this.forward=new L(0,0,-1),this.yawRate=0,this.pushing=!1,this.poseYaw=null,this.rideY=0,this.ridePitch=0,this.roll=0,this.sawLift=0,this.model=new Qu(this.lookFor(this.levels)),e.add(this.model.root)}lookFor(e){return{saw:e.saw,bed:e.bed,engine:e.engine}}applyLevels(e,t){let n=Zu(this.levels).bedW;this.levels={...e},this.sawR=ot(e.saw),this.power=tt(e.saw)*Qe(e.engine),this.maxSpeed=qe(e.engine),this.maxHard=rt(e.saw),this.model.rebuild(this.lookFor(e),t===`saw`),t===`bed`?this.model.pop(`bed`,n):t===`engine`&&this.model.pop(`engine`,0)}place(e,t,n){this.pos.set(e,R(e,t),t),this.yaw=n,this.speed=0,this.syncModel(0),this.computeSaw(this.sawPrev)}computeSaw(e){let t=this.model.sawOffset,n=this.pos.x+Math.sin(this.yaw)*t,r=this.pos.z+Math.cos(this.yaw)*t;return e.set(n,R(n,r),r),e}blockedAt(e,t,n,r){var i;if(It(e,t)<.55)return!0;let a=!this.canCut,o=a?Dp:Math.max(.45,this.rideY+.22),s=Ep*(a?.8:1),c=r.maxHeightInCircle(e,t,s);if(c>o&&c>r.maxHeightInCircle(this.pos.x,this.pos.z,s)+.01)return!0;let l=this.model.sawOffset,u=e+Math.sin(n)*l,d=t+Math.cos(n)*l,f=(i=this.trap)==null?void 0:i.pos;return!(f&&Math.hypot(e-f.x,t-f.z)>Math.hypot(this.pos.x-f.x,this.pos.z-f.z)+1e-4)&&this.obstacle&&(this.obstacle(u,d,this.sawR*.9)||this.obstacle(e,t,.95))?(this.blockedBig=!0,!0):a?r.maxHeightInCircle(u,d,this.sawR*.7)>1.0999999999999999:r.maxHeightInCircle(u,d,this.sawR*.9,this.maxHard)>.35}update(e,t,n,r,i){var a,o;let s=Math.min(1,Math.hypot(t,n)),c=this.yaw;if(this.blockedHard=0,this.blockedFull=!1,this.blockedBig=!1,this.bumpTimer>0&&(this.bumpTimer-=e),s>.05){let r=Math.atan2(t,-n),i=Ln(this.yaw,r),a=8.4+(1-Math.min(1,this.speed/this.maxSpeed))*5,o=He(i,-a*e,a*e);this.yaw+=o;let c=He(.35+.65*Math.cos(Math.min(Math.abs(i),Math.PI)),.25,1),l=this.maxSpeed;this.load>.05&&(l=Math.min(l,Math.max(.45,this.power/this.load))),this.rideY>.08&&(l*=.82);let u=l*s*c;this.speed+=He(u-this.speed,-18*e,11*e)}else this.speed+=He(-this.speed,-16*e,16*e),this.poseYaw!==null&&(this.yaw+=He(Ln(this.yaw,this.poseYaw),-7.2*e,7.2*e));this.forward.set(Math.sin(this.yaw),0,Math.cos(this.yaw)),this.yawRate=e>0?(this.yaw-c)/e:0;let l=this.pos.x,u=this.pos.z,d=this.forward.x*this.speed*e,f=this.forward.z*this.speed*e,p=this.pos.x+d,m=this.pos.z+f,h=!0;this.trap=(a=(o=this.obstacleAt)==null?void 0:o.call(this,this.pos.x,this.pos.z,.95*1.03))==null?null:a,this.blockedAt(p,m,this.yaw,r)&&(this.blockedAt(this.pos.x+d,this.pos.z,this.yaw,r)?this.blockedAt(this.pos.x,this.pos.z+f,this.yaw,r)?(p=this.pos.x,m=this.pos.z,h=!1):p=this.pos.x:m=this.pos.z,this.speed>1.2&&this.bumpTimer<=0&&!this.blockedBig&&(this.bumpTimer=.35),this.speed*=.6,this.blockedBig||(this.canCut?this.blockedHard=1:this.blockedFull=!0)),this.pos.x=p,this.pos.z=m,this.resolveStatic(),this.pos.x=He(this.pos.x,this.bounds.minX,this.bounds.maxX),this.pos.z=He(this.pos.z,this.bounds.minZ,this.bounds.maxZ),It(this.pos.x,this.pos.z)<.5&&It(l,u)>=.5&&(this.pos.x=l,this.pos.z=u),this.allowed.length&&!this.inAllowed(this.pos.x,this.pos.z)&&this.inAllowed(l,u)&&(this.inAllowed(this.pos.x,u)?this.pos.z=u:this.inAllowed(l,this.pos.z)?this.pos.x=l:(this.pos.x=l,this.pos.z=u)),this.pos.y=R(this.pos.x,this.pos.z),this.computeSaw(this.sawWorld);let g=this.sawWorld.distanceTo(this.sawPrev);this.sawPrev.copy(this.sawWorld),this.pushing=s>.1;let _=0,v=1,y=g>.0015;if(this.canCut&&(y||this.pushing)){r.cut(this.sawWorld.x,this.sawWorld.z,this.sawR,this.maxHard,Tp,!y),_=y?Tp.volume:0,Tp.blocked&&(this.blockedHard=Tp.blocked);let e=h&&this.speed>.05?r.crush(this.pos.x,this.pos.z,Ep*.9,.46,this.maxHard):0;if(_>0||e>0){var b;let t=_>0?Tp.mainHeap:this.cutHeap;_>0&&(this.cutHeap=Tp.mainHeap);let n=r.heaps[t];n&&(v=he(n.hardness)),(b=this.onCut)==null||b.call(this,_+e,t,this.sawWorld,Tp.cleared)}}let x=(g>.002?_/g:_>0?this.load:0)*v;this.load+=(x-this.load)*w(_>0?10:4,e),this.cutting+=((_>0?Math.min(1,.4+_*8):0)-this.cutting)*w(12,e),this.syncModel(e,i,h,r)}inAllowed(e,t){let n=.75,r=(e,t)=>this.allowed.some(n=>e>=n.minX&&e<=n.maxX&&t>=n.minZ&&t<=n.maxZ);return r(e-n,t)&&r(e+n,t)&&r(e,t-n)&&r(e,t+n)}pushCircle(e){let t=this.pos,n=t.x-e.x,r=t.z-e.z;if(Math.abs(n)>e.r+2||Math.abs(r)>e.r+2)return;let i=Math.hypot(n,r),a=e.r+Ep;if(i>=a||i<1e-4)return;let o=n/i,s=r/i,c=a-i;t.x=e.x+o*a,t.z=e.z+s*a;let l=-s,u=o,d=l*this.forward.x+u*this.forward.z;(d<0||d===0&&(e.x+e.z)%2<1)&&(l=-l,u=-u);let f=Math.min(c*.8,.08);t.x+=l*f,t.z+=u*f}resolveStatic(){let e=this.pos;for(let e of this.staticCircles)this.pushCircle(e);for(let e of this.extraCircles)this.pushCircle(e);for(let e of this.colliders.circles)this.pushCircle(e);for(let t of this.colliders.boxes){let n=He(e.x,t.x-t.hw,t.x+t.hw),r=He(e.z,t.z-t.hd,t.z+t.hd),i=e.x-n,a=e.z-r,o=Math.hypot(i,a);o<.95&&(o>1e-4?(e.x=n+i/o*Ep,e.z=r+a/o*Ep):t.hw-Math.abs(e.x-t.x)<t.hd-Math.abs(e.z-t.z)?e.x=t.x+Math.sign(e.x-t.x||1)*(t.hw+Ep):e.z=t.z+Math.sign(e.z-t.z||1)*(t.hd+Ep))}}syncModel(e,t=0,n=!0,r){let i=this.model;if(r){let t=this.forward.x,n=this.forward.z,i=this.pos.x+t*.65,a=this.pos.z+n*.65,o=this.pos.x-t*.6,s=this.pos.z-n*.6,c=r.heightAt(i,a),l=r.heightAt(o,s),u=R(i,a),d=R(o,s),f=Math.min(1,Math.max(c,l)*.92);this.rideY+=(f-this.rideY)*w(f>this.rideY?16:9,e),this.ridePitch+=(-Math.atan2(u+c-d-l,1.25)-this.ridePitch)*w(10,e);let p=R(this.pos.x+n*.65,this.pos.z-t*.65),m=R(this.pos.x-n*.65,this.pos.z+t*.65);this.roll+=(Math.atan2(p-m,1.3)-this.roll)*w(10,e)}this.sawLift+=(+!this.canCut-this.sawLift)*w(6,e),i.sawLift=this.sawLift,i.root.position.copy(this.pos),i.root.position.y=this.pos.y+this.rideY,i.root.rotation.y=this.yaw,this.bob+=e*(6+this.speed*2);let a=this.cutting*.035;i.bodyGroup.position.y=Math.abs(Math.sin(this.bob))*.02*Math.min(1,this.speed/2)+(Math.random()-.5)*a;let o=-this.cutting*.05+(this.bumpTimer>0?Math.sin(this.bumpTimer*30)*.04:0)+this.ridePitch;this.tilt+=(o-this.tilt)*w(10,e),i.bodyGroup.rotation.x=this.tilt,i.bodyGroup.rotation.z=this.roll,i.bodyGroup.position.x=(Math.random()-.5)*a;let s=this.canCut?7+this.cutting*10:1.5;this.sawSpin+=(s-this.sawSpin)*w(4,e),i.animate(e,n?this.speed:0,this.sawSpin,this.cutting>.1,t)}};function kp(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=new Wt(77);t.fillStyle=`#b9a68a`,t.fillRect(0,0,128,128);let r=[`#3d73c6`,`#e6e3dc`,`#d8403a`,`#eab236`,`#3f9c55`,`#c29155`,`#383b43`,`#93cde6`,`#eeeae0`,`#e77aa6`,`#a9773f`,`#c8cdd4`];for(let e=0;e<150;e++){let e=10+n.next()*26,i=3+n.next()*7,a=n.next()*128,o=n.next()*128;t.save(),t.translate(a,o),t.rotate((n.next()-.5)*.5),t.fillStyle=`rgba(40,25,10,0.35)`,t.fillRect(-e/2+1,-i/2+1.5,e,i),t.fillStyle=r[Math.floor(n.next()*r.length)],t.fillRect(-e/2,-i/2,e,i),t.fillStyle=`rgba(255,255,255,0.3)`,t.fillRect(-e/2,-i/2,e,Math.max(1,i*.3)),t.restore()}let i=t.createRadialGradient(64,64,38.4,64,64,99.84);i.addColorStop(0,`rgba(0,0,0,0)`),i.addColorStop(1,`rgba(40,24,10,0.35)`),t.fillStyle=i,t.fillRect(0,0,128,128),t.strokeStyle=`rgba(50,32,16,0.6)`,t.lineWidth=4,t.strokeRect(0,0,128,128);for(let e of[33.28,81.92])t.fillStyle=`#6b737d`,t.fillRect(e,0,11.52,128),t.fillStyle=`rgba(255,255,255,0.55)`,t.fillRect(e+1,0,3.2,128);let a=new $t(e);return a.colorSpace=ee,a.anisotropy=2,a}var Ap=null,jp=null;function Mp(){return Ap||(Ap=new ht(1,1,1),jp=new Wn({map:kp()})),{geo:Ap,mat:jp}}function Np(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`);t.fillStyle=`#f4f1ea`,t.fillRect(0,0,128,128);let n=(e,n,r,i,a,o)=>{t.save(),t.translate(e,n),t.rotate(a),t.fillStyle=o,t.beginPath(),t.roundRect(-r/2,-i/2,r,i,10),t.fill(),t.fillStyle=`rgba(255,255,255,0.45)`,t.beginPath(),t.roundRect(-r/2+5,-i/2+4,r-10,i*.28,5),t.fill(),t.restore()};n(36,36,50,34,-.1,`#d8d1c4`),n(94,40,40,30,.12,`#cfc7b8`),n(40,92,44,34,.08,`#cdc5b6`),n(96,94,46,32,-.08,`#dcd5c8`),t.lineWidth=12,t.strokeStyle=`#857a6c`,t.strokeRect(6,6,116,116),t.lineWidth=3,t.strokeStyle=`rgba(255,255,255,0.8)`,t.strokeRect(13,13,102,102),t.fillStyle=`#58606b`,t.fillRect(56,0,16,128),t.fillStyle=`rgba(255,255,255,0.65)`,t.fillRect(59,0,4,128);let r=new $t(e);return r.colorSpace=ee,r.anisotropy=4,r}var Pp=[[`#4f86d8`,`#58ad55`,`#e8bd3a`,`#d9574a`,`#f1eee7`,`#e07fae`],[`#5a5e66`,`#4b4f57`],[`#c08f55`,`#a87a44`],[`#3f8fe6`,`#59b9e8`,`#4f86d8`],[`#b8c3cf`,`#a9b5c2`],[`#f1f0ec`,`#e6e9ee`],[`#b9b4a8`,`#c96a45`,`#a8a49a`],[`#8a8f96`,`#5a5e66`,`#c8cdd4`],[`#3f8f88`,`#ff8a2a`,`#4f86d8`,`#f1eee7`]],Fp=null,Ip=null;function Lp(){return Fp||(Fp=new zo(1,1,1,1,.09),Ip=new Wn({map:Np()})),{geo:Fp,mat:Ip}}var Rp=.46,zp=class{constructor(e,t=!0){this.free=[],this.dummy=new Jt;let{geo:n,mat:r}=Lp();this.max=e,this.mesh=new yn(n,r,e),this.mesh.instanceMatrix.setUsage(C),this.mesh.castShadow=t,this.mesh.receiveShadow=!1,this.mesh.frustumCulled=!1,this.usedFlags=new Uint8Array(e),this.mesh.count=0;let i=new Pt().makeScale(0,0,0),a=new I(1,1,1);for(let t=e-1;t>=0;t--)this.mesh.setMatrixAt(t,i),this.mesh.setColorAt(t,a),this.free.push(t);this.mesh.instanceColor.setUsage(C)}alloc(e){let t=this.free.pop();return t===void 0?-1:(this.usedFlags[t]=1,t+1>this.mesh.count&&(this.mesh.count=t+1),this.mesh.setColorAt(t,e),this.mesh.instanceColor.needsUpdate=!0,t)}release(e){if(e<0)return;this.dummy.scale.setScalar(0),this.dummy.updateMatrix(),this.mesh.setMatrixAt(e,this.dummy.matrix),this.mesh.instanceMatrix.needsUpdate=!0,this.usedFlags[e]=0,this.free.push(e),this.free.sort((e,t)=>t-e);let t=this.mesh.count;for(;t>0&&!this.usedFlags[t-1];)t--;this.mesh.count=t}set(e,t,n,r){this.dummy.position.copy(t),this.dummy.quaternion.copy(n),this.dummy.scale.setScalar(r),this.dummy.updateMatrix(),this.mesh.setMatrixAt(e,this.dummy.matrix),this.mesh.instanceMatrix.needsUpdate=!0}setScaled(e,t,n,r,i,a){this.dummy.position.copy(t),this.dummy.quaternion.copy(n),this.dummy.scale.set(r,i,a),this.dummy.updateMatrix(),this.mesh.setMatrixAt(e,this.dummy.matrix),this.mesh.instanceMatrix.needsUpdate=!0}setColor(e,t){this.mesh.setColorAt(e,t),this.mesh.instanceColor.needsUpdate=!0}get used(){return this.max-this.free.length}},Bp=new Ut,Vp=new L,Hp=class extends ie{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type=`LineSegmentsGeometry`,this.setIndex([0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5]),this.setAttribute(`position`,new j([-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],3)),this.setAttribute(`uv`,new j([-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],2))}applyMatrix4(e){let t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let n=new ve(t,6,1);return this.setAttribute(`instanceStart`,new nt(n,3,0)),this.setAttribute(`instanceEnd`,new nt(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let n=new ve(t,6,1);return this.setAttribute(`instanceColorStart`,new nt(n,3,0)),this.setAttribute(`instanceColorEnd`,new nt(n,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new Lt(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ut);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),Bp.setFromBufferAttribute(t),this.boundingBox.union(Bp))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $e),this.boundingBox===null&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let r=0;for(let i=0,a=e.count;i<a;i++)Vp.fromBufferAttribute(e,i),r=Math.max(r,n.distanceToSquared(Vp)),Vp.fromBufferAttribute(t,i),r=Math.max(r,n.distanceToSquared(Vp));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error(`THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.`,this)}}toJSON(){}};V.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new xt},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}},xr.line={uniforms:a.merge([V.common,V.fog,V.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		float trimSegmentAlpha( const in vec4 start, const in vec4 end ) {

			// compute the interpolation factor needed to trim the segment so it terminates
			// between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column

			// we need different nearEstimate formula for reversed and default depth buffer
			// a is positive with a reversed depth buffer so it can be used for controlling the code flow
			float nearEstimate = ( a > 0.0 ) ? ( - b / ( a + 1.0 ) ) : ( - 0.5 * b / a );

			return ( nearEstimate - start.z ) / ( end.z - start.z );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef USE_DASH

				float lineDistanceStart = dashScale * instanceDistanceStart;
				float lineDistanceEnd = dashScale * instanceDistanceEnd;

			#endif

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					float alpha = trimSegmentAlpha( start, end );
					end.xyz = mix( start.xyz, end.xyz, alpha );

					#ifdef USE_DASH

						lineDistanceEnd = mix( lineDistanceStart, lineDistanceEnd, alpha );

					#endif

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					float alpha = trimSegmentAlpha( end, start );
					start.xyz = mix( end.xyz, start.xyz, alpha );

					#ifdef USE_DASH

						lineDistanceStart = mix( lineDistanceEnd, lineDistanceStart, alpha );

					#endif

				}

			}

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? lineDistanceStart : lineDistanceEnd;
				vUv = uv;

			#endif

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			float alpha = opacity;
			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};var Up=class extends Le{constructor(e){super({type:`LineMaterial`,uniforms:a.clone(xr.line.uniforms),vertexShader:xr.line.vertexShader,fragmentShader:xr.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return`WORLD_UNITS`in this.defines}set worldUnits(e){e===!0!==this.worldUnits&&(this.needsUpdate=!0),e===!0?this.defines.WORLD_UNITS=``:delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return`USE_DASH`in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH=``:delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return`USE_ALPHA_TO_COVERAGE`in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE=``:delete this.defines.USE_ALPHA_TO_COVERAGE)}},Wp=new An,Gp=new L,Kp=new L,qp=new An,Jp=new An,Yp=new An,Xp=new L,Zp=new Pt,Qp=new sn,$p=new L,em=new Ut,tm=new $e,nm=new An,rm,im;function am(e,t,n){return nm.set(0,0,-t,1).applyMatrix4(e.projectionMatrix),nm.multiplyScalar(1/nm.w),nm.x=im/n.width,nm.y=im/n.height,nm.applyMatrix4(e.projectionMatrixInverse),nm.multiplyScalar(1/nm.w),Math.abs(Math.max(nm.x,nm.y))}function om(e,t){let n=e.matrixWorld,r=e.geometry,i=r.attributes.instanceStart,a=r.attributes.instanceEnd,o=Math.min(r.instanceCount,i.count);for(let r=0,s=o;r<s;r++){Qp.start.fromBufferAttribute(i,r),Qp.end.fromBufferAttribute(a,r),Qp.applyMatrix4(n);let o=new L,s=new L;rm.distanceSqToSegment(Qp.start,Qp.end,s,o),s.distanceTo(o)<im*.5&&t.push({point:s,pointOnLine:o,distance:rm.origin.distanceTo(s),object:e,face:null,faceIndex:r,uv:null,uv1:null})}}function sm(e,t,n){let r=t.projectionMatrix,i=e.material.resolution,a=e.matrixWorld,o=e.geometry,s=o.attributes.instanceStart,c=o.attributes.instanceEnd,l=Math.min(o.instanceCount,s.count),u=-t.near;rm.at(1,Yp),Yp.w=1,Yp.applyMatrix4(t.matrixWorldInverse),Yp.applyMatrix4(r),Yp.multiplyScalar(1/Yp.w),Yp.x*=i.x/2,Yp.y*=i.y/2,Yp.z=0,Xp.copy(Yp),Zp.multiplyMatrices(t.matrixWorldInverse,a);for(let t=0,o=l;t<o;t++){if(qp.fromBufferAttribute(s,t),Jp.fromBufferAttribute(c,t),qp.w=1,Jp.w=1,qp.applyMatrix4(Zp),Jp.applyMatrix4(Zp),qp.z>u&&Jp.z>u)continue;if(qp.z>u){let e=qp.z-Jp.z,t=(qp.z-u)/e;qp.lerp(Jp,t)}else if(Jp.z>u){let e=Jp.z-qp.z,t=(Jp.z-u)/e;Jp.lerp(qp,t)}qp.applyMatrix4(r),Jp.applyMatrix4(r),qp.multiplyScalar(1/qp.w),Jp.multiplyScalar(1/Jp.w),qp.x*=i.x/2,qp.y*=i.y/2,Jp.x*=i.x/2,Jp.y*=i.y/2,Qp.start.copy(qp),Qp.start.z=0,Qp.end.copy(Jp),Qp.end.z=0;let o=Qp.closestPointToPointParameter(Xp,!0);Qp.at(o,$p);let l=nn.lerp(qp.z,Jp.z,o),d=l>=-1&&l<=1,f=Xp.distanceTo($p)<im*.5;if(d&&f){Qp.start.fromBufferAttribute(s,t),Qp.end.fromBufferAttribute(c,t),Qp.start.applyMatrix4(a),Qp.end.applyMatrix4(a);let r=new L,i=new L;rm.distanceSqToSegment(Qp.start,Qp.end,i,r),n.push({point:i,pointOnLine:r,distance:rm.origin.distanceTo(i),object:e,face:null,faceIndex:t,uv:null,uv1:null})}}}var cm=class extends F{constructor(e=new Hp,t=new Up({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type=`LineSegments2`}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,r=new Float32Array(2*t.count);for(let e=0,i=0,a=t.count;e<a;e++,i+=2)Gp.fromBufferAttribute(t,e),Kp.fromBufferAttribute(n,e),r[i]=i===0?0:r[i-1],r[i+1]=r[i]+Gp.distanceTo(Kp);let i=new ve(r,2,1);return e.setAttribute(`instanceDistanceStart`,new nt(i,1,0)),e.setAttribute(`instanceDistanceEnd`,new nt(i,1,1)),this}raycast(e,t){let n=this.material.worldUnits,r=e.camera;if(r===null&&!n&&console.error(`LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.`),n===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let i=e.params.Line2===void 0?0:e.params.Line2.threshold||0;rm=e.ray;let a=this.matrixWorld,o=this.geometry,s=this.material;im=s.linewidth+i,o.boundingSphere===null&&o.computeBoundingSphere(),tm.copy(o.boundingSphere).applyMatrix4(a);let c;if(c=n?im*.5:am(r,Math.max(r.near,tm.distanceToPoint(rm.origin)),s.resolution),tm.radius+=c,rm.intersectsSphere(tm)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),em.copy(o.boundingBox).applyMatrix4(a);let l;l=n?im*.5:am(r,Math.max(r.near,em.distanceToPoint(rm.origin)),s.resolution),em.expandByScalar(l),rm.intersectsBox(em)!==!1&&(n?om(this,t):sm(this,r,t))}onBeforeRender(e){let t=this.material.uniforms;t&&t.resolution&&(e.getViewport(Wp),this.material.uniforms.resolution.value.set(Wp.z,Wp.w))}},lm={value:0},um=new Set,dm=new xt(1,1),fm=1;function pm(e,t,n){dm.set(e*n,t*n),fm=n;for(let e of um){var r;e.resolution.copy(dm),e.linewidth=((r=e.userData.width)==null?1.6:r)*n}}function mm(e,t=1.6){e.userData.width=t,e.resolution.copy(dm),e.linewidth=t*fm,um.add(e)}var hm=new Map;function gm(){return new Le({uniforms:{uTime:lm,uAlpha:{value:0},uReveal:{value:100},uColor:{value:new I(`#7cc4ff`)}},vertexShader:`
varying vec3 vW;
varying vec3 vN;
void main() {
  vec4 w = modelMatrix * vec4(position, 1.0);
  vW = w.xyz;
  vN = normalize(mat3(modelMatrix) * normal);
  gl_Position = projectionMatrix * viewMatrix * w;
}`,fragmentShader:`
uniform float uTime;
uniform float uAlpha;
uniform float uReveal;
uniform vec3 uColor;
varying vec3 vW;
varying vec3 vN;
void main() {
  if (vW.y > uReveal) discard;
  vec3 N = normalize(vN);
  vec3 V = normalize(cameraPosition - vW);
  float rim = 1.0 - abs(dot(V, N));
  // graph paper on every face (lines every 0.5 m, in the plane of the face)
  vec3 an = abs(N);
  vec2 uv = an.y > 0.6 ? vW.xz : (an.x > an.z ? vW.zy : vW.xy);
  vec2 q = uv * 2.0;
  vec2 gq = abs(fract(q - 0.5) - 0.5) / max(fwidth(q), vec2(1e-4));
  float grid = 1.0 - min(min(gq.x, gq.y), 1.0);
  // the pencil line that is still drawing: a bright band at the reveal height
  float edge = 1.0 - smoothstep(0.0, 0.35, uReveal - vW.y);
  // a slow light sweeps up the drawing now and then
  float sweep = smoothstep(0.9, 1.0, 1.0 - abs(fract(vW.y * 0.12 - uTime * 0.18) - 0.5) * 2.0);
  vec3 col = uColor * (0.6 + rim * 0.55) + vec3(0.85, 0.95, 1.0) * (grid * 0.45 + sweep * 0.25 + edge * 0.9);
  float a = (0.12 + rim * 0.28 + grid * 0.2 + sweep * 0.1 + edge * 0.6) * uAlpha;
  gl_FragColor = vec4(col, a);
}`,transparent:!0,depthWrite:!1})}var _m=null;function vm(){if(_m)return _m;let e=document.createElement(`canvas`);e.width=e.height=256;let t=e.getContext(`2d`);t.fillStyle=`#1f5fae`,t.fillRect(0,0,256,256),t.strokeStyle=`rgba(160,210,255,0.35)`,t.lineWidth=1;for(let e=0;e<=256;e+=16)t.beginPath(),t.moveTo(e+.5,0),t.lineTo(e+.5,256),t.moveTo(0,e+.5),t.lineTo(256,e+.5),t.stroke();return t.strokeStyle=`rgba(220,240,255,0.95)`,t.lineWidth=5,t.strokeRect(10,10,236,236),t.lineWidth=2,t.strokeRect(18,18,220,220),t.strokeRect(164,200,74,38),t.beginPath(),t.moveTo(164,219),t.lineTo(238,219),t.stroke(),t.beginPath(),t.arc(48,48,16,0,Math.PI*2),t.moveTo(48,26),t.lineTo(54,48),t.lineTo(48,70),t.lineTo(42,48),t.closePath(),t.stroke(),_m=new $t(e),_m.colorSpace=ee,_m.anisotropy=4,_m}var ym=class{constructor(e,t){var n,r;this.group=new B,this.sheet=null,this.sheetMat=null,this.plane=new De(new L(0,-1,0),100),this.alpha=0,this.target=1,this.reveal=0,this.base=(n=t.base)==null?0:n,e.computeBoundingBox(),this.height=(r=t.height)==null?e.boundingBox.max.y-this.base+.5:r,this.fillMat=gm(),this.fill=new F(e,this.fillMat),this.fill.renderOrder=6,this.group.add(this.fill);let i=hm.get(t.key);if(!i){var a;let n=new A(e,(a=t.crease)==null?28:a);i=new Hp().fromEdgesGeometry(n),n.dispose(),hm.set(t.key,i)}if(this.lineMat=new Up({color:15924223,linewidth:1.6*fm,transparent:!0,opacity:0,depthWrite:!1,worldUnits:!1}),this.lineMat.resolution.copy(dm),this.lineMat.clippingPlanes=[this.plane],um.add(this.lineMat),this.lines=new cm(i,this.lineMat),this.lines.renderOrder=7,this.lines.frustumCulled=!1,this.group.add(this.lines),t.sheet){this.sheetMat=new Fn({map:vm(),transparent:!0,opacity:0,depthWrite:!1});let e=new Ne(t.sheet.w,t.sheet.d);e.rotateX(-Math.PI/2),this.sheet=new F(e,this.sheetMat),this.sheet.position.set(t.sheet.x,t.sheet.y,t.sheet.z),this.sheet.renderOrder=5,this.group.add(this.sheet)}}redraw(){this.reveal=0}instant(e=1){this.alpha=this.target=e,this.reveal=1,this.apply()}get visible(){return this.alpha>.01}update(e){this.alpha+=(this.target-this.alpha)*Math.min(1,e*3.5),this.target>0&&(this.reveal=Math.min(1,this.reveal+e/1.8)),this.apply()}apply(){let e=this.alpha;this.group.visible=e>.01;let t=this.base+this.height*this.reveal*this.reveal*(3-2*this.reveal)+(this.reveal>=1?50:0);this.fillMat.uniforms.uAlpha.value=e,this.fillMat.uniforms.uReveal.value=t,this.plane.constant=t,this.lineMat.opacity=Math.min(1,e*.95),this.sheetMat&&(this.sheetMat.opacity=Math.min(.85,e*.85)*Math.min(1,this.reveal*3))}dispose(){var e,t;this.group.removeFromParent(),this.fill.geometry.dispose(),this.fillMat.dispose(),this.lineMat.dispose(),um.delete(this.lineMat),(e=this.sheet)==null||e.geometry.dispose(),(t=this.sheetMat)==null||t.dispose()}},bm=new I(`#ff3b30`),xm=new I(`#ffffff`),Sm=Rp*1.04,Cm=12,wm=new Zn,Tm=new Zn,Em=new Xt,Dm=new L,Om=new L,km=new L,Am=new I,jm=new Zn,Mm=new Zn,Nm=new L,Pm=new L,Fm=new L,Im=class{constructor(e,t){this.model=e,this.count=0,this.incoming=0,this.capacity=24,this.stack=[],this.colors=[],this.values=[],this.flyers=[],this.cols=2,this.rows=2,this.layersMax=4,this.onLand=null,this.onTrail=null,this.ox=new Float32Array(14),this.oz=new Float32Array(14),this.vx=new Float32Array(14),this.vz=new Float32Array(14),this.prevRest=new L,this.prevVel=new L,this.accSm=new L,this.hasPrev=!1,this.time=0,this.landPop=0,this.fullK=0,this.capK=0,this.fullFlash=0,this.wasFull=!1,this.blinkOn=!1,this.pool=new zp(300),t.add(this.pool.mesh),this.capMat=new Up({color:16777215,transparent:!0,opacity:0,depthWrite:!1,worldUnits:!1}),mm(this.capMat,2.2),this.capBox=new cm(new Hp,this.capMat),this.capBox.frustumCulled=!1,this.capBox.renderOrder=8,this.floorMat=new Up({color:16777215,transparent:!0,opacity:0,depthWrite:!1,worldUnits:!1}),mm(this.floorMat,1.2),this.floorBox=new cm(new Hp,this.floorMat),this.floorBox.frustumCulled=!1,this.floorBox.renderOrder=8,e.bedAnchor.add(this.capBox,this.floorBox),this.layout()}buildCapBox(){let e=this.cols*Sm+.06,t=this.rows*Sm+.06,n=this.layersMax*Rp*.97+.04,r=-e/2,i=e/2,a=-t/2,o=t/2,s=e=>[r,e,a,i,e,a,i,e,a,i,e,o,i,e,o,r,e,o,r,e,o,r,e,a],c=[...s(0),...s(n)];for(let[e,t]of[[r,a],[i,a],[i,o],[r,o]])c.push(e,0,t,e,n,t);this.capBox.geometry.setPositions(c);let l=[];for(let e=1;e<this.layersMax;e++)l.push(...s(e*Rp*.97));this.floorBox.geometry.setPositions(l.length?l:[0,0,0,0,0,0])}layout(){let e=this.model.bedSize;this.cols=Math.max(2,Math.floor((e.w+.04)/Sm)),this.rows=Math.max(2,Math.floor((e.l+.04)/Sm)),this.layersMax=Math.min(Cm,this.model.stackLayers),this.buildCapBox(),this.syncStack()}get visualCap(){return this.cols*this.rows*this.layersMax}get full(){return this.count+this.incoming>=this.capacity}get free(){return Math.max(0,this.capacity-this.count-this.incoming)}get fill(){return Math.min(1,(this.count+this.incoming)/Math.max(1,this.capacity))}addFrom(e,t,n=1){if(this.full)return!1;let r=t.clone();this.incoming++;let i=()=>{var e;this.incoming--,this.count++,this.colors.push(r.clone()),this.values.push(n),this.syncStack(),this.landPop=1,(e=this.onLand)==null||e.call(this)},a=this.pool.alloc(r);return a<0?(i(),!0):(this.flyers.push({id:a,from:e.clone(),t:0,dur:.5+Math.random()*.12,arc:1.9+Math.random()*.7,spin:new L((Math.random()-.5)*9,(Math.random()-.5)*9,(Math.random()-.5)*9),toWorld:null,color:r,onArrive:i,scaleFrom:Rp*.45,scaleMid:Rp*1.3,scaleTo:Rp*.96,crush:0,crushT:-1,trailT:0,toBed:!0}),!0)}takeTo(e,t,n={}){var r,i,a;if(this.count<=0)return!1;let o=Math.max(1,Math.min(this.count,(r=n.units)==null?1:r)),s=new L;this.stack.length?this.slotWorld(this.stack.length-1,s):this.model.bedAnchor.getWorldPosition(s);let c=0,l=new I(1,1,1);for(let e=0;e<o;e++){var u,d;l=(u=this.colors.pop())==null?l:u,c+=(d=this.values.pop())==null?1:d}this.count-=o,this.syncStack();let f=this.pool.alloc(l),p=e.clone();return f<0?(t(l,c,o,p),!0):(this.flyers.push({id:f,from:s,t:0,dur:(i=n.dur)==null?.55:i,arc:1.6+Math.random()*.4,spin:new L((Math.random()-.5)*12,(Math.random()-.5)*12,(Math.random()-.5)*12),toWorld:p,color:l,onArrive:()=>t(l,c,o,p),scaleFrom:Rp*.96,scaleMid:Rp*1.45,scaleTo:Rp*1.15,crush:(a=n.crush)==null?0:a,crushT:-1,trailT:0,toBed:!1}),!0)}clear(){this.count=0,this.colors=[],this.values=[],this.syncStack()}setUnits(e,t,n=1){this.count=Math.min(e,this.capacity),this.colors=[],this.values=[];for(let e=0;e<this.count;e++)this.colors.push(t()),this.values.push(n);this.syncStack()}syncStack(){let e=this.count<=0?0:Math.max(1,Math.round(this.count/Math.max(1,this.capacity)*this.visualCap));for(;this.stack.length>e;){let e=this.stack.pop();this.pool.release(e.id)}for(;this.stack.length<e;){var t;let n=Math.min(this.colors.length-1,Math.floor((this.stack.length+.5)/e*this.colors.length)),r=(t=this.colors[Math.max(0,n)])==null?new I(1,1,1):t,i=this.pool.alloc(r);if(i<0)break;this.stack.push({id:i,jitter:new L((Math.random()-.5)*.03,0,(Math.random()-.5)*.03),rotY:(Math.random()-.5)*.22,color:r})}}slotWorld(e,t){let n=this.cols*this.rows,r=Math.min(Cm,Math.floor(e/n)),i=e%n,a=i%this.cols,o=Math.floor(i/this.cols),s=(a-(this.cols-1)/2)*Sm,c=(o-(this.rows-1)/2)*Sm;return t.set(s+this.ox[r]+this.waveX(r),Rp/2+r*Rp*.97,c+this.oz[r]+this.waveZ(r)),this.model.bedAnchor.localToWorld(t),t}waveX(e){if(this.fullK<.01||e===0)return 0;let t=e/Math.max(1,this.layersMax-1);return Math.sin(this.time*5.2-e*.85)*.07*t*this.fullK}waveZ(e){if(this.fullK<.01||e===0)return 0;let t=e/Math.max(1,this.layersMax-1);return Math.cos(this.time*3.9-e*.7)*.035*t*this.fullK}dropPoint(e){let t=this.cols*this.rows,n=Math.ceil(Math.max(1,this.stack.length+1)/t);return e.set(0,n*Rp*.95,0),this.model.bedAnchor.localToWorld(e),e}topWorld(e){let t=this.cols*this.rows,n=Math.ceil(Math.max(1,this.stack.length)/t);return e.set(0,n*Rp+.55,0),this.model.bedAnchor.localToWorld(e),e}wobble(e){let t=this.model.root;t.updateWorldMatrix(!0,!1);let n=this.model.bedAnchor.position;if(Nm.set(n.x,0,n.z).applyMatrix4(t.matrixWorld),!this.hasPrev||e<=0){this.prevRest.copy(Nm),this.prevVel.set(0,0,0),this.hasPrev=!0;return}Pm.copy(Nm).sub(this.prevRest).divideScalar(e),Pm.lengthSq()>400&&Pm.set(0,0,0),Fm.copy(Pm).sub(this.prevVel).divideScalar(e),this.prevRest.copy(Nm),this.prevVel.copy(Pm),this.accSm.lerp(Fm,Math.min(1,e*18)),Mm.setFromAxisAngle(Jt.DEFAULT_UP,-t.rotation.y),Fm.copy(this.accSm).applyQuaternion(Mm);let r=Math.max(-30,Math.min(30,Fm.x)),i=Math.max(-30,Math.min(30,Fm.z)),a=Math.max(1,Math.min(this.layersMax,Math.ceil(this.stack.length/(this.cols*this.rows)))),o=.32,s=.075,c=Math.max(1,Math.ceil(e/(1/120))),l=e/c;for(let e=0;e<c;e++){for(let e=1;e<a;e++){let t=-330*(this.ox[e]-this.ox[e-1])-11*(this.vx[e]-this.vx[e-1])-r*o,n=-330*(this.oz[e]-this.oz[e-1])-11*(this.vz[e]-this.vz[e-1])-i*o;e+1<a&&(t+=330*.55*(this.ox[e+1]-this.ox[e]),n+=330*.55*(this.oz[e+1]-this.oz[e])),this.vx[e]+=t*l,this.vz[e]+=n*l}for(let e=1;e<a;e++){this.ox[e]+=this.vx[e]*l,this.oz[e]+=this.vz[e]*l;let t=this.ox[e]-this.ox[e-1],n=this.oz[e]-this.oz[e-1],r=Math.hypot(t,n);r>s&&(this.ox[e]=this.ox[e-1]+t/r*s,this.oz[e]=this.oz[e-1]+n/r*s,this.vx[e]*=.5,this.vz[e]*=.5)}}for(let e=a;e<=Cm;e++)this.ox[e]=this.ox[e-1],this.oz[e]=this.oz[e-1],this.vx[e]=this.vx[e-1],this.vz[e]=this.vz[e-1]}update(e){this.time+=e,this.fullK+=((this.full&&this.count>0?1:0)-this.fullK)*Math.min(1,e*4);let t=this.full&&this.count>0;t&&!this.wasFull&&(this.fullFlash=2.6),this.wasFull=t,this.fullFlash=Math.max(0,this.fullFlash-e);let n=this.stack.length>=this.cols*this.rows||t?1:0;this.capK+=(n-this.capK)*Math.min(1,e*5);let r=this.fullFlash>0&&Math.sin(this.time*18)>0,i=t&&(this.fullFlash<=0||r);if(this.capMat.color.copy(i?bm:xm),this.floorMat.color.copy(i?bm:xm),this.capMat.opacity=this.capK*(t?.95:.6),this.floorMat.opacity=this.capK*(t?.55:.28),this.capBox.visible=this.floorBox.visible=this.capK>.02,r!==this.blinkOn){this.blinkOn=r;for(let e of this.stack)this.pool.setColor(e.id,r?Am.copy(e.color).lerp(bm,.55).multiplyScalar(1.35):e.color)}this.landPop=Math.max(0,this.landPop-e*5),this.wobble(e),this.model.bedAnchor.updateWorldMatrix(!0,!1);let a=this.model.bedAnchor.getWorldQuaternion(jm),o=this.cols*this.rows,s=Math.floor((this.stack.length-1)/o);for(let e=0;e<this.stack.length;e++){let t=this.stack[e],n=Math.floor(e/o);this.slotWorld(e,Dm),Dm.add(t.jitter);let r=Math.max(0,n-1),i=this.ox[n]+this.waveX(n)-this.ox[r]-this.waveX(r),c=this.oz[n]+this.waveZ(n)-this.oz[r]-this.waveZ(r);Em.set(Math.atan2(c,Rp)*1.2,t.rotY,-Math.atan2(i,Rp)*1.2),wm.setFromEuler(Em).premultiply(a);let l=Rp*.96;if(n===s&&this.landPop>0){let e=Math.sin(this.landPop*Math.PI);this.pool.setScaled(t.id,Dm,wm,l*(1+e*.18),l*(1-e*.22),l*(1+e*.18))}else if(this.fullK>.05){let e=1+Math.sin(this.time*9-n*.9)*.035*this.fullK;this.pool.setScaled(t.id,Dm,wm,l*(2-e),l*e,l*(2-e))}else this.pool.set(t.id,Dm,wm,l)}for(let t=this.flyers.length-1;t>=0;t--){var c;let n=this.flyers[t];if(n.crushT>=0){n.crushT+=e/.13;let r=Math.min(1,n.crushT);Om.copy(n.toWorld).setY(n.toWorld.y-n.crush*ke(r)),wm.setFromEuler(Em.set(0,n.spin.y*.2,0));let i=n.scaleTo;if(this.pool.setScaled(n.id,Om,wm,i*(1+r*.35),i*Math.max(.12,1-r*.88),i*(1+r*.35)),r>=1){var l;this.pool.release(n.id),this.flyers.splice(t,1),(l=n.onArrive)==null||l.call(n)}continue}n.t+=e/n.dur;let r=Math.min(1,n.t),i=(c=n.toWorld)==null?this.slotWorld(Math.min(this.stack.length,this.visualCap-1),km):c,o=ke(r),s=Om.lerpVectors(n.from,i,r<1?o*.35+r*.65:1);s.y+=Math.sin(Math.PI*r)*n.arc,wm.setFromEuler(Em.set(n.spin.x*r,n.spin.y*r,n.spin.z*r)),n.toBed&&wm.slerp(Tm.copy(a),Math.max(0,(r-.7)/.3));let f=r<.5?n.scaleFrom+(n.scaleMid-n.scaleFrom)*ke(r*2):n.scaleMid+(n.scaleTo-n.scaleMid)*((r-.5)*2);if(n.toBed)this.pool.set(n.id,s,wm,f);else{let e=r<.12?-Math.sin(r/.12*Math.PI)*.25:Math.sin((r-.12)/.88*Math.PI)*.3;this.pool.setScaled(n.id,s,wm,f*(1-e*.45),f*(1+e),f*(1-e*.45))}let p=Math.sin(Math.PI*r)*(n.toBed?.85:.5);if(this.pool.setColor(n.id,Am.copy(n.color).multiplyScalar(1+p)),n.trailT-=e,n.trailT<=0&&r<.95){var u;n.trailT=.022,(u=this.onTrail)==null||u.call(this,s,n.color,n.toBed)}if(n.t>=1){var d;if(n.crush>0){n.crushT=0,this.pool.setColor(n.id,n.color);continue}this.pool.release(n.id),this.flyers.splice(t,1),(d=n.onArrive)==null||d.call(n)}}}get totalValue(){let e=0;for(let t of this.values)e+=t;return e}get flying(){return this.flyers.length}},Lm=9/16,Rm=class{constructor(e){this.cam=e,this.target=new L,this.cur=new L,this.shakeAmp=0,this.shakeT=0,this.pitch=nn.degToRad(47),this.pitchWant=nn.degToRad(47),this.offset=new L,this.offCur=new L,this.shift=0,this.shiftCur=0,this.viewWidth=12.65,this.zoom=1,this.zoomCur=1,this.lead=new L,this.dist=30,this._want=new L,this._off=new L,this._look=new L,this.kick=0,this.overviewTarget=0,this.overviewK=0,this.overviewCenter=new L,this.overviewSize={w:20,d:24},this.overviewPitch=nn.degToRad(58),this.overviewYaw=0,this.ovCur=new L,this.ovSize={w:20,d:24},this.ovPitch=nn.degToRad(58),this.ovYaw=0,this._oPos=new L,this.shotSpeed=1.6,this.frozen=!1,this.intro=0,this.introDur=0,this.introFrom=new L}snap(e){this.target.copy(e),this.cur.copy(e),this.overviewTarget===0&&(this.overviewK=0)}shake(e){this.shakeAmp=Math.max(this.shakeAmp,e)}punch(e){this.kick=Math.max(this.kick,e)}snapOverview(){this.overviewTarget=1,this.overviewK=1,this.ovCur.copy(this.overviewCenter),this.ovSize={...this.overviewSize},this.ovPitch=this.overviewPitch,this.ovYaw=this.overviewYaw}get overviewAmount(){return this.overviewK}update(e,t,n=0,r=0){var i;let a=this.cam;if(this.frozen)return;this.pitch+=(this.pitchWant-this.pitch)*w(3.2,e),this.offCur.lerp(this.offset,w(2.6,e)),this.shiftCur+=(this.shift-this.shiftCur)*w(4,e),a.fov=46;let o=nn.degToRad(46),s=Math.min(t,Lm);this.zoomCur+=(this.zoom-this.zoomCur)*w(3,e);let c=2*Math.atan(Math.tan(o/2)*s);this.dist=this.viewWidth*this.zoomCur/2/Math.tan(c/2),this.dist*=1-this.kick,this.kick*=Math.exp(-e*9);let l=this._want.copy(this.target).add(this.lead).add(this.offCur);if(this.intro>0){this.intro=Math.max(0,this.intro-e);let t=this.intro/this.introDur,n=t>.55?1:t/.55*(t/.55)*(3-t/.55*2);l.lerp(this.introFrom,n),this.cur.copy(l)}this.cur.copy(l);let u=this._off.set(0,Math.sin(this.pitch),Math.cos(this.pitch)).multiplyScalar(this.dist);a.position.copy(this.cur).add(u);let d=this._look.copy(this.cur);if(d.z-=this.dist*.08,a.position.z-=this.dist*.08,this.shakeAmp>.001){this.shakeT+=e*40;let t=this.shakeAmp;a.position.x+=Math.sin(this.shakeT*1.3)*t,a.position.y+=Math.sin(this.shakeT*1.7+1)*t*.6,d.x+=Math.sin(this.shakeT*1.1+2)*t*.5,this.shakeAmp*=Math.exp(-e*9)}if(this.overviewK<.01)this.ovCur.copy(this.overviewCenter),this.ovSize={...this.overviewSize},this.ovPitch=this.overviewPitch,this.ovYaw=this.overviewYaw;else{let t=w(this.shotSpeed,e);this.ovCur.lerp(this.overviewCenter,t),this.ovSize.w+=(this.overviewSize.w-this.ovSize.w)*t,this.ovSize.d+=(this.overviewSize.d-this.ovSize.d)*t,this.ovPitch+=(this.overviewPitch-this.ovPitch)*t,this.ovYaw+=(this.overviewYaw-this.ovYaw)*t}if(this.overviewK+=(this.overviewTarget-this.overviewK)*w(this.overviewTarget>0?this.shotSpeed:3,e),this.overviewK>.002){let e=this.overviewK,t=e*e*(3-2*e),n=this.ovPitch,r=this.ovSize.w*.55/Math.tan(c/2),i=this.ovSize.d*.62/Math.tan(o/2),s=Math.max(r,i)*1.02,l=Math.cos(n);this._oPos.set(Math.sin(this.ovYaw)*l,Math.sin(n),Math.cos(this.ovYaw)*l).multiplyScalar(s).add(this.ovCur),a.position.lerp(this._oPos,t),d.lerp(this.ovCur,t)}a.lookAt(d),n>0&&Math.abs(this.shiftCur)>.5?a.setViewOffset(n,r,0,this.shiftCur,n,r):(i=a.view)!=null&&i.enabled&&a.clearViewOffset(),a.updateProjectionMatrix()}get distance(){return this.dist}},zm=new I(15135999),Bm=new I(16763304),Vm=new I(13220250),Hm=new I(10123914),Um=new I(16773336),Wm=new I(16751194),Gm=class{constructor(e,t=1024){this.offset=new L(-9,22,11),this.shadowsOn=!0,this.baseSize=1024,this.span=1,this.hemi=new Ze(15135999,13220250,1.95),e.add(this.hemi),this.sun=new Ke(16773336,1.75),this.sun.castShadow=Pu,this.sun.shadow.mapSize.set(t,t);let n=this.sun.shadow.camera;n.left=-13,n.right=13,n.top=17,n.bottom=-15,n.near=2,n.far=70,this.sun.shadow.bias=-6e-4,this.sun.shadow.normalBias=.04,e.add(this.sun),e.add(this.sun.target)}setShadowSize(e){var t;this.baseSize=e;let n=Math.min(2048,e*(this.span>1.5?2:1));this.sun.shadow.mapSize.x!==n&&(this.sun.shadow.mapSize.set(n,n),(t=this.sun.shadow.map)==null||t.dispose(),this.sun.shadow.map=null)}setSpan(e){if(e=Math.max(1,Math.min(3.4,e)),Math.abs(e-this.span)<.01)return;this.span=e;let t=this.sun.shadow.camera;t.left=-13*e,t.right=13*e,t.updateProjectionMatrix(),this.setShadowSize(this.baseSize)}setDusk(e){e=Math.max(0,Math.min(1,e)),this.hemi.color.copy(zm).lerp(Bm,e),this.hemi.groundColor.copy(Vm).lerp(Hm,e),this.hemi.intensity=1.95-.55*e,this.sun.color.copy(Um).lerp(Wm,e),this.sun.intensity=1.75-.35*e}follow(e){let t=this.sun.shadow.camera,n=(t.right-t.left)/this.sun.shadow.mapSize.x,r=Math.round(e.x/n)*n,i=Math.round((e.z-4)/n)*n;this.sun.target.position.set(r,0,i),this.sun.position.set(r+this.offset.x,this.offset.y,i+this.offset.z)}};function Km(){let e=[],t=(e,t,n)=>{let r=[];for(let i=0;i<48;i++){let a=i/48*Math.PI*2,o=.5;for(;o<n&&!(R(e+Math.cos(a)*o,t+Math.sin(a)*o)>-.03);o+=.1);o+=.3,r.push([e+Math.cos(a)*o,t+Math.sin(a)*o])}return r};e.push(t(z.x,z.z,14));for(let n of ln)n.h<0&&e.push(t(n.x,n.z,n.r+1));return e}var qm=rp(77,900,.07,.09),Jm=.12,Ym={minX:-15,maxX:15,minZ:-3,maxZ:17},Xm={grass:new I(`#8fcf5e`),grassDark:new I(`#7abb4c`),concrete:new I(`#e8e2d6`),concreteLine:new I(`#d4ccbc`),sky:new I(`#9fdcf5`)};function Zm(e,t,n,r,i){let a=new Qn;return a.moveTo(e+i,t),a.lineTo(n-i,t),a.quadraticCurveTo(n,t,n,t+i),a.lineTo(n,r-i),a.quadraticCurveTo(n,r,n-i,r),a.lineTo(e+i,r),a.quadraticCurveTo(e,r,e,r-i),a.lineTo(e,t+i),a.quadraticCurveTo(e,t,e+i,t),a}function Qm(e,t,n,r,i,a,o,s=[]){let c=Zm(e,-r,n,-t,i);for(let i of s){if(!i.some(([i,a])=>i>e&&i<n&&a>t&&a<r))continue;let a=new Gt;i.forEach(([e,t],n)=>n?a.lineTo(e,-t):a.moveTo(e,-t)),a.closePath(),c.holes.push(a)}let l=new p(c,6);l.rotateX(-Math.PI/2);let u=new F(l,a);return u.position.y=o,u.receiveShadow=!0,u}var $m=[[`#9b8466`,`#6b503b`],[`#a07a62`,`#6e4a38`],[`#8f8a7e`,`#5f5548`],[`#a89272`,`#6f5a40`],[`#8e8578`,`#58524a`],[`#a39a84`,`#6a6250`],[`#b39a74`,`#82603e`],[`#9c7f6c`,`#5a3f34`]];function eh(e,t,n,r,i,a,o,s){let c=Math.round((n-e)/i)+1,l=Math.round((r-t)/i)+1,u=new Float32Array(c*l*3),d=new Float32Array(c*l*3),f=new I(`#e6d3a0`),p=new I(`#bfae80`),m=new I(`#8fa38f`),h=new I;for(let n=0;n<l;n++)for(let r=0;r<c;r++){let o=e+r*i,l=t+n*i,g=n*c+r,_=Math.min(a,R(o,l)-.05);u[g*3]=o,u[g*3+1]=_,u[g*3+2]=l;let v=a-_;v<.04?h.copy(s):v<.35?h.copy(s).lerp(f,Math.min(1,(v-.04)/.12)):h.copy(f).lerp(p,Math.min(1,(v-.35)/.4)).lerp(m,Math.max(0,Math.min(1,(v-.9)/.6)));let y=.94+.08*Math.sin(o*1.7+l*.9)*Math.cos(l*1.3-o*.4);d[g*3]=h.r*y,d[g*3+1]=h.g*y,d[g*3+2]=h.b*y}let g=[];for(let e=0;e<l-1;e++)for(let t=0;t<c-1;t++){let n=e*c+t,r=n+1,i=n+c,a=i+1;g.push(n,i,r,r,i,a)}let _=new Tn;_.setAttribute(`position`,new fn(u,3)),_.setAttribute(`color`,new fn(d,3)),_.setIndex(g),_.computeVertexNormals();let v=new F(_,o);return v.receiveShadow=!0,v}var th=class{constructor(e){this.group=new B,this.yardGroup=new B,this.townGroup=new B,this.yard={minX:-13,maxX:13,minZ:-27,maxZ:-3},this.colliders={circles:[],boxes:[]},e.add(this.group),e.background=Xm.sky,e.fog=new fe(Xm.sky,60,125);let t=op(Xm.grass,rp(11,1400,.1,.12),.06,.9),n=new Qn;n.moveTo(-200,-200),n.lineTo(200,-200),n.lineTo(200,200),n.lineTo(-200,200),n.closePath();for(let e of Km()){let t=new Gt;e.forEach(([e,n],r)=>r?t.lineTo(e,-n):t.moveTo(e,-n)),t.closePath(),n.holes.push(t)}let r=new p(n,1),i=new F(r,t);i.rotation.x=-Math.PI/2,i.position.y=-.06,i.receiveShadow=!0,this.group.add(i),this.grass1=i,this.grassMat=t,this.group.add(this.townGroup),this.sheetMat=op(`#ffffff`,rp(11,1400,.1,.12),.06,.9),this.sheetMat.vertexColors=!0,this.rimSheetMat=op(`#9b8466`,qm,Jm,1),this.rimSheetMat.vertexColors=!0,this.rimMat=op(`#9b8466`,qm,Jm,1),this.group.add(this.yardGroup);let a=op(Xm.concrete,ap(),.25,.8);this.group.add(Qm(Ym.minX-1.2,Ym.minZ+.3,Ym.maxX+1.2,Ym.maxZ+1.2,2.2,a,-.035)),this.group.add(Qm(-3,Ym.maxZ,3,120,.1,op(`#8d949c`,rp(3,600,.05,.08),.2,.8),-.045));let o=[];for(let e=Ym.maxZ+3;e<90;e+=4){let t=new Ne(.25,2);t.rotateX(-Math.PI/2),t.translate(0,-.03,e),o.push(t)}this.group.add(new F(Bo(o),new Fn({color:`#f4f1e8`})))}setTown(e){this.townGroup.traverse(e=>e.isMesh&&e.geometry.dispose()),this.townGroup.clear();let t=e%2==1;if(this.grass1.visible=!t,!t)return;this.townGroup.add(eh(-72,-114,72,42,1.5,-.06,this.sheetMat,Xm.grass));let n=new Qn;n.moveTo(-220,55.6),n.lineTo(220,55.6),n.lineTo(220,-220),n.lineTo(-220,-220),n.closePath();let r=new Gt;r.moveTo(-71.4,-41.4),r.lineTo(71.4,-41.4),r.lineTo(71.4,55.59),r.lineTo(-71.4,55.59),r.closePath(),n.holes.push(r);let i=new F(new p(n,1),this.grassMat);i.rotation.x=-Math.PI/2,i.position.y=-.06,i.receiveShadow=!0,this.townGroup.add(i);let a=new Qn;a.moveTo(-220,55.800000000000004),a.lineTo(-220,300),a.lineTo(220,300),a.lineTo(220,55.800000000000004),a.closePath();let o=new Gt;o.moveTo(-71.4,55.81),o.lineTo(71.4,55.81),o.lineTo(71.4,113.4),o.lineTo(-71.4,113.4),o.closePath(),a.holes.push(o);let s=new F(new p(a,1),new Wn({color:`#8fa38f`}));s.rotation.x=-Math.PI/2,s.position.y=-z.depth-.05,this.townGroup.add(s)}setYard(e,t){this.yard={...e};for(let e of this.yardGroup.children)e.geometry.dispose();this.yardGroup.clear();let n=$m[(t-1)%$m.length];return this.rimMat.color.set(n[0]),kn%2==1?(this.rimSheetMat.color.set(n[0]),this.yardGroup.add(eh(e.minX-3.4,e.minZ-3.6,e.maxX+3.4,e.maxZ+.6,.5,-.04,this.rimSheetMat,new I(`#ffffff`)))):this.yardGroup.add(Qm(e.minX-3.4,e.minZ-3.6,e.maxX+3.4,e.maxZ+.6,3.2,this.rimMat,-.04,Km())),new I(n[1])}},q={household:0,tyres:1,wood:2,plastic:3,metal:4,appliances:5,construction:6,carparts:7,marine:8},nh=an.length,rh={w:28,d:30},ih=e=>(e-1)%nh,ah=e=>Math.floor((e-1)/nh),oh=e=>({...an[ih(e)]}),sh=(e,t)=>ah(e)*nh+t+1,ch=[{key:1,feature:`start`,features:[{theme:`house`,x:-9.4,z:-9.8},{theme:`house`,x:-4.4,z:-6.6},{theme:`cafe`,x:7.6,z:-8.6,landmark:!0},{theme:`playground`,x:-7.8,z:-21.6},{theme:`house`,x:7.4,z:-21.4}],fill:[`park`],ruin:{kind:`kiosk`,x:7.6,z:-8.6,rot:-.3}},{key:2,feature:`cars`,features:[{theme:`rotunda`,x:-33.2,z:-7.6,landmark:!0},{theme:`flowers`,x:-17.6,z:-7.4},{theme:`shore`,x:-21.2,z:-12.8},{theme:`meadow`,x:-34.6,z:-22.8},{theme:`park`,x:-17.2,z:-23}],fill:[`meadow`],ruin:{kind:`tower`,x:-34.8,z:-22.6,rot:.4}},{key:3,feature:`hills`,features:[{theme:`cafe`,x:19,z:-8.4},{theme:`garden`,x:33.2,z:-8.2},{theme:`flowers`,x:18.4,z:-21.8},{theme:`market`,x:32.6,z:-21.2,landmark:!0}],fill:[`park`],ruin:{kind:`billboard`,x:32.6,z:-21.2,rot:-.25}},{key:4,feature:`tyres`,features:[{theme:`greenhouse`,x:-28,z:9,rot:0,landmark:!0},{theme:`flowers`,x:-36.4,z:15.6,rot:0},{theme:`garden`,x:-20.2,z:16.2},{theme:`meadow`,x:-35.6,z:1.6},{theme:`pond`,x:-19.8,z:1.8}],fill:[`flowers`],ruin:{kind:`greenhouseRuin`,x:-28,z:9,rot:.2}},{key:5,feature:`metal`,features:[{theme:`carousel`,x:28.4,z:9.4,rot:0},{theme:`ferris`,x:34.8,z:1.6,rot:0,landmark:!0},{theme:`cafe`,x:19.4,z:1.4},{theme:`playground`,x:19.2,z:16.8},{theme:`court`,x:35.6,z:17}],fill:[`park`],ruin:{kind:`wheel`,x:34.8,z:1.6,rot:.15}},{key:6,feature:`appliances`,features:[{theme:`apartments`,x:-32.6,z:-34.4,landmark:!0},{theme:`apartments`,x:-19.2,z:-33.2},{theme:`park`,x:-33.4,z:-49.4},{theme:`apartments`,x:-22.4,z:-50.6},{theme:`playground`,x:-16.2,z:-46.6}],fill:[`park`],ruin:{kind:`crane`,x:-22.4,z:-50.6,rot:2.6}},{key:7,feature:`giant`,features:[{theme:`stage`,x:26,z:-49.8,rot:0,landmark:!0},{theme:`cafe`,x:18.4,z:-33},{theme:`park`,x:32.4,z:-32},{theme:`flowers`,x:15.6,z:-46},{theme:`meadow`,x:35.8,z:-44}],fill:[`flowers`],ruin:{kind:`stageRuin`,x:26,z:-49.6,rot:.08}},{key:8,feature:`centre`,features:[{theme:`townhall`,x:0,z:-51.8,rot:0,landmark:!0},{theme:`park`,x:-4.4,z:-30.4},{theme:`flowers`,x:4.8,z:-30.2},{theme:`meadow`,x:-9.6,z:-35.6},{theme:`park`,x:9.6,z:-35.6},{theme:`flowers`,x:-5.4,z:-44.2},{theme:`flowers`,x:5.4,z:-44.2}],fill:[`park`],ruin:{kind:`chimney`,x:0,z:-51.4,rot:0}}],lh=[{key:9,feature:`promenade`,features:[{theme:`iceCafe`,x:7.2,z:-18.8,rot:0,landmark:!0},{theme:`promenade`,x:-7,z:-19.6,rot:0},{theme:`townhouse`,x:-7,z:-7.8},{theme:`playground`,x:7,z:-8}],fill:[`flowers`],ruin:{kind:`vaneSign`,x:7.2,z:-18.8,rot:-.12}},{key:10,feature:`houses`,features:[{theme:`rowHouses`,x:-19.4,z:-21,rot:0,landmark:!0},{theme:`townhouse`,x:-32.6,z:-8.2},{theme:`townhouse`,x:-19.4,z:-8},{theme:`cafe`,x:-32.6,z:-21}],fill:[`flowers`],ruin:{kind:`condemned1`,x:-19.4,z:-21,rot:.06},ruins:[{kind:`condemned2`,x:-32.6,z:-8.2,rot:-.2},{kind:`condemned3`,x:-19.4,z:-8,rot:.15},{kind:`condemned1`,x:-32.6,z:-21,rot:-.1}]},{key:11,feature:`fish`,features:[{theme:`fishMarket`,x:32.8,z:-20.8,rot:0,landmark:!0},{theme:`fishStalls`,x:19.4,z:-20.4},{theme:`fishCafe`,x:32.8,z:-8},{theme:`netRacks`,x:19.4,z:-8}],fill:[`flowers`],ruin:{kind:`marketRoof`,x:32.8,z:-20.8,rot:0}},{key:12,feature:`forest`,features:[{theme:`treehouse`,x:-21.6,z:15.6,rot:0,landmark:!0},{theme:`forestPond`,x:-31.6,z:15.4,rot:0},{theme:`grove`,x:-38.6,z:15.6},{theme:`picnic`,x:-20.6,z:2},{theme:`grove`,x:-33.8,z:2.2}],fill:[`grove`],ruin:{kind:`deadTree2`,x:-21.6,z:15.6,rot:.3},trees:4.2},{key:13,feature:`barge`,features:[{theme:`boathouse`,x:35.2,z:15.4,rot:0,landmark:!0},{theme:`workshop`,x:21,z:15.4},{theme:`dockCrane`,x:33.6,z:2},{theme:`netRacks`,x:19.8,z:2}],fill:[`park`],ruin:{kind:`bargeMid`,x:35.3,z:15.8,rot:0},ruins:[{kind:`bargeBow`,x:31.7,z:15.8,rot:0},{kind:`bargeStern`,x:38.9,z:15.8,rot:0}]},{key:14,feature:`concrete`,features:[{theme:`windmill`,x:-30.4,z:-45.4,rot:0,landmark:!0},{theme:`gazebo`,x:-19.6,z:-48.6},{theme:`meadow`,x:-33,z:-33},{theme:`flowers`,x:-20,z:-33.4}],fill:[`meadow`],ruin:{kind:`hotelFrame`,x:-30.4,z:-45.4,rot:.1}},{key:15,feature:`beach`,features:[{theme:`lifeguard`,x:32.6,z:-47.2,rot:0,landmark:!0},{theme:`umbrellas`,x:20.6,z:-47},{theme:`bandstand`,x:32.8,z:-34,rot:0},{theme:`beachBar`,x:20.4,z:-34}],fill:[`volley`],ruin:{kind:`beachRuin`,x:32.6,z:-47.2,rot:.2}},{key:16,feature:`cape`,features:[{theme:`lighthouse`,x:-4.6,z:-71.4,rot:0,landmark:!0},{theme:`keeperGarden`,x:-8.4,z:-59.6},{theme:`anchorPark`,x:-19.6,z:-71.6},{theme:`flowers`,x:-22.6,z:-58.8}],fill:[`park`],ruin:{kind:`containers`,x:-9.8,z:-73.2,rot:.08}}],uh=e=>e%2==1?lh:ch,dh=e=>uh(ah(e))[ih(e)],fh={start:[`sofa`,`mattress`,`tv`,`fridge`,`washer`,`sofa`],cars:[`car`,`car`,`sofa`,`car`,`drums`,`car`],hills:[`drums`,`safe`,`bathtub`,`car`,`washer`,`safe`],tyres:[`tyreBig`,`car`,`tyreBig`,`tank`,`drums`,`tyreBig`],metal:[`safe`,`tank`,`car`,`safe`,`drums`,`tank`],appliances:[`fridge`,`concrete`,`washer`,`concretePipe`,`stove`,`concrete`,`tv`],giant:[`container`,`concrete`,`bus`,`tank`,`concretePipe`,`safe`],centre:[`bus`,`container`,`safe`,`concrete`,`car`,`tank`,`tyreBig`],promenade:[`boat`,`sofa`,`crates`,`fridge`,`buoy`,`mattress`],houses:[`sofa`,`fridge`,`bathtub`,`washer`,`stove`,`tv`],fish:[`crates`,`boat`,`drums`,`crates`,`anchor`,`buoy`],forest:[`car`,`tyreBig`,`fridge`,`drums`,`sofa`],barge:[`anchor`,`container`,`crates`,`boat`,`tank`,`drums`],concrete:[`concrete`,`concretePipe`,`safe`,`concrete`,`container`,`bus`],beach:[`boat`,`buoy`,`crates`,`tyreBig`,`boat`,`anchor`],cape:[`container`,`anchor`,`tank`,`crates`,`bus`,`safe`]},ph={car:1.25,fridge:.72,washer:.55,sofa:.95,tv:.5,mattress:.95,bathtub:.85,drums:.8,stove:.55,safe:.7,concrete:1.05,concretePipe:.95,tank:1.3,container:2,bus:2.1,tyreBig:1.15,boat:1.35,anchor:.95,crates:.8,buoy:.75},mh=e=>e<=2?1:e<=4?2:e<=6?3:e<=8?4:Math.min(5,4+Math.floor((e-9)/4));function hh(e,t,n){let r=[];for(let i=0;i<e.nz;i+=2)for(let a=0;a<e.nx;a+=2){let o=i*e.nx+a;e.own[o]===t&&e.edge[o]>=n&&r.push({x:e.rect.minX+a*e.cs,z:e.rect.minZ+i*e.cs})}return r}function gh(e){var t;let n=new Wt(7331+e*104729),r=ih(e),i=ah(e),a=dh(e),o=a.feature,s=oh(e),c=kt(r),l=s.maxX-s.minX,u=i%2==1?[q.marine,q.household,q.wood,q.plastic,q.marine,q.household,q.tyres,q.marine]:[q.household,q.plastic,q.wood,q.household,q.tyres,q.plastic,q.appliances,q.wood],d=c.regions.map(e=>({rect:{minX:e.minX,maxX:e.maxX,minZ:e.minZ,maxZ:e.maxZ},theme:`park`,features:[],mix:0,region:e})),f=0;for(let e of a.features){let t=Kn(c,e.x,e.z,!0);t!==255&&d[t]&&(d[t].features.push({theme:e.theme,x:e.x,z:e.z,rot:e.rot}),e.landmark&&(f=t))}let p=0;d.forEach((t,n)=>{t.features.length||t.features.push({theme:a.fill[p++%a.fill.length],x:t.region.px,z:t.region.pz}),t.theme=t.features[0].theme;let r=u[(n+e)%u.length],i=n%2==1;o===`tyres`&&!i&&(r=q.tyres),o===`cars`&&i&&(r=q.carparts),o===`metal`&&i&&(r=q.carparts),o===`appliances`&&(r=i?q.appliances:q.construction),o===`giant`&&i&&(r=q.construction),o===`centre`&&n%3==1&&(r=q.construction),(o===`promenade`||o===`fish`||o===`beach`)&&(r=i?q.marine:o===`beach`?q.plastic:q.household),o===`houses`&&(r=i?q.construction:q.household),o===`forest`&&(r=i?q.wood:q.household),(o===`barge`||o===`cape`)&&(r=i?q.metal:q.marine),o===`concrete`&&(r=i?q.construction:q.household),t.mix=r});let m=[a.ruin,...(t=a.ruins)==null?[]:t].map((e,t)=>{var n;return{kind:e.kind,x:e.x,z:e.z,rot:(n=e.rot)==null?0:n,id:i===0&&t===0?e.kind:e.kind+`:`+t}});if(a.trees){let t=new Wt(4417+e*31);d.forEach((e,n)=>{let r=Math.max(2,Math.round(a.trees*e.region.area/100)),i=hh(c,n,1).filter(e=>lt(e.x,e.z)>.9&&It(e.x,e.z)>1.2),o=0;for(let e=0;e<200&&o<r&&i.length;e++){let e=i[Math.floor(t.next()*i.length)];m.some(t=>Math.hypot(t.x-e.x,t.z-e.z)<(t.kind.startsWith(`deadTree`)?2.3:4.2))||(m.push({kind:t.next()<.55?`deadTree1`:`deadTree2`,x:e.x,z:e.z,rot:t.range(0,Math.PI*2),id:`tree`+n+`:`+o}),o++)}})}let h=e=>e.startsWith(`deadTree`)?.9:e.startsWith(`barge`)?2.4:3.2,g=(e,t,n)=>m.every(r=>Math.hypot(r.x-e,r.z-t)>h(r.kind)+n),_=[],v=mh(e),y=[q.household,q.tyres,q.wood,q.plastic,q.appliances],b=new Set;if(v>1){let e=Math.min(d.length-1,1+Math.floor(d.length/3));for(;b.size<e;)b.add(Math.floor(n.next()*d.length))}let x=e-1+i*3,S=Math.min(3.4,1.05+x*.24),C=Math.min(1.35,1+x*.05);d.forEach((t,r)=>{let i=Math.max(5,t.region.inner*2.2),a=Math.min(i*.36,i*n.range(.2,.28)*C),s=Math.min(i*.33,i*n.range(.18,.25)*C),l=hh(c,r,Math.min(t.region.inner*.7,Math.max(a,s)*.55+.4)).filter(e=>It(e.x,e.z)>Math.max(a,s)+.8&&g(e.x,e.z,Math.max(a,s)*.7)),u=t.region.px,d=t.region.pz;if(l.length){let e=l[Math.floor(n.next()*l.length)];u=e.x,d=e.z}let f=1;b.has(r)&&(f=[...b].indexOf(r)===0?v:Math.max(2,v-1));let p=S*n.range(.85,1.15)*(e===1?.6:o===`forest`?.55:o===`houses`?.75:1);_.push({x:u,z:d,rx:a,rz:s,rot:n.range(-1,1),height:p,mix:f>=2?q.metal:o===`tyres`?q.tyres:y[(r+e)%y.length],hardness:f,seed:100+e*13+_.length,shape:n.chance(.3)?`twin`:`dome`})});let w=(s.minX+s.maxX)/2,T=(s.minZ+s.maxZ)/2,E=(t,r,i,a,o,s=1)=>_.push({x:t,z:r,rx:i,rz:i*n.range(.82,.95),rot:n.range(-1,1),height:a,mix:o,hardness:s,seed:300+e*7+_.length,shape:`dome`,lumpy:.7});e===1&&_.push({x:.4,z:-7.4,rx:2.8,rz:2.3,rot:.25,height:2.1,mix:q.household,hardness:1,seed:991,shape:`dome`,lumpy:.55}),o===`hills`?(E(w-l*.17,T+n.range(-1,1),4.1,4.2,q.household),E(w+l*.19,T+n.range(-1.5,1.5),3.4,3.6,q.plastic)):o===`tyres`?E(w,T,4.6,4.1,q.tyres):o===`giant`?E(w,T+2,6,5.4,q.household):o===`centre`?(E(w,T,5.4,5,q.household),E(w-8,T+6,3.4,3.4,q.plastic),E(w+8,T-6,3.4,3.4,q.wood)):o===`metal`?E(w,T,4,3.4,q.metal,v):o===`appliances`?E(w,T,3.8,3.2,q.appliances):o===`promenade`?E(w-6.5,T+1.5,3.4,3.2,q.marine):o===`fish`?E(w+1,T+.5,4,3.8,q.marine):o===`barge`?E(w-4,T-1,3.8,3.6,q.metal,v):o===`concrete`?(E(w+6,T+6,3.6,3.6,q.construction),E(w-3,T+9,3,3,q.household)):o===`beach`&&(E(w-5,T-3,3.6,3.2,q.plastic),E(w+6,T+5,3.2,3,q.marine));let D=[],O=e*3,k=fh[o],ee=()=>k[O++%k.length],te=o===`start`?1:o===`cars`||o===`appliances`?2.5:2,ne=(e,t,n)=>!_.some(r=>Math.hypot(r.x-e,r.z-t)<Math.max(r.rx,r.rz)+n);return d.forEach((e,t)=>{let r=Math.max(1,Math.round((Math.floor(te+(t%2?.5:0))-(t%2&&te>1?1:0))*Math.min(1.4,Math.max(.7,e.region.area/120))));for(let i=0;i<r;i++){let r=0,a=0,o=!1,s=_.find(e=>Kn(c,e.x,e.z,!0)===t&&e.height<3.6);s&&i===0&&n.chance(.4)&&ph[k[O%k.length]]<1.2&&(r=s.x+n.range(-.4,.4),a=s.z+n.range(-.4,.4),o=!0);let l=ee(),u=ph[l],d=o?[]:hh(c,t,Math.min(e.region.inner*.8,u*.7+.3));for(let e=0;e<40&&!o&&d.length;e++){let e=d[Math.floor(n.next()*d.length)];r=e.x,a=e.z,o=ne(r,a,.4+u)&&g(r,a,u)&&It(r,a)>u+.6&&!D.some(e=>Math.hypot(e.x-r,e.z-a)<1.8+u+ph[e.kind])}o&&D.push({kind:l,x:r,z:a,rot:n.range(0,Math.PI*2),variant:Math.floor(n.next()*4)})}}),{n:e,slot:r,bounds:s,plan:c,plots:d,landmark:f,mounds:_,bigs:D,specials:m,carpet:{base:e===1?.14:Math.min(.38,.17+(e-2)*.028+i*.03),vary:.07,seed:17+e*31},feature:o}}var _h=[`#5fb84a`,`#4fae43`,`#6cc452`,`#7ac95a`],vh=[`#ff6a3d`,`#3a8df0`,`#e0463c`,`#8a5cf0`],yh=[`#fff4e0`,`#ffe9c4`,`#e8f4ff`,`#fff`],bh=[`#f3d9b1`,`#e9c9c0`,`#f6ecc8`,`#d9e4ec`,`#efd5a8`],xh=[`#c9573a`,`#5fa88a`,`#b8483a`,`#6a7f9a`],Sh=new Pt,Ch=new Zn,wh=new L(0,1,0);function Th(e){return ls(Eh(e.geo,e),e.x,e.z,+!!e.soft,e.y)}function Eh(e,t){let n=e.clone();return Sh.compose(new L(t.x,t.y,t.z),Ch.setFromAxisAngle(wh,t.rot),new L(t.s,t.s,t.s)),n.applyMatrix4(Sh),n}function Dh(e,t){let n=new F(e,Ds());return n.userData.shared=!0,n.renderOrder=6,t&&(n.position.set(t.x,t.y,t.z),n.rotation.y=t.rot,n.scale.setScalar(t.s),n.updateMatrix()),n}var Oh=class{constructor(e){this.group=new B,this.plots=[],this.circles=[],this.soft=[],this.pendingCircles=[],this.plazas=null,this.onPop=null,this.onPlace=null,e.add(this.group)}disposeState(e){e.baked&&(this.group.remove(e.baked),e.baked.geometry.dispose()),e.holder&&this.group.remove(e.holder);for(let t of e.spinners)this.group.remove(t)}setup(e,t){for(let e of this.plots)this.disposeState(e);this.plazas&&this.disposeState(this.plazas),this.plazas=null,this.circles.length=0,this.soft.length=0,this.pendingCircles.length=0,this.plots=e.plots.map((t,n)=>({spec:t,done:!1,pieces:Bh(t,e.n*17+n,e.plan,n),anims:[],t:0,baked:null,holder:null,spinners:[]}));for(let e of t)this.plots[e]&&this.finishInstant(this.plots[e])}get doneCount(){return this.plots.filter(e=>e.done).length}isDone(e){var t;return!!((t=this.plots[e])!=null&&t.done)}complete(e,t,n){let r=this.plots[e];r&&!r.done&&this.grow(r,t,n)}growPlazas(e,t,n,r=!1){var i;if(this.plazas)return;let a={spec:(i=this.plots[0])==null?void 0:i.spec,done:!1,pieces:Uh(e),anims:[],t:0,baked:null,holder:null,spinners:[]};this.plazas=a,r?this.finishInstant(a):this.grow(a,t,n)}grow(e,t,n){e.done=!0,e.t=0;let r=new B;this.group.add(r),e.holder=r;for(let a of e.pieces){var i;if(a.r>0&&this.pendingCircles.push({x:a.x,z:a.z,r:a.r}),a.soft&&this.soft.push({x:a.x,z:a.z,r:.6}),!a.geo)continue;a.delay=.5+Math.hypot(a.x-t,a.z-n)*.07+(a.big?.35:0);let o=new F(a.geo,cs());o.position.set(a.x,a.y,a.z),o.rotation.y=a.rot,o.scale.setScalar(.001),o.castShadow=!0,o.receiveShadow=!0,o.visible=!1,r.add(o),a.spin&&Js(a.spin,o,ns(),0,0,0,1),a.glass&&o.add(Dh(a.glass)),e.anims.push({mesh:o,piece:a,started:!1}),(i=this.onPlace)==null||i.call(this,a.x,a.z,a.foot)}}finishInstant(e){e.done=!0;for(let n of e.pieces){var t;n.r>0&&this.circles.push({x:n.x,z:n.z,r:n.r}),n.soft&&this.soft.push({x:n.x,z:n.z,r:.6}),n.geo&&((t=this.onPlace)==null||t.call(this,n.x,n.z,n.foot))}this.bake(e)}bake(e){let t=[];for(let n of e.pieces)if(n.geo&&(t.push(Th(n)),n.spin&&e.spinners.push(Js(n.spin,this.group,ns(),n.x,n.z,n.rot,n.s,n.y)),n.glass)){let t=Dh(n.glass,n);this.group.add(t),e.spinners.push(t)}if(e.holder&&(this.group.remove(e.holder),e.holder=null),e.anims=[],!t.length)return;let n=Bo(t,!1);for(let e of t)e.dispose();n.computeBoundingSphere();let r=new F(n,cs());r.castShadow=!0,r.receiveShadow=!0,this.group.add(r),e.baked=r}update(e,t,n,r){for(let e=this.pendingCircles.length-1;e>=0;e--){let i=this.pendingCircles[e];Math.hypot(i.x-t,i.z-n)>i.r+r+.1&&(this.circles.push(i),this.pendingCircles.splice(e,1))}for(let t of this.plazas?[...this.plots,this.plazas]:this.plots){if(!t.anims.length)continue;t.t+=e;let n=!1;for(let e of t.anims){let r=(t.t-e.piece.delay)/(e.piece.big?.7:.5);if(r<0){n=!0;continue}if(!e.started){var i;e.started=!0,e.mesh.visible=!0,(i=this.onPop)==null||i.call(this,e.piece.x,e.piece.z,e.piece.big)}let a=e.piece.s*Math.max(.001,b(Math.min(1,r),e.piece.big?1.8:2.6));e.mesh.scale.setScalar(a),r<1&&(n=!0)}n||this.bake(t)}}};function kh(e,t){let n=new B,r=[],i=[],a=[],o=e.plots.map((t,n)=>Bh(t,e.n*17+n,e.plan,n));o.push(Uh(e.slot));for(let e of o){let o=[];for(let s of e)s.r>0&&r.push({x:s.x,z:s.z,r:s.r}),s.soft&&i.push({x:s.x,z:s.z,r:.6}),s.geo&&(o.push(Th(s)),s.spin&&Js(s.spin,n,t==null?ns():t,s.x,s.z,s.rot,s.s,s.y),s.glass&&!t&&n.add(Dh(s.glass,s)),a.push({x:s.x,z:s.z,r:s.foot}));if(!o.length)continue;let s=Bo(o,!1);for(let e of o)e.dispose();s.computeBoundingSphere();let c=new F(s,t==null?cs():t);c.castShadow=!t,c.receiveShadow=!t,c.matrixAutoUpdate=!1,n.add(c)}return{group:n,circles:r,foot:a,soft:i}}function Ah(e,t,n,r){return Mh(Bh(e,t,n,r))}function jh(e){return Mh(Uh(e))}function Mh(e){let t=[];for(let n of e)if(n.geo&&n.big&&(t.push(Th(n)),n.glass&&t.push(ls(Eh(n.glass,n),n.x,n.z,0,n.y)),n.spin)){let e=n.spin.geo.clone();Sh.compose(new L(n.x,n.y+n.spin.y*n.s,n.z),Ch.setFromAxisAngle(wh,n.rot),new L(n.s,n.s,n.s)),e.applyMatrix4(Sh),t.push(ls(e,n.x,n.z,0,n.y))}if(!t.length)return null;let n=Bo(t,!1);for(let e of t)e.dispose();return n}function Nh(e){var t;let n=(t=e.features.find(e=>e.theme===`stage`))==null?e.features[0]:t;return{cx:n.x,stageZ:n.z,crowdZ:n.z+4.2,crowdRZ:1.4,crowdRX:2.6,y:R(n.x,n.z)}}var Ph={park:2.3,playground:2.6,house:2.2,pond:3.2,court:3,cafe:2.5,meadow:2,flowers:3.6,rotunda:2.2,market:3.4,greenhouse:3,ferris:2.5,carousel:2.3,stage:3.9,apartments:3.2,townhall:4,monument:3,garden:2.4,shore:0,iceCafe:2.7,promenade:2.8,townhouse:1.9,rowHouses:4.2,fishMarket:4.2,fishStalls:2.7,fishCafe:2.7,netRacks:2.3,treehouse:2.6,grove:2.4,picnic:2.4,forestPond:2.6,boathouse:3.7,workshop:2.4,dockCrane:2.4,windmill:2.6,gazebo:2,lifeguard:3,umbrellas:3,volley:3.2,beachBar:2.4,bandstand:2.5,lighthouse:3,keeperGarden:2.6,anchorPark:2.2},Fh=[`#f2b8a0`,`#8fd0c8`,`#f6d77a`,`#a9c4ef`,`#c9e3a5`,`#f3c6d8`],Ih=[`#4f6070`,`#c9573a`,`#3f5a6b`];function Lh(e,t,n){let r=R(e,t);if(n>.6)for(let i=0;i<6;i++)r=Math.min(r,R(e+Math.cos(i*1.05)*n*.7,t+Math.sin(i*1.05)*n*.7));return r-.03}var Rh={x:0,z:0,path:0,dx:0,dz:0};function zh(e,t){Mt(e,t,Rh);let n=Math.atan2(Rh.x-e,Rh.z-t);return Math.max(-.95,Math.min(.95,n))}function Bh(e,t,n,r){let i=new Wt(t),a=[],o=(e,t,n,r=0,i=1,o=0,s=!1,c=0,l)=>{let u={geo:e,x:t,y:l==null?Lh(t,n,o):l,z:n,rot:r,s:i,r:o,delay:0,big:s,foot:c||Math.max(.45,o),soft:!1};return a.push(u),u},s=(e,t,n,r=0,i=1)=>a.push({geo:e,x:t,y:R(t,n)-.02,z:n,rot:r,s:i,r:0,delay:0,big:!1,foot:.45,soft:!0}),c=[],l=(e,t,n)=>c.every(r=>(r.x-e)**2+(r.z-t)**2>(r.r+n)**2);for(let t of e.features)Vh(t,e,n,i,o,s,c);let u=[],d=[],f=[];for(let e=0;e<n.nz;e+=2)for(let t=0;t<n.nx;t+=2){let i=e*n.nx+t;if(n.own[i]!==r)continue;let a=n.rect.minX+t*n.cs,o=n.rect.minZ+e*n.cs,s=n.edge[i];if(It(a,o)<1)continue;s>=.9&&s<=1.5?u.push({x:a,z:o}):s>3.2&&d.push({x:a,z:o});let c=lt(a,o);c>.3&&c<.62&&f.push({x:a,z:o})}let p=e=>{for(let t=e.length-1;t>0;t--){let n=Math.floor(i.next()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e},m=e.region.area,h=gt(e.region.px,e.region.pz)>.5,g=Math.round(m/(h?80:e.theme===`flowers`||e.theme===`market`?30:20)),_=0,v=[];for(let e of p(f)){if(v.length>=Math.round(m/45)+1)break;l(e.x,e.z,.5)&&!v.some(t=>(t.x-e.x)**2+(t.z-e.z)**2<36)&&(s(ac(),e.x,e.z),c.push({x:e.x,z:e.z,r:.5}),v.push(e))}let y=0;for(let e of f){if(y>=(m>90?2:1))break;if(!l(e.x,e.z,1.2))continue;Mt(e.x,e.z,Rh);let t=e.x-Rh.x,n=e.z-Rh.z,r=Math.hypot(t,n)||1,i=e.x+t/r*.35,a=e.z+n/r*.35;o(ic(),i,a,Math.atan2(-t,-n),1,0,!1,.8),c.push({x:i,z:a,r:1.6}),y++}for(let e of[...p(u),...p(d)]){if(_>=g)break;l(e.x,e.z,1.1)&&(s(i.next()<.35?nc(i.pick([`#3f9a4a`,`#4aa352`])):tc(i.pick(_h)),e.x,e.z,i.next()*6,.85+i.next()*.35),c.push({x:e.x,z:e.z,r:1.6}),_++)}let b=0;for(let e of p([...u,...d])){if(b>=Math.round(m/(h?200:30)))break;l(e.x,e.z,.7)&&(s(rc(i.pick(_h),i.next()<.5?i.pick([`#ff7ab8`,`#ffd23f`,`#ffffff`,`#ff5a4f`]):null),e.x,e.z,i.next()*6,.9+i.next()*.3),c.push({x:e.x,z:e.z,r:1.1}),b++)}return a}function Vh(e,t,n,r,i,a,o){var s,c;let l=e.theme,u=(s=Ph[l])==null?2.2:s,d=Math.max(Nn(n,e.x,e.z),t.region.inner*.6),f=u>0?Math.max(.62,Math.min(1,(d-.2)/u)):1,p=(c=e.rot)==null?zh(e.x,e.z):c,m=Math.cos(p),h=Math.sin(p),g=(t,n)=>[e.x+(t*m+n*h)*f,e.z+(-t*h+n*m)*f],_=(e,t,n)=>{let[r,a]=g(e,t);i(null,r,a,0,1,n*f)},v=Lh(e.x,e.z,u*f),y=(t,n,r=u)=>i(t,e.x,e.z,p,f,n*f,!0,r*f,v);switch(o.push({x:e.x,z:e.z,r:u*f+.6}),l){case`park`:y(oc(),1.5,2.2);for(let e of[-2.9,2.9]){let[t,n]=g(e,0);i(ic(),t,n,p+(e<0?Math.PI/2:-Math.PI/2))}break;case`playground`:y(sc(),2,2.6);break;case`house`:{y(cc(r.pick(vh),r.pick(yh)),1.7,2.1);for(let e of[-1.7,1.7]){let[t,n]=g(e,2.3);i(lc(1.6),t,n,p)}let[e,t]=g(-2.2,1);a(rc(r.pick(_h),`#ff7ab8`),e,t);break}case`pond`:y(uc(),2.2,3.1);break;case`court`:y(dc(),0,2.9);break;case`cafe`:y(vs(),0,2.4),_(-1.3,-1.3,.9);break;case`meadow`:y(ys(Math.min(7,d*1.6),Math.min(7,d*1.6)),0,.6);break;case`flowers`:y(bs(),0,2);break;case`rotunda`:y(xs(),1.9,2.2);break;case`market`:y(Ss(),0,3);for(let[e,t]of[[-1.6,-1.7],[1.6,-1.7],[-1.6,1.5],[1.6,1.5]])_(e,t,.85);break;case`greenhouse`:{let e=y(Cs(),2.7,3);e.glass=ws();break}case`ferris`:{let e=y(Os(),0,2.4);e.spin=ks(),_(-1.4,0,.8),_(1.4,0,.8),_(1.7,.3,.6);break}case`carousel`:{let e=y(As(),2.1,2.3);e.spin=js();break}case`stage`:y(Ns(),0,3);for(let e of[-1.8,0,1.8])_(e,0,1.2);for(let e of[-3.35,3.35])_(e,1,.5);break;case`apartments`:y(Ps(r.pick(bh),r.pick(xh)),0,3);for(let e of[-1.45,0,1.45])_(e,0,1.5);break;case`townhall`:y(Fs(),0,3.6);for(let e of[-2.4,0,2.4])_(e,-.2,1.75);break;case`monument`:y(Is(),1,3);break;case`shore`:Hh(t,n,r,i,a,o);break;case`iceCafe`:y(uf(),1.5,2.7);break;case`promenade`:y(df(),0,2.8),_(0,-1.2,.6);break;case`townhouse`:y(ff(r.pick(Fh),r.pick(Ih),r.next()<.5?2:3,r.next()<.5?`#3f6f8a`:null),1.7,1.9);for(let e of[-1.9,1.9]){let[t,n]=g(e,1.2);a(rc(r.pick(_h),r.pick([`#ff7ab8`,`#ffd23f`,`#ffffff`])),t,n)}break;case`rowHouses`:y(pf(),0,4.2);for(let e of[-2.85,-.95,.95,2.85])_(e,-.1,1.15);break;case`fishMarket`:y(mf(),0,4.2);for(let e of[-2.7,-.9,.9,2.7])_(e,0,1.55);break;case`fishStalls`:y(hf(),0,2.7);for(let[e,t]of[[-1.4,-.7],[1.4,-.7],[0,1.2]])_(e,t,.8);break;case`fishCafe`:y(gf(),0,2.7),_(-1.1,-1,1.15);break;case`netRacks`:y(_f(),0,2.3);for(let e of[-1.2,1.2])_(e,-.1,.85);_(0,2,.9);break;case`treehouse`:y(yf(),.85,2.6);break;case`grove`:y(bf(),0,2.4);break;case`picnic`:y(xf(),0,2.4),_(-1.2,-.6,.8),_(1.4,.4,.8);break;case`forestPond`:y(Sf(),2.3,2.6);break;case`boathouse`:y(wf(),0,3.7);for(let e of[-1.8,0,1.8])_(e,-2,1.4);for(let e of[-.4,.9,2.2])_(0,e,.85);break;case`workshop`:y(Tf(),0,2.4),_(-.8,-.8,1.4),_(1,.9,.9);break;case`dockCrane`:y(Ef(),0,2.4);for(let e of[-1.5,1.5])for(let t of[-.9,.9])_(e,t,.35);_(.2,.3,.85);break;case`windmill`:{let e=y(Of(),1.9,2.6);e.spin=kf();break}case`gazebo`:y(Af(),1.7,2);break;case`lifeguard`:y(jf(),1.2,3);break;case`umbrellas`:y(Mf(),0,3);break;case`volley`:y(Nf(),0,3.2),_(0,-2,.3),_(0,2,.3);break;case`beachBar`:y(Pf(),1.6,2.4);break;case`bandstand`:y(If(),2.3,2.5);break;case`lighthouse`:{let e=y(Rf(),1.5,3);e.spin=zf(),_(2.4,.6,1.3);break}case`keeperGarden`:y(Bf(),0,2.6),_(2.6,-.2,.8);break;case`anchorPark`:y(Hf(),1,2.2);for(let e of[-2.6,2.6]){let[t,n]=g(e,.4);i(ic(),t,n,p+(e<0?Math.PI/2:-Math.PI/2))}break;default:y(fc(),1.2,2.3);{let[e,t]=g(-.4,2.2);i(lc(4.2),e,t,p)}}}function Hh(e,t,n,r,i,a){let o=z,s=Math.PI/2+.35,c=o.x,l=o.z;for(let e=0;e<12&&(c=o.x+Math.cos(s)*e,l=o.z+Math.sin(s)*e,!(It(c,l)>.25));e+=.1);let u=Math.atan2(o.x-c,o.z-l);r(Ls(),c,l,u,1,0,!0,1,o.level+.02),r(Rs(),c+Math.cos(u)*1.3+Math.sin(u)*1.6,l-Math.sin(u)*1.3+Math.cos(u)*1.6,u+.5,1,0,!0,.1,o.level-.04),a.push({x:c,z:l,r:2});let d=0;for(let e=0;e<40;e++){let t=e/40*Math.PI*2+n.next()*.1,s=o.x,c=o.z;for(let e=2;e<12&&(s=o.x+Math.cos(t)*e,c=o.z+Math.sin(t)*e,!(It(s,c)>.35));e+=.15);if(a.every(e=>(e.x-s)**2+(e.z-c)**2>(e.r+.4)**2)&&!(lt(s,c)<.3)){if(e%3==0)i(zs(),s,c,n.next()*6,.9+n.next()*.4);else if(e%7==1&&d<4){let e=s+Math.cos(t)*.5,n=c+Math.sin(t)*.5;if(lt(e,n)<.25)continue;r(ic(),e,n,Math.atan2(o.x-e,o.z-n)),a.push({x:e,z:n,r:1.4}),d++}}}}function Uh(e){let t=[],n=an[e];for(let r of Zt){if(!r.piece||Re(r.x,r.z)!==e||r.x<n.minX||r.x>n.maxX||r.z<n.minZ||r.z>n.maxZ)continue;let i=R(r.x,r.z)-.02,a=Math.min(1,(r.r-.2)/2.2),o=(e,n,a=1)=>t.push({geo:e,x:r.x,y:i,z:r.z,rot:0,s:a,r:n,delay:0,big:!0,foot:r.r,soft:!1});if(r.piece===`fountain`)o(oc(),1.5*a,a);else if(r.piece===`monument`)o(Is(),1,Math.min(1,(r.r-.3)/3));else if(r.piece===`clock`)o(Bs(),.4);else if(r.piece===`statue`)o(Vs(),.8);else if(r.piece===`flowers`)o(Hs(),0,Math.min(1,(r.r-.2)/1.3));else if(r.piece===`sailor`){o(Vf(),1,Math.min(1,(r.r-.4)/2.2));let e=r.z-r.r+.6;t.push({geo:Ls(),x:r.x+1.6,y:z.level+.02,z:e,rot:Math.PI,s:1,r:0,delay:0,big:!0,foot:.4,soft:!1}),t.push({geo:Rs(),x:r.x+3.1,y:z.level-.04,z:e-2,rot:2.6,s:1,r:0,delay:0,big:!0,foot:.1,soft:!1})}else r.piece===`anchor`?o(Hf(),1,Math.min(1,(r.r-.3)/1.6)):r.piece===`compass`&&o(Uf(),0,Math.min(1,(r.r-.1)/2.2))}return t}var Wh=[`#ffffff`,`#ffd23f`,`#ff7ab8`,`#ffffff`,`#9f7bff`,`#ff5a4f`,`#ffe66b`].map(e=>new I(e)),Gh=[`#5fba4e`,`#67c056`,`#57b146`,`#6cc35a`].map(e=>new I(e)),Kh=4;function qh(){let e=[],t=[],n=[];for(let r=0;r<5;r++){let i=r/5*Math.PI*2+r%2*.3,a=Math.cos(i),o=Math.sin(i),s=.07,c=.2+r%3*.05,l=.14;e.push(-o*s,0,a*s,o*s,0,-a*s,a*l,c,o*l);for(let e=0;e<3;e++)t.push(a*.2,.98,o*.2);n.push(.85,.85,.85,.85,.85,.85,1.12,1.12,1.12)}let r=new Tn;return r.setAttribute(`position`,new j(e,3)),r.setAttribute(`normal`,new j(t,3)),r.setAttribute(`color`,new j(n,3)),r}function Jh(){let e=[],t=[],n=[],r=(r,i,a,o)=>{e.push(...r,...i,...a),t.push(...o,...o,...o),n.push(0,1,0,0,1,0,0,1,0)},i=.3,a=[.35,.62,.3];r([-.015,0,0],[.015,0,0],[0,i,0],a),r([0,0,-.015],[0,0,.015],[0,i,0],a),r([0,.06,0],[.12,.12,.03],[.02,.1,0],a),r([0,.08,0],[-.1,.15,-.03],[-.02,.12,0],a);let o=[1,1,1],s=.17;for(let e=0;e<5;e++){let t=e/5*Math.PI*2,n=t+.55,a=(t+n)/2+.3;r([0,i,0],[Math.cos(t)*s*.5,.31,Math.sin(t)*s*.5],[Math.cos(a)*s,.32,Math.sin(a)*s],o),r([0,i,0],[Math.cos(a)*s,.32,Math.sin(a)*s],[Math.cos(n+.5)*s*.5,.31,Math.sin(n+.5)*s*.5],o)}let c=[2,1.7,.2],l=.055;for(let e=0;e<5;e++){let t=e/5*Math.PI*2,n=(e+1)/5*Math.PI*2;r([0,.32999999999999996,0],[Math.cos(n)*l,.325,Math.sin(n)*l],[Math.cos(t)*l,.325,Math.sin(t)*l],c)}let u=new Tn;return u.setAttribute(`position`,new j(e,3)),u.setAttribute(`normal`,new j(n,3)),u.setAttribute(`color`,new j(t,3)),u}var Yh=null;function Xh(){if(Yh)return Yh;let e=new Wn({vertexColors:!0,side:2});return Yh=e,e.onBeforeCompile=e=>{e.fragmentShader=e.fragmentShader.replace(`#include <normal_fragment_begin>`,`#include <normal_fragment_begin>
  normal = normalize( vNormal );`),e.fragmentShader=e.fragmentShader.replace(`#include <color_fragment>`,`#if defined( USE_COLOR ) && defined( USE_INSTANCING_COLOR )
  diffuseColor.rgb = vColor.r > 1.2 ? vec3(1.0, 0.82, 0.12) : vColor.rgb;
#else
#include <color_fragment>
#endif`),e.vertexShader=e.vertexShader.replace(`#include <color_vertex>`,`#include <color_vertex>
#if defined( USE_COLOR ) && defined( USE_INSTANCING_COLOR )
  vColor.rgb = color.r > 1.2 ? color.rgb : color.rgb * instanceColor.rgb;
#endif`)},e.customProgramCacheKey=()=>`bloom-v1`,e}var Zh=new Pt,Qh=new Zn,$h=new L,eg=new L,tg=new L(0,1,0);function ng(e,t){let n=new rg(null,1500);return n.populate(e,void 0,.95),n.growAll(t),n.detachStatic()}var rg=class{constructor(e,t=2600){this.cap=t,this.group=new B,this.spots=[],this.grid=new Map,this.growing=[],this.gx0=0,this.gz0=0,this.gcx=1,this.time=0,this.onFlower=null,e==null||e.add(this.group);let n=Xh();this.tufts=new yn(qh(),n,t),this.flowers=new yn(Jh(),n,Math.ceil(t*.5));for(let e of[this.tufts,this.flowers])e.count=0,e.frustumCulled=!1,e.castShadow=!1,e.receiveShadow=!0,e.instanceMatrix.setUsage(C),e.setColorAt(0,Gh[0]),this.group.add(e)}populate(e,t,n=.72){this.spots=[],this.grid.clear(),this.growing=[],this.tufts.count=0,this.flowers.count=0;let r=e.bounds;this.gx0=r.minX,this.gz0=r.minZ,this.gcx=Math.ceil((r.maxX-r.minX)/Kh)+1;let i=new Wt(e.n*977+5),a=(e,t)=>lt(e,t)<.15||It(e,t)<.55,o=0,s=0,c=Math.ceil(this.cap*.5);for(let t=r.minZ+.3;t<r.maxZ-.2;t+=n)for(let l=r.minX+.3;l<r.maxX-.2;l+=n){let r=l+(i.next()-.5)*n,u=t+(i.next()-.5)*n;if(a(r,u))continue;let d=Math.sin(r*.7+e.n)*Math.cos(u*.6-e.n)>.45,f=i.next()<(d?.24:.03);if(f?s>=c:o>=this.cap)continue;f?s++:o++;let p={x:r,z:u,y:R(r,u),flower:f,color:Math.floor(i.next()*(f?Wh.length:Gh.length)),s:f?.85+i.next()*.5:.8+i.next()*.6,rot:i.next()*Math.PI*2,zone:Kn(e.plan,r,u),inst:-1};this.spots.push(p);let m=this.key(r,u),h=this.grid.get(m);h||this.grid.set(m,h=[]),h.push(p)}}key(e,t){return Math.floor((t-this.gz0)/Kh)*this.gcx+Math.floor((e-this.gx0)/Kh)}check(e,t,n,r){let i=Math.floor((t-r-this.gx0)/Kh),a=Math.floor((t+r-this.gx0)/Kh),o=Math.floor((n-r-this.gz0)/Kh),s=Math.floor((n+r-this.gz0)/Kh);for(let t=o;t<=s;t++)for(let n=i;n<=a;n++){let r=this.grid.get(t*this.gcx+n);if(r)for(let t of r)t.inst>=0||e.heightAt(t.x,t.z)>.025||this.grow(t,.35+Math.random()*.5)}}bloomZone(e,t,n,r=9){for(let i of this.spots)i.zone===e&&i.inst<0&&this.grow(i,.4+Math.hypot(i.x-t,i.z-n)/r+Math.random()*.3)}syncWithField(e){for(let t of this.spots)t.inst<0&&e.heightAt(t.x,t.z)<=.025&&this.grow(t,-10);this.update(0)}growAll(e){for(let t of this.spots){if(!e(t.x,t.z))continue;let n=t.flower?this.flowers:this.tufts;t.inst=n.count++,$h.set(t.x,t.y,t.z),Qh.setFromAxisAngle(tg,t.rot),n.setMatrixAt(t.inst,Zh.compose($h,Qh,eg.setScalar(t.s))),n.setColorAt(t.inst,t.flower?Wh[t.color]:Gh[t.color])}}detachStatic(){let e=new B;for(let t of[this.tufts,this.flowers])t.count&&(t.instanceMatrix.setUsage(vn),t.instanceMatrix.needsUpdate=!0,t.instanceColor&&(t.instanceColor.needsUpdate=!0),t.computeBoundingSphere(),t.frustumCulled=!0,e.add(t));return e}clearCircle(e,t,n){for(let r of this.spots){if((r.x-e)**2+(r.z-t)**2>n*n||(r.s=0,r.inst<0))continue;let i=r.flower?this.flowers:this.tufts;i.setMatrixAt(r.inst,Zh.makeScale(0,0,0)),i.instanceMatrix.needsUpdate=!0}}grow(e,t){if(e.s<=0)return;let n=e.flower?this.flowers:this.tufts;e.inst=n.count++,n.setMatrixAt(e.inst,Zh.makeScale(0,0,0)),n.setColorAt(e.inst,e.flower?Wh[e.color]:Gh[e.color]),n.instanceColor.needsUpdate=!0,this.growing.push({spot:e,t:-t})}update(e){if(this.time+=e,!this.growing.length)return;let t=!1,n=!1;for(let i=this.growing.length-1;i>=0;i--){var r;let a=this.growing[i],o=a.t;if(a.t+=e,a.t<0)continue;let s=a.spot;o<0&&s.flower&&a.t<.5&&((r=this.onFlower)==null||r.call(this,s.x,s.z,Wh[s.color]));let c=Math.min(1,a.t/.45),l=s.s*Math.max(0,b(c,2.4));$h.set(s.x,s.y,s.z),Qh.setFromAxisAngle(tg,s.rot),Zh.compose($h,Qh,eg.set(l,l,l)),(s.flower?this.flowers:this.tufts).setMatrixAt(s.inst,Zh),s.flower?n=!0:t=!0,c>=1&&this.growing.splice(i,1)}t&&(this.tufts.instanceMatrix.needsUpdate=!0),n&&(this.flowers.instanceMatrix.needsUpdate=!0)}};function J(e){let t=new H;return e(t),t.build()}function ig(e){return J(t=>{let n=new re(.3,7,5),r=n.attributes.position;for(let e=0;e<r.count;e++){let t=r.getX(e),n=r.getY(e),i=r.getZ(e),a=1+(Math.sin(t*11+i*7)*.5+Math.cos(n*9+t*5)*.5)*.1;r.setXYZ(e,t*a*1.05,n*a*.76,i*a*.92)}n.computeVertexNormals(),t.add(n,e,U(0,.21,0)),t.add(new rn(.075,.16,4),e,U(.02,.48,0))})}function ag(e,t){return J(n=>{n.cyl(.085,.085,.3,e,U(0,.085,-.03),[Math.PI/2,0,0],6),n.cyl(.045,.06,.1,t,U(0,.085,.16),[Math.PI/2,0,0],5)})}function og(e,t){return J(n=>{let r=t?.55:1;n.add(new In(.075,.075,.2,6,1),e,U(0,.075*r,0),[Math.PI/2,0,0],U(1,r,1)),n.add(new Mn(.07,6),K.silver,U(0,.075*r,.107),void 0,U(1,r,1))})}function sg(e,t,n=1){return J(r=>{let i=.52*n,a=.36*n,o=.42*n;r.box(i,a,o,e,U(0,a/2,0),0),t?(r.box(i*.86,.02,o*.86,`#5c3d1e`,U(0,a+.002,0),0),r.box(i,.025,o*.5,e,U(0,a+.08,o*.62),0,[.9,0,0]),r.box(i,.025,o*.5,e,U(0,a+.08,-o*.62),0,[-.9,0,0])):r.box(.1*n,a+.014,o+.014,K.tape,U(0,a/2,0),0)})}function cg(e){return J(t=>{t.add(new P(.32,.14,4,8),K.tire,U(0,.13,0),[Math.PI/2,0,Math.PI/8],U(1,1,1.15)),e&&t.add(new Mn(.2,7),K.tireHub,U(0,.16,0),[-Math.PI/2,0,0])})}function lg(e){return J(t=>{t.box(1.05,.07,.17,e,U(0,.035,0),0)})}function ug(){return J(e=>{e.add(new ce(.13,0),K.paper,U(0,.1,0))})}function dg(){return J(e=>{e.box(.46,.03,.34,K.newsprint,U(0,.015,0),0),e.add(new Ne(.36,.08),`#6e6e6e`,U(0,.037,-.1),[-Math.PI/2,0,0])})}function fg(){return J(e=>{e.box(.46,.06,.46,`#e4cb97`,U(0,.03,0),0),e.add(new Mn(.11,6),`#d9433a`,U(0,.068,0),[-Math.PI/2,0,0])})}function pg(e){return J(t=>{e?(t.box(.36,.04,.36,`#ff7a1a`,U(0,.02,0),0),t.cyl(.035,.15,.5,`#ff7a1a`,U(0,.29,0),void 0,6),t.cyl(.075,.11,.1,`#ffffff`,U(0,.28,0),void 0,6)):(t.cyl(.035,.15,.5,`#ff7a1a`,U(0,.14,0),[Math.PI/2,0,0],6),t.cyl(.075,.11,.1,`#ffffff`,U(0,.14,-.01),[Math.PI/2,0,0],6))})}function mg(e){return J(t=>{t.add(new In(.19,.15,.32,7,1,!0),e,U(0,.17,0),[Math.PI/2-.25,0,0]),t.add(new Mn(.15,7),e,U(0,.13,-.16),[Math.PI/2+.25,0,0])})}function hg(e){return J(t=>{t.box(.5,.06,.46,e,U(0,.3,.02),0,[-1.3,0,0]),t.box(.5,.42,.06,e,U(0,.08,-.28),0,[-1.3,0,0]),t.box(.05,.05,.42,e,U(-.2,.45,.1),0),t.box(.05,.05,.42,e,U(.2,.45,.1),0)})}function gg(e,t){return J(n=>{let r=t?[Math.PI/2,0,0]:void 0,i=t?.26:.34;n.cyl(.26,.26,.68,e,U(0,i,0),r,8);let a=new I(e).multiplyScalar(.7);n.add(new In(.27,.27,.05,8,1,!0),a,t?U(0,i,.12):U(0,i+.12,0),r)})}function _g(){return J(e=>{e.cyl(.08,.08,1.3,`#8f99a4`,U(0,.08,0),[0,0,Math.PI/2],6)})}function vg(e){return J(t=>{t.box(.8,.03,.55,e,U(-.1,.1,0),0,[0,0,.25]),t.box(.4,.03,.55,e,U(.36,.1,0),0,[0,0,-.35]),t.add(new Ne(.2,.22),K.rust,U(-.2,.135,.1),[-Math.PI/2,.25,0])})}function yg(){return J(e=>{e.add(new P(.13,.045,3,6,Math.PI*.9),K.banana,U(0,.04,0),[Math.PI/2,0,0])})}function bg(){return J(e=>{e.box(.16,.22,.16,`#5b3b24`,U(0,.11,-.06),0),e.box(.16,.08,.3,`#5b3b24`,U(0,.04,.02),0)})}function xg(e){return J(t=>{let n=new I(e).multiplyScalar(.72);t.box(1.9,.62,3.7,e,U(0,.62,0),.12),t.box(1.66,.55,1.8,e,U(0,1.18,-.2),.14),t.box(1.5,.4,.06,`#27313d`,U(0,1.2,.72),0,[.35,0,0]),t.box(1.5,.4,.06,`#9fc3d8`,U(0,1.2,-1.12),0,[-.35,0,0]),t.box(.06,.34,1.4,`#27313d`,U(.84,1.2,-.2),0),t.box(.06,.34,1.4,`#9fc3d8`,U(-.84,1.2,-.2),0),t.box(1.94,.18,.16,`#8a8f96`,U(0,.42,1.88),0),t.box(1.94,.18,.16,`#8a8f96`,U(0,.42,-1.88),0),t.box(.3,.14,.05,`#fff2b8`,U(-.6,.7,1.86),0),t.box(.3,.14,.05,`#e04a3a`,U(.6,.7,-1.86),0),t.box(.7,.03,.9,K.rust,U(-.4,.94,1.1),0,[0,.3,0]),t.box(.5,.03,.6,`#8f4a24`,U(.45,1.46,-.4),0,[0,-.4,0]),t.box(.04,.3,1,n,U(.96,.6,.8),0);for(let[e,n,r]of[[-.92,1.2,1],[.92,1.2,.7],[-.92,-1.25,1]])t.cyl(.36,.36,.26,K.tire,U(e,.36*r,n),[0,0,Math.PI/2],10),t.cyl(.18,.18,.28,`#aeb4bb`,U(e,.36*r,n),[0,0,Math.PI/2],8);t.box(.3,.3,.3,`#3a3d44`,U(.92,.2,-1.25),0)})}function Sg(e){return J(t=>{t.box(.82,.72,1.7,e,U(0,.36,0),.08),t.box(.8,.02,.02,`#9aa1a8`,U(0,.725,.35),0),t.box(.08,.05,.36,`#9aa1a8`,U(.3,.75,-.05),0),t.box(.08,.05,.22,`#9aa1a8`,U(.3,.75,.6),0),t.box(.3,.02,.24,`#e0463c`,U(-.18,.73,.62),0)})}function Cg(e){return J(t=>{t.box(.8,.84,.76,e,U(0,.42,0),.07),t.cyl(.27,.27,.06,`#9aa1a8`,U(0,.44,.38),[Math.PI/2,0,0],14),t.cyl(.2,.2,.07,`#2b3440`,U(0,.44,.4),[Math.PI/2,0,0],14),t.box(.7,.12,.05,`#c9ced4`,U(0,.76,.37),0),t.cyl(.04,.04,.03,`#e0463c`,U(.24,.76,.4),[Math.PI/2,0,0],6)})}function wg(e){return J(t=>{let n=new I(e).multiplyScalar(.8);t.box(2,.4,.9,n,U(0,.26,0),.08),t.box(1.6,.2,.7,e,U(0,.55,.08),.08),t.box(2,.6,.25,e,U(0,.66,-.34),.08),t.box(.24,.52,.93,e,U(-.9,.5,0),.08),t.box(.24,.52,.93,e,U(.9,.5,0),.08),t.box(.5,.06,.3,`#e9e2cf`,U(.3,.66,.15),0,[0,.4,0])})}function Tg(e){return J(t=>{t.box(.8,.62,.66,e,U(0,.31,0),.06),t.box(.62,.46,.04,`#26313b`,U(-.02,.33,.34),0),t.box(.3,.14,.04,`#a8d8f0`,U(-.12,.44,.365),0,[0,0,.4]),t.cyl(.015,.015,.5,`#9aa1a8`,U(-.12,.8,-.1),[0,0,.5],4),t.cyl(.015,.015,.5,`#9aa1a8`,U(.12,.8,-.1),[0,0,-.5],4)})}function Eg(e){return J(t=>{t.box(1.9,.22,1.3,e,U(0,.14,0),.08,[0,0,.08]);for(let e=-2;e<=2;e++)t.box(.08,.235,1.32,`#ffffff`,U(e*.36,.14,0),0,[0,0,.08]);t.box(.3,.05,.4,K.rust,U(.4,.27,.2),0)})}function Dg(){return J(e=>{e.box(1.7,.5,.8,`#f2f1ec`,U(0,.36,0),.14),e.box(1.5,.05,.6,`#b8d8e6`,U(0,.6,0),0);for(let[t,n]of[[-.65,-.28],[.65,-.28],[-.65,.28],[.65,.28]])e.cyl(.06,.04,.14,`#d9b44a`,U(t,.07,n),void 0,6);e.cyl(.03,.03,.12,`#c9ced4`,U(-.72,.68,0),void 0,6)})}function Og(){return J(e=>{let t=(t,n,r,i,a=0)=>{let o=gg(r,i);e.addColored(o,U(t,0,n),[0,a,0]),o.dispose()};t(-.34,-.2,K.canBlue,!1),t(.34,-.1,K.canRed,!1),t(0,.5,K.canYellow,!0,1.2)})}function kg(){return J(e=>{e.box(.8,.86,.7,`#f2f1ec`,U(0,.43,0),0);for(let[t,n]of[[-.2,-.15],[.2,-.15],[-.2,.15],[.2,.15]])e.cyl(.11,.11,.03,`#2b2d31`,U(t,.875,n),void 0,10);e.box(.62,.4,.04,`#2b3440`,U(0,.4,.36),0),e.box(.6,.04,.04,`#aeb4bb`,U(0,.66,.38),0)})}function Ag(){return J(e=>{e.box(1,.95,1,`#4a5560`,U(0,.48,0),.06),e.box(.86,.06,.86,`#5d6a77`,U(0,.97,0),.02),e.box(.08,.7,.7,`#3a434c`,U(.53,.48,0),.02),e.cyl(.14,.14,.06,`#c8cdd4`,U(.58,.55,.05),[0,0,Math.PI/2],10),e.box(.04,.2,.05,`#c8cdd4`,U(.6,.55,.05),0),e.box(.05,.12,.18,`#d9b44a`,U(.56,.3,-.22),0),e.box(.6,.03,.4,K.rust,U(-.1,.97,.2),0,[0,.4,0])})}function jg(){return J(e=>{e.box(1.9,.5,1.3,`#a9a59c`,U(0,.25,0),.04,[0,0,.06]),e.box(.9,.42,.8,`#bab6ac`,U(.55,.62,-.1),.04,[.15,.3,-.12]);for(let t=0;t<5;t++)e.cyl(.025,.025,.7,K.rust,U(-.8+t*.35,.6,.45-t%2*.9),[.4*(t%2?1:-1),0,.3],4);e.box(.5,.04,.5,`#8f8b82`,U(-.5,.51,-.2),0)})}function Mg(){return J(e=>{let t=new In(.8,.8,1.7,16,1,!0);t.rotateZ(Math.PI/2),e.add(t,`#b5b0a5`,U(0,.8,0));let n=new In(.62,.62,1.7,16,1,!0);n.rotateZ(Math.PI/2),n.scale(1,-1,1),e.add(n,`#7d786f`,U(0,.8,0));for(let t of[-.85,.85])e.add(new l(.62,.8,16),`#c9c4b8`,U(t,.8,0),[0,t>0?Math.PI/2:-Math.PI/2,0])})}function Ng(){return J(e=>{e.cyl(.75,.75,2.4,`#9a5a34`,U(0,.75,0),[0,0,Math.PI/2],14),e.sphere(.75,`#8f5230`,U(1.2,.75,0),U(.35,1,1),10),e.sphere(.75,`#8f5230`,U(-1.2,.75,0),U(.35,1,1),10);for(let t of[-.7,0,.7])e.cyl(.77,.77,.08,`#6b3a20`,U(t,.75,0),[0,0,Math.PI/2],14);e.cyl(.18,.2,.3,`#5b3a24`,U(.3,1.55,0),void 0,8),e.box(.8,.03,.6,`#c27a3a`,U(-.5,1.46,.2),0,[.3,.2,0])})}function Pg(){return J(e=>{e.box(4.4,1.9,1.95,`#c9473a`,U(0,.95,0),.04);for(let t=0;t<11;t++){let n=-2+t*.4;e.box(.12,1.7,.04,`#a8382c`,U(n,.95,.99),0),e.box(.12,1.7,.04,`#a8382c`,U(n,.95,-.99),0)}e.box(4.42,.12,1.98,`#8a2e24`,U(0,1.88,0),0),e.box(.06,1.8,1.9,`#9a3a2e`,U(2.21,.95,0),0);for(let t of[-.45,.45])e.box(.04,1.6,.06,`#c8cdd4`,U(2.25,.95,t),0);e.box(1.4,.04,1.2,K.rust,U(-.8,1.93,.1),0,[0,.3,0]),e.box(.9,.5,.05,`#e6e3dc`,U(.6,1.3,1.025),0)})}function Fg(){return J(e=>{e.box(2,1.7,5.2,`#e8b53a`,U(0,1.05,0),.14),e.box(2.04,.3,5.24,`#f2f1ec`,U(0,1.62,0),.06);for(let t=0;t<5;t++){let n=-1.9+t*.85;for(let r of[-1.02,1.02])e.box(.05,.55,.7,t%2?`#27313d`:`#9fc3d8`,U(r,1.35,n),0)}e.box(1.7,.6,.06,`#27313d`,U(0,1.35,2.6),0),e.box(2.04,.22,.2,`#8a8f96`,U(0,.38,2.62),0);for(let[t,n]of[[-1,1.7],[1,1.7],[-1,-1.7]])e.cyl(.42,.42,.3,K.tire,U(t,.42,n),[0,0,Math.PI/2],10),e.cyl(.2,.2,.32,`#aeb4bb`,U(t,.42,n),[0,0,Math.PI/2],8);e.box(1,.03,1.6,K.rust,U(.3,1.9,-.8),0,[0,.2,0]),e.box(.9,.03,1,`#8f4a24`,U(-.4,1.9,1.4),0,[0,-.3,0])})}function Ig(){return J(e=>{e.add(new P(.85,.42,8,18),K.tire,U(0,.42,0),[Math.PI/2,0,0]);for(let t=0;t<14;t++){let n=t/14*Math.PI*2;e.box(.22,.1,.5,`#1f2124`,U(Math.cos(n)*.95,.82,Math.sin(n)*.95),0,[0,-n,0])}e.cyl(.45,.45,.4,`#d9b44a`,U(0,.42,0),void 0,12),e.cyl(.18,.18,.44,`#6a6f77`,U(0,.42,0),void 0,8)})}function Lg(e){return J(t=>{t.box(.36,.14,.18,e,U(0,.07,0),.02),t.box(.36,.14,.18,e,U(.06,.21,.02),.02,[0,.4,0])})}function Rg(){return J(e=>{e.add(new D(.22,0),`#aaa69d`,U(0,.16,0),[.4,.7,0],U(1.3,.8,1)),e.cyl(.015,.015,.4,K.rust,U(.12,.26,0),[.3,0,.8],4)})}function zg(){return J(e=>{e.cyl(.28,.28,.12,`#c8cdd4`,U(0,.06,0),void 0,10),e.cyl(.12,.12,.14,`#6a6f77`,U(0,.07,0),void 0,8);for(let t=0;t<5;t++){let n=t/5*Math.PI*2;e.box(.18,.13,.05,`#9aa1a8`,U(Math.cos(n)*.17,.085,Math.sin(n)*.17),0,[0,-n,0])}})}function Bg(){return J(e=>{e.box(.5,.4,.34,`#d9d6cc`,U(0,.2,0),.04),e.box(.4,.3,.03,`#26313b`,U(0,.22,.18),0),e.box(.3,.06,.24,`#bdbab0`,U(0,.03,-.035),0)})}function Vg(){return J(e=>{let t=new re(.32,7,5),n=t.attributes.position;for(let e=0;e<n.count;e++){let t=n.getX(e),r=n.getY(e),i=n.getZ(e),a=1+Math.sin(t*13+i*9)*.14;n.setXYZ(e,t*a*1.25,r*a*.45,i*a)}t.computeVertexNormals(),e.add(t,`#3f8f88`,U(0,.12,0)),e.sphere(.07,`#ff8a2a`,U(.22,.2,.08),1,5),e.sphere(.07,`#ff8a2a`,U(-.18,.18,-.1),1,5)})}function Hg(){return J(e=>{e.sphere(.15,`#ff7a2a`,U(0,.14,0),U(1,1.15,1),6),e.cyl(.16,.16,.06,`#ffffff`,U(0,.14,0),void 0,6),e.cyl(.02,.02,.12,`#3d434d`,U(0,.33,0),void 0,4)})}function Ug(e){return J(t=>{t.box(.56,.22,.4,e,U(0,.11,0),.02),t.box(.48,.02,.32,`#e8f0f6`,U(0,.215,0),0);for(let e of[-.29,.29])t.box(.03,.08,.16,`#2a2c31`,U(e,.16,0),0)})}function Wg(){return J(e=>{e.add(new P(.2,.06,4,9),`#d9b27a`,U(0,.06,0),[Math.PI/2,0,0]),e.add(new P(.13,.05,4,8),`#c9a067`,U(.02,.15,0),[Math.PI/2,0,.2])})}function Gg(e){return J(t=>{t.sphere(1,e,U(0,.32,0),U(.62,.42,1.4),10),t.box(1.1,.06,2.4,`#b0875a`,U(0,.62,0),.03,[.06,0,.12]),t.box(1,.05,.22,`#8f6a43`,U(0,.5,.3),0),t.box(1,.05,.22,`#8f6a43`,U(0,.5,-.5),0),t.box(.5,.3,.06,`#2b2f36`,U(.55,.36,-.2),0,[0,Math.PI/2,0]),t.box(.08,.04,2.2,`#c9a067`,U(.1,.72,.1),0,[0,.5,.2]),t.box(.22,.04,.4,`#c9a067`,U(.62,.74,1.05),0,[0,.5,.2])})}function Kg(){return J(e=>{let t=`#5b5048`;e.box(.2,.2,1.8,t,U(0,.12,0),.04),e.box(1.3,.16,.16,t,U(0,.12,-.7),.03),e.add(new P(.62,.11,4,12,Math.PI),t,U(0,.12,.62),[Math.PI/2,0,0]);for(let t of[-1,1])e.add(new rn(.17,.36,3),K.rust,U(t*.64,.14,.75),[Math.PI/2,0,t*.3]);e.add(new P(.16,.05,4,8),t,U(0,.12,-1.02),[Math.PI/2,0,0]);for(let t=0;t<6;t++)e.add(new P(.1,.035,3,6),`#6a6f77`,U(.3+t*.16,.06,-1.15-t*.05),[Math.PI/2,0,t%2?Math.PI/2:0])})}function qg(){return J(e=>{let t=[`#4f86d8`,`#ff8a2a`,`#4f86d8`,`#35c46a`,`#e8453c`];[[-.3,.17,-.2,.1],[.32,.17,.1,-.2],[-.25,.17,.42,.3],[0,.5,0,.25],[.38,.17,-.5,.6]].forEach(([n,r,i,a],o)=>{e.box(.62,.32,.46,t[o%t.length],U(n,r,i),.03,[0,a,o===3?.25:0]),e.box(.54,.02,.38,`#e8f0f6`,U(n,r+.165,i),0,[0,a,o===3?.25:0])});for(let t=0;t<4;t++)e.sphere(.08,`#c7d3dc`,U(-.5+t*.3,.06,.75),U(1.7,.5,.7),5)})}function Jg(){return J(e=>{e.sphere(.6,`#e8453c`,U(0,.55,0),U(1,.85,1),10),e.cyl(.62,.62,.22,`#ffffff`,U(0,.6,0),void 0,12),e.cyl(.08,.08,1,`#3d434d`,U(.3,1.3,0),[0,0,-.4],6);for(let t=0;t<4;t++)e.box(.05,.6,.05,`#3d434d`,U(.42+Math.cos(t*1.57)*.2,1.55,Math.sin(t*1.57)*.2),0,[0,0,-.4]);e.sphere(.12,`#ffd23f`,U(.62,1.95,0),1,6)})}var Yg=[],Xg={};function Y(e){Xg[e.name]=Yg.length,Yg.push(e)}var Zg=!1;function Qg(){Zg||(Zg=!0,Y({name:`bag`,r:.33,variants:[K.bagBlack,K.bagBlack,K.bagBlue,K.bagWhite,K.bagGreen,K.bagYellow].map(ig),chips:[K.bagBlack,K.bagBlue]}),Y({name:`bottle`,r:.2,flat:!0,variants:[ag(K.bottlePet,K.capRed),ag(K.bottleGreen,K.silver),ag(K.bottleBrown,K.canYellow),ag(K.bottlePet,K.capBlue)]}),Y({name:`can`,r:.15,flat:!0,variants:[og(K.canRed,!1),og(K.canYellow,!1),og(K.canBlue,!0),og(K.canGreen,!1),og(K.canRed,!0)]}),Y({name:`box`,r:.36,variants:[sg(K.cardboard,!1),sg(K.cardboard2,!0),sg(K.cardboard,!1,.75),sg(`#d9b27a`,!0,.8)]}),Y({name:`tire`,r:.4,flat:!0,variants:[cg(!1),cg(!0)]}),Y({name:`plank`,r:.45,flat:!0,variants:[lg(K.wood),lg(K.wood2)]}),Y({name:`paper`,r:.16,variants:[ug()]}),Y({name:`news`,r:.25,flat:!0,variants:[dg()]}),Y({name:`pizza`,r:.28,flat:!0,variants:[fg()]}),Y({name:`cone`,r:.25,variants:[pg(!0),pg(!1)]}),Y({name:`bucket`,r:.22,variants:[mg(K.capRed),mg(K.capBlue),mg(K.canYellow)]}),Y({name:`chair`,r:.35,variants:[hg(`#f2f1ec`),hg(`#4fae5a`),hg(`#e0563c`)]}),Y({name:`drum`,r:.32,variants:[gg(K.canBlue,!0),gg(K.canRed,!1),gg(K.canYellow,!0)]}),Y({name:`pipe`,r:.5,flat:!0,variants:[_g()]}),Y({name:`sheet`,r:.42,flat:!0,variants:[vg(`#9aa3ad`),vg(`#7fa7c9`)]}),Y({name:`banana`,r:.14,flat:!0,variants:[yg()]}),Y({name:`boot`,r:.18,variants:[bg()]}),Y({name:`brick`,r:.22,variants:[Lg(`#b8573a`),Lg(`#c96a45`),Lg(`#a8a49a`)]}),Y({name:`chunk`,r:.26,variants:[Rg()]}),Y({name:`rim`,r:.3,flat:!0,variants:[zg()]}),Y({name:`monitor`,r:.3,variants:[Bg()]}),Y({name:`net`,r:.36,flat:!0,variants:[Vg()]}),Y({name:`floatBuoy`,r:.16,variants:[Hg()]}),Y({name:`fishBox`,r:.32,variants:[Ug(`#4f86d8`),Ug(`#ff8a2a`),Ug(`#35c46a`)]}),Y({name:`rope`,r:.22,flat:!0,variants:[Wg()]}),Y({name:`car`,big:`car`,r:1.25,volume:4.5,tough:1.5,material:`metal`,variants:[`#cf5a4c`,`#5a88bd`,`#6aa86c`,`#dbb54a`].map(xg),chips:[`#cf5a4c`,`#8a8f96`,K.rust,`#27313d`]}),Y({name:`fridge`,big:`fridge`,r:.72,volume:1.6,variants:[`#f2f1ec`,`#e9e2cf`,`#a8dcc8`,`#f2f1ec`].map(Sg),chips:[`#f2f1ec`,`#9aa1a8`]}),Y({name:`washer`,big:`washer`,r:.55,volume:1.2,variants:[`#f2f1ec`,`#e9e2cf`,`#f2f1ec`,`#dfe6ea`].map(Cg),chips:[`#f2f1ec`,`#2b3440`]}),Y({name:`sofa`,big:`sofa`,r:.95,volume:1.6,variants:[`#d9a33a`,`#c9564a`,`#5f9a6a`,`#8a6a4a`].map(wg),chips:[`#d9a33a`,`#e9e2cf`]}),Y({name:`tv`,big:`tv`,r:.5,volume:.8,variants:[`#8a5a3a`,`#6f7680`,`#8a5a3a`,`#4b4f58`].map(Tg),chips:[`#8a5a3a`,`#26313b`]}),Y({name:`mattress`,big:`mattress`,r:.95,volume:1,variants:[`#9cc9e8`,`#e8c9d8`,`#9cc9e8`,`#dfe6ea`].map(Eg),chips:[`#9cc9e8`,`#ffffff`]}),Y({name:`bathtub`,big:`bathtub`,r:.85,volume:1.4,variants:[Dg()],chips:[`#f2f1ec`,`#b8d8e6`]}),Y({name:`drums`,big:`drums`,r:.8,volume:1.6,tough:1.4,material:`metal`,variants:[Og()],chips:[K.canBlue,K.canRed,K.canYellow]}),Y({name:`stove`,big:`stove`,r:.55,volume:1.2,variants:[kg()],chips:[`#f2f1ec`,`#2b2d31`]}),Y({name:`safe`,big:`safe`,r:.7,volume:2,tough:3.2,material:`steel`,variants:[Ag()],chips:[`#4a5560`,`#c8cdd4`,K.rust]}),Y({name:`concrete`,big:`concrete`,r:1.05,volume:2.6,tough:3,material:`concrete`,variants:[jg()],chips:[`#a9a59c`,`#bab6ac`,K.rust]}),Y({name:`concretePipe`,big:`concretePipe`,r:.95,volume:2.4,tough:2.6,material:`concrete`,variants:[Mg()],chips:[`#b5b0a5`,`#7d786f`]}),Y({name:`tank`,big:`tank`,r:1.3,volume:3.6,tough:2.4,material:`steel`,variants:[Ng()],chips:[`#9a5a34`,`#6b3a20`,K.rust]}),Y({name:`container`,big:`container`,r:2,volume:8,tough:2.1,material:`steel`,variants:[Pg()],chips:[`#c9473a`,`#8a2e24`,K.rust]}),Y({name:`bus`,big:`bus`,r:2.1,volume:7,tough:2,material:`metal`,variants:[Fg()],chips:[`#e8b53a`,`#27313d`,`#8a8f96`]}),Y({name:`tyreBig`,big:`tyreBig`,r:1.15,volume:2.4,tough:2.2,material:`rubber`,variants:[Ig()],chips:[K.tire,`#1f2124`,`#d9b44a`]}),Y({name:`boat`,big:`boat`,r:1.35,volume:2.6,tough:1.2,variants:[`#3a7ac2`,`#e8453c`,`#3fae8a`,`#f2ecdc`].map(Gg),chips:[`#3a7ac2`,`#b0875a`,`#e8453c`]}),Y({name:`anchor`,big:`anchor`,r:.95,volume:1.8,tough:3,material:`steel`,variants:[Kg()],chips:[`#5b5048`,K.rust,`#6a6f77`]}),Y({name:`crates`,big:`crates`,r:.8,volume:1.4,variants:[qg()],chips:[`#4f86d8`,`#ff8a2a`,`#35c46a`]}),Y({name:`buoy`,big:`buoy`,r:.75,volume:1.4,tough:1.6,material:`metal`,variants:[Jg()],chips:[`#e8453c`,`#ffffff`,`#3d434d`]}))}var $g={0:[[`bag`,6],[`bottle`,3],[`can`,3],[`box`,3],[`paper`,2],[`news`,2],[`pizza`,1],[`banana`,1],[`bucket`,1],[`tire`,1],[`plank`,1],[`boot`,.5]],1:[[`tire`,8],[`bag`,2],[`can`,1],[`bottle`,1],[`drum`,1],[`boot`,.5]],2:[[`plank`,5],[`box`,4],[`chair`,2],[`bag`,2],[`news`,1],[`paper`,1]],3:[[`bag`,5],[`bottle`,4],[`bucket`,2],[`cone`,2],[`chair`,1.5],[`can`,1]],4:[[`pipe`,4],[`sheet`,4],[`drum`,2],[`can`,2],[`tire`,1]],5:[[`box`,4],[`bag`,2],[`drum`,1],[`sheet`,1],[`can`,2],[`pipe`,1],[`bucket`,1],[`monitor`,2]],6:[[`brick`,6],[`chunk`,4],[`plank`,2],[`cone`,2],[`pipe`,2],[`bag`,1],[`bucket`,1]],7:[[`rim`,4],[`tire`,4],[`sheet`,3],[`drum`,2],[`can`,1],[`pipe`,1]],8:[[`net`,4],[`floatBuoy`,3],[`fishBox`,3],[`bottle`,3],[`rope`,2],[`can`,2],[`bag`,2],[`plank`,1],[`boot`,1]]};new Pt;var e_=new Zn,t_=new L,n_=new L,r_=new Xt,i_=[`#ffffff`,`#fff4e6`,`#eef4ff`,`#f6f1e8`,`#e8e2d8`],a_=[`#4fae43`,`#5fb84a`,`#58b04a`,`#6cc452`],o_={...En,maxZ:En.maxZ+.8},s_=class{constructor(e){this.group=new B,this.districts=[],this.walls=new B,this.trees=new B,this.allowed=[],this.circles=[],this.soft=[],this.current=1,this.currentGreen=!1,this.plans=[],Qg(),e.add(this.group),this.group.add(this.walls,this.trees),this.buildTrees()}get town(){return ah(this.current)}greenCurrent(){this.currentGreen=!0,this.buildWalls()}rebuildTrees(){this.trees.traverse(e=>e.isMesh&&e.geometry.dispose()),this.trees.clear(),this.buildTrees()}setup(e){this.currentGreen=!1;for(let e of this.districts)this.disposeDistrict(e);this.districts=[],this.current=e;for(let t=0;t<nh;t++){let n=sh(e,t),r={n,slot:t,state:n<e?`built`:n===e?`current`:`locked`,L:gh(n),group:new B,circles:[],soft:[],jf:null};this.group.add(r.group),this.districts.push(r),this.dress(r)}this.refresh()}advance(e){if(ah(e)!==ah(this.current))return this.setup(e),!0;let t=this.districts[ih(this.current)];t.state=`built`,this.dress(t),this.current=e;let n=this.districts[ih(e)];return n.state=`current`,this.currentGreen=!1,this.dress(n),this.refresh(),!1}district(e){return this.districts[ih(e)]}get builtCount(){return this.districts.filter(e=>e.state===`built`).length}release(e){var t;e.blueprint&&(e.blueprint.dispose(),this.plans=this.plans.filter(t=>t!==e.blueprint),e.blueprint=null),e.group.traverse(e=>{let t=e;t.isMesh&&(t.geometry!==Mp().geo&&!t.userData.shared&&t.geometry.dispose(),t.userData.ownMaterial&&t.material.dispose())}),(t=e.jf)==null||t.dispose(),e.jf=null,e.group.clear()}disposeDistrict(e){this.release(e),e.group.removeFromParent()}dress(e){this.release(e),e.circles=[],e.soft=[],e.state===`built`?this.dressBuilt(e):e.state===`locked`&&this.dressLocked(e)}dressBuilt(e){let t=e.L,n=t.bounds,r=n.maxX-n.minX,i=n.maxZ-n.minZ,a=new Ne(r,i,Math.round(r*2),Math.round(i*2));a.rotateX(-Math.PI/2),a.translate((n.minX+n.maxX)/2,0,(n.minZ+n.maxZ)/2);let o=a.attributes.position;for(let e=0;e<o.count;e++)o.setY(e,R(o.getX(e),o.getZ(e))-.012);a.computeVertexNormals(),a.computeBoundingSphere();let s=new F(a,Cp());s.receiveShadow=!0,s.matrixAutoUpdate=!1,e.group.add(s);let c=kh(t);e.group.add(c.group),e.circles=c.circles,e.soft=c.soft,e.group.add(ng(t,(e,t)=>!c.foot.some(n=>(n.x-e)**2+(n.z-t)**2<n.r*n.r)))}dressLocked(e){let t=e.L,n=t.bounds,r=new pp(n.minX,n.minZ,n.maxX-n.minX,n.maxZ-n.minZ,1.25),i=$m[(t.n-1)%$m.length];r.setGroundTheme(i[1],bp,xp),r.uniforms.uSat.value=.4,r.uniforms.uContrast.value=.45,r.uniforms.uGrey.value=1,r.generate(t),r.group.traverse(e=>e.isMesh?e.castShadow=!1:0),r.noShadows=!0,e.group.add(r.group),e.jf=r;let a=t.plots[t.landmark];if(kn%2==1&&e.slot===nh-1&&a){let t=a.features[0],n=new F(Rf(!0),ns());n.userData.shared=!0,n.position.set(t.x,R(t.x,t.z)+Math.min(1.2,r.surfaceAt(t.x,t.z)-R(t.x,t.z))*.5,t.z),n.castShadow=!0,e.group.add(n);return}let o=a&&Ah(a,t.n*17+t.landmark,t.plan,t.landmark);if(o){o.computeBoundingBox();let n=o.boundingBox,i=0;for(let e=0;e<=4;e++)for(let t=0;t<=4;t++)i=Math.max(i,r.surfaceAt(n.min.x+(n.max.x-n.min.x)*e/4,n.min.z+(n.max.z-n.min.z)*t/4));let a=Math.max(0,Math.min(3.4,i*.85)+.2-n.min.y),s=n.max.x-n.min.x+1.6,c=n.max.z-n.min.z+1.6,l=new ym(o,{key:`lm`+t.slot,base:n.min.y,sheet:{x:(n.min.x+n.max.x)/2,z:(n.min.z+n.max.z)/2,w:s,d:c,y:n.min.y+.03}});l.group.position.y=a,l.instant(.9),e.group.add(l.group),this.plans.push(l),e.blueprint=l}}setVision(e){for(let t of this.plans)t.target=e>0?1:.9,e>0&&t.redraw()}planGroups(){return this.plans.map(e=>e.group)}hidePlans(e){for(let t of this.plans)t.target=e?0:.9;if(e)for(let e of this.plans)e.instant(0)}updateBlueprints(e){for(let t of this.plans)t.update(e)}refresh(){let e=[o_];this.circles=[],this.soft=[];for(let t of this.districts)t.state!==`locked`&&(e.push(t.L.bounds),t.state===`built`&&(this.circles.push(...t.circles),this.soft.push(...t.soft)));this.allowed=e,this.buildWalls()}buildWalls(){this.walls.traverse(e=>{let t=e;t.isMesh&&t.geometry!==Mp().geo&&t.geometry.dispose()}),this.walls.clear();let e=[{r:En,kind:`base`}];for(let t of this.districts)t.state!==`locked`&&e.push({r:t.L.bounds,kind:t.state});let t=(t,n)=>e.some(e=>t>e.r.minX&&t<e.r.maxX&&n>e.r.minZ&&n<e.r.maxZ),n=(e,t)=>this.districts.some(n=>n.state===`locked`&&e>n.L.bounds.minX&&e<n.L.bounds.maxX&&t>n.L.bounds.minZ&&t<n.L.bounds.maxZ),r=new Wt(4242+this.current),{geo:i,mat:a}=Mp(),o=[],s=[],c=[],l=new H,u=(e,t,n)=>{let i=r.next();if(i<.6){let i=1+Math.floor(r.next()*2.6);for(let a=0;a<i;a++){let i=1.1+r.next()*.25;t_.set(e+(r.next()-.5)*.2,i/2+a*i*.98,t+(r.next()-.5)*.2),e_.setFromEuler(r_.set(0,n+(r.next()-.5)*.3,0)),n_.set(i,i*.95,i),o.push(new Pt().compose(t_,e_,n_)),s.push(new I(i_[Math.floor(r.next()*i_.length)]).multiplyScalar(.85+r.next()*.2))}}else if(i<.88){let n=2+Math.floor(r.next()*4);for(let i=0;i<n;i++)t_.set(e+(r.next()-.5)*.15,.18+i*.3,t+(r.next()-.5)*.15),e_.setFromEuler(r_.set(Math.PI/2+(r.next()-.5)*.12,0,(r.next()-.5)*.12)),c.push(new Pt().compose(t_,e_,n_.setScalar(1)))}else{let n=r.pick([`#3a78c2`,`#d9463b`,`#e0a92a`,`#4f9a52`]);l.cyl(.38,.38,1,n,U(e-.3,.5,t),void 0,12),l.cyl(.4,.4,.06,`#2f343c`,U(e-.3,.72,t),void 0,12),l.cyl(.38,.38,1,n,U(e+.45,.5,t+.2),void 0,12)}},d=(e,t,n,r,i)=>{let a=Math.hypot(n-e,r-t),o=(e+n)/2,s=(t+r)/2,c=Math.atan2(n-e,r-t)+Math.PI/2,u=(n-e)/a,d=(r-t)/a;l.box(.14,1.7,.14,`#3d434d`,U(e,.85,t),.02),l.box(.2,.1,.2,`#ffcf3c`,U(e,1.74,t),.02),l.box(a,.07,.07,`#9aa3ad`,U(o,1.55,s),0,[0,c,0]),l.box(a,.07,.07,`#9aa3ad`,U(o,.62,s),0,[0,c,0]),l.box(a-.1,.9,.02,`#c9d1da`,U(o,1.08,s),0,[0,c,0]);for(let e=1;e<4;e++){let t=e/4-.5;l.box(.04,.92,.05,`#8b95a2`,U(o+u*a*t,1.08,s+d*a*t),0)}for(let e=0;e<4;e++){let t=(e+.5)/4-.5;l.box(a/4,.42,.06,e%2?`#26282c`:`#ffcf3c`,U(o+u*a*t,.3,s+d*a*t),0,[0,c,0])}if(i%5==2){let e=-d*.5,t=u*.5;for(let n=0;n<5;n++){let r=(n+.5)/5-.5;l.box(a*.18,.18,.08,n%2?`#ffffff`:`#e8333a`,U(o+u*a*.9*r-e,.55,s+d*a*.9*r-t),0,[0,c,0])}l.box(.07,.55,.07,`#3d434d`,U(o-e,.28,s-t),0)}},f=(e,t)=>{l.add(new ce(.62,1),r.pick(a_),U(e+(r.next()-.5)*.2,.5+r.next()*.12,t+(r.next()-.5)*.2),void 0,U(1.15,.85+r.next()*.2,1.15)),r.next()<.35&&l.sphere(.08,r.pick([`#ff7ab8`,`#ffffff`,`#ffd23f`]),U(e+(r.next()-.5)*.6,.95,t+(r.next()-.5)*.6),1,5)},p=0;for(let r of e){let e=r.r,i=[[e.minX,e.minZ,e.maxX,e.minZ,0,-1],[e.minX,e.maxZ,e.maxX,e.maxZ,0,1],[e.minX,e.minZ,e.minX,e.maxZ,-1,0],[e.maxX,e.minZ,e.maxX,e.maxZ,1,0]];for(let[e,a,o,s,c,m]of i){if(r.kind===`base`&&m===1)continue;let i=Math.hypot(o-e,s-a),h=0,g=-1,_=t=>{if(g<0)return;let n=Math.max(1,Math.round((t-g)/2.2)),r=t=>e+(o-e)*t/i+c*.35,u=e=>a+(s-a)*e/i+m*.35;for(let e=0;e<n;e++){let i=g+(t-g)*e/n,a=g+(t-g)*(e+1)/n;d(r(i),u(i),r(a),u(a),p++)}l.box(.14,1.7,.14,`#3d434d`,U(r(t),.85,u(t)),.02),l.box(.2,.1,.2,`#ffcf3c`,U(r(t),1.74,u(t)),.02),g=-1};for(let l=.25;l<i;l+=.25){let d=e+(o-e)*l/i,p=a+(s-a)*l/i,v=d+c*.4,y=p+m*.4;if(!t(v,y)&&n(v,y)){g<0&&(g=Math.max(0,l-.25)),h=0;continue}if(_(l-.25),t(v,y)){h=0;continue}if(It(d+c*1,p+m*1)<1){h=0;continue}let b=r.kind===`current`&&!this.currentGreen,x=b?1.35:.9;if(h>0){h-=.25;continue}h=x,b?u(d+c*1.1,p+m*1.1,m===0?0:Math.PI/2):f(d+c*1,p+m*1)}_(i)}}if(o.length){let e=new yn(i,a,o.length);o.forEach((t,n)=>{e.setMatrixAt(n,t),e.setColorAt(n,s[n])}),e.receiveShadow=!0,e.computeBoundingSphere(),this.walls.add(e)}if(c.length){let e=new P(.42,.17,4,8),t=new yn(e,new Wn({color:`#34373d`}),c.length);c.forEach((e,n)=>t.setMatrixAt(n,e)),t.computeBoundingSphere(),this.walls.add(t)}let m=new F(l.build(),ns());m.receiveShadow=!0,this.walls.add(m)}buildTrees(){let e=new Wt(777),t=new Map,n=(e,n)=>{let r=Math.floor(e/20)+`:`+Math.floor(n/20),i=t.get(r);return i||t.set(r,i=new H),i},r=[`#5fb84a`,`#4ea63f`,`#6cc452`,`#7fcf5a`],i=(t,i,a)=>{let o=n(t,i);o.cyl(.14*a,.2*a,1.1*a,`#8a5a3b`,U(t,.55*a,i),void 0,5);let s=e.pick(r);e.next()<.45?(o.add(new ce(1.05*a,0),s,U(t,1.75*a,i),[e.next(),e.next(),0]),o.add(new ce(.7*a,0),new I(s).multiplyScalar(1.12),U(t+.35*a,2.3*a,i+.2*a),[e.next(),0,e.next()])):(o.cyl(0,1*a,1.5*a,s,U(t,1.6*a,i),void 0,7),o.cyl(0,.78*a,1.25*a,new I(s).multiplyScalar(1.1),U(t,2.3*a,i),void 0,7),o.cyl(0,.52*a,.9*a,new I(s).multiplyScalar(1.2),U(t,2.9*a,i),void 0,7))},a=(t,r,i)=>{n(t,r).add(new D(.5*i,0),e.pick([`#9aa1a8`,`#b3b7bb`,`#8c9299`]),U(t,.25*i,r),[e.next()*3,e.next()*3,0],U(1.2,.7,1))},o=bn,s=0;for(let t=0;t<900&&s<230;t++){let t=e.range(o.minX-24,o.maxX+24),n=e.range(o.minZ-24,o.maxZ+30);if(t>o.minX-3.5&&t<o.maxX+3.5&&n>o.minZ-3.5&&n<o.maxZ+3||Math.abs(t)<3.8&&n>En.maxZ||n>En.maxZ&&n<o.maxZ+3&&Math.abs(t)<15)continue;let r=It(t,n);if(r<1.6)continue;let c=e.range(.85,1.45);if(r<6){e.next()<.5?a(t,n,c):i(t,n,c*.9),s++;continue}e.next()<.84?i(t,n,c):a(t,n,c),s++}for(let e of t.values()){let t=new F(e.build(),ns());t.castShadow=!0,this.trees.add(t)}}lockedDistricts(){return this.districts.filter(e=>e.state===`locked`)}},c_=new Pt,l_=new Zn,u_=new Xt,d_=new L;new L;var f_=class{constructor(e,t=220){this.max=t,this.chips=[],this.next=0,this.wasAny=!1;let n=new ht(1,1,1),r=new Wn({color:16777215});this.mesh=new yn(n,r,t),this.mesh.instanceMatrix.setUsage(C),this.mesh.frustumCulled=!1,this.mesh.castShadow=!1;let i=new I(1,1,1);for(let e=0;e<t;e++)this.chips.push({alive:!1,p:new L,v:new L,rot:new L,rv:new L,life:0,max:1,size:new L(1,1,1)}),this.mesh.setMatrixAt(e,c_.makeScale(0,0,0)),this.mesh.setColorAt(e,i);this.mesh.count=t,e.add(this.mesh)}spawn(e,t,n,r,i=1.1){let a=this.next;this.next=(this.next+1)%this.max;let o=this.chips[a];o.alive=!0,o.p.copy(e),o.v.copy(t),o.rot.set(Math.random()*6,Math.random()*6,Math.random()*6),o.rv.set((Math.random()-.5)*16,(Math.random()-.5)*16,(Math.random()-.5)*16),o.life=0,o.max=i*(.7+Math.random()*.6);let s=Math.random();o.size.set(r*(.6+s),r*(.35+Math.random()*.5),r*(.5+Math.random()*.9)),this.mesh.setColorAt(a,n),this.mesh.instanceColor.needsUpdate=!0,this.mesh.visible=!0}update(e){let t=!1;for(let n=0;n<this.max;n++){let r=this.chips[n];if(!r.alive)continue;if(t=!0,r.life+=e,r.life>=r.max){r.alive=!1,this.mesh.setMatrixAt(n,c_.makeScale(0,0,0));continue}r.v.y-=22*e,r.p.addScaledVector(r.v,e);let i=r.p.y<3?en(r.p.x,r.p.z)+.05:.05;r.p.y<i&&(r.p.y=i,r.v.y*=-.35,r.v.x*=.6,r.v.z*=.6,r.rv.multiplyScalar(.6)),r.rot.addScaledVector(r.rv,e);let a=1-Math.max(0,(r.life-r.max*.6)/(r.max*.4));d_.copy(r.size).multiplyScalar(a),l_.setFromEuler(u_.set(r.rot.x,r.rot.y,r.rot.z)),this.mesh.setMatrixAt(n,c_.compose(r.p,l_,d_))}t?this.mesh.instanceMatrix.needsUpdate=!0:this.mesh.visible&&!this.wasAny&&(this.mesh.visible=!1),this.wasAny=t}},p_=class{constructor(e,t=300,n=!1){this.cap=t,this.next=0,this.idle=!1,this.alpha0=new Float32Array(t),this.pos=new Float32Array(t*3),this.col=new Float32Array(t*4),this.size=new Float32Array(t),this.vel=new Float32Array(t*3),this.life=new Float32Array(t).fill(1),this.max=new Float32Array(t).fill(1),this.base=new Float32Array(t),this.grow=new Float32Array(t),this.grav=new Float32Array(t);let r=new Tn;r.setAttribute(`position`,new fn(this.pos,3).setUsage(C)),r.setAttribute(`aColor`,new fn(this.col,4).setUsage(C)),r.setAttribute(`aSize`,new fn(this.size,1).setUsage(C));let i=new Le({uniforms:{uScale:{value:400}},vertexShader:`
        attribute vec4 aColor; attribute float aSize; varying vec4 vColor; uniform float uScale;
        void main() {
          vColor = aColor;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = aSize * uScale / -mv.z;
          gl_Position = projectionMatrix * mv;
        }`,fragmentShader:`
        varying vec4 vColor;
        void main() {
          vec2 d = gl_PointCoord - 0.5;
          float r = dot(d, d) * 4.0;
          float a = smoothstep(1.0, 0.35, r);
          if (a * vColor.a < 0.01) discard;
          gl_FragColor = vec4(vColor.rgb, vColor.a * a);
        }`,transparent:!0,depthWrite:!1,blending:n?2:1});this.points=new ue(r,i),this.points.frustumCulled=!1,this.points.renderOrder=5,e.add(this.points)}setScale(e){this.points.material.uniforms.uScale.value=e}spawn(e,t,n,r,i,a,o=1.5,s=0){let c=this.next;this.next=(this.next+1)%this.cap,this.pos[c*3]=e.x,this.pos[c*3+1]=e.y,this.pos[c*3+2]=e.z,this.vel[c*3]=t.x,this.vel[c*3+1]=t.y,this.vel[c*3+2]=t.z,this.col[c*4]=n.r,this.col[c*4+1]=n.g,this.col[c*4+2]=n.b,this.col[c*4+3]=r,this.alpha0[c]=r,this.base[c]=i,this.grow[c]=o,this.life[c]=0,this.max[c]=a,this.grav[c]=s,this.points.visible=!0,this.idle=!1}update(e){if(this.idle)return;let t=0;for(let n=0;n<this.cap;n++){if(this.life[n]>=this.max[n]){this.size[n]=0;continue}t++,this.life[n]+=e;let r=Math.min(1,this.life[n]/this.max[n]);this.vel[n*3+1]-=this.grav[n]*e;let i=Math.exp(-2.2*e);this.vel[n*3]*=i,this.vel[n*3+2]*=i,this.pos[n*3]+=this.vel[n*3]*e,this.pos[n*3+1]+=this.vel[n*3+1]*e,this.pos[n*3+2]+=this.vel[n*3+2]*e,this.size[n]=this.base[n]*(1+(this.grow[n]-1)*r),this.col[n*4+3]=this.alpha0[n]*(r<.15?r/.15:1-(r-.15)/.85),r>=1&&(this.size[n]=0)}let n=this.points.geometry;n.attributes.position.needsUpdate=!0,n.attributes.aColor.needsUpdate=!0,n.attributes.aSize.needsUpdate=!0,t||(this.idle=!0,this.points.visible=!1)}};function m_(){let e=new Qn;return e.moveTo(0,.62),e.quadraticCurveTo(.05,.66,.1,.56),e.lineTo(.5,-.26),e.quadraticCurveTo(.54,-.36,.42,-.36),e.lineTo(-.42,-.36),e.quadraticCurveTo(-.54,-.36,-.5,-.26),e.lineTo(-.1,.56),e.quadraticCurveTo(-.05,.66,0,.62),e}var h_=class{constructor(e){this.arrow=new B,this.marker=new B,this.t=0,this.vis=0,this.mvis=0,this.target=null,this.color=new I(`#2fbf71`),this.markerOn=!0,this.dir=0;let t=m_(),n=new p(t,4);n.rotateX(-Math.PI/2),this.fillMat=new Fn({color:`#ffffff`,transparent:!0,depthTest:!1,depthWrite:!1}),this.edgeMat=new Fn({color:this.color,transparent:!0,depthTest:!1,depthWrite:!1});let r=new F(n,this.fillMat);r.scale.set(.62,1,.62),r.position.set(0,.01,-.02),r.renderOrder=41;let i=new F(n,this.edgeMat);i.renderOrder=40;let a=new B;a.add(i,r),a.scale.setScalar(.95),this.arrow.add(a),e.add(this.arrow);let o=new Qn;o.moveTo(0,-.7),o.lineTo(.55,.05),o.lineTo(.22,.05),o.lineTo(.22,.6),o.lineTo(-.22,.6),o.lineTo(-.22,.05),o.lineTo(-.55,.05),o.closePath();let s=new Te(o,{depth:.25,bevelEnabled:!0,bevelSize:.05,bevelThickness:.05,bevelSegments:1});s.translate(0,0,-.125),this.markerMat=new Fn({color:this.color});let c=new F(s,this.markerMat),l=new F(s,new Fn({color:`#ffffff`}));l.scale.setScalar(.7),l.position.z=.1,this.marker.add(c,l),this.marker.scale.setScalar(1.1),e.add(this.marker)}setColor(e){this.color.set(e),this.edgeMat.color.copy(this.color),this.markerMat.color.copy(this.color)}update(e,t,n,r=2.6,i=1.8,a){this.t+=e;let o=0,s=0;if(this.target){let c=this.target.x-t.x,l=this.target.z-t.z;o=+(Math.hypot(c,l)>4.2),s=+!!this.markerOn;let u=Math.atan2(c,l)-this.dir;for(;u>Math.PI;)u-=Math.PI*2;for(;u<-Math.PI;)u+=Math.PI*2;this.dir+=u*Math.min(1,e*10);let d=a?Math.sin(this.dir)*a.x+Math.cos(this.dir)*a.z:0,f=(d>=0?1.15+(r-1.15)*d*d:1.15+(i-1.15)*d*d)+.95+Math.sin(this.t*6)*.14;this.arrow.position.set(t.x+Math.sin(this.dir)*f,t.y+.08,t.z+Math.cos(this.dir)*f),this.arrow.rotation.y=this.dir+Math.PI,this.marker.position.set(this.target.x,3.2+Math.sin(this.t*4)*.35,this.target.z),this.marker.rotation.y=Math.atan2(n.position.x-this.target.x,n.position.z-this.target.z)}this.vis+=(o-this.vis)*Math.min(1,e*8),this.mvis+=(s-this.mvis)*Math.min(1,e*8),this.arrow.visible=this.vis>.02,this.fillMat.opacity=this.vis,this.edgeMat.opacity=this.vis,this.arrow.scale.setScalar(.5+this.vis*.5),this.marker.visible=this.mvis>.02,this.marker.scale.setScalar(1.1*this.mvis)}},g_=class{constructor(e){this.group=new B,e.add(this.group),this.buildBaseProps()}buildBaseProps(){let e=new H,t=(t,n)=>{e.cyl(.07,.09,3.2,`#59616d`,U(t,1.6,n),void 0,8),e.box(.7,.12,.26,`#59616d`,U(t+.3,3.2,n),.04),e.box(.36,.08,.22,`#fff3b0`,U(t+.5,3.13,n),.03)};t(Ym.minX+.7,-1.9),t(Ym.maxX-1.3,-1.9);for(let t of[-9.5,9.5])e.cyl(.05,.26,.62,`#ff7a1a`,U(t,.31,-2.2),void 0,10),e.cyl(.18,.2,.1,`#ffffff`,U(t,.32,-2.2),void 0,10),e.box(.55,.05,.55,`#ff7a1a`,U(t,.03,-2.2),.02);let n=(t,n,r)=>{e.box(1.2,.14,1,`#c8955e`,U(t,.07,n),.02),e.box(.55,.5,.45,r,U(t-.25,.39,n-.2),.04),e.box(.5,.45,.45,r,U(t+.3,.37,n+.2),.04)};n(Ym.maxX-1.5,11.5,`#c9a36a`),n(Ym.minX+1.5,11.5,`#6f9fd8`);let r=new F(e.build(),ns());r.castShadow=!0,r.receiveShadow=!0,this.group.add(r)}},__=8,v_=new Pt,y_=new Zn,b_=new Zn,x_=new L,S_=new L,C_=new L,w_=new L(0,1,0),T_=new L,E_=class{constructor(e,t){this.maxV=e,this.maxI=t,this.nv=0,this.ni=0,this.pos=new Float32Array(e*3),this.nrm=new Float32Array(e*3),this.col=new Float32Array(e*3),this.idx=new Uint32Array(t);let n=new Tn;n.setAttribute(`position`,new fn(this.pos,3).setUsage(C)),n.setAttribute(`normal`,new fn(this.nrm,3).setUsage(C)),n.setAttribute(`color`,new fn(this.col,3).setUsage(C)),n.setIndex(new fn(this.idx,1).setUsage(C)),n.setDrawRange(0,0),this.geo=n,this.mesh=new F(n,ns()),this.mesh.frustumCulled=!1,this.mesh.castShadow=!0}begin(){this.nv=0,this.ni=0}push(e,t,n,r,i=0){let a=e.attributes.position.array,o=e.attributes.normal.array,s=e.attributes.color.array,c=e.index.array,l=a.length/3;if(this.nv+l>this.maxV||this.ni+c.length>this.maxI)return!1;v_.compose(t,n,C_.setScalar(r));let u=v_.elements,d=this.nv*3;for(let e=0;e<l;e++){let t=a[e*3],r=a[e*3+1],c=a[e*3+2];this.pos[d+e*3]=u[0]*t+u[4]*r+u[8]*c+u[12],this.pos[d+e*3+1]=u[1]*t+u[5]*r+u[9]*c+u[13],this.pos[d+e*3+2]=u[2]*t+u[6]*r+u[10]*c+u[14],T_.set(o[e*3],o[e*3+1],o[e*3+2]).applyQuaternion(n),this.nrm[d+e*3]=T_.x,this.nrm[d+e*3+1]=T_.y,this.nrm[d+e*3+2]=T_.z,this.col[d+e*3]=s[e*3]+(1-s[e*3])*i,this.col[d+e*3+1]=s[e*3+1]+(1-s[e*3+1])*i,this.col[d+e*3+2]=s[e*3+2]+(1-s[e*3+2])*i}for(let e=0;e<c.length;e++)this.idx[this.ni+e]=c[e]+this.nv;return this.nv+=l,this.ni+=c.length,!0}end(){let e=this.geo;if(e.setDrawRange(0,this.ni),this.mesh.visible=this.ni>0,!this.ni)return;for(let t of[`position`,`normal`,`color`]){let n=e.attributes[t];n.clearUpdateRanges(),n.addUpdateRange(0,this.nv*3),n.needsUpdate=!0}let t=e.index;t.clearUpdateRanges(),t.addUpdateRange(0,this.ni),t.needsUpdate=!0}},D_=class{constructor(e){this.group=new B,this.items=[],this.bigs=[],this.chunks=[],this.ccx=0,this.ccz=0,this.cx0=0,this.cz0=0,this.flyers=[],this.batch=new E_(14e3,3e4),this.hitList=[],this.castShadow=!1,this.onPick=null,this.onGrind=null,this.onBurst=null,this.onChunk=null,Qg(),e.add(this.group),this.group.add(this.batch.mesh)}populate(e,t,n){for(let e of this.chunks)e.mesh&&(this.group.remove(e.mesh),e.mesh.geometry.dispose());this.items=[],this.bigs=[],this.flyers=[],this.hitList=[];let r=t.bounds;this.cx0=r.minX,this.cz0=r.minZ,this.ccx=Math.ceil((r.maxX-r.minX)/__),this.ccz=Math.ceil((r.maxZ-r.minZ)/__),this.chunks=[];for(let e=0;e<this.ccx*this.ccz;e++)this.chunks.push({mesh:null,items:[]});let i=new Wt(n);for(let n of t.bigs){var a,o;let r=Xg[n.kind],i=Yg[r],s=e.surfaceAt(n.x,n.z),c=new Zn().setFromAxisAngle(w_,n.rot);this.surfaceTilt(e,n.x,n.z,.9,c,.6);let l=this.add(r,n.variant%i.variants.length,n.x,s-.12,n.z,c,1);l.big=!0,l.hp=l.maxHp=((a=i.volume)==null?1:a)*((o=i.tough)==null?1:o)*Fe(t.n),this.bigs.push(l)}let s=new Map,c=e=>{let t=s.get(e);if(!t){var n;let r=(n=$g[e])==null?$g[0]:n;t={kinds:r.map(e=>Xg[e[0]]),w:r.map(e=>e[1]),total:r.reduce((e,t)=>e+t[1],0)},s.set(e,t)}let r=i.next()*t.total;for(let e=0;e<t.kinds.length;e++)if(r-=t.w[e],r<=0)return t.kinds[e];return t.kinds[0]},l=.62;for(let n=r.minZ+.35;n<r.maxZ-.25;n+=l)for(let a=r.minX+.35;a<r.maxX-.25;a+=l){var u,d;let r=a+(i.next()-.5)*l*.9,o=n+(i.next()-.5)*l*.9,s=Math.round((r-e.x0)/e.cs),f=Math.round((o-e.z0)/e.cs)*e.nx+s,p=e.owner[f];if(!p)continue;let m=p!==255;if(!m&&i.next()>.4||m&&i.next()>.75||this.bigs.some(e=>Math.hypot(e.pos.x-r,e.pos.z-o)<e.r+.25))continue;let h=c(m?e.heaps[p-1].mix:(u=(d=t.plots[e.zone[f]])==null?void 0:d.mix)==null?0:u),g=Yg[h],_=e.surfaceAt(r,o),v=new Zn().setFromAxisAngle(w_,i.next()*Math.PI*2);this.surfaceTilt(e,r,o,.3,v,g.flat?1:.6),g.flat||v.multiply(b_.setFromEuler(new Xt((i.next()-.5)*.5,0,(i.next()-.5)*.5)));let y=.9+i.next()*.3;this.add(h,Math.floor(i.next()*g.variants.length),r,_-.05-i.next()*.05,o,v,y)}for(let e=0;e<this.chunks.length;e++)this.buildChunk(e)}surfaceTilt(e,t,n,r,i,a){let o=e.surfaceAt(t+r,n)-e.surfaceAt(t-r,n),s=e.surfaceAt(t,n+r)-e.surfaceAt(t,n-r);T_.set(-o/(2*r),1,-s/(2*r)).normalize(),T_.lerp(w_,1-a).normalize(),b_.setFromUnitVectors(w_,T_),i.premultiply(b_)}add(e,t,n,r,i,a,o){let s=Math.min(this.ccx-1,Math.max(0,Math.floor((n-this.cx0)/__))),c=Math.min(this.ccz-1,Math.max(0,Math.floor((i-this.cz0)/__)))*this.ccx+s,l={id:this.items.length,kind:e,variant:t,pos:new L(n,r,i),quat:a.clone(),scale:o,r:Yg[e].r*o,chunk:c,i0:0,n:0,alive:!0,big:!1,hp:0,maxHp:0,hit:0,flash:0,pulse:0,stage:0,dyn:!1};return this.items.push(l),this.chunks[c].items.push(l),l}buildChunk(e){let t=this.chunks[e];if(!t.items.length)return;let n=0,r=0;for(let e of t.items){let t=Yg[e.kind].variants[e.variant];n+=t.attributes.position.count,r+=t.index.count}let i=new Float32Array(n*3),a=new Float32Array(n*3),o=new Float32Array(n*3),s=n>65535?new Uint32Array(r):new Uint16Array(r),c=0,l=0;for(let e of t.items){let t=Yg[e.kind].variants[e.variant],n=t.attributes.position.array,r=t.attributes.normal.array,u=t.attributes.color.array,d=t.index.array;v_.compose(e.pos,e.quat,C_.setScalar(e.scale));let f=v_.elements,p=n.length/3;for(let t=0;t<p;t++){let s=n[t*3],l=n[t*3+1],d=n[t*3+2],p=(c+t)*3;i[p]=f[0]*s+f[4]*l+f[8]*d+f[12],i[p+1]=f[1]*s+f[5]*l+f[9]*d+f[13],i[p+2]=f[2]*s+f[6]*l+f[10]*d+f[14],T_.set(r[t*3],r[t*3+1],r[t*3+2]).applyQuaternion(e.quat),a[p]=T_.x,a[p+1]=T_.y,a[p+2]=T_.z,o[p]=u[t*3],o[p+1]=u[t*3+1],o[p+2]=u[t*3+2]}e.i0=l,e.n=d.length;for(let e=0;e<d.length;e++)s[l+e]=d[e]+c;c+=p,l+=d.length}let u=new Tn;u.setAttribute(`position`,new fn(i,3)),u.setAttribute(`normal`,new fn(a,3)),u.setAttribute(`color`,new fn(o,3)),u.setIndex(new fn(s,1)),u.computeBoundingSphere();let d=new F(u,qo());d.castShadow=this.castShadow,d.receiveShadow=!0,d.matrixAutoUpdate=!1,this.group.add(d),t.mesh=d;for(let e of t.items)(!e.alive||e.dyn)&&this.hideStatic(e)}hideStatic(e){let t=this.chunks[e.chunk].mesh;if(!t||!e.n)return;let n=t.geometry.index;n.array.fill(0,e.i0,e.i0+e.n),n.addUpdateRange(e.i0,e.n),n.needsUpdate=!0}syncWithField(e,t){for(let n of this.items)n.alive&&(n.big?t.includes(this.bigs.indexOf(n)):this.groundGone(e,n))&&(n.alive=!1,this.hideStatic(n))}groundGone(e,t){let n=t.pos.x,r=t.pos.z;return e.height0At(n,r)-e.heightAt(n,r)>Math.min(.12,e.height0At(n,r)*.5)}destroyedBigs(){let e=[];return this.bigs.forEach((t,n)=>!t.alive&&e.push(n)),e}obstacle(e,t,n){for(let r of this.bigs){if(!r.alive)continue;let i=n+r.r*.72;if((r.pos.x-e)**2+(r.pos.z-t)**2<i*i)return r}return null}clearWhere(e,t){let n=0;for(let i of this.items){var r;i.alive&&e(i.pos.x,i.pos.z)&&(i.alive=!1,i.dyn||this.hideStatic(i),i.dyn=!1,i.big&&(n+=((r=Yg[i.kind].volume)==null?1:r)*(1-.2*i.stage)),t==null||t(i))}return this.hitList=this.hitList.filter(e=>e.alive),n}update(e,t,n){if(n.canCut){let i=n.sawR+1.6,a=Math.max(0,Math.floor((Math.min(n.sawX,n.bodyX)-i-this.cx0)/__)),o=Math.min(this.ccx-1,Math.floor((Math.max(n.sawX,n.bodyX)+i-this.cx0)/__)),s=Math.max(0,Math.floor((Math.min(n.sawZ,n.bodyZ)-i-this.cz0)/__)),c=Math.min(this.ccz-1,Math.floor((Math.max(n.sawZ,n.bodyZ)+i-this.cz0)/__));for(let i=s;i<=c;i++)for(let s=a;s<=o;s++)for(let a of this.chunks[i*this.ccx+s].items){if(!a.alive)continue;let i=a.pos.x-n.sawX,o=a.pos.z-n.sawZ;if(a.big){let r=n.sawR+a.r*.85;i*i+o*o<r*r?n.pushing&&this.damage(a,n.power*e,e):t.height0At(a.pos.x,a.pos.z)-t.heightAt(a.pos.x,a.pos.z)>.6&&this.damage(a,a.hp+1,e);continue}let s=n.sawR+a.r*.5,c=i*i+o*o<s*s;if(!c&&Math.abs(a.pos.x-n.bodyX)<2.5&&Math.abs(a.pos.z-n.bodyZ)<2.5&&(c=this.groundGone(t,a)),!c&&i*i+o*o<(n.sawR+2.2)**2&&(c=this.groundGone(t,a)),c){var r;a.alive=!1,this.hideStatic(a),(r=this.onPick)==null||r.call(this,a)}}}for(let t of this.hitList)t.hit=Math.max(0,t.hit-e*3),t.flash=Math.max(0,t.flash-e*6.5);this.batch.begin();for(let t=this.flyers.length-1;t>=0;t--){let n=this.flyers[t];n.t+=e/n.dur;let r=Math.min(1,n.t),a=n.target(S_),o=1-(1-r)*(1-r);x_.lerpVectors(n.from,a,o*.4+r*.6),x_.y+=Math.sin(Math.PI*r)*n.arc,y_.setFromAxisAngle(n.axis,n.spin*r).multiply(n.q0);let s=n.s0+(n.s1-n.s0)*Math.max(0,(r-.55)/.45),c=Yg[n.kind];if(this.batch.push(c.variants[n.variant],x_,y_,s),n.t>=1){var i;this.flyers.splice(t,1),(i=n.onArrive)==null||i.call(n)}}for(let e of this.hitList){if(!e.alive)continue;let t=e.hit*.06;x_.set(e.pos.x+(Math.random()-.5)*t,e.pos.y+Math.random()*t*.5,e.pos.z+(Math.random()-.5)*t);let n=e.stage/4+(1-e.hp/e.maxHp-e.stage/4)*.4;x_.y-=n*.12,this.batch.push(Yg[e.kind].variants[e.variant],x_,e.quat,e.scale*(1-n*.22),e.flash*.72)}this.batch.end()}damage(e,t,n){var r;for(e.dyn||(e.dyn=!0,this.hideStatic(e),this.hitList.push(e)),e.hp-=t,e.hit=1,e.pulse-=n,e.pulse<=0&&(e.pulse=.16,e.flash=Math.max(e.flash,.75)),(r=this.onGrind)==null||r.call(this,e,n);e.hp>0&&e.stage<3&&1-e.hp/e.maxHp>=(e.stage+1)*.25;){var i;e.stage++,e.flash=1,(i=this.onChunk)==null||i.call(this,e)}if(e.hp<=0){var a;e.alive=!1,e.dyn=!1,this.hitList.splice(this.hitList.indexOf(e),1),(a=this.onBurst)==null||a.call(this,e)}}fly(e,t,n,r=.5,i=.25){return this.flyers.length>=48?(n==null||n(),!1):(this.flyers.push({kind:e.kind,variant:e.variant,from:e.pos.clone().setY(e.pos.y+.15),q0:e.quat.clone(),axis:new L(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize(),spin:(Math.random()<.5?-1:1)*(4+Math.random()*6),t:0,dur:r*(.85+Math.random()*.3),arc:1.4+Math.random()*1,s0:e.scale,s1:e.scale*i,target:t,onArrive:n}),!0)}get flying(){return this.flyers.length}setShadows(e){this.castShadow=e;for(let t of this.chunks)t.mesh&&(t.mesh.castShadow=e);this.batch.mesh.castShadow=e}},O_=Rp*1.12,k_=.42,A_=.75,j_=new Zn,M_=new L,N_=new Xt,P_=new Pt,F_=new L,I_=null;function L_(){if(I_)return I_;let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(32,32,3,32,32,32);return n.addColorStop(0,`rgba(255,236,150,0.85)`),n.addColorStop(.45,`rgba(255,214,90,0.4)`),n.addColorStop(1,`rgba(255,200,60,0)`),t.fillStyle=n,t.fillRect(0,0,64,64),I_=new $t(e),I_}var R_=class{constructor(e,t=160){this.cap=t,this.bales=[],this.pickT=0,this.time=0,this.onLand=null,this.pool=new zp(t),e.add(this.pool.mesh);let n=new Ne(1,1);n.rotateX(-Math.PI/2),this.glows=new yn(n,new Fn({map:L_(),transparent:!0,depthWrite:!1,blending:2}),t),this.glows.count=0,this.glows.frustumCulled=!1,this.glows.renderOrder=1,e.add(this.glows)}get count(){return this.bales.length}spot(e,t,n){for(let r=0;r<24;r++){let i=r*2.4,a=r===0?0:A_*(.6+r*.18),o=e+Math.cos(i)*a,s=t+Math.sin(i)*a;if(!(n!=null&&n(o,s))&&this.bales.every(e=>(e.x-o)**2+(e.z-s)**2>A_*A_))return[o,s]}return[e,t]}drop(e,t,n,r,i,a=!0,o){if(this.bales.length>=this.cap)return!1;let[s,c]=this.spot(t,n,o),l=this.pool.alloc(r);return l<0?!1:(this.bales.push({id:l,x:s,z:c,y:0,value:i,color:r.clone(),t:+!a,from:e.clone(),phase:Math.random()*6}),this.glows.count=this.bales.length,!0)}pickup(e,t,n,r,i,a=.05){if(this.pickT-=e,this.pickT>0||!this.bales.length)return;let o=-1,s=r*r;for(let e=0;e<this.bales.length;e++){let r=this.bales[e];if(r.t<1)continue;let i=(r.x-t)**2+(r.z-n)**2;i<s&&(s=i,o=e)}if(o<0)return;let c=this.bales[o];M_.set(c.x,c.y+k_+O_/2,c.z),i(M_,c.color,c.value)&&(this.remove(o),this.pickT=a)}remove(e){this.pool.release(this.bales[e].id),this.bales.splice(e,1),this.glows.count=this.bales.length}update(e,t){this.time+=e;for(let r=0;r<this.bales.length;r++){let i=this.bales[r],a=t.surfaceAt(i.x,i.z);i.y=a;let o=Math.sin(this.time*2.6+i.phase)*.09,s=a+k_+O_/2+o,c=1;if(i.t<1){var n;let t=i.t;i.t=Math.min(1,i.t+e/.55);let r=i.t;M_.set(i.from.x+(i.x-i.from.x)*r,i.from.y+(s-i.from.y)*r+Math.sin(Math.PI*r)*1.8,i.from.z+(i.z-i.from.z)*r),j_.setFromEuler(N_.set(r*6,r*4,r*3)),i.t>=1&&t<1&&((n=this.onLand)==null||n.call(this)),this.pool.set(i.id,M_,j_,O_*(.5+.5*Math.min(1,r*2))),c=r}else M_.set(i.x,s,i.z),j_.setFromEuler(N_.set(.18,this.time*2.2+i.phase,.12)),this.pool.set(i.id,M_,j_,O_);let l=(1.25+Math.sin(this.time*3.1+i.phase)*.12)*c;P_.compose(M_.set(i.x,a+.04,i.z),j_.identity(),F_.set(l,1,l)),this.glows.setMatrixAt(r,P_)}this.bales.length&&(this.glows.instanceMatrix.needsUpdate=!0)}nearest(e,t,n){let r=1/0;for(let i of this.bales){let a=(i.x-e)**2+(i.z-t)**2;a<r&&(r=a,n.set(i.x,0,i.z))}return r<1/0}takeWhere(e,t){let n=0;for(let r=this.bales.length-1;r>=0;r--){let i=this.bales[r];e(i.x,i.z)&&(n+=i.value,t==null||t(i.x,i.y+k_+O_/2,i.z),this.remove(r))}return n}get value(){let e=0;for(let t of this.bales)e+=t.value;return e}clear(){for(let e of this.bales)this.pool.release(e.id);this.bales=[],this.glows.count=0}serialize(){return this.bales.map(e=>[Math.round(e.x*100)/100,Math.round(e.z*100)/100,Math.round(e.value*10)/10])}deserialize(e,t){if(this.clear(),e)for(let[n,r,i]of e)this.drop(M_.set(n,0,r),n,r,t,i,!1)}},z_=40,B_=24,V_=.42,H_=7.5,U_=1.25,W_=.95,G_=200,K_=1.04,q_=[`#ffd23f`,`#ff7ab8`,`#ffffff`,`#7fc8ff`,`#ff8a3d`,`#b89cff`].map(e=>new I(e)),J_=new Pt,Y_=new Zn,X_=new L,Z_=new L,Q_=new Xt,$_={x:0,z:0,path:0,dx:0,dz:0},ev={d:0,ax:0,az:0,px:0,pz:0};function tv(e,t,n){var r,i;let a=(r=n.rearX)==null?n.bodyX:r,o=(i=n.rearZ)==null?n.bodyZ:i,c=n.sawX-a,l=n.sawZ-o,u=Math.max(0,Math.min(1,((e-a)*c+(t-o)*l)/(c*c+l*l||1))),d=a+c*u,f=o+l*u,p=e-d,m=t-f,h=s(p,m),g=h-W_;ev.px=d,ev.pz=f;let _=e-n.sawX,v=t-n.sawZ,y=s(_,v);if(y-n.sawR<g&&(g=y-n.sawR,p=_,m=v,h=y,ev.px=n.sawX,ev.pz=n.sawZ),h<1e-4){var b,x;p=-((b=n.fwdZ)==null?0:b)||1,m=(x=n.fwdX)==null?0:x,h=s(p,m)||1}return ev.d=g,ev.ax=p/h,ev.az=m/h,ev}function nv(){let e=[0,0,.02,.16,0,.12,.18,0,-.04,0,0,.02,.18,0,-.04,.1,0,-.14,0,0,.02,-.18,0,-.04,-.16,0,.12,0,0,.02,-.1,0,-.14,-.18,0,-.04],t=new Tn;return t.setAttribute(`position`,new j(e,3)),t.setAttribute(`normal`,new j(Array(e.length/3).fill(0).flatMap(()=>[0,1,0]),3)),t}function rv(e,t,n){t=e.closed?(t%e.len+e.len)%e.len:Math.max(0,Math.min(e.len,t));let r=0,i=e.cum.length-1;for(;i-r>1;){let n=r+i>>1;e.cum[n]<=t?r=n:i=n}let a=e.cum[i]-e.cum[r]||1,o=(t-e.cum[r])/a,c=e.pts[r*2],l=e.pts[r*2+1],u=e.pts[i*2],d=e.pts[i*2+1];n.x=c+(u-c)*o,n.z=l+(d-l)*o;let f=s(u-c,d-l)||1;return n.dx=(u-c)/f,n.dz=(d-l)/f,n}function iv(e,t,n){let r=1/0,i=0,a=e.cum.length;for(let o=0;o<a-1;o++){let a=e.pts[o*2],s=e.pts[o*2+1],c=e.pts[o*2+2]-a,l=e.pts[o*2+3]-s,u=Math.max(0,Math.min(1,((t-a)*c+(n-s)*l)/(c*c+l*l||1))),d=(a+c*u-t)**2+(s+l*u-n)**2;d<r&&(r=d,i=e.cum[o]+(e.cum[o+1]-e.cum[o])*u)}return i}var av={x:0,z:0,dx:0,dz:0},ov=class{constructor(e){this.group=new B,this.butterflies=[],this.people=[],this.walkers=[],this.blobs=null,this.time=0,this.onOuch=null,this.onLand=null,this.onCheer=null,this.onShout=null,this.shoutCool=4,this.walkable=()=>!0,this.emotes=null,this.followers=0,e.add(this.group);let t=new Fn({side:2});this.flies=new yn(nv(),t,G_),this.flies.count=0,this.flies.frustumCulled=!1,this.flies.setColorAt(0,q_[0]),this.group.add(this.flies);for(let e=0;e<8;e++){let t=Ed(e,z_);this.people.push(t),this.group.add(t)}Pu||(this.blobs=bd(8*z_+3*B_),this.group.add(this.blobs));for(let e=0;e<3;e++){let t=Ed(100+e,B_,kd(e));this.people.push(t),this.group.add(t)}}clear(){this.butterflies=[],this.walkers=[],this.flies.count=0,this.followers=0;for(let e of this.people)e.count=0;this.blobs&&(this.blobs.count=0)}get citizens(){return this.walkers.filter(e=>!e.owner).length}addPlot(e,t,n=0,r,i){let a=new Wt(t),o=e.maxX-e.minX,s=e.maxZ-e.minZ;for(let t=0;t<4&&this.butterflies.length<G_;t++)this.flies.setColorAt(this.butterflies.length,q_[Math.floor(a.next()*q_.length)]),this.butterflies.push({cx:e.minX+o*(.2+a.next()*.6),cz:e.minZ+s*(.2+a.next()*.6),rx:1+a.next()*2,rz:1+a.next()*2,phase:a.next()*10,speed:.35+a.next()*.35,flap:14+a.next()*6,t:-n-a.next()}),this.flies.count=this.butterflies.length;this.flies.instanceColor&&(this.flies.instanceColor.needsUpdate=!0);let c=r==null?(e.minX+e.maxX)/2:r,l=i==null?(e.minZ+e.maxZ)/2:i;if(Mt(c,l,$_)>14)return;let u=bt[$_.path],d=iv(u,$_.x,$_.z),f=o*s>110?2:1;for(let e=0;e<f;e++){let e=this.spawn(Math.floor(a.next()*8),u,d+(a.next()-.5)*6,a,n);e&&a.next()<.32&&this.spawnDog(e,Math.floor(a.next()*3),a)}}addDancers(e,t,n,r,i,a,o,s=0,c=0){let l=new Wt(a);for(let a=0;a<i;a++){let i=this.spawn(Math.floor(l.next()*8),null,0,l,s);i&&(i.x=i.hx=e+(l.next()-.5)*2*n,i.z=i.hz=t+(l.next()-.5)*2*r,i.mood=`dance`,i.speed=0,i.yaw=c>0?0:Math.PI,i.baseY=c)}}spawn(e,t,n,r,i){let a=this.people[e],o=e>=8?B_:z_;if(a.count>=o)return null;let s=r.next()<.5?1:-1;t&&rv(t,n,av);let c={variant:e,inst:a.count++,path:t,s:n,dir:s,side:(r.next()<.5?1:-1)*(.25+r.next()*.2),speed:.85+r.next()*.4,phase:r.next()*6,amp:0,mood:`walk`,moodT:0,pose:0,poseK:0,t:-i-.5-r.next(),yaw:0,x:t?av.x:0,z:t?av.z:0,hx:t?av.x:0,hz:t?av.z:0,hop:0,vy:0,kx:0,kz:0,spin:0,flash:0,cool:2+r.next()*4,bump:0,nextPause:4+r.next()*10,turnCool:0,standing:!1,owner:null,baseY:0,pitch:[.82,1,1.22][e%3]};return this.walkers.push(c),c}spawnDog(e,t,n){let r=this.spawn(8+t,e.path,e.s,n,0);r&&(r.owner=e,r.t=e.t,r.pitch=1.5)}emote(e,t){var n;(n=this.emotes)==null||n.spawn(t,e.x,en(e.x,e.z)+2+e.hop,e.z)}react(e,t){var n;let r=Math.random();if(e.hx=e.x,e.hz=e.z,e.standing=!1,t.onFoot){var i;if(this.followers<9&&r<.45){this.followers++,e.mood=`follow`,e.moodT=6+Math.random()*6,this.emote(e,Math.random()<.5?`heart`:`smile`);return}e.mood=`fan`,e.moodT=2.2+Math.random()*1.5,e.pose=r<.75?vd.clap:vd.cheer,this.emote(e,r<.75?`clap`:`heart`),(i=this.onCheer)==null||i.call(this,e.x,e.z);return}if(r<.12){e.mood=`run`,e.moodT=4,e.pose=vd.wave;return}if(e.mood=`fan`,e.moodT=1.8+Math.random()*1.8,this.shoutCool<=0&&Math.random()<.35){var a;this.shoutCool=7+Math.random()*6,(a=this.onShout)==null||a.call(this,e.x,en(e.x,e.z)+2.1,e.z)}let o=Math.random();e.pose=o<.36?vd.wave:o<.58?vd.clap:o<.78?vd.cheer:vd.point,Math.random()<.4&&this.emote(e,e.pose===vd.clap?`clap`:e.pose===vd.cheer?`star`:Math.random()<.5?`heart`:`smile`),(e.pose===vd.clap||e.pose===vd.cheer)&&((n=this.onCheer)==null||n.call(this,e.x,e.z))}knock(e,t,n){var r,i;let a=e.owner!==null,o=ev.ax,c=ev.az,l=(r=t.speed)==null?0:r;if(l>.5){var u,d;o+=((u=t.fwdX)==null?0:u)*.45,c+=((d=t.fwdZ)==null?0:d)*.45}let f=s(o,c)||1;o/=f,c/=f;let p=(n?4.4:3.2)*(a?.8:1)+Math.min(1.5,l*.15);for(;p>.6&&!(this.walkable(e.x+o*p,e.z+c*p)&&tv(e.x+o*p,e.z+c*p,t).d>U_);p-=.4);let m=a?5.6:6.6,h=2*m/18;e.mood===`follow`&&(this.followers=Math.max(0,this.followers-1)),e.mood=`fly`,e.vy=m,e.hop=Math.max(e.hop,.01),e.kx=o*p/h,e.kz=c*p/h,e.spin=(Math.random()<.5?-1:1)*(7+Math.random()*4),e.flash=1,e.standing=!1,(i=this.onOuch)==null||i.call(this,e.x,e.z,e.pitch,a)}rejoin(e){e.path&&(e.s=iv(e.path,e.x,e.z),rv(e.path,e.s,av),e.hx=av.x-av.dz*e.side*e.dir,e.hz=av.z+av.dx*e.side*e.dir),e.mood=`back`}update(e,t=0,n=0,r){this.time+=e,this.shoutCool-=e;for(let r=0;r<this.butterflies.length;r++){let i=this.butterflies[r];if(Math.abs(i.cx-t)>26||Math.abs(i.cz-n)>30)continue;i.t+=e;let a=Math.max(0,Math.min(1,i.t/.6)),o=i.phase+this.time*i.speed,s=i.cx+Math.sin(o)*i.rx,c=i.cz+Math.sin(o*2)*i.rz*.5,l=Math.cos(o)*i.rx,u=Math.cos(o*2)*i.rz;X_.set(s,en(s,c)+.55+Math.sin(o*3.1)*.25+a*.3,c),Y_.setFromEuler(Q_.set(0,Math.atan2(l,u),0));let d=.25+.75*Math.abs(Math.sin(this.time*i.flap+i.phase));Z_.set(d*a*K_,a*K_,a*K_),this.flies.setMatrixAt(r,J_.compose(X_,Y_,Z_))}this.butterflies.length&&(this.flies.instanceMatrix.needsUpdate=!0);let i=new Set,a=0,o=r&&!r.onFoot?r:null,c=this.blobs;c&&c.count!==this.walkers.length&&(c.count=Math.min(c.instanceMatrix.count,this.walkers.length));let l=!1;for(let f=0;f<this.walkers.length;f++){let p=this.walkers[f];if(p.t>.6&&p.mood!==`fly`&&(Math.abs(p.x-t)>30||Math.abs(p.z-n)>34))continue;p.t+=e;let m=Math.max(0,Math.min(1,p.t/.4)),h=p.owner!==null;if(p.t<0){c&&f<c.count&&(Td(c,f,p.x,0,p.z,0,0),l=!0);continue}p.cool-=e,p.bump-=e,p.turnCool-=e,p.flash>0&&(p.flash=Math.max(0,p.flash-e/.7)),p.mood===`follow`&&a++;let g=p.x,_=p.z,v=0,y=0,b=!1,x=!1;if(r&&p.baseY===0&&p.mood!==`fly`){let e=s(p.x-r.bodyX,p.z-r.bodyZ);if(o){var u;let e=tv(p.x,p.z,o),t=o.sawOn&&s(p.x-o.sawX,p.z-o.sawZ)<o.sawR+.15;if(t||e.d<.08&&((u=o.speed)==null?0:u)>.8)this.knock(p,o,t),x=!0;else if(e.d<U_&&p.mood!==`dance`){let t=Math.min(2.6,(U_-e.d)*4);v=e.ax*t,y=e.az*t,b=!0}}else if(e<.75&&p.hop<=0&&p.mood!==`ouch`&&p.bump<=0){p.vy=h?2.8:3.4,p.bump=2.5;let t=e||1;p.kx=(p.x-r.bodyX)/t*1.2,p.kz=(p.z-r.bodyZ)/t*1.2,this.emote(p,h||Math.random()<.5?`heart`:`smile`)}!x&&!h&&r.active&&p.cool<=0&&(p.mood===`walk`||p.mood===`pause`||p.mood===`wait`)&&e<H_&&(p.cool=9+Math.random()*9,Math.random()<(r.onFoot?.9:.6)&&this.react(p,r))}if(p.mood===`fly`){if(p.x+=p.kx*e,p.z+=p.kz*e,p.vy-=18*e,p.hop+=p.vy*e,p.yaw+=p.spin*e,p.hop<=0){var d;p.hop=0,p.vy=0,p.kx=p.kz=0,p.mood=`ouch`,p.moodT=h?.4:.9,(d=this.onLand)==null||d.call(this,p.x,p.z)}}else if((p.vy!==0||p.hop>0)&&(p.vy-=18*e,p.hop+=p.vy*e,p.hop<=0&&(p.hop=0,p.vy=0)),p.kx||p.kz){p.x+=p.kx*e,p.z+=p.kz*e;let t=Math.exp(-e*5);p.kx*=t,p.kz*=t,Math.abs(p.kx)+Math.abs(p.kz)<.05&&(p.kx=p.kz=0)}let S=p.yaw,C=0,w=()=>r?Math.atan2(r.bodyX-p.x,r.bodyZ-p.z):p.yaw;if(p.mood===`fly`)C=vd.cheer,S=p.yaw;else if(h){let t=p.owner;p.mood===`ouch`&&(p.moodT-=e,p.moodT<=0&&(p.mood=`walk`));let n=t.x-Math.sin(t.yaw)*.7+Math.cos(t.yaw)*.5,i=t.z-Math.cos(t.yaw)*.7-Math.sin(t.yaw)*.5,a=n-p.x,c=i-p.z,l=s(a,c),u=o!==null&&tv(n,i,o).d<U_;if(l>.02&&p.mood!==`ouch`&&!u){let t=Math.min(l,Math.min(l*3,3.6)*e);p.x+=a/l*t,p.z+=c/l*t}t.mood===`fan`&&p.hop<=0&&Math.random()<e*1.5&&(p.vy=2.2),r!=null&&r.onFoot&&p.hop<=0&&s(p.x-r.bodyX,p.z-r.bodyZ)<2.4&&Math.random()<e*1.8&&(p.vy=2.4),S=l>.05&&!u?Math.atan2(a,c):t.yaw}else if(p.mood===`dance`)C=vd.cheer,S=p.baseY>0?0:Math.PI,r&&s(p.x-r.bodyX,p.z-r.bodyZ)<5&&Math.random()<e*.3&&this.emote(p,Math.random()<.5?`note`:`heart`);else if(p.mood===`ouch`)p.moodT-=e,C=vd.bum,p.moodT<=0&&this.rejoin(p);else if(p.mood===`fan`||p.mood===`run`||p.mood===`follow`){p.moodT-=e;let t=r?r.bodyX:p.x,n=r?r.bodyZ:p.z,i=t-p.x,a=n-p.z,c=s(i,a)||1;if(S=Math.atan2(i,a),p.mood===`run`||p.mood===`follow`){let t=o?tv(p.x,p.z,o).d:c,n=p.mood===`follow`?1.8+p.inst%4*.5:2.2;if(p.standing?t>n+1.4:t>n){if(p.standing=!1,this.walkable(p.x+i/c*.3,p.z+a/c*.3)){let r=p.mood===`follow`?Math.min(3.6,(t-n)*2+1):3.2;p.x+=i/c*r*e,p.z+=a/c*r*e}}else p.standing=!0;p.standing&&(C=p.mood===`follow`&&Math.sin(this.time*.7+p.inst)>.3?vd.clap:vd.wave)}else C=p.pose;(p.moodT<=0||!r||!r.onFoot&&c>H_*1.6)&&(p.mood===`follow`&&(this.followers=Math.max(0,this.followers-1)),p.mood=`back`)}else if(p.mood===`back`){let t=p.hx-p.x,n=p.hz-p.z,r=s(t,n);if(r<.08)p.mood=p.path?`walk`:`dance`;else if(o&&tv(p.hx,p.hz,o).d<1.45)S=w();else{let i=Math.min(r,1.3*e);p.x+=t/r*i,p.z+=n/r*i,S=Math.atan2(t,n)}}else if(p.mood===`pause`)p.moodT-=e,p.moodT<=0&&(p.mood=`walk`);else if(p.mood===`wait`&&p.path)p.moodT+=e,S=w(),rv(p.path,p.s+p.dir*.8,av),!o||tv(av.x,av.z,o).d>=1.65?p.mood=`walk`:p.moodT>2.6&&(p.dir=-p.dir,p.turnCool=1.5,p.mood=`walk`);else if(p.path){if(p.nextPause-=e,p.nextPause<=0)p.nextPause=6+Math.random()*12,p.mood=`pause`,p.moodT=1.2+Math.random()*2.2;else{let t=p.s+p.dir*p.speed*e,n=!p.path.closed&&(t<=0||t>=p.path.len);if(rv(p.path,t+p.dir*.8,av),o&&!n&&tv(av.x,av.z,o).d<1.55)p.mood=`wait`,p.moodT=0;else if(n||!this.walkable(av.x,av.z))p.turnCool<=0?(p.dir=-p.dir,p.turnCool=1.5):(p.mood=`pause`,p.moodT=1.5+Math.random()*2);else{p.s=t,rv(p.path,t,av);let n=-av.dz*p.side*p.dir,r=av.dx*p.side*p.dir,i=av.x+n,a=av.z+r;if(!b){let t=Math.min(1,e*6);p.x+=(i-p.x)*t,p.z+=(a-p.z)*t}S=Math.atan2(av.dx*p.dir,av.dz*p.dir),s(i-p.x,a-p.z)>1.4&&(p.hx=i,p.hz=a,p.mood=`back`)}}}b?(p.x+=v*e,p.z+=y*e,p.mood!==`ouch`&&(S=s(v,y)>1.2?Math.atan2(v,y):w())):(v||y)&&(p.x+=v*e,p.z+=y*e);let T=s(p.x-g,p.z-_),E=p.mood===`fly`?0:T/Math.max(e,1e-4),D=E>.12;p.amp+=((p.mood===`fly`?.9:D?Math.min(.75,.42+E*.14):p.mood===`dance`?.25:0)-p.amp)*Math.min(1,e*7),p.mood===`fly`?p.phase+=e*15:D?p.phase+=T*(h?7:5.4):p.mood!==`dance`&&(p.phase+=(Math.round(p.phase/Math.PI)*Math.PI-p.phase)*Math.min(1,e*5)),C?p.pose!==C&&p.poseK>.05?p.poseK=Math.max(0,p.poseK-e*7):(p.pose=C,p.poseK=Math.min(1,p.poseK+e*5)):p.poseK=Math.max(0,p.poseK-e*4);let O=S-p.yaw;for(;O>Math.PI;)O-=Math.PI*2;for(;O<-Math.PI;)O+=Math.PI*2;p.mood!==`fly`&&(p.yaw+=O*Math.min(1,e*7));let k=Math.min(1.5,p.amp/.62),ee=p.mood===`dance`?Math.abs(Math.sin(this.time*4.2+p.inst))*.16:p.mood===`fan`&&p.pose===vd.cheer?Math.abs(Math.sin(this.time*5+p.inst))*.08*p.poseK:p.mood===`fly`?0:Math.abs(Math.sin(p.phase))*(h?.03:.05)*Math.min(1,k),te=en(p.x,p.z)+p.baseY;X_.set(p.x,te+ee+p.hop,p.z),c&&f<c.count&&(Td(c,f,p.x,te,p.z,m*(h?.5:.78),p.hop),l=!0),Y_.setFromEuler(Q_.set(p.mood===`fly`?-.45:0,p.yaw,h?0:p.mood===`fly`?Math.sin(this.time*9)*.25:Math.sin(p.phase)*.05*Math.min(1,k))),Z_.setScalar(m*(h?V_:.95));let ne=this.people[p.variant];ne.setMatrixAt(p.inst,J_.compose(X_,Y_,Z_));let re=p.flash>0?p.flash*(.42+.18*Math.sin(this.time*38)):0;Dd(ne,p.inst,p.phase,p.amp,h?0:p.pose,h?0:p.poseK,this.time+p.inst*.73,re),i.add(p.variant)}this.followers=Math.min(this.followers,a);for(let e of i)this.people[e].instanceMatrix.needsUpdate=!0;c&&l&&(c.instanceMatrix.needsUpdate=!0)}},sv=4.2,cv=16,lv=1/60,uv=Math.PI*2,dv=4.6,fv=nn.clamp,pv=(e,t)=>Math.atan2(Math.sin(t-e),Math.cos(t-e)),mv=(e,t,n)=>nn.smoothstep(e,t,n),hv=class{constructor(){this.birds=[],this.time=0,this.accumulator=0,this.seed=91731,this.surfaces=[],this.flocks=[],this.center=new L,this.radius=4,this.ceiling=2,this.delta=new L,this.cohesion=new L,this.alignment=new L,this.separation=new L,this.danger=new L(1e4,0,1e4),this.onScare=null}random(){return this.seed=Math.imul(this.seed,1664525)+1013904223>>>0,this.seed/4294967296}range(e,t){return e+(t-e)*this.random()}setSurfaces(e,t=!1){if(this.surfaces=e,!e.length){this.birds.length=0,this.flocks.length=0;return}this.center.set(0,0,0);for(let t of e)this.center.x+=t.x,this.center.z+=t.z;this.center.multiplyScalar(1/e.length);let n=0,r=0;for(let t of e)n=Math.max(n,s(t.x-this.center.x,t.z-this.center.z)),r=Math.max(r,t.y);if(this.radius=n+1.2,this.ceiling=r+.75,t||!this.birds.length){this.initialize();return}for(let t of this.birds){let n=t.support?e.find(e=>e.id===t.support.id):void 0;!n||Math.abs(n.y-t.perch.y)>.07?((t.mode===`perch`||t.mode===`hop`||t.mode===`approach`||t.mode===`land`)&&this.launch(t,t.mode===`perch`||t.mode===`hop`),t.perch.copy(this.choosePerch(this.flocks[t.flock].center,t))):t.support=n}}onSurface(e,t,n,r=0){return s(e.x-t,e.z-n)<=e.radius-r}initialize(){this.birds.length=0,this.flocks.length=0,this.accumulator=0;for(let e=0;e<4;e++){let t=this.surfaces[Math.floor(this.random()*this.surfaces.length)],n={center:new L(t.x,t.y,t.z),goal:new L,phase:e*uv/4,landingAt:this.time+4+e*3,departureAt:e<2?this.time+6+e*4:1/0,settling:e<2};this.flocks.push(n),this.chooseGoal(n,e);for(let t=0;t<4;t++){let r=e*4+t,i=this.choosePerch(n.center),a=e*uv/4+t*.16,o=e<2?i.clone():this.center.clone().add(new L(Math.cos(a)*2.2,this.ceiling+t*.13,Math.sin(a)*2.2)),s={id:r,flock:e,position:o,velocity:e<2?new L:new L(-Math.sin(a),0,Math.cos(a)).multiplyScalar(1.5),acceleration:new L,mode:e<2?`perch`:`fly`,age:+(e<2),duration:1,perch:i,start:o.clone(),tangent:new L,yaw:a,bank:0,pitch:0,phase:this.range(0,uv),size:this.range(.88,1.1),actionAt:this.time+this.range(.5,2.5),peck:0,look:0,hopHeight:0,launchAt:n.departureAt+t*.3,takeoffSpeed:1,yawVelocity:0,pose:{flight:e<2?0:1,fold:+(e<2),amplitude:e<2?0:1,brake:0,stroke:e<2?0:.1},supportOffset:new L};this.birds.push(s),this.bindSupport(s)}}}bindSupport(e){let t,n=1/0;for(let r of this.surfaces){if(!this.onSurface(r,e.perch.x,e.perch.z))continue;let i=Math.abs(r.y-e.perch.y);i<n&&(n=i,t=r)}e.support=t}choosePerch(e,t){let n=new L,r=1/0,i;for(let a=0;a<40;a++){let a=this.surfaces[Math.floor(this.random()*this.surfaces.length)],o=a.radius*.5,c=new L(a.x+this.range(-o,o),a.y,a.z+this.range(-o,o));if(this.birds.some(e=>e!==t&&e.perch.distanceToSquared(c)<.045))continue;let l=s(c.x-this.danger.x,c.z-this.danger.z),u=c.distanceToSquared(e)+this.random()*.6+(l<2.3?60:0);u<r&&(r=u,n.copy(c),i=a)}if(r===1/0){let e=this.surfaces[0];n.set(e.x,e.y,e.z),i=e}return t&&(t.support=i),n}chooseGoal(e,t){let n=e.phase+.55,r=this.radius*(.66+.09*Math.sin(this.time*.19+t*2));e.goal.set(this.center.x+Math.cos(n)*r,this.ceiling+.22*Math.sin(this.time*.37+t),this.center.z+Math.sin(n)*r*.88)}update(e){if(!(!this.birds.length||!Number.isFinite(e)||e<=0))for(this.accumulator+=Math.min(e,.1);this.accumulator+1e-9>=lv;)this.step(lv),this.accumulator-=lv}step(e){this.time+=e,this.flocks.forEach((t,n)=>{if(t.phase+=e*(.26+.07*Math.sin(this.time*.3+n)),this.chooseGoal(t,n),!t.settling&&this.time>=t.landingAt){let e=this.surfaces[0];for(let t=0;t<8&&(e=this.surfaces[Math.floor(this.random()*this.surfaces.length)],!(s(e.x-this.danger.x,e.z-this.danger.z)>3));t++);t.center.set(e.x,e.y,e.z),t.settling=!0,t.departureAt=this.time+this.range(14,22);for(let e of this.birds)e.flock===n&&(e.perch.copy(this.choosePerch(t.center,e)),e.actionAt=this.time+this.range(0,2.4),e.launchAt=t.departureAt+this.range(0,1.6))}t.settling&&this.time>t.departureAt+2&&(t.settling=!1,t.landingAt=this.time+this.range(8,15))});for(let e of this.birds)if(e.mode!==`fly`&&e.mode!==`takeoff`&&s(e.position.x-this.danger.x,e.position.z-this.danger.z)*sv<dv){var t;let n=this.flocks[e.flock];(e.mode===`perch`||e.mode===`hop`)&&((t=this.onScare)==null||t.call(this,e.position)),this.launch(e,!0);let r=e.position.x-this.danger.x,i=e.position.z-this.danger.z,a=s(r,i)||1;e.yaw=Math.atan2(r/a,i/a)+this.range(-.5,.5),e.velocity.set(Math.sin(e.yaw)*1.2,1.9,Math.cos(e.yaw)*1.2),n.settling&&(n.settling=!1,n.landingAt=this.time+this.range(3,6))}for(let e of this.birds)e.mode!==`perch`&&e.mode!==`hop`&&e.mode!==`land`&&this.steer(e);for(let t of this.birds){let n=e*(t.mode===`takeoff`?t.takeoffSpeed:1);t.age+=n,t.peck*=Math.exp(-n*5),t.hopHeight=0,t.mode===`perch`&&t.support&&(t.perch.y=t.support.y,t.position.copy(t.perch));let r=this.flocks[t.flock];if(t.mode===`fly`&&r.settling&&this.time>=t.actionAt&&(t.mode=`approach`,t.age=0),t.mode!==`perch`&&t.mode!==`hop`&&t.mode!==`land`)t.velocity.addScaledVector(t.acceleration,n).clampLength(0,t.mode===`approach`?1.5:t.mode===`takeoff`?2.6:2),t.position.addScaledVector(t.velocity,n),t.mode===`takeoff`&&t.age>1.15&&(t.mode=`fly`,t.age=0),t.mode===`approach`&&(s(t.position.x-t.perch.x,t.position.z-t.perch.z)<.75&&t.position.y<t.perch.y+1.25||t.age>6)&&(t.mode=`land`,t.age=0,t.start.copy(t.position),t.duration=fv(t.position.distanceTo(t.perch)/1.1,1.1,3),t.tangent.copy(t.velocity).multiplyScalar(t.duration).clampLength(0,t.position.distanceTo(t.perch)*.9));else if(t.mode===`land`){let e=Math.min(1,t.age/t.duration),r=e*e,i=r*e;this.delta.copy(t.position),t.position.copy(t.start).multiplyScalar(2*i-3*r+1).addScaledVector(t.tangent,i-2*r+e).addScaledVector(t.perch,-2*i+3*r),t.position.y=Math.max(t.perch.y,t.position.y),t.velocity.subVectors(t.position,this.delta).divideScalar(n),e===1&&(t.mode=`perch`,t.age=0,t.velocity.set(0,0,0),t.actionAt=this.time+this.range(.4,1.5))}else if(this.time>=t.launchAt)this.launch(t);else if(t.mode===`hop`){let e=Math.min(1,t.age/t.duration);t.position.lerpVectors(t.start,t.perch,e*e*(3-2*e)),t.hopHeight=Math.sin(e*Math.PI)*.065,e===1&&(t.mode=`perch`,t.age=.3,t.actionAt=this.time+this.range(.5,2))}else if(this.time>=t.actionAt){if(t.actionAt=this.time+this.range(.6,2.4),this.random()<.45&&t.support){let e=this.range(0,uv),n=t.position.x+Math.sin(e)*.13,r=t.position.z+Math.cos(e)*.13,i=t.support;this.onSurface(i,n,r,.01)&&!this.birds.some(e=>e!==t&&s(e.perch.x-n,e.perch.z-r)<.21)&&(t.start.copy(t.position),t.perch.set(n,i.y,r),t.mode=`hop`,t.age=0,t.duration=.32,t.look=e)}else{t.peck=+(this.random()<.65);let e=this.birds[(t.id+1)%this.birds.length];t.look=Math.atan2(e.position.x-t.position.x,e.position.z-t.position.z)+this.range(-.4,.4)}}let i=t.mode!==`perch`&&t.mode!==`hop`,a=i&&t.velocity.lengthSq()>.008?Math.atan2(t.velocity.x,t.velocity.z):t.look;t.yawVelocity+=(pv(t.yaw,a)*85-t.yawVelocity*17)*n,t.yawVelocity=fv(t.yawVelocity,-8,8);let o=t.yawVelocity*n;t.yaw+=o;let c=i?fv(-o/n*t.velocity.length()/9.8,-.58,.58):0;t.bank=nn.lerp(t.bank,c,1-Math.exp(-n*6));let l=t.mode===`land`?-.3*Math.sin(Math.min(1,t.age/t.duration)*Math.PI):i?.06-fv(Math.atan2(t.velocity.y,Math.max(.4,s(t.velocity.x,t.velocity.z)))*.55,-.6,.3):t.peck*.14;t.pitch=nn.lerp(t.pitch,l,1-Math.exp(-n*8)),t.phase+=n*(t.mode===`takeoff`?46:t.mode===`land`?38:26+t.id*.23),this.updatePose(t,n)}}updatePose(e,t){let n=e.pose,r=e.mode===`perch`||e.mode===`hop`,i=e.mode===`land`?mv(e.age/e.duration,0,1):0,a=e.mode===`fly`?mv(Math.sin(this.time*1.15+e.id*1.7),.15,.8):0,o=(e,n,r)=>nn.damp(e,n,r,t);n.flight=o(n.flight,+!r,7),n.fold=o(n.fold,+!!r,r?7:12),n.brake=o(n.brake,i,8),n.amplitude=o(n.amplitude,r?0:(e.mode===`takeoff`?1.2:1)*(1-.96*a),4.8);let s=.035*Math.sin(this.time*3.4+e.id)+.016*Math.sin(this.time*5.1+e.id*.8),c=Math.sin(e.phase)*n.amplitude*(1-n.brake*.45)+.1+s+n.brake*.22;n.stroke=o(n.stroke,c,36)}launch(e,t=!1){e.takeoffSpeed=t?2:1,e.mode=`takeoff`,e.age=0,e.velocity.set(Math.sin(e.yaw)*.7,1.5,Math.cos(e.yaw)*.7),e.actionAt=this.time+5,e.launchAt=1/0}steer(e){let t=this.flocks[e.flock],n=e.acceleration;this.delta.copy(e.mode===`approach`?e.perch:t.goal),e.mode===`approach`&&(this.delta.y+=.8),e.mode===`takeoff`&&this.delta.set(e.position.x+Math.sin(e.yaw),e.position.y+2,e.position.z+Math.cos(e.yaw)),this.delta.sub(e.position);let r=e.mode===`approach`?fv(this.delta.length()*1.6,.45,1.4):1.5+.14*Math.sin(this.time*.8+e.id);n.copy(this.delta.normalize().multiplyScalar(r).sub(e.velocity)).multiplyScalar(2.6),this.cohesion.set(0,0,0),this.alignment.set(0,0,0),this.separation.set(0,0,0);let i=0;for(let t of this.birds){if(t===e)continue;this.delta.subVectors(e.position,t.position);let n=this.delta.lengthSq();n>0&&n<.55*.55&&this.separation.addScaledVector(this.delta,1/Math.max(.025,n)),!(t.flock!==e.flock||n>2.8*2.8||t.mode===`perch`||t.mode===`hop`)&&(this.delta.dot(e.velocity)>Math.sqrt(n)*e.velocity.length()*.75||(this.cohesion.add(t.position),this.alignment.add(t.velocity),i++))}if(i&&e.mode===`fly`&&(n.addScaledVector(this.cohesion.multiplyScalar(1/i).sub(e.position),.65),n.addScaledVector(this.alignment.multiplyScalar(1/i).sub(e.velocity),.85)),n.addScaledVector(this.separation,e.mode===`approach`?.6:1.4),e.mode===`fly`){n.y+=Math.sin(this.time*1.7+e.id)*.22,n.y+=Math.max(0,this.ceiling-.35-e.position.y)*4;let t=e.position.x-this.danger.x,r=e.position.z-this.danger.z,i=s(t,r);i<1.2&&e.position.y<.8&&(n.x+=t/(i||1)*3,n.z+=r/(i||1)*3,n.y+=2)}let a=e.position.x-this.center.x,o=e.position.z-this.center.z,c=s(a,o);c>this.radius&&(n.x-=a/c*(c-this.radius)*3,n.z-=o/c*(c-this.radius)*3),n.clampLength(0,6.2)}},gv=.033,_v=[`body`,`head`,`leftWing`,`rightWing`,`feet`];function vv(e,t){let n=e.index?e.toNonIndexed():e.clone();e.dispose(),n.deleteAttribute(`uv`);let r=new I(t),i=new Float32Array(n.getAttribute(`position`).count*3);for(let e=0;e<i.length;e+=3)r.toArray(i,e);return n.setAttribute(`color`,new fn(i,3)),n}function yv(e,t,n,r,i,a,o){return vv(new re(1,r<.02?4:7,r<.02?3:5).scale(r,i,a).translate(e,t,n),o)}function bv(e){let t=Bo(e);return e.forEach(e=>e.dispose()),t}function xv(e,t){let n=new Tn;return n.setAttribute(`position`,new j(e,3)),n.computeVertexNormals(),vv(n,t)}function Sv(){let e=bv([yv(0,.139,-.008,.055,.062,.12,`#c9d0d8`),yv(0,.125,.03,.05,.05,.088,`#fbfbf8`),xv([-.026,.137,-.1,0,.137,-.1,0,.13,-.2,-.026,.137,-.1,0,.13,-.2,-.03,.13,-.215,0,.137,-.1,.026,.137,-.1,0,.13,-.2,.026,.137,-.1,.03,.13,-.215,0,.13,-.2],`#f4f4f0`)]).translate(0,-.025,0),t=bv([yv(0,0,0,.041,.04,.054,`#fbfbf8`),vv(new rn(.012,.05,6).rotateX(Math.PI/2).translate(0,-.008,.07),`#f2b134`),yv(-.03,.01,.024,.008,.008,.008,`#26282c`),yv(.03,.01,.024,.008,.008,.008,`#26282c`)]),n=[[-.019,.049,-.049,.002],[.025,.055,-.07,.011],[.08,.043,-.084,.018],[.132,.014,-.103,.015],[.181,-.034,-.116,.009],[.226,-.102,-.109,.001]],r=[];for(let e=0;e<n.length-1;e++){let t=e=>{let[t,n,r,i]=e;return[[t,0,n],[t,i,(n+r)/2],[t,0,r],[t,-.005,(n+r)/2]]},i=t(n[e]),a=t(n[e+1]),o=e>=n.length-2;for(let e=0;e<4;e++){let t=(e+1)%4;r.push(xv([...i[e],...a[e],...a[t],...i[e],...a[t],...i[t]],o?`#30343a`:e<=1?`#aeb7c1`:`#d6dce2`))}}let i=bv(r).scale(1.12,.55,.96),a=i.clone().scale(-1,1,1);for(let e of Object.values(a.attributes))for(let t=0;t<e.count;t+=3)for(let n=0;n<e.itemSize;n++){let r=(t+1)*e.itemSize+n,i=(t+2)*e.itemSize+n,a=e.array,o=a[r];a[r]=a[i],a[i]=o}return a.computeVertexNormals(),{body:e,head:t,leftWing:a,rightWing:i,feet:bv([-.022,.022].flatMap(e=>[vv(new In(.005,.005,.05,4).translate(e,.027,.034),`#f0a050`),vv(new ht(.026,.007,.04).translate(e,.0035,.046),`#e8954a`)]))}}var Cv=class{constructor(e){this.root=new B,this.sim=new hv,this.base=new Jt,this.part=new Jt,this.matrix=new Pt,this.onScare=null;let t=Sv(),n=new Wn({vertexColors:!0,side:2});this.meshes=_v.map(e=>{let r=new yn(t[e],n,cv);return r.instanceMatrix.setUsage(C),r.frustumCulled=!1,r.castShadow=!0,r.count=0,r}),this.root.add(...this.meshes),e.add(this.root);let r=new L;this.sim.onScare=e=>{var t;return(t=this.onScare)==null?void 0:t.call(this,r.set(e.x*sv,e.y*sv,e.z*sv))}}setPerches(e,t=!1){this.sim.setSurfaces(e.map(e=>({x:e.x/sv,z:e.z/sv,y:e.y/sv,radius:e.r/sv,id:e.id})),t)}update(e,t,n,r=!0){this.root.visible=r&&this.sim.birds.length>0,this.root.visible&&(this.sim.danger.set(t/sv,0,n/sv),this.sim.update(e),this.draw())}draw(){let e=.44*sv*1.3*.7*.7;for(let t of this.sim.birds){let{flight:n,fold:r,stroke:i,brake:a}=t.pose;this.base.position.set(t.position.x*sv,(t.position.y+t.hopHeight)*sv,t.position.z*sv),this.base.rotation.set(t.pitch,t.yaw,t.bank,`YXZ`),this.base.scale.setScalar(t.size*e),this.base.updateMatrix();for(let e=0;e<_v.length;e++){let o=_v[e];if(this.part.position.set(0,0,0),this.part.rotation.set(0,0,0,`ZYX`),this.part.scale.set(1,1,1),o===`body`&&this.part.scale.set(1,1-n*.1,1+n*.05),o===`head`&&(this.part.position.set(0,.16-n*.038-t.peck*.03,.087+n*.029+t.peck*.02),this.part.rotation.x=.2+n*.18+t.peck*.7),o===`leftWing`||o===`rightWing`){let e=o===`leftWing`?-1:1;this.part.position.set(e*gv,.135,.008),this.part.rotation.z=e*nn.lerp(i,1.27,r),this.part.rotation.y=e*r*1.5,this.part.scale.x=1-r*.28,this.part.scale.z=1-r*.52}o===`feet`&&(this.part.scale.y=1-n*.7*(1-a),this.part.position.y=(1-this.part.scale.y)*.05),this.part.updateMatrix(),this.matrix.multiplyMatrices(this.base.matrix,this.part.matrix),this.meshes[e].setMatrixAt(t.id,this.matrix)}}for(let e of this.meshes)e.count=this.sim.birds.length,e.instanceMatrix.needsUpdate=!0}},wv=46,Tv=5,Ev=new Pt,Dv=new Zn,Ov=new L,kv=new L,Av=new Xt;function jv(){return Ct(),new Le({uniforms:{uTime:{value:0},uClean:{value:0},uCenter:{value:new xt(z.x,z.z)},uRadius:{value:9},uKeep:{value:999},...Bt},vertexShader:`
varying vec3 vW;
void main() {
  vec4 w = modelMatrix * vec4(position, 1.0);
  vW = w.xyz;
  gl_Position = projectionMatrix * viewMatrix * w;
}`,fragmentShader:`
uniform float uTime;
uniform float uClean;
uniform vec2 uCenter;
uniform float uRadius;
/** beyond this distance from the middle the water was never dirty (the open sea round the dirty bay) */
uniform float uKeep;
uniform sampler2D uCityMap;
uniform vec4 uMapB;
varying vec3 vW;
float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1, 0)), u.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), u.x), u.y);
}
void main() {
  vec2 p = vW.xz;
  float sd = (texture2D(uCityMap, (p - uMapB.xy) * uMapB.zw).g - 0.5) * 3.2;
  if (sd > 0.55) discard;
  // the clean water spreads from the middle as a wave
  float d = length(p - uCenter);
  float clean = max(clamp((uClean * uRadius - d) / 1.6, 0.0, 1.0), smoothstep(uKeep, uKeep + 7.0, d));
  // ripples
  float t = uTime;
  float r1 = noise(p * 1.3 + vec2(t * 0.35, t * 0.22));
  float r2 = noise(p * 2.7 - vec2(t * 0.28, -t * 0.4));
  float rip = r1 * 0.6 + r2 * 0.4;
  // murky: green-brown water that still reads as water: sky glints on the ripples, an oily rainbow
  // sheen in patches, yellow scum along the shore
  vec3 murk = mix(vec3(0.27, 0.36, 0.24), vec3(0.36, 0.4, 0.22), noise(p * 0.6));
  float glint = pow(clamp((rip - 0.52) * 2.4, 0.0, 1.0), 2.0);
  murk += vec3(0.55, 0.62, 0.6) * glint * 0.55;
  float oil = smoothstep(0.5, 0.8, noise(p * 0.45 + vec2(t * 0.05, 0.0)));
  vec3 rainbow = 0.5 + 0.5 * cos(6.2831 * (rip * 1.8 + vec3(0.0, 0.33, 0.67)));
  murk = mix(murk, murk * 0.6 + rainbow * 0.45, oil * 0.6);
  float scum = smoothstep(-0.8, 0.2, sd) * (0.6 + 0.4 * noise(p * 3.0));
  murk = mix(murk, vec3(0.62, 0.58, 0.34), scum * 0.75);
  // clean: deep blue in the middle, turquoise at the edge, a white ring of foam at the shore
  float depth = smoothstep(0.0, -2.6, sd);
  vec3 blue = mix(vec3(0.42, 0.82, 0.88), vec3(0.18, 0.5, 0.82), depth);
  blue += vec3(0.9, 0.95, 1.0) * smoothstep(0.62, 0.8, rip) * 0.35;
  float foam = smoothstep(-0.35, 0.05, sd) * (0.55 + 0.45 * sin(t * 2.0 + d * 3.0));
  blue = mix(blue, vec3(1.0), foam * 0.55);
  vec3 col = mix(murk, blue, clean);
  // the clearing front sparkles
  col += vec3(1.0, 0.95, 0.7) * (clean * (1.0 - clean) * 4.0) * 0.5;
  col *= 0.92 + 0.12 * rip;
  float a = mix(0.96, mix(0.55, 0.9, depth), clean);
  gl_FragColor = vec4(col, a);
}`,transparent:!0,depthWrite:!1})}function Mv(){let e=new H;return e.add(new Mn(.32,9,.35,Math.PI*2-.7),`#4fa83f`,U(0,0,0),[-Math.PI/2,0,0]),e.sphere(.09,`#ff9ac8`,U(.05,.05,.04),U(1,.7,1),6),e.sphere(.04,`#ffd23f`,U(.05,.1,.04),1,5),e.build()}function Nv(){let e=new H;return e.sphere(.5,`#fbf8f1`,U(0,.05,0),U(.42,.32,1.35),8),e.box(.44,.05,1.1,`#c9a477`,U(0,.18,-.05),.02),e.box(.46,.06,1.3,`#2f6fd0`,U(0,.04,0),.02),e.cyl(.025,.03,2,`#e6ebf2`,U(0,1.15,.1),void 0,5),e.prism([[.15,.25],[-.75,.25],[.15,2.05]],.03,`#f6f0e2`,U(0,0,0)),e.prism([[.2,.3],[.75,.3],[.2,1.7]],.03,`#ff8a6a`,U(0,0,0)),e.build()}function Pv(){let e=new H;return e.sphere(.2,`#f6f0e2`,U(0,.08,0),U(1,.75,1.35),8),e.sphere(.12,`#2f8a4f`,U(0,.3,.2),1,8),e.box(.09,.04,.12,`#ff9a2a`,U(0,.28,.33),.01),e.box(.1,.06,.14,`#e8e0cf`,U(0,.14,-.27),.02,[.5,0,0]),e.build()}var Fv=class{constructor(e){this.group=new B,this.townGroup=new B,this.sea=!1,this.boats=null,this.boatData=[],this.floats=[],this.floatData=[],this.duckData=[],this.time=0,this.clean=0,this.want=0,this.onCleared=null,Qg(),e.add(this.group),this.mat=jv(),this.group.add(this.townGroup),this.build()}setTown(){this.townGroup.traverse(e=>{let t=e;t.isMesh&&!t.userData.shared&&t.geometry.dispose()}),this.townGroup.clear(),this.floats=[],this.floatData=[],this.duckData=[],this.boats=null,this.boatData=[],this.build()}build(){if(this.mat.uniforms.uCenter.value.set(z.x,z.z),this.mat.uniforms.uRadius.value=z.radius,this.mat.uniforms.uKeep.value=z.boxes?19:999,this.sea=!!z.boxes,this.sea)return this.buildSea();let e=new Qn;for(let t=0;t<=64;t++){let n=t/64*Math.PI*2,r=1;for(;r<14&&!(It(z.x+Math.cos(n)*r,z.z+Math.sin(n)*r)>.7);r+=.1);let i=Math.cos(n)*r,a=Math.sin(n)*r;t===0?e.moveTo(i,-a):e.lineTo(i,-a)}let t=new p(e,2);t.rotateX(-Math.PI/2),this.water=new F(t,this.mat),this.water.position.set(z.x,z.level,z.z),this.water.renderOrder=2,this.townGroup.add(this.water);let n=[];for(let e=0;e<96;e++){let t=e/96*Math.PI*2,r=1;for(;r<14&&!(It(z.x+Math.cos(t)*r,z.z+Math.sin(t)*r)>.9);r+=.1);n.push(r)}let r=[],i=[],a=[];r.push(z.x,R(z.x,z.z)-.14,z.z),i.push(.44,.42,.3);for(let e=1;e<=24;e++)for(let t=0;t<96;t++){let a=t/96*Math.PI*2,o=n[t]*e/24,s=z.x+Math.cos(a)*o,c=z.z+Math.sin(a)*o;r.push(s,R(s,c)-.14,c);let l=Math.max(0,Math.min(1,-It(s,c)/2.5));i.push(.74-l*.3,.66-l*.24,.5-l*.2)}let o=(e,t)=>e===0?0:1+(e-1)*96+t%96;for(let e=0;e<96;e++)a.push(0,o(1,e+1),o(1,e));for(let e=1;e<24;e++)for(let t=0;t<96;t++){let n=o(e,t),r=o(e,t+1),i=o(e+1,t),s=o(e+1,t+1);a.push(n,r,i,r,s,i)}let s=new Tn;s.setAttribute(`position`,new j(r,3)),s.setAttribute(`color`,new j(i,3)),s.setIndex(a),s.computeVertexNormals();let c=new F(s,new Wn({vertexColors:!0}));c.receiveShadow=!0,this.townGroup.add(c);let l=new Wt(4711),u=this.floatKinds();for(let e=0;e<92&&this.floatData.length<wv;e++){let e=l.next()*Math.PI*2,t=Math.sqrt(l.next())*Math.max(z.rx,z.rz),n=z.x+Math.cos(e)*t,r=z.z+Math.sin(e)*t*.8;It(n,r)>-.45||this.floatData.push({kind:Math.floor(l.next()*u.length),x:n,z:r,rot:l.next()*6,ph:l.next()*6,s:.9+l.next()*.4})}this.lilies=new yn(Mv(),ns(),26),this.lilies.count=0,this.lilies.frustumCulled=!1,this.townGroup.add(this.lilies);let d=0;for(let e=0;e<80&&d<26;e++){let e=l.next()*Math.PI*2,t=1.5+l.next()*6,n=z.x+Math.cos(e)*t,r=z.z+Math.sin(e)*t*.75,i=It(n,r);i>-.5||i<-2.2||(Ov.set(n,z.level+.03,r),Dv.setFromAxisAngle(Jt.DEFAULT_UP,l.next()*6),this.lilies.setMatrixAt(d++,Ev.compose(Ov,Dv,kv.setScalar(.8+l.next()*.5))))}this.lilies.userData.n=d,this.ducks=new yn(Pv(),ns(),Tv),this.ducks.count=0,this.ducks.frustumCulled=!1,this.townGroup.add(this.ducks);for(let e=0;e<Tv;e++)this.duckData.push({r:1.2+l.next()*2.4,a:l.next()*6,sp:(l.next()<.5?-1:1)*(.18+l.next()*.12),ph:l.next()*6});this.setClean(0,!0)}floatKinds(){let e=(this.sea?[`bottle`,`bag`,`floatBuoy`,`fishBox`,`tire`,`net`,`can`]:[`bottle`,`bag`,`can`,`box`,`tire`,`news`]).map(e=>Xg[e]);for(let t of e){let e=Yg[t].variants[0],n=new yn(e,ns(),wv*(this.sea?3:1));n.count=0,n.frustumCulled=!1,n.userData.shared=!0,this.floats.push(n),this.townGroup.add(n)}return e}buildSea(){let e=new Ne(420,340,1,1);e.rotateX(-Math.PI/2),this.water=new F(e,this.mat),this.water.position.set(0,z.level,-150),this.water.renderOrder=2,this.water.frustumCulled=!1,this.townGroup.add(this.water);let t=new Wt(9137),n=this.floatKinds();for(let e=0;e<552&&this.floatData.length<138;e++){let e=t.range(-11.5,11.5),r=t.range(-53.5,-28.5);It(e,r)>-.8||this.floatData.push({kind:Math.floor(t.next()*n.length),x:e,z:r,rot:t.next()*6,ph:t.next()*6,s:.9+t.next()*.5})}this.lilies=new yn(Mv(),ns(),1),this.lilies.count=0,this.lilies.userData.n=0,this.townGroup.add(this.lilies),this.ducks=new yn(Pv(),ns(),1),this.ducks.count=0,this.townGroup.add(this.ducks);let r=new yn(Nv(),ns(),6);r.count=0,r.frustumCulled=!1,r.castShadow=!0,this.townGroup.add(r),this.boats=r;for(let e=0;e<4;e++)this.boatData.push({r:5+e*1.6,rz:7+e*1.8,a:t.next()*6,sp:(e%2?-1:1)*(.08+t.next()*.05),ph:t.next()*6,moored:!1,x:0,z:0,rot:0});for(let[e,n,r]of[[-8.5,-29.4,.3],[9,-29.6,-.4]])this.boatData.push({r:0,rz:0,a:0,sp:0,ph:t.next()*6,moored:!0,x:e,z:n,rot:r});this.setClean(0,!0)}setClean(e,t=!1){this.want=e,t&&(this.clean=e)}get isClean(){return this.clean>.99}update(e){this.time+=e,this.mat.uniforms.uTime.value=this.time;let t=this.clean;if(this.clean!==this.want){var n;this.clean+=Math.sign(this.want-this.clean)*Math.min(Math.abs(this.want-this.clean),e/2.4),t<1&&this.clean>=1&&((n=this.onCleared)==null||n.call(this))}this.mat.uniforms.uClean.value=this.clean;let r=this.floats.map(()=>0);for(let e of this.floatData){let t=Math.hypot(e.x-z.x,e.z-z.z),n=Math.max(0,Math.min(1,(this.clean*z.radius-t)/1.2));if(n>=1)continue;let i=this.floats[e.kind],a=Math.sin(this.time*1.6+e.ph)*.04;Ov.set(e.x+Math.sin(this.time*.3+e.ph)*.15,z.level-.04+a-n*.5,e.z),Dv.setFromEuler(Av.set(Math.sin(this.time+e.ph)*.15,e.rot+this.time*.05,Math.cos(this.time*.8+e.ph)*.12)),i.setMatrixAt(r[e.kind]++,Ev.compose(Ov,Dv,kv.setScalar(e.s*(1-n))))}this.floats.forEach((e,t)=>{e.count=r[t],e.instanceMatrix.needsUpdate=!0});let i=Math.max(0,Math.min(1,(this.clean-.6)/.4));if(this.boats&&(this.boats.count=i>0?this.boatData.length:0,this.boats.visible=i>0,i>0&&(this.boatData.forEach((t,n)=>{let r=t.x,a=t.z,o=t.rot;t.moored||(t.a+=t.sp*e,r=z.x+Math.cos(t.a)*t.r,a=z.z+Math.sin(t.a)*t.rz,o=Math.atan2(-Math.sin(t.a)*t.sp*t.r,Math.cos(t.a)*t.sp*t.rz)),Ov.set(r,z.level+Math.sin(this.time*1.3+t.ph)*.04-(1-i)*.6,a+(1-i)*-20),Dv.setFromEuler(Av.set(Math.sin(this.time*1.1+t.ph)*.05,o,Math.cos(this.time*.9+t.ph)*.06)),this.boats.setMatrixAt(n,Ev.compose(Ov,Dv,kv.setScalar(1)))}),this.boats.instanceMatrix.needsUpdate=!0)),this.lilies.count=i>0?this.lilies.userData.n:0,this.lilies.visible=i>0,this.ducks.count=i>0?this.duckData.length:0,i>0){this.lilies.scale.setScalar(1);for(let t=0;t<this.duckData.length;t++){let n=this.duckData[t];n.a+=n.sp*e;let r=z.x+Math.cos(n.a)*n.r*1.3,a=z.z+Math.sin(n.a)*n.r;Ov.set(r,z.level+Math.sin(this.time*2+n.ph)*.02-(1-i)*.4,a),Dv.setFromAxisAngle(Jt.DEFAULT_UP,Math.atan2(-Math.sin(n.a)*n.sp*1.3,Math.cos(n.a)*n.sp)),this.ducks.setMatrixAt(t,Ev.compose(Ov,Dv,kv.setScalar(i)))}this.ducks.instanceMatrix.needsUpdate=!0}}},Iv=[`heart`,`smile`,`star`,`note`,`clap`,`ouch`,`thumb`,`wow`],Lv=48;function Rv(){let e=Iv.length,t=document.createElement(`canvas`);t.width=128*e,t.height=128;let n=t.getContext(`2d`),r=(e,t)=>{n.save(),n.translate(e+64,64),n.fillStyle=`#ffffff`,n.beginPath(),n.arc(0,-4,50,0,Math.PI*2),n.fill(),n.beginPath(),n.moveTo(-12,40),n.lineTo(0,60),n.lineTo(12,40),n.fill(),n.strokeStyle=`rgba(42,47,58,0.25)`,n.lineWidth=4,n.beginPath(),n.arc(0,-4,50,0,Math.PI*2),n.stroke(),n.fillStyle=t,n.restore()};Iv.forEach((e,t)=>{let i=t*128;if(r(i,`#fff`),n.save(),n.translate(i+64,60),e===`heart`)n.fillStyle=`#ff4d6d`,n.beginPath(),n.moveTo(0,26),n.bezierCurveTo(-46,-6,-24,-40,0,-16),n.bezierCurveTo(24,-40,46,-6,0,26),n.fill();else if(e===`smile`||e===`wow`)n.fillStyle=`#ffcc33`,n.beginPath(),n.arc(0,0,32,0,Math.PI*2),n.fill(),n.fillStyle=`#2a2f3a`,n.beginPath(),n.arc(-11,-8,4.5,0,Math.PI*2),n.arc(11,-8,4.5,0,Math.PI*2),n.fill(),n.strokeStyle=`#2a2f3a`,n.lineWidth=5,n.lineCap=`round`,n.beginPath(),e===`smile`?n.arc(0,2,16,.2,Math.PI-.2):n.ellipse(0,12,7,9,0,0,Math.PI*2),n.stroke(),n.fillStyle=`rgba(255,110,110,0.5)`,n.beginPath(),n.arc(-20,6,5,0,Math.PI*2),n.arc(20,6,5,0,Math.PI*2),n.fill();else if(e===`star`){n.fillStyle=`#ffc21f`,n.beginPath();for(let e=0;e<10;e++){let t=-Math.PI/2+e*Math.PI/5,r=e%2?14:32;n.lineTo(Math.cos(t)*r,Math.sin(t)*r)}n.closePath(),n.fill()}else if(e===`note`)n.fillStyle=`#8a4ad0`,n.beginPath(),n.ellipse(-12,18,11,8,-.4,0,Math.PI*2),n.ellipse(16,10,11,8,-.4,0,Math.PI*2),n.fill(),n.fillRect(-4,-26,6,44),n.fillRect(24,-34,6,44),n.beginPath(),n.moveTo(-4,-26),n.lineTo(30,-34),n.lineTo(30,-24),n.lineTo(-4,-16),n.fill();else if(e===`clap`){n.fillStyle=`#f4c7a1`,n.strokeStyle=`#c98a5e`,n.lineWidth=3;for(let e of[-1,1])n.save(),n.rotate(e*.35),n.beginPath(),n.roundRect(e*6-10,-26,20,44,9),n.fill(),n.stroke(),n.restore();n.strokeStyle=`#ffc21f`,n.lineWidth=4;for(let e of[-2.4,-1.57,-.74])n.beginPath(),n.moveTo(Math.cos(e)*30,Math.sin(e)*30-6),n.lineTo(Math.cos(e)*42,Math.sin(e)*42-6),n.stroke()}else if(e===`ouch`){n.fillStyle=`#ff5a4f`,n.beginPath();for(let e=0;e<16;e++){let t=e*Math.PI/8,r=e%2?18:34;n.lineTo(Math.cos(t)*r,Math.sin(t)*r)}n.closePath(),n.fill(),n.fillStyle=`#fff`,n.font=`900 34px system-ui, sans-serif`,n.textAlign=`center`,n.textBaseline=`middle`,n.fillText(`!`,0,2)}else e===`thumb`&&(n.fillStyle=`#3a8df0`,n.beginPath(),n.roundRect(-26,-4,14,30,4),n.fill(),n.fillStyle=`#f4c7a1`,n.beginPath(),n.roundRect(-10,-6,34,32,8),n.fill(),n.beginPath(),n.roundRect(-6,-32,14,32,7),n.fill());n.restore()});let i=new $t(t);return i.colorSpace=ee,i}var zv=class{constructor(e){this.list=[],this.next=0;let t=new Ne(1,1);this.geo=new ie,this.geo.index=t.index,this.geo.setAttribute(`position`,t.attributes.position),this.geo.setAttribute(`uv`,t.attributes.uv),this.center=new Float32Array(144),this.info=new Float32Array(96),this.geo.setAttribute(`aCenter`,new et(this.center,3).setUsage(C)),this.geo.setAttribute(`aInfo`,new et(this.info,2).setUsage(C)),this.geo.instanceCount=Lv;for(let e=0;e<Lv;e++)this.list.push({x:0,y:-100,z:0,icon:0,t:1,dur:1,alive:!1});let n=new Le({uniforms:{uMap:{value:Rv()},uN:{value:Iv.length}},vertexShader:`
attribute vec3 aCenter;
attribute vec2 aInfo;
varying vec2 vUv;
varying float vA;
uniform float uN;
void main() {
  float k = aInfo.y;
  // pop in with an overshoot, float up, shrink away at the end
  float s = k < 0.18 ? (k / 0.18) * 1.25 : k < 0.3 ? 1.25 - (k - 0.18) / 0.12 * 0.25 : 1.0;
  s *= 1.0 - smoothstep(0.82, 1.0, k) * 0.6;
  vA = 1.0 - smoothstep(0.78, 1.0, k);
  vec3 right = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]);
  vec3 up = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);
  vec3 c = aCenter + vec3(0.0, k * 0.7, 0.0);
  vec3 p = c + (right * position.x + up * position.y) * 0.9 * s;
  vUv = vec2((uv.x + aInfo.x) / uN, uv.y);
  gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
}`,fragmentShader:`
uniform sampler2D uMap;
varying vec2 vUv;
varying float vA;
void main() {
  vec4 c = texture2D(uMap, vUv);
  if (c.a * vA < 0.05) discard;
  gl_FragColor = vec4(c.rgb, c.a * vA);
}`,transparent:!0,depthWrite:!1});this.mesh=new F(this.geo,n),this.mesh.frustumCulled=!1,this.mesh.renderOrder=12,e.add(this.mesh)}spawn(e,t,n,r,i=1.5){let a=this.list[this.next];this.next=(this.next+1)%Lv,a.x=t,a.y=n,a.z=r,a.icon=Iv.indexOf(e),a.t=0,a.dur=i,a.alive=!0}update(e){let t=!1;for(let n=0;n<Lv;n++){let r=this.list[n];r.alive&&(r.t+=e/r.dur,r.t>=1&&(r.alive=!1)),this.center[n*3]=r.x,this.center[n*3+1]=r.alive?r.y:-100,this.center[n*3+2]=r.z,this.info[n*2]=r.icon,this.info[n*2+1]=Math.min(1,r.t),t||(t=r.alive)}this.mesh.visible=t,this.geo.attributes.aCenter.needsUpdate=!0,this.geo.attributes.aInfo.needsUpdate=!0}},Bv=.95,Vv=.14,Hv=110,Uv=4,Wv=class{constructor(e){this.time={value:0},this.trails=[],this.pos=new Float32Array(2664),this.birth=new Float32Array(888).fill(-100),this.side=new Float32Array(888),this.idx=new Uint16Array(660*Uv);let t=new Tn;t.setAttribute(`position`,new fn(this.pos,3).setUsage(C)),t.setAttribute(`aBirth`,new fn(this.birth,1).setUsage(C)),t.setAttribute(`aSide`,new fn(this.side,1).setUsage(C)),t.setIndex(new fn(this.idx,1).setUsage(C)),t.setDrawRange(0,0),this.geo=t;let n=new Le({uniforms:{uTime:this.time},vertexShader:`
attribute float aBirth;
attribute float aSide;
varying float vU;
varying float vAge;
uniform float uTime;
void main() {
  vU = aSide;
  vAge = (uTime - aBirth) / ${Bv.toFixed(2)};
  gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
}`,fragmentShader:`
varying float vU;
varying float vAge;
void main() {
  if (vAge > 1.0) discard;
  float u = abs(vU - 0.5);
  float side = 1.0 - smoothstep(0.32, 0.5, u);
  // two faint grooves along the stripe
  float groove = 1.0 - 0.32 * (1.0 - smoothstep(0.012, 0.045, abs(u - 0.16)));
  float fade = 1.0 - clamp(vAge, 0.0, 1.0);
  // it starts just behind the tyre (no hard edge under the wheel)
  float head = smoothstep(0.0, 0.07, vAge);
  float a = side * groove * fade * fade * head * 0.5;
  if (a < 0.01) discard;
  gl_FragColor = vec4(0.07, 0.06, 0.05, a);
}`,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});this.mesh=new F(t,n),this.mesh.frustumCulled=!1,this.mesh.renderOrder=1,e.add(this.mesh)}reset(){this.trails=[]}update(e,t,n,r){let i=this.time.value+=e,a=0,o=0,s=n/2;for(let e=0;e<Math.min(Uv,t.length);e++){let n=t[e],c=this.trails[e];c||(c=this.trails[e]=[]);let l=0;for(;l<c.length&&i-c[l].t>Bv;)l++;l&&c.splice(0,l);let u=c[c.length-1],d=u?Math.hypot(n.x-u.x,n.z-u.z):1/0;u&&d>3&&(c.length=0),(!c.length||d>=Vv)&&(c.push({x:n.x,y:r(n.x,n.z)+.025,z:n.z,t:i}),c.length>Hv&&c.shift());let f=c[c.length-1],p=Math.hypot(n.x-f.x,n.z-f.z)>.01,m=c.length+ +!!p;if(m<2)continue;let h=e=>e<c.length?c[e]:null,g=a;for(let e=0;e<m;e++){let t=h(e),o=t?t.x:n.x,c=t?t.z:n.z,l=t?t.y:r(n.x,n.z)+.025,u=t?t.t:i,d=e>0?h(e-1):null,f=e+1<m?h(e+1):null,p=f?f.x:e+1<m?n.x:o,g=f?f.z:e+1<m?n.z:c,_=p-(d?d.x:o),v=g-(d?d.z:c),y=Math.hypot(_,v)||1;_/=y,v/=y;let b=-v*s,x=_*s,S=a*3;this.pos[S]=o+b,this.pos[S+1]=l,this.pos[S+2]=c+x,this.pos[S+3]=o-b,this.pos[S+4]=l,this.pos[S+5]=c-x,this.birth[a]=this.birth[a+1]=u,this.side[a]=0,this.side[a+1]=1,a+=2}for(let e=0;e<m-1;e++){let t=g+e*2;this.idx[o++]=t,this.idx[o++]=t+2,this.idx[o++]=t+1,this.idx[o++]=t+1,this.idx[o++]=t+2,this.idx[o++]=t+3}}let c=this.geo;if(c.setDrawRange(0,o),this.mesh.visible=o>0,!o)return;for(let[e,t]of[[`position`,3],[`aBirth`,1],[`aSide`,1]]){let n=c.attributes[e];n.clearUpdateRanges(),n.addUpdateRange(0,a*t),n.needsUpdate=!0}let l=c.index;l.clearUpdateRanges(),l.addUpdateRange(0,o),l.needsUpdate=!0}},Gv=class{constructor(e,t){this.rig=e,this.hud=t,this.queue=[],this.cur=null,this.t=0,this.skip=!1,this.onLine=null,this.hold=()=>!1}get busy(){return this.cur!==null||this.queue.length>0&&!this.hold()}play(e){if(this.skip){for(let t of e)t.k===`do`&&t.fn();return}this.queue.push(...e),!this.cur&&!this.hold()&&this.next()}clear(){this.queue=[],this.cur=null,this.rig.overviewTarget=0}next(){var e;this.cur=(e=this.queue.shift())==null?null:e,this.t=0;let t=this.cur;if(!t){this.rig.overviewTarget=0,this.rig.shotSpeed=1.6;return}if(t.k===`shot`){var n,r,i;this.rig.overviewCenter.set(t.x,R(t.x,t.z),t.z),this.rig.overviewSize={w:t.w,d:t.d},this.rig.overviewPitch=(n=t.pitch)==null?nn.degToRad(56):n,this.rig.overviewYaw=(r=t.yaw)==null?0:r,this.rig.shotSpeed=(i=t.speed)==null?1.6:i,this.rig.overviewTarget=1}else if(t.k===`tractor`)this.rig.overviewTarget=0;else if(t.k===`say`){var a;let e=ir(t.key);(a=this.onLine)==null||a.call(this),this.hud.dialog(e,()=>{this.cur===t&&this.next()})}else t.k===`do`&&(t.fn(),this.next())}update(e){var t,n;!this.cur&&this.queue.length&&!this.hold()&&this.next();let r=this.cur;r&&(this.t+=e,(r.k===`shot`&&this.t>=((t=r.t)==null?1.8:t)||r.k===`tractor`&&this.t>=((n=r.t)==null?.9:n)||r.k===`wait`&&this.t>=r.t)&&this.next())}},Kv=class e{constructor(e,t,n=.42,r=`#ffd23f`,i=.25){this.k=0,this.target=1,this.time=0;let a=t.length,o=[],s=[],c=[],l=0;for(let e=0;e<=a;e++){let r=t[e%a],u=t[(e-1+a)%a],d=t[(e+1)%a];e>0&&(l+=Math.hypot(r[0]-u[0],r[1]-u[1]));let f=d[0]-u[0],p=d[1]-u[1],m=Math.hypot(f,p)||1;f/=m,p/=m;let h=-p,g=f;for(let e of[-1,1]){let t=r[0]+h*e*n*.5,a=r[1]+g*e*n*.5;o.push(t,R(t,a)+i,a),s.push(l,e<0?0:1)}if(e<a){let t=e*2;c.push(t,t+2,t+1,t+1,t+2,t+3)}}let u=new Tn;u.setAttribute(`position`,new j(o,3)),u.setAttribute(`uv`,new j(s,2)),u.setIndex(c),this.mat=new Le({uniforms:{uTime:{value:0},uK:{value:0},uColor:{value:new I(r)}},vertexShader:`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,fragmentShader:`
uniform float uTime;
uniform float uK;
uniform vec3 uColor;
varying vec2 vUv;
void main() {
  float across = 1.0 - abs(vUv.y * 2.0 - 1.0);
  float dash = smoothstep(0.35, 0.45, fract(vUv.x * 0.55 - uTime * 0.9)) * (1.0 - smoothstep(0.85, 0.95, fract(vUv.x * 0.55 - uTime * 0.9)));
  float pulse = 0.75 + 0.25 * sin(uTime * 5.0);
  vec3 col = mix(uColor, vec3(1.0), smoothstep(0.55, 1.0, across) * 0.7);
  float a = (0.5 + 0.5 * dash) * smoothstep(0.0, 0.3, across) * pulse * uK;
  gl_FragColor = vec4(col, a);
}`,transparent:!0,depthTest:!1,depthWrite:!1,side:2}),this.mesh=new F(u,this.mat),this.mesh.renderOrder=35,this.mesh.frustumCulled=!1,e.add(this.mesh)}static rect(t,n,r=.6,i=1.6,a){let o=[],s=n.minX+r,c=n.maxX-r,l=n.minZ+r,u=n.maxZ-r,d=(e,t,n)=>{for(let r=0;r<=6;r++){let a=n+r/6*(Math.PI/2);o.push([e+Math.cos(a)*i,t+Math.sin(a)*i])}};return d(c-i,u-i,0),d(s+i,u-i,Math.PI/2),d(s+i,l+i,Math.PI),d(c-i,l+i,Math.PI*1.5),new e(t,o,.8,a)}static circle(t,n,r,i,a){let o=[];for(let e=0;e<48;e++){let t=e/48*Math.PI*2;o.push([n+Math.cos(t)*i,r+Math.sin(t)*i])}return new e(t,o,.6,a,.4)}update(e){this.time+=e,this.k+=(this.target-this.k)*Math.min(1,e*4),this.mat.uniforms.uTime.value=this.time,this.mat.uniforms.uK.value=this.k,this.mesh.visible=this.k>.01}get gone(){return this.target===0&&this.k<.01}dispose(){this.mesh.removeFromParent(),this.mesh.geometry.dispose(),this.mat.dispose()}},qv=new L,Jv=6592/9,Yv=class{constructor(t,n){this.camera=n,this.k=1,this.shownCoins=0,this.targetCoins=0,this.hintTimer=0,this.hintKey=``,this.flyers=[],this.ftexts=[],this.labels=[],this.onSoundToggle=null,this.onNext=null,this.onWalk=null,this.dlgLines=[],this.dlgDone=null,this.dlgShown=0,this.dlgFull=``,this.dlgWait=0,this.dlgWho=null,this.faces=new Map,this.face=null,this.sylWait=0,this.onTalk=null,this.talkLevel=()=>-1,this.dlgRight=!1,this.dlgPrevWho=null,this.onTalkDone=null,this.onTalkStop=null,this.plotShown=``,this.w=1,this.h=1,this._s={x:0,y:0},this.onPostcardClose=null,this.onDialogTap=null,this.nudgeTimer=0,this.boxFlip=!1,this.curtainGen=0,this.curtainClosed=null,this.bannerT=0,this.coinBumpTimer=0,this.topCache=170,this.topCacheT=0,this.cargoShown=-1,this.cargoCapShown=-1,this.plotBumpAt=-1,this.root=t,t.addEventListener(`scroll`,()=>{(t.scrollTop||t.scrollLeft)&&(t.scrollTop=t.scrollLeft=0)}),this.col=X(`div`,`ui-col`),t.appendChild(this.col);let r=this.col,i=X(`div`,`hud-top`),a=X(`div`,`hud-row`);this.coinsEl=X(`div`,`coins outline`),this.coinsEl.innerHTML=`<span class="coin"></span>`,this.coinsVal=document.createElement(`span`),this.coinsVal.textContent=`0`,this.coinsEl.appendChild(this.coinsVal),this.soundBtn=document.createElement(`button`),this.soundBtn.className=`icon-btn`,this.soundBtn.innerHTML=Xc(`soundOn`),this.soundBtn.addEventListener(`pointerdown`,e=>e.stopPropagation()),this.soundBtn.addEventListener(`click`,()=>{var e;return(e=this.onSoundToggle)==null?void 0:e.call(this)}),this.yardNum=X(`div`,`yard-num outline`),a.append(this.coinsEl,this.yardNum,this.soundBtn);let o=X(`div`,`yard`),s=X(`div`,`bar`);this.barFill=X(`div`,`bar-fill`),this.barPct=X(`div`,`bar-pct outline`),this.goalEl=X(`div`,`bar-goal`),this.goalEl.innerHTML=Xc(`flag`),s.append(this.barFill,this.goalEl,this.barPct),o.append(s),this.plotEl=X(`div`,`plot-pill outline`),this.plotEl.innerHTML=`<i class="ring"></i><span class="pl"></span><b></b>`,this.plotRing=this.plotEl.querySelector(`.ring`),this.plotName=this.plotEl.querySelector(`.pl`),this.plotPct=this.plotEl.querySelector(`b`),this.mapSlot=X(`div`,`map-slot`),i.append(a,o,this.mapSlot,this.plotEl),r.appendChild(i),this.hintEl=X(`div`,`hint outline`),r.appendChild(this.hintEl),this.cargoBar=X(`div`,`cargo-bar`),this.cargoBar.innerHTML=`<div class="cb-full outline">${e(`full`)}</div><div class="cb-truck"><div class="cb-bed"><i class="cb-fill"></i><i class="cb-flash"></i><div class="cb-num outline"></div></div><div class="cb-cab">${Xv}</div><i class="cb-w w1"></i><i class="cb-w w2"></i><i class="cb-w w3"></i></div>`,this.cargoFill=this.cargoBar.querySelector(`.cb-fill`),this.cargoNum=this.cargoBar.querySelector(`.cb-num`),r.appendChild(this.cargoBar),this.edgeEl=X(`div`,`edge`),this.edgeTip=X(`div`,`tip`),this.edgeIcon=X(`div`,`disc`),this.edgeEl.append(this.edgeTip,this.edgeIcon),t.appendChild(this.edgeEl),this.ringEl=X(`div`,`tut-ring`),this.handEl=X(`div`,`tut-hand`),this.handEl.innerHTML=Xc(`hand`),r.append(this.ringEl,this.handEl),this.fadeEl=X(`div`,`fade`),t.appendChild(this.fadeEl),this.bannerEl=X(`div`,`banner`),r.appendChild(this.bannerEl),this.nextBtn=document.createElement(`button`),this.nextBtn.className=`next-btn outline`,this.nextBtn.addEventListener(`pointerdown`,e=>e.stopPropagation()),this.nextBtn.addEventListener(`click`,()=>{var e;return(e=this.onNext)==null?void 0:e.call(this)}),r.appendChild(this.nextBtn),this.walkBtn=document.createElement(`button`),this.walkBtn.className=`walk-btn outline`,this.walkBtn.addEventListener(`pointerdown`,e=>e.stopPropagation()),this.walkBtn.addEventListener(`click`,()=>{var e;return(e=this.onWalk)==null?void 0:e.call(this)}),r.appendChild(this.walkBtn),this.dlgEl=X(`div`,`dlg`),this.dlgEl.innerHTML=`<div class="dlg-face"></div><div class="dlg-box"><div class="dlg-name"></div><div class="dlg-text"></div><button class="dlg-ok">${e(`next`)}<i>▸</i></button></div>`,this.dlgFace=this.dlgEl.querySelector(`.dlg-face`),this.dlgName=this.dlgEl.querySelector(`.dlg-name`),this.dlgText=this.dlgEl.querySelector(`.dlg-text`),this.dlgBox=this.dlgEl.querySelector(`.dlg-box`),this.dlgTyper=new nr(this.dlgText,this.dlgBox),this.dlgTyper.onBox=e=>{let t=this.dlgBox,n=e===`flash`?`fx-flash`:`fx-boom`;t.classList.remove(`fx-flash`,`fx-boom`,`fx-flash2`,`fx-boom2`);let r=(this.boxFlip=!this.boxFlip)?n:n+`2`;t.classList.add(r)},this.dlgOk=this.dlgEl.querySelector(`.dlg-ok`),this.dlgEl.addEventListener(`pointerdown`,e=>{e.stopPropagation(),this.dlgTap()}),window.addEventListener(`pointerdown`,e=>{this.dialogOpen&&!this.dlgEl.contains(e.target)&&this.nudgeOk()}),window.addEventListener(`keydown`,e=>{this.dialogOpen&&(e.code===`Space`||e.code===`Enter`)&&this.dlgTap()}),r.appendChild(this.dlgEl),this.curtainEl=X(`div`,`curtain`),this.curtainEl.innerHTML=`<i class="cl"></i><i class="cr"></i><div class="ccard"><div class="cnum"></div><div class="ctitle t3d"></div><div class="csub rim"></div></div>`,t.appendChild(this.curtainEl),this.sawCardEl=X(`div`,`saw-card`),r.appendChild(this.sawCardEl),this.cardEl=X(`div`,`postcard`),this.cardEl.addEventListener(`pointerdown`,e=>{var t;e.stopPropagation(),this.postcardOpen&&(this.hidePostcard(),(t=this.onPostcardClose)==null||t.call(this))}),r.appendChild(this.cardEl)}postcard(e,t,n,r,i){this.cardEl.innerHTML=`<div class="pc-title">${Zv(n)}</div><div class="pc-row"><figure><figcaption>${Zv(r)}</figcaption></figure><figure class="after"><figcaption>${Zv(i)}</figcaption></figure><i class="pc-arrow">${Xc(`arrowUp`,`ico`)}</i></div><button class="pc-close">${Xc(`close`)}</button>`;let a=this.cardEl.querySelectorAll(`figure`);a[0].prepend(e),a[1].prepend(t),this.cardEl.classList.remove(`show`),this.cardEl.offsetWidth,this.cardEl.classList.add(`show`)}hidePostcard(){this.cardEl.classList.remove(`show`)}get postcardOpen(){return this.cardEl.classList.contains(`show`)}lookCard(e,t,n){this.sawCardEl.innerHTML=`<i class="lc-ico">${Xc(e)}</i><div class="sc-t"><i>${n}</i><b>${t}</b></div>`,this.sawCardEl.classList.remove(`show`),this.sawCardEl.offsetWidth,this.sawCardEl.classList.add(`show`)}sawCard(t,n,r){this.sawCardEl.innerHTML=`<img src="${t}" alt=""><div class="sc-t"><i>${e(`newSaw`)}</i><b>${n}</b><span>${r}</span></div>`,this.sawCardEl.classList.remove(`show`),this.sawCardEl.offsetWidth,this.sawCardEl.classList.add(`show`)}dialog(e,t){if(!e.length){t==null||t();return}this.dlgLines=e.slice(),this.dlgDone=t==null?null:t,this.dlgEl.classList.add(`show`),this.dlgPrevWho=null,this.dlgRight=!1,this.nextLine()}get dialogOpen(){return this.dlgEl.classList.contains(`show`)}skipDialog(){var e,t;if(!this.dialogOpen)return;let n=this.dlgDone;this.dlgLines=[],this.dlgDone=null,this.dlgEl.classList.remove(`show`),(e=this.face)==null||e.quiet(),(t=this.onTalkStop)==null||t.call(this),n==null||n()}nextLine(){var e;let t=this.dlgLines.shift();if(!t){var n;(n=this.onTalkStop)==null||n.call(this),this.dlgEl.classList.remove(`show`);let e=this.dlgDone;this.dlgDone=null,e==null||e();return}let r=this.faces.get(t.who);if(r||(this.faces.set(t.who,r=new cr(t.who)),r.frame(`dialog`)),this.dlgPrevWho&&this.dlgPrevWho!==t.who&&(this.dlgRight=!this.dlgRight),this.dlgPrevWho=t.who,this.dlgEl.classList.toggle(`right`,this.dlgRight),this.face!==r){var i;(i=this.face)==null||i.quiet(),this.dlgFace.replaceChildren(r.el),this.face=r,this.dlgFace.classList.remove(`in`),this.dlgFace.offsetWidth,this.dlgFace.classList.add(`in`)}r.presentLine(er(t.text),t.cue),this.dlgWho=t.who,this.dlgName.textContent=tr(t.who),this.dlgName.style.background=$n[t.who],this.dlgBox.classList.remove(`fx-flash`,`fx-boom`,`fx-flash2`,`fx-boom2`),this.dlgTyper.set(t.text),this.dlgFull=this.dlgTyper.rich.plain,this.dlgShown=0,this.dlgWait=.12,this.sylWait=.1,(e=this.onTalk)==null||e.call(this,t.who,this.dlgTyper.rich.time,t),this.dlgEl.classList.remove(`pop`),this.dlgEl.offsetWidth,this.dlgEl.classList.add(`pop`)}dlgTap(){var e;if(this.dialogOpen){if(this.dlgShown<this.dlgTyper.length){var t,n;this.dlgShown=this.dlgTyper.length,this.dlgTyper.reveal(this.dlgShown),this.talkLevel()<0&&((t=this.face)==null||t.quiet()),(n=this.onTalkDone)==null||n.call(this);return}(e=this.onDialogTap)==null||e.call(this),this.nextLine()}}nudgeOk(){let e=this.dlgOk;e.classList.remove(`wiggle`),e.offsetWidth,e.classList.add(`wiggle`),clearTimeout(this.nudgeTimer),this.nudgeTimer=window.setTimeout(()=>e.classList.remove(`wiggle`),700)}curtain(e,t,n,r,i=1.5){let a=this.curtainEl,o=++this.curtainGen;this.curtainClosed=r,a.querySelector(`.cnum`).textContent=e;let s=a.querySelector(`.ctitle`);s.textContent=t,s.setAttribute(`data-text`,t),a.querySelector(`.csub`).textContent=n,a.classList.remove(`open`),a.classList.add(`closing`),setTimeout(()=>{o===this.curtainGen&&(this.curtainClosed=null,r(),a.classList.add(`card`),setTimeout(()=>{o===this.curtainGen&&(a.classList.remove(`card`),a.classList.add(`open`),setTimeout(()=>o===this.curtainGen&&a.classList.remove(`closing`,`open`),900))},i*1e3))},650)}curtainOpen(e,t,n,r=1.2){let i=this.curtainEl;i.querySelector(`.cnum`).textContent=e;let a=i.querySelector(`.ctitle`);a.textContent=t,a.setAttribute(`data-text`,t),i.querySelector(`.csub`).textContent=n,i.classList.add(`instant`,`closing`,`card`),i.offsetWidth,i.classList.remove(`instant`);let o=++this.curtainGen;setTimeout(()=>{o===this.curtainGen&&(i.classList.remove(`card`),i.classList.add(`open`),setTimeout(()=>o===this.curtainGen&&i.classList.remove(`closing`,`open`),900))},r*1e3)}skipCurtain(){this.curtainGen++;let e=this.curtainClosed;this.curtainClosed=null,e==null||e(),this.curtainEl.classList.remove(`closing`,`open`,`card`)}get curtainBusy(){return this.curtainEl.classList.contains(`closing`)}banner(e,t,n=``){this.bannerT=2.3,this.bannerEl.innerHTML=`<div class="b1 t3d ${n}" data-text="${Zv(e)}">${Zv(e)}</div><div class="b2 rim">${Zv(t)}</div>`,Qv(this.bannerEl.querySelector(`.b1`),this.col.offsetWidth-64),Qv(this.bannerEl.querySelector(`.b2`),this.col.offsetWidth-32),this.bannerEl.classList.remove(`show`),this.bannerEl.offsetWidth,this.bannerEl.classList.add(`show`)}mapCenter(){let e=this.mapSlot.getBoundingClientRect();return{x:e.left+e.width/2,y:e.top+e.height/2}}toast(e,t,n){let r=X(`div`,`toast outline`);r.textContent=e,r.style.left=t+`px`,r.style.top=n+`px`,this.root.appendChild(r),setTimeout(()=>r.remove(),1800)}topBottom(){return this.root.querySelector(`.hud-top`).getBoundingClientRect().bottom+8}resize(e,t){this.w=e,this.h=t;let n=this.k=Math.min(e/412,t/Jv);this.root.style.setProperty(`--k`,n.toFixed(4));let r=this.col.style;r.width=`412px`,r.height=t/n+`px`,r.transform=`translateX(${((e-412*n)/2).toFixed(2)}px) scale(${n.toFixed(4)})`}showNext(e,t=``){e&&(this.nextBtn.innerHTML=`<span>${t}</span>${Xc(`arrowUp`,`ico`)}`),this.nextBtn.classList.toggle(`show`,e)}showWalk(e,t=``,n=!1){e&&(this.walkBtn.innerHTML=`${Xc(n?`truck`:`walk`,`ico`)}<span>${t}</span>`),this.walkBtn.classList.toggle(`show`,e),this.walkBtn.classList.toggle(`back`,n)}setMuted(e){this.soundBtn.innerHTML=Xc(e?`soundOff`:`soundOn`)}setCoins(e,t=!1){this.targetCoins=e,t&&(this.shownCoins=e,this.coinsVal.textContent=qt(e))}bumpCoins(){this.coinsEl.classList.add(`bump`),clearTimeout(this.coinBumpTimer),this.coinBumpTimer=window.setTimeout(()=>this.coinsEl.classList.remove(`bump`),120)}setYard(t,n){this.yardNum.textContent=e(`yard`,{n:t}),this.goalEl.style.left=`calc(${n*100}% - 4px)`}setProgress(e){let t=Math.floor(e*100);this.barFill.style.width=`calc(${Math.min(1,e)*100}% - ${Math.min(1,e)*6}px)`,this.barPct.textContent=t+`%`}setPlot(e,t=0){let n=Math.floor(t*100),r=e===null?``:e+n;if(r===this.plotShown)return;if(this.plotShown=r,this.plotEl.classList.toggle(`show`,e!==null),e===null){this.plotBumpAt=-1;return}this.plotName.textContent=e,this.plotPct.textContent=n+`%`;let i=Math.floor(n/5);i>this.plotBumpAt&&this.plotBumpAt>=0&&$v(this.plotEl),this.plotBumpAt=i,this.plotRing.style.background=`conic-gradient(#8ef07a ${n*3.6}deg, rgba(255,255,255,0.22) 0deg)`}get hudBottom(){return this.topCache-30}setCargo(e,t){if(e>this.cargoShown&&this.cargoShown>=0&&$v(this.cargoBar),e===this.cargoShown&&t===this.cargoCapShown)return;this.cargoShown=e,this.cargoCapShown=t;let n=Math.min(1,e/Math.max(1,t)),r=e>=t;this.cargoFill.style.width=`calc(${n*100}% - ${n*6}px)`,this.cargoNum.textContent=`${e}/${t}`,this.cargoBar.classList.toggle(`mid`,n>=.6&&!r),this.cargoBar.classList.toggle(`full`,r)}setCargoVisible(e){this.cargoBar.classList.toggle(`hidden`,!e)}setCargoIcon(e){}showHint(e,t,n=!1,r=0){this.hintKey!==e&&(this.hintEl.textContent=t,this.hintKey=e),this.hintEl.classList.toggle(`warn`,n),this.hintEl.classList.add(`show`),this.hintTimer=r}hideHint(e){e&&e!==this.hintKey||(this.hintEl.classList.remove(`show`),this.hintKey=``)}get currentHint(){return this.hintKey}showHand(e){this.handEl.classList.toggle(`show`,e),this.ringEl.classList.toggle(`show`,e)}fade(e){this.fadeEl.classList.toggle(`on`,e)}project(e,t){return qv.copy(e).project(this.camera),t.x=(qv.x*.5+.5)*this.w,t.y=(-qv.y*.5+.5)*this.h,qv.z<1}addLabel(e,t,n=0){let r=X(`div`,`wlabel`);r.innerHTML=e,this.root.appendChild(r);let i={el:r,world:t.clone(),visible:!0,offsetY:n};return this.labels.push(i),i}removeLabel(e){e.el.remove();let t=this.labels.indexOf(e);t>=0&&this.labels.splice(t,1)}coinTarget(){let e=this.coinsEl.getBoundingClientRect();return{x:e.left+23,y:e.top+e.height/2}}flyCoinFromWorld(e,t,n=0){let r={x:0,y:0};this.project(e,r),this.flyCoin(r.x,r.y,t,n)}flyCoin(e,t,n,r=0){let i=X(`div`,`fcoin`);i.innerHTML=`<span class="coin sm" style="display:block;width:26px;height:26px"></span>`,i.style.transform=`translate(${e}px, ${t}px) scale(0)`,this.root.appendChild(i);let a=this.coinTarget(),o=a.x-e,s=a.y-t;this.flyers.push({el:i,x0:e,y0:t,x1:a.x,y1:a.y,cx:e+o*.2+(Math.random()-.5)*120,cy:t+s*.2+60+Math.random()*60,t:-r,dur:.55+Math.random()*.2,onArrive:n})}flyCoinTo(e,t,n,r){let i=X(`div`,`fcoin`);i.innerHTML=`<span class="coin sm" style="display:block;width:26px;height:26px"></span>`,i.style.transform=`translate(${e}px, ${t}px) scale(0)`,this.root.appendChild(i),this.flyers.push({el:i,x0:e,y0:t,x1:n,y1:r,cx:(e+n)/2+(Math.random()-.5)*80,cy:Math.min(t,r)-40,t:0,dur:.45,onArrive:()=>{},noBump:!0})}floatText(e,t,n=`gold`){let r=X(`div`,`ftext `+n);r.textContent=e,this.root.appendChild(r);let i=n.includes(`big`)?30:22;this.ftexts.push({el:r,world:t.clone(),t:0,dur:n.includes(`big`)?1.8:.9,w:e.length*i*.62*1.2})}setEdge(e,t=0,n=0,r=0,i=`recycle`,a=`#2fbf71`){if(!e){this.edgeEl.style.display=`none`;return}this.edgeEl.style.display=`block`,this.edgeEl.style.transform=`translate(${t}px, ${n}px) scale(${this.k})`,this.edgeTip.style.transform=`rotate(${r}rad)`,this.edgeIcon.dataset.icon!==i&&(this.edgeIcon.dataset.icon=i,this.edgeIcon.innerHTML=Xc(i,`ico`,a))}update(e){if(this.shownCoins!==this.targetCoins){let t=this.targetCoins-this.shownCoins,n=Math.sign(t)*Math.max(1,Math.abs(t)*Math.min(1,e*12));this.shownCoins=Math.abs(n)>=Math.abs(t)?this.targetCoins:this.shownCoins+n,this.coinsVal.textContent=qt(this.shownCoins)}if(this.hintTimer>0&&(this.hintTimer-=e,this.hintTimer<=0&&this.hideHint()),this.bannerT>0&&(this.bannerT-=e),this.hintEl.classList.toggle(`wait`,this.bannerT>0),this.dialogOpen){var t,n,r;let u=this.dlgFull,d=this.dlgTyper.rich,f=this.dlgTyper.length,p=(t=d.off[Math.min(this.dlgShown,f)])==null?u.length:t,m=this.talkLevel();if(m>=0&&((n=this.face)==null||n.talk(m,ur(u,Math.min(p,u.length-1)))),this.dlgShown<f){var i,a,o;this.dlgWait-=e;let t=!1;for(;this.dlgWait<=0&&this.dlgShown<f;)this.dlgWait+=d.glyphs[this.dlgShown++].wait,t=!0;t&&this.dlgTyper.reveal(this.dlgShown);let n=(i=d.off[this.dlgShown])==null?u.length:i,r=(a=(o=d.glyphs[this.dlgShown-1])==null?void 0:o.ch)==null?``:a,p=this.dlgWait>.1&&/[,.!?…—:]/.test(r);if(this.sylWait-=e,this.sylWait<=0&&!p&&this.dlgShown<f&&this.dlgWho){var s;let e=rr[this.dlgWho],t=(.8+Math.random()*.4)/e.rate;this.sylWait=t*(.92+Math.random()*.2);let r=u.slice(n,n+4),i=this.dlgShown<3||/[.!?…]\s*$/.test(u.slice(Math.max(0,n-3),n)),a=/\?/.test(r)?.7:/!/.test(r)?.55:/[.…]/.test(r)?-.5:i?.5:Math.random()*.5-.15,o=ur(u,n);(s=this.face)==null||s.say(o,t,a)}if(this.dlgShown>=f){var c,l;m<0&&((c=this.face)==null||c.quiet()),(l=this.onTalkDone)==null||l.call(this)}}(r=this.face)==null||r.update(e)}for(let t=this.flyers.length-1;t>=0;t--){let n=this.flyers[t];if(n.t+=e,n.t<0)continue;let r=Math.min(1,n.t/n.dur),i=r<.5?2*r*r:1-(-2*r+2)**2/2,a=(1-i)*(1-i)*n.x0+2*(1-i)*i*n.cx+i*i*n.x1,o=(1-i)*(1-i)*n.y0+2*(1-i)*i*n.cy+i*i*n.y1,s=r<.15?r/.15:1-Math.max(0,r-.85)*2;n.el.style.transform=`translate(${a}px, ${o}px) scale(${s*this.k})`,r>=1&&(n.el.remove(),this.flyers.splice(t,1),n.onArrive(),n.noBump||this.bumpCoins())}let u=this._s;for(let t=this.ftexts.length-1;t>=0;t--){let n=this.ftexts[t];n.t+=e;let r=n.t/n.dur;if(r>=1){n.el.remove(),this.ftexts.splice(t,1);continue}this.project(n.world,u);let i=r<.2?.6+r/.2*.6:1.2-(r-.2)*.3;n.w||(n.w=n.el.offsetWidth*1.2);let a=Math.min(this.w/2-4,(n.w/2+6)*this.k),o=Math.max(a,Math.min(this.w-a,u.x));n.el.style.transform=`translate(${o}px, ${u.y-(30+r*50)*this.k}px) scale(${i*this.k}) translate(-50%, -50%)`,n.el.style.opacity=String(r>.7?1-(r-.7)/.3:1)}this.topCacheT-=e,this.topCacheT<=0&&(this.topCacheT=1,this.topCache=this.topBottom()+30);let d=this.topCache;for(let e of this.labels){if(!e.visible){e.el.style.display=`none`;continue}let t=this.project(e.world,u);t&&e.avoidHud&&(t=u.y>d&&u.y<this.h-80*this.k&&u.x>20&&u.x<this.w-20),e.el.style.display=t?``:`none`,e.el.style.transform=`translate(${u.x}px, ${u.y+e.offsetY}px) scale(${this.k}) translate(-50%, -100%)`}}},Xv=`<svg viewBox="0 0 40 34" class="ico"><path d="M3 30V12q0-3 3-3h13l9 9h7q3 0 3 3v9z" fill="#ffc21f" stroke="#2a2f3a" stroke-width="2.4" stroke-linejoin="round"/><path d="M8 13h10l6 6H8z" fill="#a9e2ff" stroke="#2a2f3a" stroke-width="2"/><rect x="31" y="21" width="5" height="3" rx="1" fill="#fff6c8"/></svg>`;function Zv(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`)}function Qv(e,t){if(!e)return;e.style.fontSize=``;let n=e.offsetWidth;if(n<=t||n<=0)return;let r=parseFloat(getComputedStyle(e).fontSize)||16;e.style.fontSize=Math.floor(t/n*r*10)/10+`px`}function $v(e){let t=e.classList.contains(`pop`);e.classList.toggle(`pop`,!t),e.classList.toggle(`pop2`,t)}function X(e,t=``){let n=document.createElement(e);return t&&(n.className=t),n}var ey=4.2,ty=new Pt,ny=new Zn,ry=new L,iy=new L,ay=new Xt;function oy(){let e=`#2f6fd0`,t=`#ff7a2a`;return md({shirt:`#ffd23f`,skin:`#f4c7a1`,hair:`#6b3b1f`,pants:e,shoes:`#6b4a32`,extra:n=>{n.box(.3,.3,.02,e,U(0,.98,.145),0);for(let t of[-.11,.11])n.box(.05,.1,.24,e,U(t,1.19,0),0);n.box(.45,.14,.29,e,U(0,.74,0),0),n.box(.07,.07,.02,`#ffd23f`,U(0,1,.16),0),n.sphere(.22,t,U(0,1.53,-.02),U(1,.6,1),7),n.box(.27,.03,.16,t,U(0,1.53,.23),0)}})}var sy={grandpa:()=>md({shirt:`#6b8f4e`,skin:`#f4c7a1`,hair:`#f4f1ea`,pants:`#6b4a32`,shoes:`#3b2a20`,noSmile:!0,extra:e=>{e.box(.3,.2,.1,`#f4f1ea`,U(0,1.3,.14),.04),e.box(.2,.05,.05,`#f4f1ea`,U(0,1.375,.19),.02);for(let t of[-.075,.075])e.torus(.045,.012,`#5b4636`,U(t,1.44,.205),void 0,10);e.cyl(.33,.33,.03,`#e8c46a`,U(0,1.57,-.01),void 0,14),e.cyl(.17,.2,.15,`#f0d27a`,U(0,1.65,-.01),void 0,12),e.cyl(.205,.205,.04,`#c9573a`,U(0,1.6,-.01),void 0,12)}}),mila:()=>md({shirt:`#35a85a`,skin:`#f6d2b4`,hair:`#d9572e`,pants:`#f6d2b4`,shoes:`#c9573a`,hairStyle:`round`,extra:e=>{e.cyl(.24,.31,.32,`#35a85a`,U(0,.6,0),void 0,10),e.box(.3,.48,.03,`#e8f6e2`,U(0,.8,.165),.01),e.sphere(.1,`#d9572e`,U(0,1.64,-.1),1,6),e.sphere(.055,`#ffffff`,U(.14,1.58,.04),U(1,.5,1),6),e.sphere(.026,`#ffd23f`,U(.14,1.595,.07),1,5)}}),mayor:()=>md({shirt:`#2f4f8f`,skin:`#f4c7a1`,hair:`#3b2a20`,pants:`#24345a`,hairStyle:`none`,noSmile:!0,extra:e=>{e.sphere(.27,`#2f4f8f`,U(0,.88,.07),U(1,1,.85),8),e.box(.18,.045,.05,`#8a5a3b`,U(0,1.36,.19),.02);for(let t of[-.05,.05])e.box(.08,.07,.04,`#e8333a`,U(t,1.17,.15),.01,[0,0,t>0?.4:-.4]);e.cyl(.06,.06,.02,`#ffd23f`,U(0,1,.275),[Math.PI/2,0,0],10),e.cyl(.25,.25,.03,`#2a2f3a`,U(0,1.57,0),void 0,12),e.cyl(.15,.15,.3,`#2a2f3a`,U(0,1.72,0),void 0,12),e.cyl(.155,.155,.05,`#e8333a`,U(0,1.61,0),void 0,12)}}),junk:()=>md({shirt:`#8a6a4a`,skin:`#e8b996`,hair:`#7a6a5a`,pants:`#4a4f5a`,shoes:`#3b2a20`,hairStyle:`none`,noSmile:!0,extra:e=>{e.box(.48,.3,.31,`#8a6a4a`,U(0,.6,0),.03),e.box(.13,.13,.02,`#c9a36a`,U(.11,.86,.15),0,[0,0,.2]),e.box(.1,.1,.02,`#5d7a8a`,U(-.12,.62,.165),0,[0,0,-.3]),e.box(.26,.09,.05,`#9aa1a8`,U(0,1.31,.16),.02),e.box(.11,.03,.03,`#7a4a32`,U(0,1.335,.195),0);for(let t of[-.075,.075])e.box(.09,.03,.03,`#5b4636`,U(t,1.5,.185),0,[0,0,t>0?.25:-.25]);e.sphere(.045,`#d98a6a`,U(0,1.4,.2),1,5),e.cyl(.24,.24,.03,`#8d949c`,U(0,1.56,0),void 0,12),e.cyl(.17,.17,.24,`#aeb4bb`,U(0,1.69,0),void 0,12);for(let t of[1.63,1.73])e.cyl(.175,.175,.02,`#8d949c`,U(0,t,0),void 0,12)}}),rocky:()=>md({shirt:`#2a2c31`,skin:`#e9b48e`,hair:`#1f1f24`,pants:`#1f1f24`,shoes:`#e8333a`,extra:e=>{e.box(.14,.44,.02,`#e8333a`,U(0,.95,.145),0),e.box(.3,.07,.03,`#1f1f24`,U(0,1.445,.195),.015),[[0,1.68,.02,0,0],[-.11,1.64,0,0,.45],[.11,1.64,0,0,-.45],[0,1.63,-.12,-.55,0],[-.07,1.62,.1,.4,.3]].forEach(([t,n,r,i,a],o)=>e.cyl(0,.065,.22,o===0?`#b06cf0`:`#1f1f24`,U(t,n,r),[i,0,a],5)),e.box(.3,.36,.07,`#e8333a`,U(.04,.8,.21),.05,[0,0,.5]),e.cyl(.05,.05,.02,`#1f1f24`,U(.04,.8,.25),[Math.PI/2,0,0],8),e.box(.05,.5,.035,`#3b2a20`,U(-.17,1.18,.22),0,[0,0,.5])}}),irma:()=>md({shirt:`#24365c`,skin:`#f2c9a8`,hair:`#e9e6e0`,pants:`#24365c`,shoes:`#3b2a20`,hairStyle:`round`,noSmile:!0,extra:e=>{e.cyl(.23,.3,.34,`#24365c`,U(0,.6,0),void 0,10);for(let t of[.78,.92,1.06])for(let n of[-.07,.07])e.sphere(.022,`#e0b44a`,U(n,t,.155),1,5);e.box(.3,.09,.27,`#d9463b`,U(0,1.21,.01),.04),e.box(.08,.22,.03,`#d9463b`,U(.08,1.08,.16),.02,[0,0,.15]),e.sphere(.1,`#e9e6e0`,U(0,1.63,-.12),1,7)}}),vane:()=>md({shirt:`#2e3138`,skin:`#eac1a0`,hair:`#16181c`,pants:`#2e3138`,shoes:`#111214`,noSmile:!0,extra:e=>{e.box(.12,.36,.02,`#f4f1ea`,U(0,1,.146),0),e.box(.05,.3,.03,`#d9a33a`,U(0,.99,.16),.01),e.box(.28,.06,.03,`#111214`,U(0,1.445,.195),.015),e.box(.06,.04,.02,`#d9a33a`,U(.12,1.08,.15),0)}})},cy=class{constructor(e){this.pos=new L,this.yaw=0,this.speed=0,this.active=!1,this.dirX=0,this.dirZ=1,this.phase=0,this.amp=0,this.hop=0,this.vy=0,this.pose=0,this.poseK=0,this.poseT=0,this.appear=0,this.lastStep=0,this.time=0,this.onStep=null,this.blob=null,this.mesh=Ed(0,1,oy()),e.add(this.mesh),Pu||(this.blob=bd(1),e.add(this.blob))}spawn(e,t,n){this.pos.set(e,en(e,t),t),this.yaw=n,this.dirX=Math.sin(n),this.dirZ=Math.cos(n),this.speed=0,this.active=!0,this.mesh.count=1,this.appear=.2,this.vy=4.4,this.hop=.6,this.poseT=0}hide(){this.active=!1,this.mesh.count=0,this.blob&&(this.blob.count=0)}greet(e=vd.wave,t=1.3){this.speed>1.2||this.poseT>0||(this.pose=e,this.poseT=t)}update(e,t,n,r){if(!this.active)return;this.time+=e,this.appear=Math.min(1,this.appear+e*3);let i=Math.min(1,Math.hypot(t,n));i>.08?(this.dirX=t/Math.hypot(t,n),this.dirZ=-n/Math.hypot(t,n),this.yaw+=He(Ln(this.yaw,Math.atan2(this.dirX,this.dirZ)),-16*e,16*e),this.speed+=(ey*i-this.speed)*w(10,e),this.poseT=0):this.speed+=-this.speed*w(14,e);let a=this.pos.x,o=this.pos.z;this.speed>.01&&(this.pos.x+=this.dirX*this.speed*e,this.pos.z+=this.dirZ*this.speed*e),r(this.pos,a,o),this.pos.y=en(this.pos.x,this.pos.z);let s=Math.hypot(this.pos.x-a,this.pos.z-o)/Math.max(e,1e-4),c=Math.min(1,s/ey);this.phase+=s*e*3.4,c<.05&&(this.phase+=(Math.round(this.phase/Math.PI)*Math.PI-this.phase)*w(6,e)),this.amp+=((c>.05?.4+c*.5:0)-this.amp)*w(8,e);let l=Math.floor(this.phase/Math.PI);if(l!==this.lastStep){var u;this.lastStep=l,c>.2&&this.hop<=0&&((u=this.onStep)==null||u.call(this))}if((this.vy!==0||this.hop>0)&&(this.vy-=18*e,this.hop+=this.vy*e,this.hop<=0)){var d;this.hop=0,this.vy=0,(d=this.onStep)==null||d.call(this)}this.poseT>0?(this.poseT-=e,this.poseK=Math.min(1,this.poseK+e*6)):this.poseK=Math.max(0,this.poseK-e*5);let f=Math.abs(Math.sin(this.phase))*.09*c;ry.set(this.pos.x,this.pos.y+f+this.hop,this.pos.z),ny.setFromEuler(ay.set(c*.14,this.yaw,Math.sin(this.phase)*.05*c,`YXZ`)),iy.setScalar(this.appear),this.mesh.setMatrixAt(0,ty.compose(ry,ny,iy)),this.mesh.instanceMatrix.needsUpdate=!0,this.blob&&(Td(this.blob,0,this.pos.x,this.pos.y,this.pos.z,.85*this.appear,this.hop),this.blob.count=1,this.blob.instanceMatrix.needsUpdate=!0),Dd(this.mesh,0,this.phase,this.amp,this.pose,this.poseK,this.time)}},ly=class{constructor(e,t){this.parent=e,this.hud=t,this.actors=[],this.time=0,this.homeward=!1,this.emotes=null,this.town=0,this.onGreet=null}get present(){return this.actors.length>0}place(e,t=!1){this.clear();for(let t of e){var n,r;let e=Ed(0,1,sy[t.who]());e.count=1,this.parent.add(e),this.actors.push({who:t.who,mesh:e,x:t.x,z:t.z,yaw:t.yaw,hx:t.x,hz:t.z,hyaw:t.yaw,baseY:(n=t.baseY)==null?0:n,homeBaseY:(r=t.baseY)==null?0:r,phase:0,amp:0,pose:0,poseK:0,poseT:0,hop:0,vy:0,walk:null,near:!1,label:null,line:0,idleT:2+Math.random()*4})}this.homeward=!t}setHomes(e){for(let n of e){var t;let e=this.actors.find(e=>e.who===n.who);e&&(e.hx=n.x,e.hz=n.z,e.hyaw=n.yaw,e.homeBaseY=(t=n.baseY)==null?0:t)}}walkIn(e,t,n,r){let i=this.actors.find(t=>t.who===e);i&&(i.walk={fx:t,fz:n,tx:i.x,tz:i.z,t:0,dur:r},i.x=t,i.z=n)}cheer(e=2.5){for(let t of this.actors)t.walk||(t.pose=t.who===`mayor`||t.who===`junk`?vd.clap:vd.cheer,t.poseT=e)}goHome(){this.homeward=!0}clear(){for(let e of this.actors)this.parent.remove(e.mesh),e.mesh.geometry.dispose(),e.label&&this.hud.removeLabel(e.label);this.actors=[]}forEachBody(e){for(let t of this.actors)t.baseY===0&&e(t.x,t.z,.28)}update(e,t,n,r,i,a){this.time+=e;for(let l of this.actors){this.homeward&&!l.walk&&(l.x!==l.hx||l.z!==l.hz)&&(Math.abs(l.x-i)>24||Math.abs(l.z-a)>26)&&(Math.abs(l.hx-i)>24||Math.abs(l.hz-a)>26)&&(l.x=l.hx,l.z=l.hz,l.yaw=l.hyaw,l.baseY=l.homeBaseY);let u=!1,d=l.yaw;if(l.walk){let t=l.walk;t.t+=e;let n=Math.min(1,t.t/t.dur);if(l.x=t.fx+(t.tx-t.fx)*n,l.z=t.fz+(t.tz-t.fz)*n,d=Math.atan2(t.tx-t.fx,t.tz-t.fz),u=n<1,l.phase+=e*6.4,n>=1){var o;l.walk=null,l.pose=vd.wave,l.poseT=2.2,(o=this.emotes)==null||o.spawn(`heart`,l.x,en(l.x,l.z)+2.1,l.z)}}else{let i=Math.hypot(t-l.x,n-l.z),a=r?3.2:4.6;if(d=i<8?Math.atan2(t-l.x,n-l.z):l.x===l.hx&&l.z===l.hz?l.hyaw:l.yaw,!l.near&&i<a){var s,c;l.near=!0;let e=mr(l.who,l.line,this.town),t=`<div class="say"><b style="color:${$n[l.who]}">${Zv(tr(l.who))}</b>${pr(e)}</div>`;l.label&&this.hud.removeLabel(l.label),l.label=this.hud.addLabel(t,ry.set(l.x,en(l.x,l.z)+l.baseY+2.05,l.z)),l.pose=l.who===`mayor`?vd.clap:l.who===`rocky`?vd.cheer:vd.wave,l.poseT=2.2,l.vy=3,(s=this.emotes)==null||s.spawn(l.who===`rocky`?`note`:`heart`,l.x,en(l.x,l.z)+l.baseY+2.1,l.z),(c=this.onGreet)==null||c.call(this,l.who)}else l.near&&i>a+2&&(l.near=!1,l.line++,l.label&&(this.hud.removeLabel(l.label),l.label=null));l.idleT-=e,l.idleT<=0&&l.poseT<=0&&(l.idleT=3+Math.random()*5,l.who===`rocky`?(l.pose=Math.random()<.5?vd.cheer:vd.point,l.poseT=1.6):l.who===`mila`||l.who===`grandpa`?Math.random()<.5&&(l.pose=vd.wave,l.poseT=1.2):l.who===`mayor`&&Math.random()<.4&&(l.pose=vd.point,l.poseT=1.4))}(l.vy!==0||l.hop>0)&&(l.vy-=18*e,l.hop+=l.vy*e,l.hop<=0&&(l.hop=0,l.vy=0)),l.poseT>0?(l.poseT-=e,l.poseK=Math.min(1,l.poseK+e*6)):l.poseK=Math.max(0,l.poseK-e*4),l.amp+=((u?.6:0)-l.amp)*w(6,e),u||(l.phase+=(Math.round(l.phase/Math.PI)*Math.PI-l.phase)*w(5,e)),l.yaw+=Ln(l.yaw,d)*w(6,e);let f=en(l.x,l.z)+l.baseY,p=l.who===`rocky`&&!u?Math.abs(Math.sin(this.time*4.2))*.07:Math.abs(Math.sin(l.phase))*.06*!!u;ry.set(l.x,f+p+l.hop,l.z),ny.setFromEuler(ay.set(0,l.yaw,0)),iy.setScalar(l.who===`mayor`?1.04:l.who===`grandpa`?.97:1),l.mesh.setMatrixAt(0,ty.compose(ry,ny,iy)),l.mesh.instanceMatrix.needsUpdate=!0,Dd(l.mesh,0,l.phase,l.amp,l.pose,l.poseK,this.time),l.label&&l.label.world.set(l.x,f+l.hop+2.05,l.z)}}},uy=null;function dy(){if(uy)return uy;let e=new H;return e.box(.9,.5,.62,`#b8722c`,U(0,.25,0),.06),e.box(.94,.28,.66,`#d08a3a`,U(0,.62,0),.1),e.box(.1,.82,.68,`#ffd23f`,U(-.28,.4,0),.02),e.box(.1,.82,.68,`#ffd23f`,U(.28,.4,0),.02),e.box(.18,.2,.06,`#ffe680`,U(0,.47,.34),.03),e.box(.96,.05,.68,`#ffd23f`,U(0,.5,0),.01),uy=e.build(),uy}var fy=null;function py(){if(!fy){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(32,32,2,32,32,32);n.addColorStop(0,`rgba(255,240,150,0.9)`),n.addColorStop(.4,`rgba(255,210,60,0.45)`),n.addColorStop(1,`rgba(255,200,40,0)`),t.fillStyle=n,t.fillRect(0,0,64,64),fy=new $t(e)}return new Fn({map:fy,transparent:!0,depthWrite:!1,blending:2})}var my=class{constructor(e){this.group=new B,this.chests=[],this.onOpen=null,this.onSparkle=null,e.add(this.group)}populate(e,t,n){for(let e of this.chests)this.group.remove(e.obj);this.chests=[];let r=new Wt(t),i=e.heaps.map((e,t)=>({h:e,i:t})).filter(e=>e.h.hardness<=1&&e.h.height>1);for(let t=0;t<n&&i.length;t++){let t=i.splice(Math.floor(r.next()*i.length),1)[0],n=t.h,a=n.x+(r.next()-.5)*n.rx*.3,o=n.z+(r.next()-.5)*n.rz*.3,s=e.surfaceAt(a,o),c=new B,l=new F(dy(),ns());l.castShadow=!0,c.add(l);let u=new F(new Ne(2.6,2.6),py());u.rotation.x=-Math.PI/2,u.position.y=.06,c.add(u),c.position.set(a,s-.1,o),c.rotation.y=r.next()*Math.PI*2,c.scale.setScalar(1.4),this.group.add(c),this.chests.push({obj:c,glow:u,pos:new L(a,s,o),heap:t.i,alive:!0,t:r.next()*6})}}syncWithField(e){for(let t of this.chests)t.alive&&e.surfaceAt(t.pos.x,t.pos.z)<t.pos.y-.4&&(t.alive=!1,t.obj.visible=!1)}update(e,t,n,r,i,a){for(let c of this.chests){var o;if(!c.alive)continue;c.t+=e,c.obj.position.y=c.pos.y-.1+Math.sin(c.t*2.2)*.05;let l=1+Math.sin(c.t*3)*.12;c.glow.scale.set(l,l,1),Math.random()<e*3&&((o=this.onSparkle)==null||o.call(this,c.pos));let u=c.pos.x-n,d=c.pos.z-r,f=a&&u*u+d*d<(i+.4)**2,p=t.surfaceAt(c.pos.x,c.pos.z)<c.pos.y-.4;if(f||p){var s;c.alive=!1,c.obj.visible=!1,(s=this.onOpen)==null||s.call(this,c.pos.clone())}}}openWhere(e){for(let n of this.chests){var t;n.alive&&e(n.pos.x,n.pos.z)&&(n.alive=!1,n.obj.visible=!1,(t=this.onOpen)==null||t.call(this,n.pos.clone()))}}clear(){for(let e of this.chests)e.alive=!1,e.obj.visible=!1}},hy=class{constructor(e,t){this.engine=e,this.target=t,this.level=0,this.acc=0,this.frames=0,this.slowFor=0,this.fastFor=0,this.warmup=2.5,this.isMobile=Nu;let n=window.devicePixelRatio||1,r=this.isMobile?Math.min(n,1.6):Math.min(n,2);this.levels=[{dpr:r,shadows:Pu,shadowSize:1024,particles:1},{dpr:Math.min(r,1.3),shadows:Pu,shadowSize:512,particles:.8},{dpr:Math.min(r,1),shadows:Pu,shadowSize:512,particles:.6},{dpr:Math.min(r,.8),shadows:Pu,shadowSize:512,particles:.45}];let i=new URLSearchParams(location.search).get(`q`);i===null?this.isMobile&&(navigator.hardwareConcurrency||8)<=4&&(this.level=1):this.level=Math.max(0,Math.min(3,parseInt(i,10)||0)),this.apply()}apply(){let e=this.levels[this.level];this.engine.setDprCap(e.dpr),this.target.setShadows(e.shadows,e.shadowSize),this.target.setParticleScale(e.particles)}update(e){if(this.warmup>0){this.warmup-=e;return}if(e>.25||(this.acc+=e,this.frames++,this.acc<1))return;let t=this.acc/this.frames;this.acc=0,this.frames=0,t>1/42?(this.slowFor++,this.fastFor=0):t<1/58?(this.fastFor++,this.slowFor=0):(this.slowFor=0,this.fastFor=0),this.slowFor>=2&&this.level<this.levels.length-1?(this.level++,this.slowFor=0,this.apply()):this.fastFor>=20&&this.level>0&&(this.level--,this.fastFor=0,this.apply())}},gy=!1;function _y(e){var t;if(gy)return Promise.resolve(!1);gy=!0,e(!0);let n=t=>(gy=!1,e(!1),t),r=window.ysdk;return r!=null&&(t=r.adv)!=null&&t.showRewardedVideo?new Promise(e=>{let t=!1;r.adv.showRewardedVideo({callbacks:{onRewarded:()=>t=!0,onClose:()=>e(n(t)),onError:()=>e(n(!1))}})}):vy().then(n)}function vy(){return new Promise(t=>{var n;let r=document.createElement(`div`);r.className=`ad-fake`,r.innerHTML=`<div class="ad-card"><div class="ad-tag">${e(`adBreak`)}</div><div class="ad-ring"><i></i></div><div class="ad-n"></div></div>`,((n=document.getElementById(`ui`))==null?document.body:n).appendChild(r),r.addEventListener(`pointerdown`,e=>e.stopPropagation());let i=r.querySelector(`.ad-n`),a=3,o=()=>{if(i.textContent=e(`adSoon`,{n:a}),a--<=0){r.classList.add(`out`),setTimeout(()=>r.remove(),250),t(!0);return}setTimeout(o,650)};requestAnimationFrame(()=>r.classList.add(`in`)),o()})}var yy=new An,by=new An,xy=class{constructor(e,t,n=400,r=500){this.renderer=e,this.scene=t,this.w=n,this.h=r,this.cam=new we(38,4/5,2,260),this.px=new Uint8Array(n*r*4)}snap(e,t=[],n){let r=n==null?{x:(e.minX+e.maxX)/2,z:(e.minZ+e.maxZ)/2,w:e.maxX-e.minX,d:e.maxZ-e.minZ}:n,i=r.x,a=r.z,o=nn.degToRad(50),s=nn.degToRad(this.cam.fov),c=2*Math.atan(Math.tan(s/2)*this.cam.aspect),l=Math.max(r.w*.5/Math.tan(c/2),r.d*.5/Math.tan(s/2)),u=R(i,a);this.cam.position.set(i,u+Math.sin(o)*l,a+Math.cos(o)*l),this.cam.lookAt(i,u,a),this.cam.updateMatrixWorld();let d=t.map(e=>e.visible);t.forEach(e=>e.visible=!1);let f=this.renderer,p=f.getContext(),m=f.domElement,h=Math.max(40,Math.min(this.h,m.height,Math.floor(m.width*5/4))),g=Math.round(h*4/5),_=f.getPixelRatio(),v=f.getRenderTarget();f.getViewport(yy),f.getScissor(by);let y=f.getScissorTest();f.setRenderTarget(null),f.setViewport(0,0,g/_,h/_),f.setScissor(0,0,g/_,h/_),f.setScissorTest(!0),f.render(this.scene,this.cam),p.readPixels(0,0,g,h,p.RGBA,p.UNSIGNED_BYTE,this.px),f.setScissorTest(y),f.setScissor(by),f.setViewport(yy),f.setRenderTarget(v),t.forEach((e,t)=>e.visible=d[t]);let b=document.createElement(`canvas`);b.width=g,b.height=h;let x=b.getContext(`2d`),S=x.createImageData(g,h),C=g*4;for(let e=0;e<h;e++)S.data.set(this.px.subarray((h-1-e)*C,(h-e)*C),e*C);return x.putImageData(S,0,0),b}};function Sy(e,t,n,r=[],i=[]){let a=new B;a.visible=!1;for(let e of i)a.add(e);t.add(a);let o=[],s=e.getRenderTarget();try{o.push(e.compileAsync(t,n));for(let i of r)e.setRenderTarget(i),o.push(e.compileAsync(t,n))}catch{}finally{e.setRenderTarget(s),t.remove(a);for(let e of i)a.remove(e)}return Promise.all(o).catch(()=>{})}var Cy={saw:{icon:`saw`,color:`linear-gradient(180deg,#ff8a5c,#ec5a2a)`,name:`saw`},bed:{icon:`truck`,color:`linear-gradient(180deg,#5fb4ff,#2f7fe0)`,name:`bed`},engine:{icon:`wheel`,color:`linear-gradient(180deg,#ffd34d,#f2a900)`,name:`engine`}},wy=class{constructor(t){this.cards={},this.open=!1,this.onBuy=null,this.onReward=null,this.onClose=null,this.levels={saw:1,bed:1,engine:1},this.coins=0,this.root=X(`div`,`sheet`);let n=X(`div`,`sheet-card`),r=X(`div`,`sheet-title outline`);r.innerHTML=Xc(`wrench`)+`<span>`+e(`upgrades`)+`</span>`;let i=X(`div`,`upg-row`);for(let t of[`saw`,`bed`,`engine`]){let n=Cy[t],r=X(`div`,`upg`),a=X(`div`,`ic`);a.style.background=n.color,a.innerHTML=Xc(n.icon);let o=X(`div`,`nm`);o.textContent=e(n.name);let s=X(`div`,`lv`),c=X(`div`,`lvtext`),l=X(`div`,`stat`),u=X(`div`,`buy-row`),d=document.createElement(`button`);d.className=`btn btn-buy outline`,d.addEventListener(`pointerdown`,e=>e.stopPropagation()),d.addEventListener(`click`,()=>{var e;return(e=this.onBuy)==null?void 0:e.call(this,t)});let f=document.createElement(`button`);f.className=`btn btn-ad`,f.innerHTML=`<i class="ad-ico">${Xc(`play`)}</i>`,f.addEventListener(`pointerdown`,e=>e.stopPropagation()),f.addEventListener(`click`,()=>{var e;return(e=this.onReward)==null?void 0:e.call(this,t)}),u.append(d,f),r.append(a,o,c,s,l,u),i.appendChild(r),this.cards[t]={root:r,ic:a,shown:-1,lvBox:s,lvText:c,stat:l,btn:d,ad:f,mode:`buy`}}let a=document.createElement(`button`);a.className=`sheet-close`,a.innerHTML=Xc(`close`),a.addEventListener(`pointerdown`,e=>e.stopPropagation()),a.addEventListener(`click`,()=>{var e;return(e=this.onClose)==null?void 0:e.call(this)}),n.append(r,a,i),this.root.appendChild(n),this.root.addEventListener(`pointerdown`,e=>e.stopPropagation()),t.appendChild(this.root)}top(){return this.root.querySelector(`.sheet-card`).getBoundingClientRect().top-24}show(e){e!==this.open&&(this.open=e,this.root.classList.toggle(`open`,e))}update(e){}refresh(t,n){this.levels={...t},this.coins=n;for(let r of[`saw`,`bed`,`engine`]){let i=this.cards[r],a=t[r],o=le[r],s=a>=o.maxLevel,c=(a-1)%5;i.lvBox.childElementCount!==5&&(i.lvBox.innerHTML=`<i></i>`.repeat(4)+`<i class="star">${Xc(`star`)}</i>`);for(let e=0;e<4;e++)i.lvBox.children[e].classList.toggle(`on`,s||e<c);let l=i.lvBox.children[4];if(l.classList.toggle(`on`,s),l.classList.toggle(`next`,!s&&c===4),i.lvText.textContent=`${e(`level`)} ${a}`,r===`saw`&&i.shown!==a){i.shown=a;let e=s?a:a+1;i.ic.style.background=`radial-gradient(circle, #ffffff 0%, #ffe3c4 70%, #ffb98a 100%)`,i.ic.innerHTML=`<img src="${Gu(e,108)}" alt="">`}i.stat.innerHTML=this.statLine(r,a,s);let u=s?0:o.price(a);i.mode=s?`max`:n>=u?`buy`:`poor`,this.paintButton(r)}}paintButton(t){let n=this.cards[t],r=this.levels[t];if(n.ad.classList.toggle(`hidden`,n.mode===`max`),n.ad.classList.toggle(`lure`,n.mode===`poor`),n.mode===`max`){n.btn.className=`btn btn-buy max outline`,n.btn.innerHTML=e(`max`);return}let i=le[t].price(r);n.btn.className=`btn btn-buy outline`+(this.coins>=i?``:` no`),n.btn.innerHTML=`<span class="coin sm"></span><span class="pr">${qt(i)}</span>`}statLine(t,n,r){let i=r?n:n+1;switch(t){case`saw`:{let t=Math.round(tt(n)*10),a=Math.round(tt(i)*10);return r?`${e(`power`)} ${t}`:`${e(`power`)} ${t} → <b>${a}</b>`}case`bed`:{let t=ye(n),a=ye(i);return r?`${e(`capacity`)} ${t}`:`${e(`capacity`)} ${t} → <b>${a}</b>`}case`engine`:{let t=Math.round(qe(n)*10),a=Math.round(qe(i)*10);return r?`${e(`speed`)} ${t}`:`${e(`speed`)} ${t} → <b>${a}</b>`}}}flash(e,t){let n=this.cards[e].root,r=t?`flash`:`shake`;n.classList.remove(r),n.offsetWidth,n.classList.add(r)}hint(e){for(let t of[`saw`,`bed`,`engine`])this.cards[t].btn.classList.toggle(`hint-pulse`,t===e)}buttonRect(e){return this.cards[e].btn.getBoundingClientRect()}},Ty=class{constructor(e){this.isOpen=!1,this.root=X(`div`,`modal`),this.card=X(`div`,`modal-card`),this.root.appendChild(this.card),this.root.addEventListener(`pointerdown`,e=>e.stopPropagation()),e.appendChild(this.root)}open(e){this.card.innerHTML=``;let t=X(`div`,`modal-ribbon outline`);if(t.textContent=e.ribbon,this.card.appendChild(t),e.stars){let e=X(`div`,`modal-stars`);e.innerHTML=Xc(`star`)+Xc(`star`,`ico mid`)+Xc(`star`),this.card.appendChild(e)}if(e.big!==void 0){let t=X(`div`,`modal-big`);t.innerHTML=`<span class="coin"></span>+${qt(e.big)}`,this.card.appendChild(t)}if(e.sub){let t=X(`div`,`modal-sub`);t.textContent=e.sub,this.card.appendChild(t)}if(e.news){let t=X(`div`,`modal-news`);t.innerHTML=Xc(e.news.icon)+`<span>${e.news.text}</span>`,this.card.appendChild(t)}let n=document.createElement(`button`);n.className=`btn btn-big outline`,n.style.margin=`0 auto`,n.textContent=e.button;let r=!1;if(n.addEventListener(`click`,()=>{r||(r=!0,e.onButton())}),this.card.appendChild(n),e.button2){let t=document.createElement(`button`);t.className=`btn-link`,t.textContent=e.button2,t.addEventListener(`click`,()=>{var t;r||(r=!0,(t=e.onButton2)==null||t.call(e))}),this.card.appendChild(t)}this.root.classList.add(`open`),this.isOpen=!0,e.stars&&this.confetti()}close(){this.root.classList.remove(`open`),this.isOpen=!1}confetti(){let e=[`#ff5a4f`,`#ffc93c`,`#35c46a`,`#3a8df0`,`#b06cf0`,`#ff8a3d`],t=window.innerWidth,n=window.innerHeight;for(let r=0;r<60;r++){let i=X(`div`,`confetti`);i.style.background=e[r%e.length];let a=t/2+(Math.random()-.5)*80,o=n*.42,s=a+(Math.random()-.5)*t*1.1,c=o+n*(.25+Math.random()*.5),l=o-n*(.2+Math.random()*.25),u=(Math.random()-.5)*1440;i.animate([{transform:`translate(${a}px, ${o}px) rotate(0deg)`,opacity:1},{transform:`translate(${(a+s)/2}px, ${l}px) rotate(${u/2}deg)`,opacity:1,offset:.35},{transform:`translate(${s}px, ${c}px) rotate(${u}deg)`,opacity:0}],{duration:1400+Math.random()*900,easing:`cubic-bezier(.2,.6,.4,1)`}).onfinish=()=>i.remove(),setTimeout(()=>i.remove(),3e3),this.root.appendChild(i)}}},Ey=class{constructor(e){this.base=null,this.img=null,this.L=null,this.w=1,this.h=1,this.timer=0,this.time=0,this.lakeClean=!1,this.cell=1,this.root=X(`div`,`minimap`),this.cv=document.createElement(`canvas`),this.root.appendChild(this.cv),e.appendChild(this.root),this.g=this.cv.getContext(`2d`,{willReadFrequently:!0});let t=bn;this.w=Math.round((t.maxX-t.minX)/this.cell),this.h=Math.round((t.maxZ-t.minZ)/this.cell),this.cv.width=this.w,this.cv.height=this.h,this.root.style.width=`128px`,this.root.style.height=Math.round(128*this.h/this.w)+`px`}px(e){return(e-bn.minX)/this.cell}pz(e){return(e-bn.minZ)/this.cell}setCity(e,t){this.L=t;let n=bn,r=Math.round((n.maxX-n.minX)/this.cell),i=Math.round((n.maxZ-n.minZ)/this.cell);(r!==this.w||i!==this.h)&&(this.w=this.cv.width=r,this.h=this.cv.height=i,this.root.style.height=Math.round(128*i/r)+`px`);let a=this.g;a.fillStyle=`#4d8a3e`,a.fillRect(0,0,this.w,this.h),a.fillStyle=`#8d949c`,a.fillRect(this.px(-3),this.pz(En.maxZ),6/this.cell,this.h),((e,t)=>{a.fillStyle=t,a.fillRect(this.px(e.minX),this.pz(e.minZ),(e.maxX-e.minX)/this.cell,(e.maxZ-e.minZ)/this.cell)})(En,`#e4ded2`);let o=a.getImageData(0,0,this.w,this.h),s=o.data,c=(e,t,n,r,i)=>{let a=(t*this.w+e)*4;s[a]=n,s[a+1]=r,s[a+2]=i};for(let e=0;e<this.h;e++)for(let t=0;t<this.w;t++){let n=bn.minX+(t+.5)*this.cell,r=bn.minZ+(e+.5)*this.cell;It(n,r)<0&&c(t,e,this.lakeClean?92:104,this.lakeClean?176:112,this.lakeClean?226:74)}for(let t of e.districts){let e=t.L.bounds;if(t.state===`current`)continue;let n=Math.max(0,Math.floor(this.px(e.minX))),r=Math.min(this.w-1,Math.ceil(this.px(e.maxX))-1),i=Math.max(0,Math.floor(this.pz(e.minZ))),a=Math.min(this.h-1,Math.ceil(this.pz(e.maxZ))-1);for(let e=i;e<=a;e++)for(let i=n;i<=r;i++){let n=bn.minX+(i+.5)*this.cell,r=bn.minZ+(e+.5)*this.cell,a=It(n,r)<0;t.state===`built`?a?c(i,e,92,176,226):lt(n,r)<0?c(i,e,242,237,226):c(i,e,111,214,92):a?c(i,e,104,112,74):t.L.mounds.some(e=>((n-e.x)/e.rx)**2+((r-e.z)/e.rz)**2<1)?c(i,e,102,81,64):c(i,e,125,102,80)}}a.putImageData(o,0,0),this.base=a.getImageData(0,0,this.w,this.h),this.img=a.createImageData(this.w,this.h),this.timer=0}update(e,t,n,r,i,a){if(this.time+=e,this.timer-=e,this.timer>0||!this.L||!this.base||!this.img)return;this.timer=.25;let o=this.L.bounds,s=this.img.data;s.set(this.base.data);let c=(e,t)=>lt(e,t)<0,l=Math.max(0,Math.floor(this.px(o.minX))),u=Math.min(this.w-1,Math.ceil(this.px(o.maxX))-1),d=Math.max(0,Math.floor(this.pz(o.minZ))),f=Math.min(this.h-1,Math.ceil(this.pz(o.maxZ))-1);for(let e=d;e<=f;e++){let r=bn.minZ+(e+.5)*this.cell;for(let i=l;i<=u;i++){let a=bn.minX+(i+.5)*this.cell,o=t.heightAt(a,r),l=(e*this.w+i)*4,u,d,f;if(It(a,r)<0){let e=+!!this.lakeClean;u=e?92:104,d=e?176:112,f=e?226:74}else if(o>.05){let e=Math.min(1,o/2.5);u=128+e*40,d=102+e*30,f=80+e*18}else if(c(a,r))u=236,d=230,f=218;else{let e=t.zoneAt(a,r),i=e!==255&&n(e);u=i?111:96,d=i?214:186,f=i?92:80}s[l]=u,s[l+1]=d,s[l+2]=f,s[l+3]=255}}let p=this.g;p.putImageData(this.img,0,0),p.strokeStyle=Math.sin(this.time*5)>-.3?`#ffd23f`:`rgba(255,210,63,0.4)`,p.lineWidth=1.5,p.strokeRect(this.px(o.minX)+.75,this.pz(o.minZ)+.75,(o.maxX-o.minX)/this.cell-1.5,(o.maxZ-o.minZ)/this.cell-1.5),p.save(),p.translate(this.px(r),this.pz(i)),p.rotate(-a+Math.PI),p.fillStyle=`#ffd23f`,p.strokeStyle=`#2a2f3a`,p.lineWidth=1.2,p.beginPath(),p.moveTo(0,-5),p.lineTo(3.8,3.6),p.lineTo(-3.8,3.6),p.closePath(),p.fill(),p.stroke(),p.restore()}},Dy=_r({Game:()=>Hy,fmt:()=>qt}),Oy=[`clickui`,`pop1`,`pop2`,`pop3`,`pop4`,`pop5`,`shopping`,`shopping1`,`terrainblockcrush`,`terrainblockcrush1`,`terraincrush1`,`terraincrush2`,`terraincrush3`,`terraincrush4`,`terraincrush5`],ky=new L(-8.3,0,1.6),Ay=new L(8.3,0,1.6),jy=new L(-4.3,0,1.6),My=new L(4.3,0,1.6),Ny=new L(0,0,1.4),Z=new L,Q=new L,Py=new I(`#9fdcf5`),Fy=new I(`#f7b38e`),$=new I,Iy=new I(`#e9dcc4`),Ly=new I(`#ffffff`),Ry=new L(0,1.4,0);function zy(e){let t=navigator.userActivation;if(t!=null&&t.hasBeenActive)try{var n,r;(n=(r=navigator).vibrate)==null||n.call(r,e)}catch{}}function By(e,t){var n;let r=(n=Pp[e])==null?Pp[0]:n;return t.set(r[Math.floor(Math.random()*r.length)]).multiplyScalar(.94+Math.random()*.1)}var Vy=[K.bagBlack,K.bagBlue,K.bagWhite,K.cardboard,K.bottleGreen,K.canRed,K.canYellow,K.tire,K.wood,K.paper],Hy=class{later(e,t){this.timers.push({at:this.time+e,fn:t})}constructor(e,n){this.districtLabels=[],this.districtDone=!1,this.state=`play`,this.pads=[],this.scrapAcc=0,this.scrapHeap=0,this.scrapMix=-1,this.unloadTimer=0,this.unloadCombo=0,this.unloadLeft=0,this.recyclerWork=0,this.recyclerKick=0,this.dirty=!1,this.saveTimer=0,this.fieldTimer=0,this.debugEl=null,this.cutSoundTimer=0,this.exhaustTimer=0,this.chimneyTimer=0,this.tutMoved=0,this.needTimer=0,this.lastBlocked=0,this.progressShown=-1,this.goalReachedAt=-1,this.pendingCoins=0,this.time=0,this.ingotAcc=0,this.payTimer=0,this.wantLabels=[],this.fxScale=1,this.grindStruct=null,this.perchTimer=0,this.taxTimer=20,this.hintSparkT=0,this.hardLabels=[],this.exhaustBurst=0,this.upgradesDismissed=!1,this.spillHinted=!1,this.wasFull=!0,this.stations={rec:!1,gar:!1},this.stationPops=[],this.plansHidden=!1,this.stinkTimer=0,this.ready=Promise.resolve(),this.timers=[],this.onFoot=!1,this.townSaved=!1,this.focusFrom=new L,this.focusT=1,this.markPts=[{x:0,z:0},{x:0,z:0}],this.grindItem=null,this.grindT=0,this.weakHinted=new Set,this.shocks=[],this.frames=[],this.plotPlans=[],this.plazaPlan=null,this.inTree=new Set,this.slowmo=0,this.keeperPlan=null,this.beforeShot=null,this.oldLight=null,this.beam=null,this.beamK=0,this.dusk=0,this.duskWant=0,this.xrayFocus=null,this.heroSolve=(e,t,n)=>{let r=.3,i=(t,n,i)=>{let a=e.x-t,o=e.z-n,s=i+r;if(Math.abs(a)>s||Math.abs(o)>s)return;let c=Math.hypot(a,o);c>=s||(c<1e-4?e.x=t+s:(e.x=t+a/c*s,e.z=n+o/c*s))},a=this.tractor;for(let e of a.staticCircles)i(e.x,e.z,e.r);for(let e of a.extraCircles)i(e.x,e.z,e.r);for(let e of a.colliders.circles)i(e.x,e.z,e.r);for(let i of a.colliders.boxes){let a=Math.max(i.x-i.hw,Math.min(i.x+i.hw,e.x)),o=Math.max(i.z-i.hd,Math.min(i.z+i.hd,e.z)),s=e.x-a,c=e.z-o,l=Math.hypot(s,c);l>=r||(l>1e-4?(e.x=a+s/l*r,e.z=o+c/l*r):(e.x=t,e.z=n))}i(a.pos.x,a.pos.z,.95),this.cast.forEachBody(i);let o=bn,s=(e,t)=>It(e,t)>.3&&e>o.minX+.6&&e<o.maxX-.6&&t>o.minZ+.6&&t<o.maxZ-.6&&this.city.allowed.some(n=>e>=n.minX&&e<=n.maxX&&t>=n.minZ&&t<=n.maxZ);s(e.x,e.z)||(s(e.x,n)?e.z=n:s(t,e.z)?e.x=t:(e.x=t,e.z=n))},this.save=Yf(),this.engine=new Wf(e);let i=this.engine.scene;this.input=new Gf(e,n),this.audio=new Kf(`./audio/`,Oy),this.audio.setMuted(this.save.muted),this.world=new th(i),this.city=new s_(i),this.decor=new g_(i),this.lighting=new Gm(i,1024),this.jf=new pp(0,0,rh.w,rh.d,.25),i.add(this.jf.group),this.recycler=nl(),this.recycler.group.position.copy(ky),i.add(this.recycler.group),this.recyclerPad=new il(jy.x,jy.z,2.9,`#2fbf71`,`recycle`,i),this.garage=rl(),this.garage.group.position.copy(Ay),this.garage.group.rotation.y=Math.PI/2,i.add(this.garage.group),this.garagePad=new il(My.x,My.z,2.9,`#3a8df0`,`wrench`,i),this.pads.push(this.recyclerPad,this.garagePad),this.recycler.group.visible=this.garage.group.visible=!1,this.recyclerPad.setVisible(!1),this.garagePad.setVisible(!1),this.tractor=new Op(i),this.tractor.colliders=this.world.colliders,this.cargo=new Im(this.tractor.model,i),this.tractor.model.onSawLand=()=>this.onSawLand(),this.tractor.onCut=(e,t,n,r)=>this.onCut(e,t,r),this.cargo.onLand=()=>this.audio.tok(.1),this.cargo.onTrail=(e,t,n)=>{Math.random()>this.fxScale||(Q.set((Math.random()-.5)*.4,.2+Math.random()*.3,(Math.random()-.5)*.4),$.copy(t).lerp(Ly,n?.55:.35),this.sparks.spawn(e,Q,$,n?.85:.6,n?.32:.26,.38,.3,0))},this.debris=new f_(i,240),this.puffs=new p_(i,260,!1),this.sparks=new p_(i,160,!0),this.guide=new h_(i),this.trash=new D_(i),this.trash.onPick=e=>this.onPick(e),this.trash.onGrind=(e,t)=>this.onGrind(e,t),this.trash.onBurst=e=>this.onBurst(e),this.trash.onChunk=e=>this.onChunk(e),this.tractor.obstacle=(e,t,n)=>!!this.trash.obstacle(e,t,n)||!!this.structures.obstacle(e,t,n),this.tractor.obstacleAt=(e,t,n)=>{var r;return(r=this.trash.obstacle(e,t,n))==null?this.structures.obstacle(e,t,n):r},this.bloom=new rg(i),this.drops=new R_(i),this.drops.onLand=()=>this.audio.tok(.12),this.plots=new Oh(i),this.life=new ov(i),this.emotes=new zv(i),this.tireMarks=new Wv(i),this.life.emotes=this.emotes,this.life.onOuch=(e,t,n,r)=>{let i=this.hearing(e,t);r?this.audio.woof(.07*i):this.audio.oof(n,.12*i,!0)},this.life.onLand=(e,t)=>{for(let n=0;n<4;n++)Z.set(e+(Math.random()-.5)*.5,R(e,t)+.1,t+(Math.random()-.5)*.5),Q.set((Math.random()-.5)*1.2,.5+Math.random()*.4,(Math.random()-.5)*1.2),this.puffs.spawn(Z,Q,$.set(`#efe6d2`),.6,.35,.6,2.2,0);this.audio.thud(.1*this.hearing(e,t))},this.life.onCheer=(e,t)=>{this.audio.cheer(.035*this.hearing(e,t)),this.onFoot&&this.hero.greet(Math.random()<.5?vd.wave:vd.cheer)},this.life.walkable=(e,t)=>this.walkable(e,t),this.life.onShout=(e,n,r)=>{if(this.director.busy||this.state!==`play`)return;let i=t()===`ru`?qy:Jy,a=this.hud.addLabel(`<div class="say shout">${pr(i[Math.floor(Math.random()*i.length)])}</div>`,Z.set(e,n,r));a.avoidHud=!0,setTimeout(()=>this.hud.removeLabel(a),1900)},this.hero=new cy(i),this.hero.onStep=()=>this.audio.step(.035),this.birds=new Cv(i),this.lake=new Fv(i),this.structures=new Kc(i),this.structures.onGrind=(e,t)=>this.onStructGrind(e,t),this.structures.onChunk=e=>this.onStructChunk(e),this.structures.onTopple=e=>this.onStructTopple(e),this.structures.onDown=e=>this.onStructDown(e),this.lake.onCleared=()=>{this.minimap.lakeClean=!0,this.audio.bloom()},this.birds.onScare=()=>this.audio.flutter(.05),this.tractor.extraCircles=this.plots.circles,this.plots.onPlace=(e,t,n)=>this.bloom.clearCircle(e,t,n),this.plots.onPop=(e,t,n)=>{for(let r=0;r<(n?14:5);r++)Z.set(e+(Math.random()-.5)*(n?3:1),R(e,t)+.2,t+(Math.random()-.5)*(n?3:1)),Q.set((Math.random()-.5)*2,.8+Math.random(),(Math.random()-.5)*2),this.puffs.spawn(Z,Q,$.set(`#f4efdf`),.75,n?.9:.55,.9,2.2,0);this.audio.playRandom(`pop`,5,n?.6:.35,n?.7:1.1,.03),n&&this.rig.shake(.1)},this.treasures=new my(i),this.treasures.onOpen=e=>this.onTreasure(e),this.treasures.onSparkle=e=>{Z.set(e.x+(Math.random()-.5)*.9,e.y+.3+Math.random()*.6,e.z+(Math.random()-.5)*.9),Q.set(0,.8+Math.random(),0),this.sparks.spawn(Z,Q,$.set(`#fff2a0`),1,.22,.7,.3,0)},this.chain=new Gd(i,{onCash:()=>{},onCarBuilt:()=>{},onSale:e=>{this.hud.floatText(`+`+qt(this.chain.price),e,`gold`),this.audio.coin(3),this.markDirty()},sound:e=>{e===`car`?this.audio.tada(.06*this.hearing(Cu.x,Cu.z)):e===`honk`&&this.audio.toot(.07*this.hearing(W.factory.x,W.factory.z))}}),this.chain.onSpray=(e,t)=>{Math.random()>this.fxScale||(Q.set((Math.random()-.5)*1.2,-.2-Math.random()*.4,(Math.random()-.5)*1.2),this.puffs.spawn(e,Q,$.copy(t).lerp(Ly,.25),.55,.32+Math.random()*.2,.7,2.2,0))},this.chain.onPuff=(e,t)=>{Q.set(.2+Math.random()*.3,1.2,(Math.random()-.5)*.3),this.puffs.spawn(e,Q,$.set(t?`#7d838c`:`#c9ced6`),.7,.7,1.4,3,0)},this.chain.onSpark=(e,t)=>{let n=t?14:2;for(let r=0;r<n;r++)Q.set((Math.random()-.5)*(t?5:3),1.5+Math.random()*(t?4:2.5),(Math.random()-.5)*(t?5:3)),this.sparks.spawn(e,Q,$.set(t?`#ffffff`:`#ffe680`),1,t?.3:.16,t?.6:.3,.4,12)},this.chain.onPart=e=>{let t=this.hearing(Cu.x,Cu.z);if(t<.03)return;let n=e===`screw`?`screw`:e===`side`?`door`:e===`paint`?`paint`:e===`drop`||e===`crane`?`heavy`:`click`;this.audio.part(n,.1*t)},this.ready=this.chain.loadCars().catch(()=>{}),this.chain.onEmote=(e,t,n,r)=>this.emotes.spawn(e,t,n,r),this.rig=new Rm(this.engine.camera),this.postcards=new xy(this.engine.renderer,i),this.hud=new Yv(n,this.engine.camera),this.hud.onSoundToggle=()=>this.toggleSound(),this.hud.onPostcardClose=()=>this.audio.play(`clickui`,.5),this.hud.onNext=()=>this.goNext(),this.hud.onWalk=()=>this.onFoot?this.endWalk():this.startWalk(),this.cast=new ly(i,this.hud),this.cast.emotes=this.emotes,this.cast.onGreet=e=>this.audio.hello(dr[e],.8),this.audio.warmVoices(Object.values(dr)),this.hud.setMuted(this.save.muted),this.upgrades=new wy(this.hud.col),this.upgrades.onBuy=e=>this.buy(e),this.upgrades.onReward=e=>this.rewardUpgrade(e),this.upgrades.onClose=()=>{this.upgradesDismissed=!0,this.audio.play(`clickui`,.5)},this.modal=new Ty(n),this.director=new Gv(this.rig,this.hud),this.director.hold=()=>this.upgrades.open||this.hud.postcardOpen,this.director.onLine=()=>this.audio.play(`clickui`,.22,1.3),this.hud.onDialogTap=()=>this.audio.play(`clickui`,.35,1.15),this.hud.onTalk=(e,t,n)=>this.audio.talkStart(dr[e],t,{text:er(n.text),mood:or(n.cue).mood}),this.hud.talkLevel=()=>this.audio.talkLevel(),this.hud.onTalkDone=()=>this.audio.talkTypedOut(),this.hud.onTalkStop=()=>this.audio.talkStop(),this.minimap=new Ey(this.hud.mapSlot),this.garageBubble=this.hud.addLabel(`<div class="bubble">${Xc(`arrowUp`,`ico`,`#2cb85c`)}<span>!</span></div>`,Z.set(Ay.x,4.4,Ay.z)),this.garageBubble.visible=!1,this.needLabel=this.hud.addLabel(`<div class="need-tag outline"></div>`,Z.set(0,0,0)),this.needLabel.visible=!1,this.hpLabel=this.hud.addLabel(`<div class="hp-tag outline"><b></b><i><u></u></i><s></s></div>`,Z.set(0,0,0)),this.hpLabel.visible=!1;let a=`<div class="price-tag outline"><span class="coin sm"></span><span>0</span></div>`;this.factoryPriceLabel=this.hud.addLabel(a,Z.set(W.factoryPad.x,.4,W.factoryPad.z+1.9)),this.lotPriceLabel=this.hud.addLabel(a,Z.set(W.lotPad.x,.4,W.lotPad.z+1.9)),this.cashLabel=this.hud.addLabel(a,Z.set(W.cashPad.x,1.2,W.cashPad.z)),this.factoryPriceLabel.visible=this.lotPriceLabel.visible=this.cashLabel.visible=!1,this.wantLabels=[0,1,2].map(()=>{let e=this.hud.addLabel(`<div class="bubble want">${Xc(`car`,`ico`,`#3a8df0`)}<span class="coin sm"></span></div>`,Z.set(0,0,0));return e.visible=!1,e.avoidHud=!0,e}),this.quality=new hy(this.engine,{setShadows:(e,t)=>{this.lighting.sun.castShadow=e,e&&this.lighting.setShadowSize(t)},setParticleScale:e=>this.fxScale=e}),this.engine.onFrame=e=>this.quality.update(e),this.engine.onResize.push(()=>this.onResize()),this.onResize(),this.engine.addUpdate(e=>this.update(e)),this.input.onFirstInput=()=>{},document.addEventListener(`visibilitychange`,()=>{document.visibilityState!==`visible`&&this.persist(!0)}),window.addEventListener(`pagehide`,()=>this.persist(!0)),new URLSearchParams(location.search).has(`debug`)&&(this.debugEl=document.createElement(`div`),this.debugEl.style.cssText=`position:absolute;left:4px;bottom:4px;font:11px monospace;color:#fff;background:#0008;padding:2px 4px;z-index:99;pointer-events:none`,n.appendChild(this.debugEl)),this.primeShaders(),this.loadState(),this.ready=this.ready.then(()=>this.warmShaders(!0)),window.game=this,new URLSearchParams(location.search).has(`debug`)&&(r(async()=>{let{Bot:e}=await import(`./bot-DSJ5tCu9.js`);return{Bot:e}},__vite__mapDeps([0,1]),import.meta.url).then(({Bot:e})=>window.bot=new e(this)),r(()=>import(`./zfight-BOouEBbo.js`).then(e=>{window.zfight=e.zfightReport,window.zfightGeo=e.findZFights,window.zfightScene=()=>e.zfightScene(this.engine.scene)}),__vite__mapDeps([2,1]),import.meta.url))}prepareTown(e){let t=ah(e);return this.cast.town=t,Hn(t)?(this.world.setTown(t),this.lake.setTown(),this.city.rebuildTrees(),this.setBeam(!1),this.duskWant=this.dusk=0,!0):!1}loadState(){var e;let t=this.save;this.applyLevels(),this.prepareTown(t.yard),this.city.setup(t.yard),this.primeShaders(),this.syncLake(),this.life.clear();for(let e of this.city.districts)e.state===`built`&&e.L.plots.forEach((t,n)=>this.livePlot(e.L,n));this.buildYard(t.yard,t.field),this.cargo.setUnits(t.cargo,()=>By(0,new I),t.cargoValue||Xe(t.yard)),this.tractor.place(Ny.x,Ny.z,Math.PI),this.rig.snap(this.tractor.pos),t.beats=(e=t.beats)==null?[]:e,this.syncStations(),t.yard===1&&!t.beats.includes(`intro`)?this.playIntro():!this.districtDone&&!t.beats.includes(`in`+t.yard)&&(this.hud.curtainOpen(sr(ih(t.yard)+1),this.districtName(t.yard),fr(),1),this.districtIntro(!0)),this.hud.setCoins(t.coins,!0),this.refreshUpgradeUI(),this.chain.setBuilt(t.factory,t.lot),this.chainColliders(),this.chain.setCash(t.cash),this.chain.ingotsStored=t.ingots,this.updateChainParams()}tip(e){return this.director.busy||this.hud.dialogOpen||this.state!==`play`||this.upgrades.open||!this.once(e)?!1:(this.director.play([{k:`say`,key:e}]),!0)}once(e){var t;let n=this.save.beats=(t=this.save.beats)==null?[]:t;return!n.includes(e)&&(n.push(e),this.markDirty(),!0)}frameDistrict(e,t){let n=Kv.rect(this.engine.scene,oh(e),.6,1.6,t);return this.frames.push(n),n}frameRing(e,t,n){let r=Kv.circle(this.engine.scene,e,t,n,`#7fe3ff`);return this.frames.push(r),r}updateFrames(e){for(let t=this.frames.length-1;t>=0;t--){let n=this.frames[t];n.update(e),n.gone&&(n.dispose(),this.frames.splice(t,1))}}cityShot(e=1.6,t=1.6){let n=bn;return{k:`shot`,x:(n.minX+n.maxX)/2,z:(n.minZ+n.maxZ)/2+2,w:(n.maxX-n.minX)*.92,d:(n.maxZ-n.minZ)*.86,t:e,speed:t,pitch:nn.degToRad(60)}}districtShot(e,t=1.6){let n=oh(e);return{k:`shot`,x:(n.minX+n.maxX)/2,z:(n.minZ+n.maxZ)/2,w:n.maxX-n.minX+3,d:n.maxZ-n.minZ+3,t}}playIntro(){let t={k:`shot`,x:-.3,z:-3.2,w:8.2,d:8.5,pitch:nn.degToRad(30),yaw:.32,t:.1};t.k===`shot`&&(this.rig.overviewCenter.set(t.x,0,t.z),this.rig.overviewSize={w:t.w,d:t.d},this.rig.overviewPitch=t.pitch,this.rig.overviewYaw=t.yaw,this.rig.snapOverview()),this.plansHidden=!0,this.city.hidePlans(!0),this.hud.curtainOpen(this.district1Label(),fr(),e(`introSub`),1.4);let n=null;this.director.play([t,{k:`wait`,t:1.7},{k:`say`,key:`intro1`},this.cityShot(1.2,1.1),{k:`say`,key:`intro2`},{k:`do`,fn:()=>{this.plansHidden=!1,this.city.hidePlans(!1),this.city.setVision(1),this.redrawPlans()}},{k:`wait`,t:1.6},{k:`say`,key:`intro3`},{k:`do`,fn:()=>this.city.setVision(0)},{k:`do`,fn:()=>n=this.frameDistrict(this.save.yard)},this.districtShot(this.save.yard,1.4),{k:`do`,fn:()=>this.redrawPlans()},{k:`wait`,t:1},{k:`say`,key:`intro4`},{k:`do`,fn:()=>n&&(n.target=0)},{k:`tractor`},{k:`do`,fn:()=>{this.once(`intro`),this.once(`in`+this.save.yard),this.hud.banner(e(`yard`,{n:this.save.yard}),this.featureText(this.layout.feature,this.layout.plots.length))}}])}syncStations(){var e;let t=this.save,n=(e=t.beats)==null?[]:e;(t.yard>1||t.tut>=3||n.includes(`stRec`))&&this.showStation(`rec`,!1),(t.yard>1||t.tut>=3||n.includes(`stGar`))&&this.showStation(`gar`,!1)}showStation(e,t){if(this.stations[e])return;this.stations[e]=!0;let n=e===`rec`,r=n?this.recycler.group:this.garage.group;if(r.visible=!0,(n?this.recyclerPad:this.garagePad).setVisible(!0),this.world.colliders.boxes.push(n?{x:ky.x,z:ky.z+.2,hw:1.7,hd:1.5}:{x:Ay.x+.5,z:Ay.z,hw:1.5,hd:1.7}),!t)return;r.scale.setScalar(.01),this.stationPops.push({obj:r,t:0});let i=n?ky:Ay;for(let e=0;e<26;e++)Z.set(i.x+(Math.random()-.5)*4,.2+Math.random()*.6,i.z+(Math.random()-.5)*4),Q.set((Math.random()-.5)*4,1.5+Math.random()*2.5,(Math.random()-.5)*4),this.puffs.spawn(Z,Q,$.set(`#f1ece2`),.8,.9,1.1,2.5,0);for(let e=0;e<30;e++)Z.set(i.x,1.5,i.z),Q.set((Math.random()-.5)*6,3+Math.random()*4,(Math.random()-.5)*6),this.sparks.spawn(Z,Q,$.set(e%3?`#ffe066`:`#ffffff`),1,.3,.9,.5,6);this.audio.jingle(`unlock`),this.audio.play(`shopping`,.5),this.audio.thud(.4),this.rig.shake(.25)}revealRecycler(){if(this.stations.rec||!this.once(`stRec`)){this.showStation(`rec`,!1);return}this.director.play([{k:`shot`,x:ky.x+1.8,z:ky.z-.6,w:10.5,d:9,pitch:nn.degToRad(42),t:.55,speed:2.4},{k:`do`,fn:()=>this.showStation(`rec`,!0)},{k:`wait`,t:1.1},{k:`say`,key:`stRec`},{k:`tractor`}])}revealGarage(){if(this.stations.gar||!this.once(`stGar`)){this.showStation(`gar`,!1);return}this.director.play([{k:`shot`,x:Ay.x-1.8,z:Ay.z-.6,w:10.5,d:9,pitch:nn.degToRad(42),t:.55,speed:2.4},{k:`do`,fn:()=>this.showStation(`gar`,!0)},{k:`wait`,t:1.1},{k:`say`,key:`stGar`},{k:`tractor`}])}district1Label(){return t()===`ru`?`Добро пожаловать в`:`Welcome to`}districtIntro(t=!1){let n=this.save.yard,r=ih(n),i=this.city.town,a=null,o=[];if(o.push({k:`do`,fn:()=>a=this.frameDistrict(n)}),!t)o.push(this.cityShot(1.4,2.2));else{let e=bn;this.rig.overviewCenter.set((e.minX+e.maxX)/2,0,(e.minZ+e.maxZ)/2+2),this.rig.overviewSize={w:(e.maxX-e.minX)*.92,d:(e.maxZ-e.minZ)*.86},this.rig.overviewPitch=nn.degToRad(60),this.rig.snapOverview(),o.push({k:`wait`,t:1.9})}o.push(this.districtShot(n,1.5)),o.push({k:`do`,fn:()=>this.redrawPlans()}),o.push({k:`wait`,t:1.1});let s=lr(i,r,`intro`),c=i===0?this.districtPOIs(r):i===1?this.bayPOIs(r):{before:[],after:[]};o.push(...c.before),o.push({k:`say`,key:s||`genericIntro`}),o.push(...c.after),o.push({k:`do`,fn:()=>a&&(a.target=0)}),o.push({k:`tractor`}),o.push({k:`do`,fn:()=>{this.once(`in`+n),this.hud.banner(e(`yard`,{n}),this.featureText(this.layout.feature,this.layout.plots.length))}}),this.director.play(o)}districtPOIs(e){let t=[],n=[],r=this.layout,i=(e,n,r,i,a=r*2.6)=>{let o=null;t.push({k:`do`,fn:()=>o=this.frameRing(e,n,r)}),t.push({k:`shot`,x:e,z:n,w:a,d:a*.9,t:1.3}),t.push({k:`say`,key:i}),t.push({k:`do`,fn:()=>o&&(o.target=0)})};if(e===z.slot){n.push({k:`shot`,x:z.x,z:z.z,w:15,d:13,t:1});let e=this.structures.special(`tower`);e&&i(e.pos.x,e.pos.z,2.6,`d2tower`,9)}else if(e===4){let e=this.structures.special(`wheel`);e&&i(e.pos.x,e.pos.z,3.4,`d5wheel`,12)}else if(e===5){let e=this.structures.special(`crane`);e&&i(e.pos.x,e.pos.z,3,`d6crane`,13)}else if(e===6){var a;let e=(a=r.plots[r.landmark])==null?void 0:a.features[0];e&&n.push({k:`shot`,x:e.x,z:e.z+1.5,w:13,d:11,t:1.2})}else if(e===7){let e=this.structures.special(`chimney`);e&&n.push({k:`shot`,x:e.pos.x,z:e.pos.z+1,w:12,d:13,t:1.2})}return{before:n,after:t}}bayPOIs(e){var t;let n=[],r=[],i=this.layout,a=(t=i.plots[i.landmark])==null?void 0:t.features[0],o=(e,t,n,i,a=r,o=0)=>{let s=null;o&&a.push({k:`do`,fn:()=>s=this.frameRing(e,t,o)}),a.push({k:`shot`,x:e,z:t,w:n,d:n*.9,t:1.3}),a.push({k:`say`,key:i}),o&&a.push({k:`do`,fn:()=>s&&(s.target=0)})},s=e=>this.structures.list.find(t=>t.kind.startsWith(e)&&t.alive);if(e===0){o(-4.6,-68,22,`t2d1light`);let e=s(`vaneSign`);e&&o(e.pos.x,e.pos.z,11,`t2d1sign`,r,2.4)}else if(e===1){let e=s(`condemned`);e&&o(e.pos.x,e.pos.z,12,`t2d2houses`,r,2.8)}else if(e===2&&a)n.push({k:`shot`,x:a.x,z:a.z+1,w:13,d:12,t:1.2});else if(e===3){let e=s(`deadTree`);e&&o(e.pos.x,e.pos.z,13,`t2d4trees`)}else if(e===4){let e=s(`bargeMid`);e&&o(e.pos.x,e.pos.z,15,`t2d5barge`,r,4.6)}else e===5&&a?n.push({k:`shot`,x:a.x,z:a.z+1,w:13,d:13,t:1.2}):e===6?n.push({k:`shot`,x:26,z:-46,w:26,d:18,t:1.2}):e===7&&a&&n.push({k:`shot`,x:a.x-2,z:a.z+2,w:16,d:14,t:1.2});return{before:n,after:r}}redrawPlans(){var e;for(let e of this.plotPlans)e==null||e.redraw();(e=this.plazaPlan)==null||e.redraw()}midBeat(e){let t=this.city.town;if(t>1)return;let n=this.layout.slot,r=e===Math.ceil(this.layout.plots.length/2),a=``;a=t===0?n===0&&e===1?`d1mid`:(n===2||n===4||n===6)&&r?`d`+(n+1)+`mid`:``:n===0&&e===1?`t2d1mid`:(n===1||n===2||n===3||n===5||n===6)&&r?`t2d`+(n+1)+`mid`:``,a&&this.once(a+`:`+this.save.yard)&&this.later(2.6,()=>this.director.play([{k:`say`,key:a},{k:`do`,fn:()=>{a===`d3mid`&&this.giftCoins(Math.round(i(this.save.yard)*.5))}}]))}giftCoins(e){let t=this.tractor.pos.clone().setY(this.tractor.pos.y+2.2);this.hud.floatText(`+`+qt(e),t,`gold big`),this.addCoins(e);for(let e=0;e<12;e++)this.hud.flyCoinFromWorld(t,()=>this.audio.coin(e),.2+e*.05)}walkable(e,t){if(It(e,t)<.3)return!1;let n=Re(e,t);if(n<0)return e>En.minX&&e<En.maxX&&t>En.minZ&&t<En.maxZ;let r=this.city.districts[n];return!r||r.state===`locked`?!1:r.state===`built`||this.districtDone?!0:this.plots.isDone(Kn(this.layout.plan,e,t))}syncLake(){var e;let t=((e=this.city.districts[z.slot])==null?void 0:e.state)===`built`;this.lake.setClean(+!!t,!0),this.minimap.lakeClean=t}districtName(t){return e(`d`+dh(t).key+`Name`)}livePlot(e,t,n=0){let r=e.plots[t],i=e.n*101+t;if(this.life.addPlot(r.rect,i,n,r.region.px,r.region.pz),(r.theme===`market`||r.theme===`cafe`||r.theme===`townhall`)&&this.life.addPlot(r.rect,i+7,n+.4,r.region.px,r.region.pz),r.features.some(e=>e.theme===`stage`)){let e=Nh(r);this.life.addDancers(e.cx,e.crowdZ,e.crowdRX,e.crowdRZ,10,i+3,r.rect,n+.6),this.life.addDancers(e.cx,e.stageZ+.2,1.3,.3,3,i+5,r.rect,n+.9,Ms+e.y-R(e.cx,e.stageZ+.2))}}updateChainParams(){this.chain.ingotsPerCar=4,this.chain.buildTime=Xn,this.chain.price=d(this.save.yard)}buildYard(t,n){var r,i,a;let o=gh(t);this.layout=o;let s=this.world.setYard(o.bounds,t);this.jf.setGroundTheme(s,bp,xp),this.jf.generate(o),this.trash.populate(this.jf,o,t*31+7),this.structures.populate(o,(e,t)=>Kn(o.plan,e,t),[]),this.bloom.populate(o,this.jf),this.treasures.populate(this.jf,t*53+11,t===1?1:2),this.hud.hidePostcard();let c=!!n&&o.plots.length>0&&o.plots.every((e,t)=>{var n;return((n=this.save.plotsDone)==null?[]:n).includes(t)});if(c||this.primeShaders(),this.beforeShot=c?null:this.photoDistrict(),n&&((r=this.save.ruinsGone)==null?[]:r).length&&this.structures.populate(o,(e,t)=>Kn(o.plan,e,t),(i=this.save.ruinsGone)==null?[]:i),n){var l;this.jf.deserialize(n),this.trash.syncWithField(this.jf,(l=this.save.bigsDone)==null?[]:l),this.bloom.syncWithField(this.jf),this.treasures.syncWithField(this.jf)}this.drops.deserialize(n?this.save.drops:[],$.setRGB(.97,.95,.9)),this.plots.setup(o,n?(a=this.save.plotsDone)==null?[]:a:[]),this.syncOldLight(o),this.makePlans(o),o.plots.forEach((e,t)=>this.plots.isDone(t)&&this.livePlot(o,t)),this.minimap.setCity(this.city,o),this.birds.setPerches(this.perchPoints(),!0),this.tractor.allowed=this.city.allowed,this.tractor.staticCircles=this.city.circles,this.labelDistricts();for(let e of this.hardLabels)this.hud.removeLabel(e.label);this.hardLabels=[],this.jf.heaps.forEach((t,n)=>{if(t.hardness<2)return;let r=ne(t.hardness),i=this.hud.addLabel(`<div class="need-tag outline">${Xc(`lock`)}${e(`needSaw`,{n:r})}</div>`,Z.set(t.x,R(t.x,t.z)+t.height+.9,t.z));i.avoidHud=!0,this.hardLabels.push({label:i,heap:n})}),this.hud.setYard(t,1),this.weakHinted.clear(),this.grindItem=null,this.progressShown=-1,this.goalReachedAt=-1,this.save.goalShown=!1,this.districtDone=!1,this.hud.showNext(!1),o.plots.length&&o.plots.every((e,t)=>this.plots.isDone(t))&&this.onDistrictDone(!0)}syncOldLight(e){var t,n;if((t=this.oldLight)==null||t.removeFromParent(),this.oldLight=null,this.city.town%2!=1||e.slot!==nh-1||this.plots.isDone(e.landmark))return;let r=(n=e.plots[e.landmark])==null?void 0:n.features[0];if(!r)return;let i=new F(Rf(!0),ns());i.position.set(r.x,R(r.x,r.z)-.05,r.z),i.castShadow=i.receiveShadow=!0,this.engine.scene.add(i),this.oldLight=i}makePlans(e){var t;for(let e of this.plotPlans)e==null||e.dispose();(t=this.plazaPlan)==null||t.dispose(),this.plotPlans=e.plots.map((t,n)=>{if(this.plots.isDone(n))return null;let r=Ah(t,e.n*17+n,e.plan,n);if(!r)return null;let i=new ym(r,{key:`c`+e.n+`:`+n});return i.redraw(),this.engine.scene.add(i.group),i});let n=jh(e.slot);this.plazaPlan=n?new ym(n,{key:`cp`+e.n}):null,this.plazaPlan&&(this.plazaPlan.redraw(),this.engine.scene.add(this.plazaPlan.group))}updatePlans(e){let t=this.tractor,n=this.jf.zoneAt(t.pos.x,t.pos.z);this.plotPlans.forEach((t,r)=>{t&&(t.target=this.plansHidden||this.plots.isDone(r)?0:n===r?.4:.85,t.update(e))}),this.plazaPlan&&(this.plazaPlan.target=this.districtDone||this.plansHidden?0:.85,this.plazaPlan.update(e))}featureText(t,r){let i={start:`fStart`,cars:`fCars`,hills:`fHills`,tyres:`fTyres`,metal:`fMetal`,appliances:`fAppliances`,giant:`fGiant`,centre:`fCentre`,promenade:`fPromenade`,houses:`fHouses`,fish:`fFish`,forest:`fForest`,barge:`fBarge`,concrete:`fConcrete`,beach:`fBeach`,cape:`fCape`}[t];return e(i,{p:r,w:n(r)})}labelDistricts(){for(let e of this.districtLabels)this.hud.removeLabel(e);this.districtLabels=[];for(let t of this.city.lockedDistricts()){let n=t.L.bounds,r=t.n===this.save.yard+1,i=`<div class="district-tag outline${r?` next`:``}">${Xc(`lock`)}<span class="dt">${this.districtName(t.n)}<small>${r?e(`nextUp`)+` · `:``}${e(`yard`,{n:t.n})}</small></span></div>`,a=(n.minX+n.maxX)/2,o=(n.minZ+n.maxZ)/2,s=this.hud.addLabel(i,Z.set(a,R(a,o)+3.2,o));s.avoidHud=!0,this.districtLabels.push(s)}}applyLevels(e){let t=this.save.lv;this.tractor.applyLevels(t,e),this.cargo.capacity=ye(t.bed),this.cargo.layout()}persist(e=!1){let t=this.save;t.cargo=this.cargo.count,t.cargoValue=this.cargo.count>0?this.cargo.totalValue/this.cargo.count:Xe(t.yard),t.cash=this.chain.cash,t.ingots=this.chain.ingotsStored,t.drops=this.drops.serialize(),(e||this.fieldTimer<=0)&&(t.field=this.jf.serialize(),this.fieldTimer=8),Xf(t),this.dirty=!1}markDirty(){this.dirty=!0}toggleSound(){this.save.muted=!this.save.muted,this.audio.setMuted(this.save.muted),this.hud.setMuted(this.save.muted),this.audio.play(`clickui`,.6),this.markDirty()}addCoins(e){this.save.coins+=e,this.save.earned+=e,this.hud.setCoins(this.save.coins),this.refreshUpgradeUI(),this.markDirty()}refreshUpgradeUI(){this.upgrades.refresh(this.save.lv,this.save.coins)}cheapestUpgrade(){let e=1/0;for(let t of[`saw`,`bed`,`engine`]){let n=this.save.lv[t];n<le[t].maxLevel&&(e=Math.min(e,le[t].price(n)))}return e}rewardUpgrade(e){this.audio.play(`clickui`,.6),_y(e=>{this.audio.setPaused(e),this.engine.paused=e}).then(t=>{t&&this.buy(e,!0)})}buy(t,n=!1){let r=this.save.lv[t],i=le[t];if(r>=i.maxLevel)return;let a=i.price(r);if(!n&&this.save.coins<a){this.upgrades.flash(t,!1),this.audio.play(`clickui`,.5,.7);return}if(n||(this.save.coins-=a),this.hud.setCoins(this.save.coins),this.save.lv[t]=r+1,this.applyLevels(t),this.refreshUpgradeUI(),this.upgrades.flash(t,!0),this.audio.play(`shopping`,.7),this.audio.jingle(`upgrade`),t===`saw`){this.onSawThrown(r),this.save.tut===3&&(this.save.tut=4),this.markDirty(),this.persist();return}let o=this.tractor,s=o.model,c=t===`bed`?s.bedAnchor.getWorldPosition(Z):Z.copy(o.pos),l=1.8,u=t===`bed`?[`#ffffff`,`#7fd0ff`,`#ffe066`]:[`#ffe066`,`#ff8a3d`,`#ffffff`];for(let e=0;e<34;e++){Q.set((Math.random()-.5)*4,2.5+Math.random()*3.5,(Math.random()-.5)*4);let t=$.set(u[e%3]);this.sparks.spawn(Z.clone().add(new L((Math.random()-.5)*l,.3+Math.random(),(Math.random()-.5)*l)),Q,t,1,.38,.8,.5,5)}if(this.hud.floatText(e(t)+` `+e(`level`)+` `+(r+1),c.clone().setY(c.y+2.2),`gold big`),M(r+1)!==M(r)){let n=e((t===`bed`?`bedTier`:`wheelTier`)+M(r+1));this.hud.lookCard(t===`bed`?`truck`:`wheel`,n,e(`newLook`)),this.rig.shake(.3),this.audio.jingle(`unlock`)}t===`engine`&&(this.exhaustBurst=.8),this.rig.shake(.14),this.save.tut===3&&(this.save.tut=4),this.markDirty(),this.persist()}onSawThrown(e){let t=this.tractor.model.sawPivot.getWorldPosition(Z),n=Iu(e);for(let e=0;e<14;e++)Q.set((Math.random()-.5)*5,4+Math.random()*4,(Math.random()-.5)*5),this.debris.spawn(t,Q,$.set(e%2?n.blade:n.teeth),.14+Math.random()*.12,1.1);this.audio.whoosh(.09),this.audio.part(`click`,.12),this.rig.shake(.1)}onSawLand(){var t,n;let r=this.tractor,i=this.save.lv.saw,a=Iu(i),o=r.model.sawPivot.getWorldPosition(new L),s=[a.teeth,a.accent,(t=a.glow)==null?`#ffffff`:t,`#ffe066`];for(let e=0;e<46*this.fxScale+14;e++){let t=Math.random()*Math.PI*2,n=3+Math.random()*5;Q.set(Math.cos(t)*n,2+Math.random()*4,Math.sin(t)*n),this.sparks.spawn(Z.copy(o).setY(r.sawWorld.y+.4),Q,$.set(s[e%s.length]),1,.36,.9,.5,6)}for(let e=0;e<12;e++)Z.set(o.x+(Math.random()-.5)*r.sawR*2,r.sawWorld.y+.3,o.z+(Math.random()-.5)*r.sawR*2),Q.set((Math.random()-.5)*2.4,.8+Math.random(),(Math.random()-.5)*2.4),this.puffs.spawn(Z,Q,$.set(`#f4efdf`),.75,.7,.9,2.4,0);this.shock(o,(n=a.glow)==null?a.teeth:n,r.sawR*3.2),this.shock(o,`#ffffff`,r.sawR*2.2,.45),this.rig.shake(.34),this.audio.clang(.11),zy([30,40,30]);let c=Math.round(tt(i-1)*10),l=Math.round(tt(i)*10);this.hud.sawCard(Gu(i,128),Lu(i),`${e(`saw`)} ${e(`level`)} ${i} · ${e(`power`)} ${c} → ${l}`)}shock(e,t,n,r=.6){let i=Ky(t);i.rotation.x=-Math.PI/2,i.position.set(e.x,R(e.x,e.z)+.16,e.z),i.renderOrder=4,this.engine.scene.add(i),this.shocks.push({mesh:i,t:0,dur:r,size:n})}updateShocks(e){for(let t=this.shocks.length-1;t>=0;t--){let n=this.shocks[t];n.t+=e;let r=Math.min(1,n.t/n.dur);n.mesh.scale.setScalar(.3+n.size*(1-(1-r)*(1-r))),n.mesh.material.opacity=1-r,r>=1&&(n.mesh.removeFromParent(),n.mesh.material.dispose(),this.shocks.splice(t,1))}}onPick(e){var t,n;if(!this.cargo.full){this.trash.fly(e,e=>this.cargo.dropPoint(e),null,.5);return}let r=$.set((t=(n=Yg[e.kind].chips)==null?void 0:n[0])==null?Vy[e.id%Vy.length]:t);for(let t=0;t<3;t++)Q.set((Math.random()-.5)*3,2+Math.random()*2,(Math.random()-.5)*3),this.debris.spawn(e.pos,Q,r,.12+Math.random()*.1,.8)}onGrind(e,t){var n,r;this.tractor.cutting=Math.max(this.tractor.cutting,.85);let i=Yg[e.kind],a=(n=i.material)==null?`soft`:n;this.rig.shake(a===`soft`?.04:.07),this.grindItem=e,this.grindT=.35;let o=(r=i.chips)==null?Vy:r;if(Math.random()<t*30*this.fxScale){let t=this.tractor.sawWorld;if(Z.set(t.x+(e.pos.x-t.x)*.5,t.y+.5+Math.random()*.5,t.z+(e.pos.z-t.z)*.5),Q.set((Math.random()-.5)*6,3+Math.random()*4,(Math.random()-.5)*6),this.debris.spawn(Z,Q,$.set(o[Math.floor(Math.random()*o.length)]),.1+Math.random()*.14,.9),a===`concrete`)Q.set((Math.random()-.5)*2,1+Math.random(),(Math.random()-.5)*2),this.puffs.spawn(Z,Q,$.set(`#d9d4c8`),.7,.6+Math.random()*.4,1,2.4,0);else if(a!==`rubber`){let e=a===`steel`?3:1;for(let t=0;t<e;t++)Q.set((Math.random()-.5)*7,2+Math.random()*5,(Math.random()-.5)*7),this.sparks.spawn(Z,Q,$.set(a===`steel`?`#fff0a0`:`#ffd27a`),1,.16,.35,.4,14)}}this.cutSoundTimer<=0&&(this.audio.playRandom(`terraincrush`,5,.3,.8,.05),this.cutSoundTimer=.16)}onBurst(e){var t,n;let r=Yg[e.kind],i=(t=r.chips)==null?Vy:t,a=e.pos;for(let t=0;t<18*this.fxScale+6;t++)Z.set(a.x+(Math.random()-.5)*e.r,a.y+.4+Math.random()*.6,a.z+(Math.random()-.5)*e.r),Q.set((Math.random()-.5)*8,4+Math.random()*5,(Math.random()-.5)*8),this.debris.spawn(Z,Q,$.set(i[t%i.length]),.16+Math.random()*.22,1.3);for(let t=0;t<10;t++)Z.set(a.x+(Math.random()-.5)*e.r*1.5,a.y+.4,a.z+(Math.random()-.5)*e.r*1.5),Q.set((Math.random()-.5)*2,1+Math.random(),(Math.random()-.5)*2),this.puffs.spawn(Z,Q,$.set(`#d9cbb3`),.7,.8+Math.random()*.5,1,2.4,0);this.audio.play(`terrainblockcrush`,.7,.8+Math.random()*.2,.05),this.audio.thud(.35),this.rig.shake(.3),zy(25),this.scrapAcc+=((n=r.volume)==null?1:n)*(1-.2*e.stage)/1,this.scrapMix=this.bigMix(r.big),this.flushScrap(),this.scrapMix=-1,this.save.bigsDone=this.trash.destroyedBigs(),this.markDirty()}onStructGrind(e,t){let n=Uc[e.kind];if(this.tractor.cutting=Math.max(this.tractor.cutting,.9),this.rig.shake(.08),this.grindStruct=e,this.grindT=.35,Math.random()<t*3){let t=this.tractor.sawWorld;for(let r=0;r<8;r++)Z.set(t.x+(e.pos.x-t.x)*.45,t.y+.6,t.z+(e.pos.z-t.z)*.45),Q.set((Math.random()-.5)*8,3+Math.random()*6,(Math.random()-.5)*8),this.sparks.spawn(Z,Q,$.set(n.material===`concrete`?`#e8d8c8`:`#fff0a0`),1,.2,.45,.4,14)}if(Math.random()<t*48*this.fxScale){let t=this.tractor.sawWorld;if(Z.set(t.x+(e.pos.x-t.x)*.45,t.y+.5+Math.random()*.7,t.z+(e.pos.z-t.z)*.45),Q.set((Math.random()-.5)*6,3+Math.random()*4,(Math.random()-.5)*6),this.debris.spawn(Z,Q,$.set(n.chips[Math.floor(Math.random()*n.chips.length)]),.12+Math.random()*.16,1),n.material===`concrete`)Q.set((Math.random()-.5)*2,1+Math.random(),(Math.random()-.5)*2),this.puffs.spawn(Z,Q,$.set(`#d9c8b8`),.7,.7+Math.random()*.4,1,2.4,0);else for(let e=0;e<2;e++)Q.set((Math.random()-.5)*7,2+Math.random()*5,(Math.random()-.5)*7),this.sparks.spawn(Z,Q,$.set(n.material===`steel`?`#fff0a0`:`#ffd27a`),1,.17,.35,.4,14)}this.cutSoundTimer<=0&&(this.audio.playRandom(`terraincrush`,5,.3,.7,.05),this.cutSoundTimer=.16)}onStructChunk(e){let t=Uc[e.kind];for(let n=0;n<18*this.fxScale+6;n++)Z.set(e.pos.x+(Math.random()-.5)*e.r,e.pos.y+1+Math.random()*e.height*.6,e.pos.z+(Math.random()-.5)*e.r),Q.set((Math.random()-.5)*9,3+Math.random()*5,(Math.random()-.5)*9),this.debris.spawn(Z,Q,$.set(t.chips[n%t.chips.length]),.2+Math.random()*.32,1.4);let n=this.tractor.sawWorld;for(let r=0;r<24*this.fxScale+8;r++)Z.set(n.x+(e.pos.x-n.x)*.5,n.y+.6,n.z+(e.pos.z-n.z)*.5),Q.set((Math.random()-.5)*10,3+Math.random()*7,(Math.random()-.5)*10),t.material===`concrete`?this.puffs.spawn(Z,Q.multiplyScalar(.3),$.set(`#d9c8b8`),.75,.8+Math.random()*.5,1.2,2.4,0):this.sparks.spawn(Z,Q,$.set(r%3?`#ffd27a`:`#ffffff`),1,.22,.6,.4,14);this.audio.play(`terrainblockcrush1`,.6,.62+e.stage*.08,.05),this.audio.thud(.42),this.rig.shake(.34),this.rig.punch(.05),zy(35),this.scrapAcc+=t.volume*.15/1,this.scrapMix=t.material===`concrete`?6:4,this.flushScrap(),this.scrapMix=-1}onStructTopple(e){var t;this.audio.play(`terrainblockcrush`,.6,.55,.05),this.rig.shake(.3),this.rig.punch(.07),this.grindStruct=null;let n=Uc[e.kind];n.falls&&((t=n.slowmo)==null||t)&&!this.director.skip&&(this.slowmo=.9),zy([40,30,40])}onStructDown(t){var n,r;let i=Uc[t.kind],a=this.structures.impactPoint(t,new L);for(let e=0;e<26;e++){let e=Math.random();Z.lerpVectors(t.pos,a,e),Z.x+=(Math.random()-.5)*2,Z.z+=(Math.random()-.5)*2,Z.y=R(Z.x,Z.z)+.3,Q.set((Math.random()-.5)*4,.8+Math.random()*1.6,(Math.random()-.5)*4),this.puffs.spawn(Z,Q,$.set(i.material===`concrete`?`#d9c8b8`:`#cdbfa6`),.8,1.1+Math.random()*.9,1.6,2.6,0)}for(let e=0;e<30*this.fxScale+10;e++)Z.lerpVectors(t.pos,a,Math.random()),Z.y+=.6,Q.set((Math.random()-.5)*9,3+Math.random()*6,(Math.random()-.5)*9),this.debris.spawn(Z,Q,$.set(i.chips[e%i.chips.length]),.2+Math.random()*.3,1.5);this.audio.play(`terrainblockcrush`,.9,.6,.05),this.audio.thud(.7),this.later(.12,()=>this.audio.thud(.4)),this.rig.shake(.75),this.rig.punch(.08),this.shock(a,`#fff1d0`,7,.7),this.shock(a,`#ffffff`,4,.45),zy([60,40,80]),this.jf.cut(t.pos.x,t.pos.z,t.r*.95,9,{volume:0,cleared:0,blocked:0,blockedHeap:-1,mainHeap:-1}),this.scrapAcc+=i.volume*.4/1,this.scrapMix=i.material===`concrete`?6:4,this.flushScrap(),this.scrapMix=-1,this.save.ruinsGone=[...new Set([...(n=this.save.ruinsGone)==null?[]:n,t.kind])],((r=i.announce)==null||r)&&this.hud.floatText(e(`st_`+t.kind)+`!`,a.clone().setY(a.y+2.5),`gold big`),this.markDirty();let o=this.city.town,s=``;o===0?s=t.kind===`tower`?`d2mid`:t.kind===`chimney`?`d8mid`:``:o===1&&(t.kind.startsWith(`condemned`)?s=`t2d2first`:t.kind.startsWith(`barge`)&&!this.structures.list.some(e=>e.kind.startsWith(`barge`)&&e.alive)?s=`t2d5mid`:t.kind===`containers`?s=`t2d8mid`:t.kind.startsWith(`deadTree`)&&(s=`tipTree`)),s&&this.once(s)&&this.later(1.6,()=>this.director.play([{k:`say`,key:s}]))}bigMix(e){return e===`car`||e===`drums`||e===`safe`||e===`tank`||e===`container`||e===`bus`?4:e===`fridge`||e===`washer`||e===`stove`||e===`bathtub`?5:e===`concrete`||e===`concretePipe`?6:+(e===`tyreBig`)}onChunk(e){var t,n;let r=Yg[e.kind],i=(t=r.chips)==null?Vy:t;for(let t=0;t<8*this.fxScale+3;t++)Z.set(e.pos.x+(Math.random()-.5)*e.r,e.pos.y+.6+Math.random()*.5,e.pos.z+(Math.random()-.5)*e.r),Q.set((Math.random()-.5)*6,3+Math.random()*4,(Math.random()-.5)*6),this.debris.spawn(Z,Q,$.set(i[t%i.length]),.14+Math.random()*.16,1.1);this.audio.play(`terrainblockcrush1`,.5,.75+e.stage*.1,.05),this.rig.shake(.16),this.scrapAcc+=((n=r.volume)==null?1:n)*.2/1,this.scrapMix=this.bigMix(r.big),this.flushScrap(),this.scrapMix=-1}updateGrindLabel(t){var n;this.grindT-=t;let r=this.grindStruct;if(r&&r.alive&&!r.fall&&this.grindT>0&&this.state===`play`){this.hpLabel.visible=!0;let t=this.hpLabel.el.firstChild,n=Math.max(0,r.hp/r.maxHp),i=r.hp/Math.max(.01,this.tractor.power),a=r.maxHp/Math.max(.01,this.tractor.power)>40;Uy(t.querySelector(`b`),e(`st_`+r.kind)),Wy(t.querySelector(`u`),n),Uy(t.querySelector(`s`),a?e(`weakSaw`):i>1.5?Math.ceil(i)+` `+e(`sec`):``),t.classList.toggle(`weak`,a),this.hpLabel.world.set(r.pos.x,r.pos.y+Math.min(4.5,r.height*.6)+.8,r.pos.z);return}r&&(!r.alive||r.fall)&&(this.grindStruct=null);let i=this.grindItem,a=!!i&&i.alive&&this.grindT>0&&this.state===`play`;if(this.hpLabel.visible=a,!a||!i)return;let o=Yg[i.kind],s=Math.max(0,i.hp/i.maxHp),c=i.hp/Math.max(.01,this.tractor.power),l=i.maxHp/Math.max(.01,this.tractor.power)>7,u=this.hpLabel.el.firstChild;Uy(u.querySelector(`b`),e(`mat_`+((n=o.material)==null?`soft`:n))),Wy(u.querySelector(`u`),s),Uy(u.querySelector(`s`),l?e(`weakSaw`):c>1.5?Math.ceil(c)+` `+e(`sec`):``),u.classList.toggle(`weak`,l),this.hpLabel.world.set(i.pos.x,i.pos.y+1.4+i.r*.6,i.pos.z),l&&!this.weakHinted.has(i.id)&&(this.weakHinted.add(i.id),this.tip(`tipWeak`))}onTreasure(t){let n=Math.max(50,Math.round(i(this.save.yard)*.6/10)*10),r=t.clone().setY(t.y+1.2);this.hud.floatText(e(`treasure`)+` +`+qt(n),r,`gold`);for(let e=0;e<14;e++){let t=e===13;this.hud.flyCoinFromWorld(r,()=>{this.audio.coin(e),t&&this.addCoins(n)},.15+e*.04)}this.audio.jingle(`unlock`),this.rig.shake(.2),this.later(1.4,()=>this.tip(`tipTreasure`));for(let e=0;e<40;e++)Z.copy(t).setY(t.y+.4),Q.set((Math.random()-.5)*7,3+Math.random()*5,(Math.random()-.5)*7),this.sparks.spawn(Z,Q,$.set(e%3?`#ffd23f`:`#ffffff`),1,.3,.9,.5,9);for(let e=0;e<10;e++)Z.copy(t).setY(t.y+.4),Q.set((Math.random()-.5)*5,4+Math.random()*3,(Math.random()-.5)*5),this.debris.spawn(Z,Q,$.set(e%2?`#d08a3a`:`#ffd23f`),.2,1.2)}perchPoints(){let e=this.layout.bounds,t=[],n=2.6;for(let r=0,i=e.minZ+n/2;i<e.maxZ;i+=n,r++)for(let a=0,o=e.minX+n/2;o<e.maxX;o+=n,a++){let e=o+(Ee(a,r,3)-.5)*n*.6,s=i+(Ee(a,r,7)-.5)*n*.6,c=this.jf.heightAt(e,s);if(It(e,s)<.4)continue;let l=R(e,s);c>.16?t.push({x:e,z:s,y:l+c,r:.5,id:a+`:`+r}):c<.03&&(a+r)%2==0&&!this.plots.circles.some(t=>(t.x-e)**2+(t.z-s)**2<(t.r+.8)**2)&&t.push({x:e,z:s,y:l,r:.6,id:a+`:`+r})}return t}checkPlots(){let e=this.layout;for(let t=0;t<e.plots.length;t++)this.plots.isDone(t)||this.jf.zoneProgress(t)<.95||this.structures.blocksPlot(t)||this.completePlot(t)}completePlot(t){var n;let r=this.layout,i=r.plots[t].rect,a=this.tractor,o=Math.max(i.minX,Math.min(i.maxX,a.sawWorld.x)),s=Math.max(i.minZ,Math.min(i.maxZ,a.sawWorld.z)),c=this.jf.clearZone(t,o,s),l=(e,n)=>Kn(r.plan,e,n)===t,u=this.trash.clearWhere(l,e=>{Q.set(0,1.2,0),this.puffs.spawn(e.pos,Q,$.set(`#fff6dc`),.8,.5+e.r,.7,2.2,0)});this.treasures.openWhere(l);let d=this.drops.takeWhere(l,(e,t,n)=>{Z.set(e,t,n),Q.set(0,1.5,0),this.puffs.spawn(Z,Q,$.set(`#fff6dc`),.8,.6,.7,2.2,0)});if(this.bloom.bloomZone(t,o,s),this.plots.complete(t,o,s),t===r.landmark&&this.oldLight){let e=this.oldLight;this.oldLight=null;for(let t=0;t<24;t++)Z.set(e.position.x+(Math.random()-.5)*3,e.position.y+Math.random()*6,e.position.z+(Math.random()-.5)*3),Q.set((Math.random()-.5)*2,.6+Math.random(),(Math.random()-.5)*2),this.puffs.spawn(Z,Q,$.set(`#e9dcc4`),.8,1.2,1.4,2.6,0);e.removeFromParent()}if(this.livePlot(r,t,2.2),t===r.landmark){let e=r.plots[t].features[0],n=e.x,i=e.z;for(let e=0;e<4;e++)this.later(1.4+e*.35,()=>this.firework(n+(Math.random()-.5)*4,R(n,i)+7+Math.random()*3,i+(Math.random()-.5)*4));this.later(1.6,()=>this.hud.floatText(this.districtName(this.save.yard),new L(n,R(n,i)+5,i),`gold big`)),this.later(1.5,()=>this.rig.shake(.22))}this.save.plotsDone=[...new Set([...(n=this.save.plotsDone)==null?[]:n,t])],this.midBeat(this.plots.doneCount),this.save.bigsDone=this.trash.destroyedBigs();let f=Math.round((c+u)/1)*Xe(this.save.yard),p=pe(this.save.yard,r.plots.length)+f+Math.round(d),m=r.plots[t].region,h=new L(m.px,R(m.px,m.pz)+1.5,m.pz);this.hud.floatText(e(`plotDone`)+` +`+qt(p),h,`gold big`);for(let e=0;e<10;e++){let t=e===9;this.hud.flyCoinFromWorld(h,()=>{this.audio.coin(e+2),t&&this.addCoins(p)},.3+e*.05)}this.audio.jingle(`unlock`),this.later(.45,()=>this.audio.bloom()),this.rig.shake(.15),zy([20,60,30]);let g=[`#ff5a4f`,`#ffd23f`,`#35c46a`,`#3a8df0`,`#ff7ab8`,`#ffffff`];for(let e=0;e<60*this.fxScale+10;e++)Z.set(i.minX+Math.random()*(i.maxX-i.minX),0,i.minZ+Math.random()*(i.maxZ-i.minZ)),Z.y=R(Z.x,Z.z)+.4+Math.random(),Q.set((Math.random()-.5)*2,4+Math.random()*4,(Math.random()-.5)*2),this.sparks.spawn(Z,Q,$.set(g[e%g.length]),1,.3,1.4,.6,5);this.markDirty(),this.persist(!0)}onCut(e,t,n){var r,i;this.scrapAcc+=e/1,this.scrapHeap=t;let a=((r=(i=this.jf.heaps[t])==null?void 0:i.hardness)==null?1:r)>=2,o=this.tractor.sawWorld,s=this.tractor.forward,c=this.tractor.sawR,l=Math.min(6,1+Math.floor(e*14*this.fxScale));for(let e=0;e<l;e++){let e=Math.random()<.75?1:-1,t=(Math.random()-.3)*1.2,n=s.x*Math.cos(t)-s.z*Math.sin(t)*e,r=s.z*Math.cos(t)+s.x*Math.sin(t)*e;Z.set(o.x+n*c*.9,o.y+.35+Math.random()*.5,o.z+r*c*.9);let i=-r*e,a=n*e,l=3+Math.random()*4;Q.set(i*l+n*1.5,3.5+Math.random()*4.5,a*l+r*1.5),$.set(Vy[Math.floor(Math.random()*Vy.length)]),this.debris.spawn(Z,Q,$,.14+Math.random()*.18,1.1)}if(Math.random()<.45&&(Z.set(o.x+s.x*c*.8+(Math.random()-.5)*c,o.y+.35,o.z+s.z*c*.8+(Math.random()-.5)*c),Q.set((Math.random()-.5)*1.6+s.x,.9+Math.random()*.9,(Math.random()-.5)*1.6+s.z),$.set(`#8a7560`).lerp(Iy,.5),this.puffs.spawn(Z,Q,$,.45,.55+Math.random()*.4,.8,2.6,0)),a)for(let e=0;e<2;e++)Z.set(o.x+s.x*this.tractor.sawR,o.y+.4,o.z+s.z*this.tractor.sawR),Q.set((Math.random()-.5)*6,2+Math.random()*4,(Math.random()-.5)*6),this.sparks.spawn(Z,Q,$.set(`#ffd27a`),1,.16,.35,.4,14);this.cutSoundTimer<=0&&(this.audio.playRandom(`terraincrush`,5,.22,1,.05),this.cutSoundTimer=.24+Math.random()*.14),n>0&&this.markDirty()}flushScrap(){var e,t,n;if(this.scrapAcc<1)return;let r=this.jf.heaps[this.scrapHeap],i=(e=r==null?void 0:r.hardness)==null?1:e,a=Xe(this.save.yard)*gn(i),o=this.tractor,s=r?r.mix:(t=(n=this.layout.plots[this.jf.zoneAt(o.sawWorld.x,o.sawWorld.z)])==null?void 0:n.mix)==null?0:t;for(;this.scrapAcc>=1;){if(--this.scrapAcc,By(this.scrapMix>=0?this.scrapMix:s,$),Z.copy(o.sawWorld).setY(o.sawWorld.y+.6),!this.cargo.full){this.cargo.addFrom(Z,$,a);continue}let e=-o.forward.z,t=o.forward.x,n=0,r=0;for(let i of[1,-1,0]){let a=i===0?-2.2:.6;if(n=o.pos.x+e*1.9*i+o.forward.x*a+(Math.random()-.5)*.5,r=o.pos.z+t*1.9*i+o.forward.z*a+(Math.random()-.5)*.5,!this.plots.circles.some(e=>(e.x-n)**2+(e.z-r)**2<(e.r+.4)**2))break}this.drops.drop(Z,n,r,$,a),this.markDirty(),this.spillHinted||(this.spillHinted=!0,this.later(1.2,()=>this.tip(`tipSpill`)))}}update(t){if(this.slowmo>0&&(this.slowmo-=t,t*=.45),this.time+=t,this.timers.length){let e=this.timers.filter(e=>e.at<=this.time);if(e.length){this.timers=this.timers.filter(e=>e.at>this.time);for(let t of e)t.fn()}}this.input.update(t),this.input.applyForced();let n=this.tractor,r=this.state===`play`;n.canCut=r&&!this.cargo.full&&!this.onFoot,this.director.update(t);let i=this.director.busy||this.hud.dialogOpen||this.hud.curtainBusy||this.rig.overviewAmount>.3,a=r&&!this.modal.isOpen&&!i?this.input.x:0,o=r&&!this.modal.isOpen&&!i?this.input.y:0,s=this.onFoot?0:a,c=this.onFoot?0:o;this.jf.setTime(this.time),h(),n.poseYaw=this.upgrades.open?-1.2:null,n.update(t,s,c,this.jf,this.time),this.hero.update(t,this.onFoot?a:0,this.onFoot?o:0,this.heroSolve);let l=this.onFoot?this.hero.pos:n.pos;Math.hypot(s,c)>.1&&(this.tutMoved+=n.speed*t),this.cutSoundTimer-=t,this.trash.update(t,this.jf,{sawX:n.sawWorld.x,sawZ:n.sawWorld.z,sawR:n.sawR,bodyX:n.pos.x,bodyZ:n.pos.z,canCut:n.canCut&&r,power:n.power,pushing:n.pushing}),this.treasures.update(t,this.jf,n.sawWorld.x,n.sawWorld.z,n.sawR,n.canCut&&r),this.structures.update(t,{sawX:n.sawWorld.x,sawZ:n.sawWorld.z,sawR:n.sawR,bodyX:n.pos.x,bodyZ:n.pos.z,canCut:n.canCut&&r,power:n.power,pushing:n.pushing}),this.flushScrap(),r&&(this.bloom.check(this.jf,n.sawWorld.x,n.sawWorld.z,n.sawR+.5),this.bloom.check(this.jf,n.pos.x,n.pos.z,1.3),this.cargo.full||this.drops.pickup(t,n.pos.x,n.pos.z,2.2,(e,t,n)=>this.cargo.addFrom(e,t,n))),this.bloom.update(t),this.life.update(t,this.rig.target.x,this.rig.target.z,this.onFoot?{bodyX:l.x,bodyZ:l.z,sawX:1e4,sawZ:1e4,sawR:0,sawOn:!1,active:r,onFoot:!0}:{bodyX:n.pos.x,bodyZ:n.pos.z,rearX:n.pos.x-n.forward.x*n.model.rearExtent*.85,rearZ:n.pos.z-n.forward.z*n.model.rearExtent*.85,sawX:n.sawWorld.x,sawZ:n.sawWorld.z,sawR:n.sawR,sawOn:r&&n.canCut,active:r&&(n.speed>.3||n.cutting>.2),speed:Math.abs(n.speed),fwdX:n.forward.x,fwdZ:n.forward.z}),this.cast.update(t,l.x,l.z,this.onFoot,this.rig.target.x,this.rig.target.z),this.emotes.update(t);{let e=n.model.marks,r=Math.cos(n.yaw),i=Math.sin(n.yaw);e.at.forEach((e,t)=>{var a;let o=(a=this.markPts[t])==null?this.markPts[t]={x:0,z:0}:a;o.x=n.pos.x+e.x*r+e.z*i,o.z=n.pos.z-e.x*i+e.z*r}),this.tireMarks.update(t,this.markPts,e.width,(e,t)=>this.jf.surfaceAt(e,t))}this.updateTrees(),this.perchTimer-=t,this.perchTimer<=0&&(this.perchTimer=1.1,this.birds.setPerches(this.perchPoints())),this.birds.update(t,l.x,l.z,this.state!==`transition`),this.drops.update(t,this.jf),this.cargo.update(t);let u=this.cargo.full;u&&!this.wasFull&&r&&!this.onFoot&&(this.audio.fullHorn(.15),zy([40,50,60]),this.rig.shake(.22),this.stations.rec||this.later(.9,()=>this.revealRecycler())),this.wasFull=u,this.jf.flush(6),Zs(t),this.lake.update(t),this.updateDusk(t),this.updateBeam(t),lm.value=this.time,this.city.updateBlueprints(t),this.updatePlans(t),this.updateFrames(t),r&&this.checkPlots(),this.plots.update(t,n.pos.x,n.pos.z,Ep);let d=this.director.busy;for(let e of this.districtLabels)e.visible=!d;this.hud.root.classList.toggle(`scene`,d),this.hud.root.classList.toggle(`cine`,this.rig.overviewAmount>.35);for(let e of this.hardLabels){let t=this.jf.heaps[e.heap];e.label.visible=r&&this.rig.overviewAmount<.2&&t.hardness>n.maxHard&&this.jf.heightAt(t.x,t.z)>.4}if(this.updateStations(t),this.updateTaxes(t),this.updateFx(t),this.updateGuide(t),this.updateTutorial(t),this.updateProgress(),this.focusT<1){this.focusT=Math.min(1,this.focusT+t/.75);let e=this.focusT*this.focusT*(3-2*this.focusT);this.rig.target.lerpVectors(this.focusFrom,l,e)}else this.rig.target.copy(l);this.frameCamera(),this.rig.update(t,this.engine.aspect,this.engine.width,this.engine.height);let f=this.engine.scene.fog,p=this.engine.camera,m=p.position.distanceTo(this.rig.target);f.near=Math.max(60,m*.75),f.far=Math.max(125,m*1.7);let g=nn.clamp(m*.18,.5,40),_=f.far+30;(Math.abs(p.near-g)>.02||Math.abs(p.far-_)>1)&&(p.near=g,p.far=_,p.updateProjectionMatrix()),Wo.uCamPos.value.copy(this.engine.camera.position),this.xrayFocus?Wo.uSee.value.set(this.xrayFocus.x,this.xrayFocus.y,this.xrayFocus.z,3.4):this.onFoot?Wo.uSee.value.set(l.x,l.y+.9,l.z,this.state===`play`&&!this.director.busy?1.8:0):Wo.uSee.value.set(n.pos.x,n.pos.y+1.1+n.rideY,n.pos.z,this.state===`play`&&!this.director.busy?2.6:0),this.lighting.follow(this.rig.target),n.cutting>.25&&this.rig.shake(.03*n.cutting),this.hud.setCargoVisible(this.state===`play`&&!this.upgrades.open&&!this.onFoot),this.hud.setCargo(this.cargo.count+this.cargo.incoming,this.cargo.capacity);let v=this.jf.zoneAt(n.sawWorld.x,n.sawWorld.z);if(r&&!this.onFoot&&v!==255&&!this.plots.isDone(v)?this.hud.setPlot(e(`plot`,{n:v+1}),Math.min(1,this.jf.zoneProgress(v)/O)):this.hud.setPlot(null),this.minimap.update(t,this.jf,e=>this.plots.isDone(e),l.x,l.z,this.onFoot?this.hero.yaw:n.yaw),this.hud.update(t),this.upgrades.update(t),this.audio.updateLoops(Math.min(1,n.speed/n.maxSpeed),n.cutting,this.onFoot?.3:1),this.saveTimer-=t,this.fieldTimer-=t,this.dirty&&this.saveTimer<=0&&(this.persist(),this.saveTimer=2.5),this.input.endFrame(),this.debugEl){let e=this.engine.renderer.info;this.debugEl.textContent=`fps ${this.engine.fps.toFixed(0)} | calls ${e.render.calls} tris ${(e.render.triangles/1e3).toFixed(1)}k | ${(this.jf.progress*100).toFixed(1)}% | v ${n.speed.toFixed(2)}`}}updateStations(e){let t=this.tractor.pos;for(let t of this.pads)t.update(e);for(let t=this.stationPops.length-1;t>=0;t--){let n=this.stationPops[t];n.t+=e/.75,n.obj.scale.setScalar(Math.max(.01,b(Math.min(1,n.t),2.2))),n.t>=1&&(n.obj.scale.setScalar(1),this.stationPops.splice(t,1))}let n=this.stations.rec&&this.recyclerPad.contains(t,this.recyclerPad.active?.35:-.3)&&this.state===`play`&&!this.onFoot;if(this.recyclerPad.active=n,n&&(this.unloadLeft=this.cargo.count),this.unloadLeft>0&&this.cargo.count>0&&this.stations.rec)for(this.unloadTimer-=e;this.unloadTimer<=0&&this.unloadLeft>0&&this.cargo.count>0;){let e=Math.max(1,Math.round(this.cargo.capacity/Math.max(1,this.cargo.visualCap))),t=Math.max(1,Math.ceil(this.cargo.capacity/e));this.unloadTimer+=Math.max(.03,Math.min(.085,1.2/t));let n=this.recycler.group.localToWorld(this.recycler.hopperTop.clone());n.x+=(Math.random()-.5)*.7,n.z+=(Math.random()-.5)*.16;let r=this.unloadCombo++;this.unloadLeft-=Math.min(e,this.cargo.count),this.audio.whoosh(.05),this.cargo.takeTo(n,(e,t,n,i)=>this.onCrushed(e,t,n,i,r),{units:e,crush:.62,dur:.3})}else this.unloadLeft=0,this.unloadTimer=.05,n||(this.unloadCombo=0);this.recyclerWork=Math.max(0,this.recyclerWork-e*.9),this.recyclerKick=Math.max(0,this.recyclerKick-e*6);let r=Math.min(1,this.recyclerWork);for(let t of this.recycler.rollers)t.rotation.x+=e*(1.2+r*16)*(t===this.recycler.rollers[0]?1:-1);if(this.recycler.body.position.x=r>.05?(Math.random()-.5)*.05*r:0,this.recycler.body.position.y=Math.sin(this.recyclerKick*Math.PI)*.06,this.chimneyTimer-=e,this.chimneyTimer<=0&&this.stations.rec){this.chimneyTimer=r>.1?.14:.6;let e=this.recycler.group.localToWorld(this.recycler.chimneyTop.clone());Q.set(.3+Math.random()*.3,1.2+Math.random()*.6,(Math.random()-.5)*.4),this.puffs.spawn(e,Q,$.set(r>.1?`#b3b9c2`:`#d7dbe1`),r>.1?.5:.35,.6,1.5,2.6,0)}this.updateChain(e,t);let i=this.stations.gar&&this.garagePad.contains(t,this.garagePad.active?.4:-.35)&&this.state===`play`&&!this.onFoot;this.garagePad.active=i,i||(this.upgradesDismissed=!1);let a=i&&!this.upgradesDismissed&&(this.upgrades.open||!this.director.busy&&!this.hud.dialogOpen);a&&!this.upgrades.open&&(this.refreshUpgradeUI(),this.audio.play(`clickui`,.5)),this.upgrades.show(a);let o=i?1.85:1.25;this.garage.door.position.y+=(o-this.garage.door.position.y)*Math.min(1,e*6);let s=this.save.coins>=this.cheapestUpgrade();this.garageBubble.visible=s&&!i&&this.state===`play`&&this.stations.gar&&!this.director.busy,this.garage.lamp.material.color.set(s&&Math.sin(this.time*8)>0?`#7dff9a`:`#ffe066`)}updateTrees(){let e=this.tractor;is.uBendTime.value=this.time;let t=e.model.rearExtent*.8,n=e.pos.x-e.forward.x*t,r=e.pos.z-e.forward.z*t,i=e.sawWorld.x,a=e.sawWorld.z,o=i-n,s=a-r,c=o*o+s*s||1,l=Math.max(1.05,e.sawR+.25)+.2,u=new Set;for(let t of[this.city.soft,this.plots.soft])for(let i of t){if(Math.abs(i.x-e.pos.x)>6||Math.abs(i.z-e.pos.z)>6)continue;let t=Math.max(0,Math.min(1,((i.x-n)*o+(i.z-r)*s)/c)),a=i.x-(n+o*t),d=i.z-(r+s*t);if(a*a+d*d>l*l)continue;let f=i.x.toFixed(2)+`:`+i.z.toFixed(2);if(u.add(f),!(this.inTree.has(f)||e.speed<.6)){os(i.x,i.z,a||e.forward.x,d||e.forward.z,.34+Math.min(.3,e.speed*.05));for(let e=0;e<9*this.fxScale+3;e++)Z.set(i.x+(Math.random()-.5)*1.4,R(i.x,i.z)+1.6+Math.random()*1.2,i.z+(Math.random()-.5)*1.4),Q.set((Math.random()-.5)*3+a*2,.8+Math.random()*2,(Math.random()-.5)*3+d*2),this.debris.spawn(Z,Q,$.set(e%3?`#5fb84a`:`#8fd36a`),.1+Math.random()*.1,1.4);this.audio.rustle(.09)}}this.inTree=u}lastBitsTarget(e,t){let n=this.tractor,r=this.jf.zoneAt(n.sawWorld.x,n.sawWorld.z);if(r===255||this.plots.isDone(r)||this.jf.zoneProgress(r)/.95<.82)return!1;let i=this.structures.list.find(e=>e.alive&&!e.fall&&e.plot===r);if(i)return e.copy(i.pos),this.jf.zoneProgress(r)>=.95&&this.tip(`tipRuin`),!0;if(!this.jf.nearestJunkInZone(n.sawWorld.x,n.sawWorld.z,r,n.maxHard,e,.1))return!1;if(this.hintSparkT-=t,this.hintSparkT<=0){this.hintSparkT=.5;let e=this.layout.plots[r].rect;for(let t=0;t<3&&this.jf.nearestJunkInZone(e.minX+Math.random()*(e.maxX-e.minX),e.minZ+Math.random()*(e.maxZ-e.minZ),r,n.maxHard,Q,.1);t++)Q.y+=R(Q.x,Q.z)+.4,this.sparks.spawn(Q,Ry,$.set(`#ffe680`),1,.5,.9,.4,0)}return!0}get taxRate(){let e=0;for(let t of this.city.districts)t.state===`built`&&(e+=ae(t.n));return e}updateTaxes(t){if(this.state!==`play`||(this.taxTimer-=t,this.taxTimer>0))return;this.taxTimer=20;let n=Math.round(this.taxRate*20/60);if(n<=0)return;let r=this.hud.mapCenter(),i=Math.min(8,3+Math.floor(n/80));for(let e=0;e<i;e++){let t=e===i-1;this.hud.flyCoin(r.x+(Math.random()-.5)*30,r.y+(Math.random()-.5)*20,()=>{this.audio.coin(e),t&&this.addCoins(n)},e*.06)}this.hud.toast(e(`taxes`,{n:qt(n)}),r.x,r.y+60)}onCrushed(e,t,n,r,i){this.recyclerWork=Math.min(1.5,this.recyclerWork+.45),this.recyclerKick=1;let a=Math.round(5+4*this.fxScale);for(let t=0;t<a;t++)Z.set(r.x+(Math.random()-.5)*.6,r.y+.1,r.z+(Math.random()-.5)*.3),Q.set((Math.random()-.5)*3.2,3.5+Math.random()*3,(Math.random()-.5)*2.4),this.debris.spawn(Z,Q,t===0?e:$.set(Vy[Math.floor(Math.random()*Vy.length)]),.12+Math.random()*.12,.8);Z.set(r.x,r.y+.3,r.z),Q.set((Math.random()-.5)*.6,1.4,(Math.random()-.5)*.6),this.puffs.spawn(Z,Q,$.set(`#e6dccb`),.55,.7,.7,2.4,0),this.audio.play(`terrainblockcrush1`,.32,1.05+Math.random()*.3,.05);let o=Math.round(t);if(this.hud.flyCoinFromWorld(r,()=>{this.addCoins(o),this.audio.coin(i)}),i%4==0&&this.hud.floatText(`+`+qt(o),Z.set(r.x,r.y+.8,r.z)),this.chain.factoryBuilt)for(this.ingotAcc+=n;this.ingotAcc>=8;)this.ingotAcc-=8,this.chain.addIngot();this.pendingCoins+=o,this.cargo.count===0&&this.cargo.flying===0&&this.onUnloaded()}frameCamera(){let e=this.rig,t=this.tractor;if(this.onFoot){e.zoom=.64,e.pitchWant=nn.degToRad(41),e.offset.set(0,0,0),e.shift=0;return}if(this.upgrades.open&&this.state===`play`){let n=t.model.sawOffset+t.sawR,r=t.model.rearExtent,i=(n-r)/2;e.zoom=Math.max(.8,Math.min(1.15,(n+r)/5.5)),e.pitchWant=nn.degToRad(40),e.offset.set(t.forward.x*i,0,t.forward.z*i);let a=(this.hud.topBottom()+this.upgrades.top())/2,o={x:0,y:0};this.hud.project(Z.copy(t.pos).addScaledVector(t.forward,i).setY(.7),o)&&(e.shift=Math.max(0,o.y+e.shiftCur-a))}else{e.pitchWant=nn.degToRad(47),e.shift=this.hud.dialogOpen?this.engine.height*.15:0;let n=this.recyclerPad.active&&(this.cargo.count>0||this.cargo.flying>0);e.zoom=n?1.2:1,n?e.offset.set((ky.x-t.pos.x)*.62,0,0):e.offset.set(0,0,0)}}chainAvailable(){return this.save.yard>=2}updateChain(e,t){let n=this.save,r=this.chain,i=this.chainAvailable();r.updatePads(i,n.factoryPaid,n.lotPaid,400,250);let a=this.tractor;r.visitor=this.onFoot?null:{ax:a.pos.x-a.forward.x*a.model.rearExtent*.85,az:a.pos.z-a.forward.z*a.model.rearExtent*.85,bx:a.sawWorld.x,bz:a.sawWorld.z},r.update(e);let o=this.state===`play`;for(let e=0;e<this.wantLabels.length;e++){let t=this.wantLabels[e];t.visible=o&&!this.director.busy&&r.wantAt(e,t.world)}let s=(r,i,a,s)=>{let c=r.mesh.visible&&r.contains(t,-.3)&&o;if(r.active=c,!c||n.coins<=0||(this.payTimer-=e,this.payTimer>0))return;this.payTimer=.05;let l=Math.min(n.coins,a-n[i],Math.max(1,Math.ceil(a*.035)));if(l<=0)return;n.coins-=l,n[i]+=l,this.hud.setCoins(n.coins),this.refreshUpgradeUI();let u=this.hud.coinTarget(),d={x:0,y:0};this.hud.project(Z.set(r.x,.3,r.z),d),this.hud.flyCoinTo(u.x,u.y,d.x,d.y),this.audio.coin(Math.floor(n[i]/a*12)),this.markDirty(),n[i]>=a&&s()};i&&!n.factory&&s(r.factoryPad,`factoryPaid`,400,()=>{n.factory=!0,r.setBuilt(!0,n.lot,!0),this.onBuilt(W.factory)}),i&&n.factory&&!n.lot&&s(r.lotPad,`lotPaid`,250,()=>{n.lot=!0,r.setBuilt(!0,!0,!0),this.onBuilt(W.lotPad)});let c=this.factoryPriceLabel,l=this.lotPriceLabel,u=this.cashLabel;c.visible=o&&r.factoryPad.mesh.visible,l.visible=o&&r.lotPad.mesh.visible,c.visible&&Uy(c.el.querySelector(`span:last-child`),qt(400-n.factoryPaid)),l.visible&&Uy(l.el.querySelector(`span:last-child`),qt(250-n.lotPaid)),u.visible=o&&r.lotBuilt&&r.cash>0,u.visible&&(Uy(u.el.querySelector(`span:last-child`),qt(r.cash)),u.world.set(W.cashPad.x,.6+Math.ceil(Math.min(60,r.cash/50)/4)*.17,W.cashPad.z));let d=r.cashPad.mesh.visible&&r.cashPad.contains(t,-.2)&&o;if(r.cashPad.active=d,d&&r.cash>0){let e=r.collectCash(),t=Math.min(14,3+Math.floor(e/60));for(let n=0;n<t;n++){let r=n===t-1,i=Z.set(W.cashPad.x+(Math.random()-.5),.6+Math.random()*.5,W.cashPad.z+(Math.random()-.5));this.hud.flyCoinFromWorld(i,()=>{this.audio.coin(n),r&&this.addCoins(e)},n*.035)}this.hud.floatText(`+`+qt(e),Z.set(W.cashPad.x,1.5,W.cashPad.z)),this.audio.play(`shopping1`,.5),this.markDirty()}}chainColliders(){let e=this.world.colliders;if(this.save.factory&&!e.boxes.some(e=>e.tag===`factory`)&&(e.boxes.push({x:W.factory.x,z:W.factory.z,hw:2.1,hd:1.9,tag:`factory`}),e.boxes.push({x:Cu.x,z:Cu.z-.2,hw:2.35,hd:2.3,tag:`assembly`})),this.save.lot&&!e.circles.some(e=>e.tag===`stand`)){for(let t of W.stands)e.circles.push({x:t.x,z:t.z,r:1.35,tag:`stand`});e.boxes.push({x:W.kiosk.x,z:W.kiosk.z,hw:1,hd:.8,tag:`kiosk`})}}onBuilt(e){this.chainColliders(),this.audio.jingle(`unlock`),this.audio.play(`shopping`,.6),this.rig.shake(.25);for(let t=0;t<40;t++)Z.set(e.x+(Math.random()-.5)*4,.3+Math.random()*2,e.z+(Math.random()-.5)*4),Q.set((Math.random()-.5)*4,2+Math.random()*3,(Math.random()-.5)*4),this.puffs.spawn(Z,Q,$.set(`#f1ece2`),.8,.9,1.1,2.5,0);this.persist(!0)}onUnloaded(){this.persist(),this.save.tut===2&&(this.save.tut=3,this.markDirty()),this.stations.gar||this.later(.8,()=>this.revealGarage())}updateFx(t){this.updateShocks(t),this.updateGrindLabel(t),this.debris.update(t),this.puffs.update(t),this.sparks.update(t);let n=this.engine.height*this.engine.dpr*.5/Math.tan(nn.degToRad(this.engine.camera.fov/2));if(this.puffs.setScale(n),this.sparks.setScale(n),this.stinkTimer-=t,this.stinkTimer<=0&&this.state===`play`){this.stinkTimer=.1/Math.max(.4,this.fxScale);let e=this.jf.heaps;if(e.length){let t=e[Math.floor(Math.random()*e.length)],n=this.rig.target;if(Math.abs(t.x-n.x)<9&&t.z-n.z<8&&n.z-t.z<16){let e=Math.random()*Math.PI*2,n=Math.sqrt(Math.random())*.7,r=t.x+Math.cos(e)*t.rx*n,i=t.z+Math.sin(e)*t.rz*n,a=this.jf.heightAt(r,i);a>.5&&(Z.set(r,R(r,i)+a+.2,i),Q.set((Math.random()-.5)*.3,.5+Math.random()*.3,(Math.random()-.5)*.3),this.puffs.spawn(Z,Q,$.set(Math.random()<.5?`#b9dc7c`:`#d4ea9c`),.42,.55,2.4,3.4,0))}}}let r=this.tractor;if(this.exhaustTimer-=t,this.exhaustBurst>0&&(this.exhaustBurst-=t,this.exhaustTimer=Math.min(this.exhaustTimer,.03)),this.exhaustTimer<=0){this.exhaustTimer=.09+(1-Math.min(1,r.speed/r.maxSpeed))*.12-r.cutting*.04;let e=r.model.bodyGroup.localToWorld(r.model.exhaust.clone());Q.set(-r.forward.x*.6+(Math.random()-.5)*.3,1.1+Math.random()*.4,-r.forward.z*.6+(Math.random()-.5)*.3),this.puffs.spawn(e,Q,$.set(r.cutting>.3?`#6f757e`:`#9aa0a8`),.5,.35,.9,3.2,0)}if(this.needTimer-=t,r.blockedHard>1&&this.time-this.lastBlocked>.4){this.lastBlocked=this.time;let t=ne(r.blockedHard),n=this.hardLabels.find(e=>e.label.visible&&this.jf.heaps[e.heap].hardness===r.blockedHard&&Math.hypot(this.jf.heaps[e.heap].x-r.pos.x,this.jf.heaps[e.heap].z-r.pos.z)<12);if(n){let e=n.label.el.firstChild;e.classList.remove(`shake`),e.offsetWidth,e.classList.add(`shake`)}else this.needLabel.el.firstChild.innerHTML=Xc(`saw`)+e(`needSaw`,{n:t}),this.needLabel.world.copy(r.sawWorld).setY(r.sawWorld.y+2.2),this.needLabel.visible=!0,this.needTimer=1.6;this.save.tut>=5&&!this.tip(`tipHard`)&&this.hud.showHint(`hard`,e(`harder`),!0,2.2),this.audio.thud(.25);for(let e=0;e<6;e++)Z.copy(r.sawWorld).setY(.4).addScaledVector(r.forward,r.sawR),Q.set((Math.random()-.5)*5,2+Math.random()*3,(Math.random()-.5)*5),this.sparks.spawn(Z,Q,$.set(`#ffe7a0`),1,.18,.4,.3,12)}this.needTimer<=0&&(this.needLabel.visible=!1),r.blockedFull&&r.bumpTimer>.3&&this.audio.thud(.2)}updateGuide(e){let t=this.tractor,n=null,r=`#2fbf71`,i=!1,a=`recycle`;this.recyclerPad.highlight=!1,this.garagePad.highlight=!1;let o=this.chain;if(o.factoryPad.highlight=o.lotPad.highlight=o.cashPad.highlight=!1,this.state===`play`&&!this.upgrades.open&&!this.onFoot&&!this.director.busy){let s=this.cargo.full,c=Math.abs(t.pos.x)<18&&t.pos.z>-8,l=this.save.coins>=this.cheapestUpgrade(),u=this.save,d=this.chainAvailable()&&this.cargo.count===0&&c?u.factory?u.lot?null:o.lotPad:o.factoryPad:null,f=d===o.factoryPad?400-u.factoryPaid:250-u.lotPaid;this.stations.rec&&(s||this.cargo.count>0&&this.plots.doneCount===this.layout.plots.length)?(n=Z.set(this.recyclerPad.x,0,this.recyclerPad.z),i=!0,this.recyclerPad.highlight=!0):d&&u.coins>=Math.min(f,60)?(n=Z.set(d.x,0,d.z),i=!0,r=d===o.factoryPad?`#8a5cf0`:`#ff8a3d`,a=d===o.factoryPad?`factory`:`car`,d.highlight=!0):o.lotBuilt&&o.cash>=300&&c&&this.cargo.count===0?(n=Z.set(o.cashPad.x,0,o.cashPad.z),i=!0,r=`#2fae5a`,a=`cash`,o.cashPad.highlight=!0):this.stations.gar&&(this.save.tut===3&&l||l&&c&&this.cargo.count===0&&this.save.tut>=3)?(n=Z.set(this.garagePad.x,0,this.garagePad.z),r=`#3a8df0`,i=!0,a=`wrench`,this.garagePad.highlight=!0):this.lastBitsTarget(Z,e)?(Z.distanceTo(t.sawWorld)>2.2&&(n=Z),r=`#ffd23f`,a=`saw`):this.jf.nearestJunk(t.sawWorld.x,t.sawWorld.z,t.maxHard,Z)&&((Z.distanceTo(t.pos)>7||this.save.tut<=1)&&(n=Z),r=`#ff8a3d`,a=`saw`)}if(this.guide.target=n,this.guide.markerOn=i,this.guide.setColor(r),this.guide.update(e,t.pos,this.engine.camera,t.model.sawOffset+t.sawR,t.model.rearExtent,t.forward),n&&i){let e={x:0,y:0},t=this.hud.project(Q.copy(n).setY(1),e),i=40*this.hud.k,o=this.engine.width,s=this.engine.height,c=this.hud.hudBottom+30*this.hud.k,l=s-96*this.hud.k;if(!t||e.x<i||e.x>o-i||e.y<c||e.y>l){let n=o/2,s=(c+l)/2,u=e.x-n,d=e.y-s;t||(u=-u,d=-d);let f=Math.min((o/2-i)/Math.abs(u||.001),Math.max(10,(l-c)/2)/Math.abs(d||.001));this.hud.setEdge(!0,n+u*f,s+d*f,Math.atan2(d,u),a,r)}else this.hud.setEdge(!1)}else this.hud.setEdge(!1)}updateTutorial(t){let n=this.save;if(this.state!==`play`||this.director.busy||this.hud.dialogOpen){this.hud.showHand(!1),this.hud.hideHint(`drag`);return}if(n.tut===0)this.hud.showHand(!0),this.hud.showHint(`drag`,e(`drag`)),this.tutMoved>2.5&&(n.tut=1,this.hud.showHand(!1),this.markDirty());else if(n.tut===1)this.hud.showHand(this.input.idleTime>4),this.hud.showHint(`saw`,e(`sawIt`)),this.cargo.count>=4&&(n.tut=2,this.hud.hideHint(`saw`),this.markDirty());else if(n.tut===2)this.hud.showHand(!1),this.cargo.full&&this.hud.currentHint!==`spill`?this.hud.showHint(`full`,e(`fullHint`),!0):this.hud.hideHint(`full`);else if(n.tut===3)this.save.coins>=this.cheapestUpgrade()&&!this.upgrades.open?this.hud.showHint(`upg`,e(`upgradeHint`)):this.hud.hideHint(`upg`),this.upgrades.hint(this.upgrades.open&&this.save.coins>=le.saw.price(this.save.lv.saw)?`saw`:null);else if(n.tut===4){var r;this.upgrades.hint(null),(this.tip(`tipClear`)||(r=this.save.beats)!=null&&r.includes(`tipClear`))&&(n.tut=5,this.markDirty())}else this.hud.hideHint(`full`),(this.hud.currentHint===`drag`||this.hud.currentHint===`saw`||this.hud.currentHint===`upg`)&&this.hud.hideHint()}updateProgress(){let e=this.jf.progress,t=Math.floor(e*1e3);t!==this.progressShown&&(this.progressShown=t,this.hud.setProgress(e)),this.state===`play`&&!this.districtDone&&this.plots.doneCount===this.layout.plots.length&&this.goalReachedAt<0&&(this.goalReachedAt=this.time),this.state===`play`&&!this.districtDone&&this.goalReachedAt>=0&&this.time-this.goalReachedAt>2.2&&this.onDistrictDone()}onDistrictDone(t=!1){this.districtDone=!0;let n=this.save,r=ih(n.yard)===nh-1;if(this.hud.showNext(!0,e(r?`nextTown`:`nextDistrict`)),this.city.greenCurrent(),this.plots.growPlazas(this.layout.slot,this.tractor.pos.x,this.tractor.pos.z,t),this.layout.slot===z.slot&&this.lake.setClean(1,t),r&&(this.townSaved=!0,t&&(this.cast.place(this.clearSpots(this.castSpots(!1))),this.hud.showWalk(!0,e(`walk`)))),this.city.town%2==1&&this.layout.slot===nh-1&&this.later(t?.1:1.2,()=>this.setBeam(!0)),t)return;let a=this.layout.bounds;if(this.audio.jingle(`win`),r)this.city.town%2==1?this.finaleBay():this.finale();else{let t=dh(n.yard).key;this.hud.banner(e(`d`+t+`Done`),this.districtName(n.yard));for(let e=0;e<12;e++)this.later(.3+e*.22,()=>this.firework(a.minX+Math.random()*(a.maxX-a.minX),R((a.minX+a.maxX)/2,(a.minZ+a.maxZ)/2)+7+Math.random()*5,a.minZ+Math.random()*(a.maxZ-a.minZ)));let r=lr(this.city.town,this.layout.slot,`end`)||`genericEnd`,i=!!z.boxes;this.once(`end`+n.yard)&&ar(r)&&this.later(2.4,()=>this.director.play([this.districtShot(n.yard,1.2),...this.layout.slot===z.slot?[{k:`shot`,x:z.x,z:z.z,w:i?30:15,d:i?30:13,t:2.2}]:[],...this.layout.slot===z.slot&&i?[{k:`do`,fn:()=>this.hud.banner(e(`bayClean`),fr(this.city.town))}]:[],{k:`say`,key:r},{k:`tractor`}]))}if(!n.yardRewarded){n.yardRewarded=!0;let t=i(n.yard)*(r?3:1),a=this.tractor.pos.clone().setY(this.tractor.pos.y+2.4);this.hud.floatText(e(`reward`)+` +`+qt(t),a,`gold big`),this.addCoins(t);for(let e=0;e<16;e++)this.hud.flyCoinFromWorld(a,()=>this.audio.coin(e),.6+e*.05);this.persist(!0)}this.cargo.count>0&&this.later(3.2,()=>this.tip(`tipSellGo`)),this.beforeShot&&!r&&this.later(3,()=>this.postcardWhenFree(n.yard))}postcardWhenFree(e){let n=this.beforeShot;if(!n||!this.districtDone||this.save.yard!==e||this.state!==`play`)return;if(this.director.busy||this.hud.dialogOpen||this.upgrades.open||this.hud.curtainBusy||this.onFoot||this.rig.overviewAmount>.05){this.later(.4,()=>this.postcardWhenFree(e));return}let r=t()===`ru`;this.hud.postcard(n,this.photoDistrict(),this.districtName(e),r?`Было`:`Before`,r?`Стало`:`After`),this.audio.play(`shopping1`,.4,1.3)}photoDistrict(){var e;let t=[this.guide.arrow,this.guide.marker,...this.city.planGroups()];for(let e of this.plotPlans)e&&t.push(e.group);this.plazaPlan&&t.push(this.plazaPlan.group);for(let e of this.frames)t.push(e.mesh);let n=Wo.uSee.value.w;Wo.uSee.value.w=0;let r=this.layout.bounds,i=(e=this.layout.plots[this.layout.landmark])==null?void 0:e.features[0],a=(r.maxX-r.minX)*.62,o=(r.maxZ-r.minZ)*.62,s=(r.minX+r.maxX)/2,c=(r.minZ+r.maxZ)/2,l=i?s+(i.x-s)*.6:s,u=i?c+(i.z-c)*.6:c,d={x:nn.clamp(l,r.minX+a/2,r.maxX-a/2),z:nn.clamp(u,r.minZ+o/2,r.maxZ-o/2),w:a,d:o};try{return this.postcards.snap(r,t,d)}finally{Wo.uSee.value.w=n}}finale(){let t=bn,n=this.save;this.hud.banner(e(`cityDone`),e(`citySub`),`green`);for(let e=0;e<30;e++)this.later(.5+e*.18,()=>this.firework(t.minX+Math.random()*(t.maxX-t.minX),9+Math.random()*7,t.minZ+Math.random()*(t.maxZ-t.minZ)));let r=()=>{this.cast.goHome(),this.modal.open({ribbon:e(`cityDone`),stars:!0,big:i(n.yard)*3,sub:e(`cityStats`,{d:nh,p:this.life.citizens}),news:{icon:`star`,text:e(`cityNext`)},button:e(`walk`),onButton:()=>{this.audio.play(`clickui`,.6),this.modal.close(),this.startWalk()},button2:e(`admire`),onButton2:()=>{this.audio.play(`clickui`,.6),this.modal.close(),this.hud.showWalk(!0,e(`walk`))}})};if(this.city.town>0||!this.once(`finale`+n.yard)){this.cast.place(this.clearSpots(this.castSpots(!1))),this.later(2.5,r);return}this.director.play([{k:`wait`,t:1.2},this.cityShot(2.6,1),{k:`say`,key:`finale1`},{k:`do`,fn:()=>this.castArrives()},{k:`shot`,x:0,z:-37.5,w:11,d:9,t:4.2},{k:`say`,key:`finale2`},{k:`say`,key:`finale3`},{k:`tractor`},{k:`do`,fn:r}])}finaleBay(){let t=this.save;this.hud.banner(e(`townSaved2`),e(`townSub2`),`green`);let n=()=>{this.cast.goHome(),this.duskWant=.35,this.modal.open({ribbon:e(`townSaved2`),stars:!0,big:i(t.yard)*3,sub:e(`cityStats`,{d:nh,p:this.life.citizens}),news:{icon:`star`,text:e(`toBeContinued`)},button:e(`walk`),onButton:()=>{this.audio.play(`clickui`,.6),this.modal.close(),this.startWalk()},button2:e(`admire`),onButton2:()=>{this.audio.play(`clickui`,.6),this.modal.close(),this.hud.showWalk(!0,e(`walk`))}})};if(!this.once(`finale`+t.yard)){this.cast.place(this.clearSpots(this.castSpots(!1))),this.later(2.5,n);return}let r=-4.6;this.director.play([{k:`wait`,t:1},{k:`do`,fn:()=>this.duskWant=1},this.cityShot(3,.9),{k:`shot`,x:r,z:-68.4,w:18,d:16,t:1.6,pitch:nn.degToRad(38)},{k:`do`,fn:()=>{this.setBeam(!0,!0),this.audio.jingle(`unlock`);for(let e=0;e<8;e++)this.later(.6+e*.3,()=>this.firework(r+(Math.random()-.5)*16,11+Math.random()*5,-65.4+(Math.random()-.5)*10))}},{k:`wait`,t:1.4},{k:`say`,key:`t2fin1`},{k:`do`,fn:()=>{this.castArrives(),this.xrayFocus=new L(-6.2,R(-6.2,-66.4)+1,-66.4)}},{k:`shot`,x:-6.2,z:-65.6,w:11,d:9,t:3.6,pitch:nn.degToRad(42)},{k:`say`,key:`t2fin2`},{k:`do`,fn:()=>{this.cast.cheer(2.6),this.audio.cheer(.06);for(let e=0;e<10;e++)this.later(e*.22,()=>this.firework((Math.random()-.5)*30,10+Math.random()*6,-45-Math.random()*20))}},{k:`wait`,t:1.6},{k:`shot`,x:-5.6,z:-65.8,w:7,d:6,t:1.2,pitch:nn.degToRad(40)},{k:`say`,key:`t2fin3`},{k:`do`,fn:()=>this.xrayFocus=null},{k:`tractor`},{k:`do`,fn:n}])}setBeam(e,t=!1){var n;if(!e){this.beam&&this.beam.removeFromParent(),this.beam=null;return}let r=fs.get(`lamp`);if(!r||!r.parent||this.beam&&this.beam.parent===r)return;(n=this.beam)==null||n.removeFromParent();let i=new B,a=new Tn;a.setAttribute(`position`,new j([.3,0,-.2,42,0,-3.4,42,0,3.4,.3,0,.2],3)),a.setAttribute(`uv`,new j([0,.5,1,0,1,1,0,.5],2)),a.setIndex([0,1,2,0,2,3]);let o=new Le({uniforms:{uK:{value:0}},vertexShader:`varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`uniform float uK; varying vec2 vUv; void main() { float a = (1.0 - vUv.x) * (1.0 - vUv.x) * (1.0 - abs(vUv.y - 0.5) * 2.0); gl_FragColor = vec4(1.0, 0.92, 0.62, a * uK); }`,transparent:!0,depthWrite:!1,blending:2,side:2});for(let e of[0,Math.PI]){let t=new F(a,o);t.rotation.y=e,t.rotation.z=-.05,t.renderOrder=7,t.frustumCulled=!1,i.add(t)}i.position.y=.08,r.add(i),this.beam=i,this.beamK=t?0:.5}updateBeam(e){var t;if(!this.beam)return;if(!((t=this.beam.parent)!=null&&t.parent)){this.beam=null;return}let n=.25+this.dusk*.75;this.beamK+=(n-this.beamK)*Math.min(1,e*1.5);let r=this.beam.children[0].material;r.uniforms.uK.value=this.beamK}updateDusk(e){if(this.dusk===this.duskWant)return;this.dusk+=Math.sign(this.duskWant-this.dusk)*Math.min(Math.abs(this.duskWant-this.dusk),e/3.2),this.lighting.setDusk(this.dusk);let t=this.engine.scene.background;t.copy(Py).lerp(Fy,this.dusk),this.engine.scene.fog.color.copy(t)}castArrives(){if(this.cast.place(this.clearSpots(this.castSpots(!0)),!0),this.cast.setHomes(this.clearSpots(this.castSpots(!1))),this.city.town%2==1){this.cast.walkIn(`grandpa`,-12.8,-64.2,3.2);return}this.cast.walkIn(`grandpa`,0,-28.5,3.4),this.later(3.5,()=>{this.cast.cheer(2.6),this.audio.cheer(.06),this.audio.jingle(`unlock`);for(let e=0;e<6;e++)this.later(e*.25,()=>this.firework((Math.random()-.5)*10,R(0,-39)+7+Math.random()*3,-40-Math.random()*4))})}castSpots(e){return this.city.town%2==1?e?[{who:`grandpa`,x:-5.7,z:-66.5,yaw:.1},{who:`irma`,x:-7,z:-66.3,yaw:.25},{who:`mila`,x:-4.2,z:-65.9,yaw:-.3},{who:`mayor`,x:-8.5,z:-65.6,yaw:.5},{who:`junk`,x:-3,z:-66.6,yaw:-.5},{who:`rocky`,x:-9.7,z:-64.9,yaw:.6}]:[{who:`grandpa`,x:-5.2,z:-64.8,yaw:.1},{who:`irma`,x:-6.6,z:-64.6,yaw:.2},{who:`mila`,x:-17.6,z:-17.2,yaw:.2},{who:`mayor`,x:1.8,z:-21.4,yaw:-.2},{who:`junk`,x:31.4,z:19.2,yaw:.3},{who:`rocky`,x:32.8,z:-34.2,yaw:0,baseY:Ff+R(32.8,-34)-R(32.8,-34.2)},{who:`vane`,x:22.4,z:-31.4,yaw:-.4}]:e?[{who:`grandpa`,x:0,z:-35.4,yaw:0},{who:`mila`,x:-1.7,z:-35,yaw:.4},{who:`mayor`,x:1.8,z:-35.1,yaw:-.4},{who:`junk`,x:-3.2,z:-36,yaw:.7},{who:`rocky`,x:3.3,z:-36.1,yaw:-.7}]:[{who:`grandpa`,x:1.3,z:-35.3,yaw:-.2},{who:`mila`,x:-25.6,z:13.4,yaw:.3},{who:`mayor`,x:0,z:-46.3,yaw:0},{who:`junk`,x:-25.9,z:-10.6,yaw:-.3},{who:`rocky`,x:26,z:-48.699999999999996,yaw:0,baseY:Ms+R(26,-49.8)-R(26,-48.699999999999996)}]}clearSpots(e){for(let t of e)if(!t.baseY){Z.set(t.x,0,t.z);for(let e=0;e<3;e++)this.heroSolve(Z,t.x,t.z);t.x=Z.x,t.z=Z.z}return e}startWalk(){if(this.onFoot||this.state!==`play`||!this.townSaved||this.director.busy||this.hud.dialogOpen||this.hud.curtainBusy)return;let t=this.tractor,n=t.pos.x,r=t.pos.z,i=t.yaw;for(let e of[1,-1,0]){let a=e?Math.cos(t.yaw)*e:-Math.sin(t.yaw),o=e?-Math.sin(t.yaw)*e:-Math.cos(t.yaw);if(n=t.pos.x+a*1.55,r=t.pos.z+o*1.55,i=Math.atan2(a,o),Z.set(n,0,r),this.heroSolve(Z,n,r),Math.hypot(Z.x-n,Z.z-r)<.05)break}this.hero.spawn(n,r,i),this.onFoot=!0,this.focusFrom.copy(this.rig.target),this.focusT=0,this.hud.showNext(!1),this.hud.showWalk(!0,e(`backToTractor`),!0),this.hud.hideHint(),this.audio.whoosh(.07),this.audio.play(`clickui`,.5)}endWalk(t=!1){if(!this.onFoot)return;this.onFoot=!1;let n=this.hero.pos;if(!t){for(let e=0;e<8;e++)Z.set(n.x+(Math.random()-.5)*.6,n.y+.3+Math.random()*.8,n.z+(Math.random()-.5)*.6),Q.set((Math.random()-.5)*1.6,.6+Math.random(),(Math.random()-.5)*1.6),this.puffs.spawn(Z,Q,$.set(`#f4efdf`),.6,.6,.8,2.2,0);this.focusFrom.copy(this.rig.target),this.focusT=0,this.audio.whoosh(.07),this.audio.play(`clickui`,.5)}this.hero.hide(),this.hud.showWalk(this.townSaved,e(`walk`)),this.districtDone&&this.hud.showNext(!0,e(ih(this.save.yard)===nh-1?`nextTown`:`nextDistrict`))}hearing(e,t){let n=this.rig.target,r=Math.hypot(e-n.x,t-n.z);return r<7?1:Math.max(0,1-(r-7)/16)}firework(e,t,n){let r=[`#ff5a4f`,`#ffd23f`,`#35c46a`,`#3a8df0`,`#ff7ab8`,`#ffffff`,`#b06cf0`],i=r[Math.floor(Math.random()*r.length)],a=r[Math.floor(Math.random()*r.length)],o=Math.round(34*this.fxScale+10);for(let r=0;r<o;r++){let o=Math.random()*Math.PI*2,s=Math.random()*2-1,c=5+Math.random()*2.5,l=Math.sqrt(1-s*s);Z.set(e,t,n),Q.set(Math.cos(o)*l*c,s*c+1.5,Math.sin(o)*l*c),this.sparks.spawn(Z,Q,$.set(r%2?i:a),1,.55,1.3,.5,5)}this.audio.thud(.18),this.audio.playRandom(`pop`,5,.5,.6+Math.random()*.3,.02)}goNext(){if(!this.districtDone||this.state!==`play`||this.hud.curtainBusy||this.onFoot)return;if(this.audio.play(`clickui`,.6),this.hud.hidePostcard(),this.hud.showNext(!1),this.hud.showWalk(!1),this.director.skip){this.switchDistrict();return}let t=this.save.yard+1;this.hud.curtain(sr(ih(t)+1),e(`d`+dh(t).key+`Name`),ih(t)===0?fr(ah(t)):e(`yard`,{n:t}),()=>{this.switchDistrict(),this.districtIntro(!0)})}switchDistrict(){let e=this.save,t=Math.round(this.drops.value);t>0&&(this.addCoins(t),this.hud.floatText(`+`+qt(t),this.tractor.pos.clone().setY(this.tractor.pos.y+2.2),`gold`)),this.drops.clear(),e.yard++,e.field=null,e.bigsDone=[],e.drops=[],e.plotsDone=[],e.yardRewarded=!1,e.ruinsGone=[],this.districtDone=!1,this.hud.showNext(!1),this.hud.hideHint(),ah(e.yard)!==ah(e.yard-1)&&this.prepareTown(e.yard);let n=this.city.advance(e.yard);n&&this.syncLake(),n&&(this.endWalk(!0),this.cast.clear(),this.townSaved=!1,this.hud.showWalk(!1),this.life.clear(),this.tractor.place(Ny.x,Ny.z,Math.PI),this.rig.snap(this.tractor.pos)),this.buildYard(e.yard,null),this.updateChainParams(),this.persist(!0),this.warmShaders()}primeShaders(){this.engine.renderer.compile(this.engine.scene,this.engine.camera)}warmShaders(e=!1){let t=[],n=[];if(e){try{let e=new F(new Ne(1,1),Cp());e.receiveShadow=!0,n.push(kh(this.layout).group,e,Ky(`#fff`))}catch{}this.keeperPlan!=null||(this.keeperPlan=new ym(new ht(1,1,1),{key:`__keeper`,sheet:{x:0,y:0,z:0,w:1,d:1}})),t.push(...n,this.keeperPlan.group,...this.chain.templates)}return Sy(this.engine.renderer,this.engine.scene,this.engine.camera,[],t).finally(()=>{for(let e of n)e.traverse(e=>e.isMesh&&!e.userData.shared&&e.geometry!==Gy&&e.geometry.dispose())})}onResize(){this.hud.resize(this.engine.width,this.engine.height),this.lighting.setSpan(this.engine.aspect/Lm),pm(this.engine.width,this.engine.height,this.engine.dpr)}start(){this.engine.start()}cheat(e=1e3){this.addCoins(e)}jump(e){let t=this.save;this.showStation(`rec`,!1),this.showStation(`gar`,!1),this.endWalk(!0),this.cast.clear(),this.townSaved=!1,this.hud.showWalk(!1),t.yard=e,t.field=null,t.bigsDone=[],t.drops=[],t.plotsDone=[],t.yardRewarded=!1,t.ruinsGone=[],this.drops.clear(),this.prepareTown(e),this.city.setup(e),this.syncLake(),this.life.clear();for(let e of this.city.districts)e.state===`built`&&e.L.plots.forEach((t,n)=>this.livePlot(e.L,n));this.buildYard(e,null),this.updateChainParams(),this.persist(!0),this.warmShaders()}photo(e,t,n,r=0,i=0,a=0){if(e===void 0){this.rig.frozen=!1;return}this.rig.frozen=!0;let o=this.engine.camera;o.position.set(e,t,n),o.lookAt(r,i,a),o.updateProjectionMatrix()}};function Uy(e,t){e&&e.textContent!==t&&(e.textContent=t)}function Wy(e,t){let n=(t*100).toFixed(1)+`%`;e&&e.style.width!==n&&(e.style.width=n)}var Gy=new l(.82,1,48);function Ky(e){return new F(Gy,new Fn({color:e,transparent:!0,depthWrite:!1,blending:2,opacity:1,side:2,forceSinglePass:!0}))}var qy=[`Ура! 🎉`,`Спасибо! 💛`,`Красота! 😍`,`Наш герой! ⭐`,`Вот это {fire:пила}! 🔥`,`Браво! 👏`,`Город {leaf:оживает}! 🌱`,`Так держать! 💪`,`{love:Люблю} этот трактор! 🚜`,`Ты лучший! 🙌`],Jy=[`Hooray! 🎉`,`Thank you! 💛`,`Beautiful! 😍`,`Our hero! ⭐`,`What a {fire:saw}! 🔥`,`Bravo! 👏`,`The town {leaf:lives}! 🌱`,`Keep it up! 💪`,`{love:Love} that tractor! 🚜`,`You rock! 🙌`];export{Cs as $,Tf as A,ac as B,Vf as C,Nf as D,Mf as E,ic as F,vs as G,Hy as Game,sc as H,cc as I,Bs as J,As as K,dc as L,rl as M,nl as N,Of as O,Uc as P,bs as Q,oc as R,pf as S,yf as T,uc as U,lc as V,Ps as W,ks as X,Os as Y,Hs as Z,Rf as _,wf as a,xs as at,xf as b,gf as c,Fs as ct,Sf as d,Vs as et,Af as f,qt as fmt,jf as g,Bf as h,Pf as i,Ls as it,Kd as j,kf as k,mf as l,uf as m,Hf as n,ys as nt,Uf as o,Rs as ot,bf as p,js as q,If as r,Is as rt,Ef as s,Ns as st,Dy as t,Ss as tt,hf as u,zf as v,ff as w,df as x,_f as y,fc as z};